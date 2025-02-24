import React from 'react';
import styled from 'styled-components';

interface BubbleProps {
  text?: string;
  startingState: boolean;
  fadeOut?: boolean;
  fadeIn?: boolean;
}

export const Bubble: React.FC<BubbleProps> = ({
  text,
  fadeOut,
  fadeIn,
  startingState,
}) => {
  if (!text) {
    return null;
  }

  return (
    <BubbleContainer
      $startingState={startingState}
      $fadeIn={fadeIn}
      $fadeOut={fadeOut}
    >
      {text}
    </BubbleContainer>
  );
};
export const BubbleContainer = styled.div<{
  $startingState: boolean;
  $fadeOut?: boolean;
  $fadeIn?: boolean;
}>`
  position: absolute;
  bottom: 100%; /* dymek pojawia się tuż nad kolumną */
  left: 50%;
  /* transform: translateX(-50%); */

  background-color: ${({ theme }) => theme.palette.athens};
  padding: 1rem 1.5rem;
  border-radius: 8px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
  min-width: 300px;
  text-align: center;

  opacity: ${({ $fadeIn, $fadeOut, $startingState }) => {
    if ($fadeOut) return 0;
    if ($fadeIn) return 1;
    return $startingState ? 1 : 0;
  }};
  transition: opacity 0.5s ease-in-out;

  /* Strzałka w dół (pseudo-element) */
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 100%; /* strzałka będzie na samym dole dymka */
    transform: translateX(-50%);
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid ${({ theme }) => theme.palette.athens};
  }
`;
