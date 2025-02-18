import { useEffect, useState, useRef } from 'react';

export const useStepScrollLogic = (stepsLength: number) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isCentered, setIsCentered] = useState(false);
  const [targetStep, setTargetStep] = useState(1);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(
    null,
  );
  const [isBlocked, setIsBlocked] = useState(false);
  const stepsRef = useRef<HTMLDivElement | null>(null);
  const lastScrollY = useRef<number>(0);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (!stepsRef.current || isBlocked) {
        event.preventDefault();
        return;
      }

      const section = stepsRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionMiddle = section.top + section.height / 2;

      const componentCentered =
        Math.abs(sectionMiddle - windowHeight / 2) < 100;
      setIsCentered(componentCentered);

      if (!componentCentered) return; // 🔹 Blokujemy przewijanie, jeśli komponent nie jest wyśrodkowany

      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY.current ? 'down' : 'up';
      lastScrollY.current = scrollY;

      // 🔹 **Ustawiamy kierunek ZAWSZE, gdy przewijamy**
      setScrollDirection(direction);

      if (componentCentered) {
        if (event.deltaY > 0 && targetStep < stepsLength) {
          setTargetStep((prev) => prev + 1);
          blockScroll();
          event.preventDefault();
        } else if (event.deltaY < 0 && targetStep > 1) {
          setTargetStep((prev) => prev - 1);
          blockScroll();
          event.preventDefault();
        }
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [targetStep, isBlocked, isCentered]);

  useEffect(() => {
    if (currentStep !== targetStep) {
      const stepTransition = setTimeout(() => {
        setCurrentStep(targetStep);
      }, 200);

      return () => clearTimeout(stepTransition);
    }
  }, [targetStep, currentStep]);

  const blockScroll = () => {
    setIsBlocked(true);
    setTimeout(() => {
      setIsBlocked(false);
    }, 1000);
  };

  return { currentStep, stepsRef, scrollDirection };
};
