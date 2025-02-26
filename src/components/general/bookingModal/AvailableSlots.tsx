import { rgba } from 'polished';
import React from 'react';
import styled from 'styled-components';

interface AvailableSlotsProps {
  selectedTime: string | null;
  setSelectedTime: (time: string | null) => void;
}

export const AvailableSlots: React.FC<AvailableSlotsProps> = ({
  selectedTime,
  setSelectedTime,
}) => {
  return (
    <TimeSection>
      <TimeTitle>Available Slots</TimeTitle>
      <TimeSlots>
        {[
          '09:00',
          '10:00',
          '11:00',
          '12:00',
          '13:00',
          '14:00',
          '15:00',
          '16:00',
        ].map((time, index) => (
          <TimeSlot
            key={time}
            index={index}
            isSelected={selectedTime === time}
            onClick={() =>
              time === selectedTime
                ? setSelectedTime(null)
                : setSelectedTime(time)
            }
          >
            {time}
          </TimeSlot>
        ))}
      </TimeSlots>
    </TimeSection>
  );
};

const TimeSection = styled.div`
  flex: 0.5;
  width: inherit;
  max-height: 470px;
  display: flex;
  flex-direction: column;
  align-items: center; /* 🔹 Wyrównanie */
`;

const TimeTitle = styled.h3`
  text-align: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background.element2};
  padding: ${({ theme }) => theme.spacing.small};
  position: sticky;
  top: 0;
  z-index: 1;
`;

const TimeSlots = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.medium};
  flex-grow: 1;
  overflow-y: auto;
  width: 100%;

  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE i Edge */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Edge */
  }
`;

const TimeSlot = styled.div<{ index: number; isSelected?: boolean }>`
  height: auto;
  width: 100%;
  padding: 10px;
  border-radius: ${({ theme }) => theme.borderRadiuses.s};
  text-align: center;
  cursor: pointer;

  background-color: ${({ index, isSelected, theme }) =>
    isSelected
      ? theme.palette.secretGarden
      : index % 2 === 0
        ? rgba(theme.colors.background.element1, 0.15)
        : rgba(theme.colors.background.element1, 0.5)};

  color: ${({ isSelected, theme }) =>
    isSelected ? theme.palette.white : 'inherit'};
  transition: background-color 0.2s;

  transform: ${({ isSelected }) => (isSelected ? 'scale(1.3)' : 'scale(1)')};

  transition:
    transform 0.1s ease-in-out,
    background-color 0.1s ease-in-out,
    font-weight 0.1s ease-in-out,
    color 0.1s ease-in-out;

  &:hover {
    ${({ isSelected, theme }) =>
      !isSelected &&
      `
        color: ${theme.colors.text.light};
        background-color: ${rgba(theme.colors.background.element1, 1)};
        transform: scale(1.2);
        font-weight: 550;
      `}
  }
`;
