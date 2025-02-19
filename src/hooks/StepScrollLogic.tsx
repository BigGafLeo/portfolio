import { useEffect, useState, useRef } from 'react';

export const useStepScrollLogic = (stepsLength: number) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [targetStep, setTargetStep] = useState(1);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(
    null,
  );
  const [isBlocked, setIsBlocked] = useState(false);

  const stepsRef = useRef<HTMLDivElement | null>(null);
  const lastScrollY = useRef<number>(0);

  const prevStepRef = useRef(currentStep);

  useEffect(() => {
    if (currentStep > prevStepRef.current) {
      setScrollDirection('down');
    } else if (currentStep < prevStepRef.current) {
      setScrollDirection('up');
    }
    prevStepRef.current = currentStep;
  }, [currentStep]);

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

      if (!componentCentered) return;

      const scrollY = window.scrollY;
      lastScrollY.current = scrollY;

      if (event.deltaY > 0 && targetStep < stepsLength) {
        setTargetStep((prev) => prev + 1);
        blockScroll();
        event.preventDefault();
      } else if (event.deltaY < 0 && targetStep > 1) {
        setTargetStep((prev) => prev - 1);
        blockScroll();
        event.preventDefault();
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [targetStep, isBlocked, stepsLength]);

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
    }, 500);
  };

  return { currentStep, stepsRef, scrollDirection };
};
