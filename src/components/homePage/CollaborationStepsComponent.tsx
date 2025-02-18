import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import {
  FaComments,
  FaDraftingCompass,
  FaCheck,
  FaCode,
  FaWrench,
  FaRocket,
} from 'react-icons/fa';
import { useStepScrollLogic } from '../../hooks/StepScrollLogic';

const steps = [
  {
    id: 1,
    title: 'Initial Meeting',
    description: 'Understanding your needs.',
    icon: <FaComments />,
  },
  {
    id: 2,
    title: 'Project Sketch',
    description: 'Creating an outline.',
    icon: <FaDraftingCompass />,
  },
  {
    id: 3,
    title: 'Approval Phase',
    description: 'Finalizing the plan.',
    icon: <FaCheck />,
  },
  {
    id: 4,
    title: 'Implementation',
    description: 'Developing the solution.',
    icon: <FaCode />,
  },
  {
    id: 5,
    title: 'Final Adjustments',
    description: 'Refining the product.',
    icon: <FaWrench />,
  },
  {
    id: 6,
    title: 'Deployment',
    description: 'Launching the project.',
    icon: <FaRocket />,
  },
];

export const CollaborationSteps = () => {
  const { currentStep, stepsRef, scrollDirection } = useStepScrollLogic(
    steps.length,
  );

  return (
    <StepsContainer ref={stepsRef}>
      <Counter>
        <StepNumber>{currentStep}</StepNumber>
        <NextStep>{currentStep < steps.length ? currentStep + 1 : ''}</NextStep>
      </Counter>

      <StepContent $scrollDirection={scrollDirection} key={currentStep}>
        <StepWrapper>
          <StepIcon>{steps[currentStep - 1].icon}</StepIcon>
          <StepTitle>{steps[currentStep - 1].title}</StepTitle>
          <StepDescription>
            {steps[currentStep - 1].description}
          </StepDescription>
        </StepWrapper>
      </StepContent>
    </StepsContainer>
  );
};

// 🔹 **Animacje przewijania**
const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StepsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: ${({ theme }) => theme.palette.bigstone || '#000'};
  color: ${({ theme }) => theme.palette.white || '#fff'};
  padding: 4rem;
  gap: 4rem;
  position: relative;
`;

const Counter = styled.div`
  font-size: 5rem;
  font-weight: bold;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 120px;
`;

const StepNumber = styled.div`
  transition: opacity 0.5s ease-in-out;
`;

const NextStep = styled.div`
  font-size: 3rem;
  opacity: 0.3;
  position: absolute;
  top: 120%;
  transition: opacity 0.5s ease-in-out;
`;

const StepContent = styled.div<{ $scrollDirection: 'up' | 'down' | null }>`
  max-width: 400px;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;

  ${({ $scrollDirection }) =>
    $scrollDirection === 'down'
      ? css`
          animation: ${slideUp} 0.4s ease-in-out;
        `
      : $scrollDirection === 'up'
        ? css`
            animation: ${slideDown} 0.4s ease-in-out;
          `
        : ''}
`;

const StepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StepIcon = styled.div`
  font-size: 3rem;
  color: ${({ theme }) => theme.palette.white || '#fff'};
`;

const StepTitle = styled.h2`
  font-size: 2rem;
`;

const StepDescription = styled.p`
  font-size: 1.2rem;
  opacity: 0.8;
`;
