import React from 'react';
import styled from 'styled-components';

interface AvailableSlotsProps {
  selectedTime: string | null;
  setSelectedTime: (time: string) => void;
}

export const AvailableSlots: React.FC<AvailableSlotsProps> = ({
  selectedTime,
  setSelectedTime,
}) => {
  return (
    <TimeSection>
      <TimeTitle>Available Slots</TimeTitle>
      <TimeSlots>
        {['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'].map(
          (time) => (
            <TimeSlot
              key={time}
              isSelected={selectedTime === time}
              onClick={() => setSelectedTime(time)}
            >
              {time}
            </TimeSlot>
          ),
        )}
      </TimeSlots>
    </TimeSection>
  );
};

// 📌 **Stylizacja**
const TimeSection = styled.div`
  flex: 1;
`;

const TimeTitle = styled.h3`
  text-align: center;
`;

const TimeSlots = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TimeSlot = styled.div<{ isSelected?: boolean }>`
  padding: 10px;
  border-radius: ${({ theme }) => theme.borderRadiuses.s};
  text-align: center;
  cursor: pointer;
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.palette.secretGarden : 'transparent'};
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.palette.white : 'inherit'};
  transition: background-color 0.2s;
`;
