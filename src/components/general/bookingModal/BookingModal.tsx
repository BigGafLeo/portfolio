import React, { useState } from 'react';
import styled from 'styled-components';
import { useModal } from '../../../context/ModalContext';
import { MonthCalendar } from './MonthCalendar';
import { AvailableSlots } from './AvailableSlots';

export const BookingModal: React.FC = () => {
  const { isModalOpen, closeModal } = useModal();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  if (!isModalOpen) return null;

  return (
    <Overlay>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>Book a Call</ModalTitle>
          <CloseButton onClick={closeModal}>×</CloseButton>
        </ModalHeader>

        <Content>
          <MonthCalendar
            currentDate={currentDate}
            setCurrentDate={setCurrentDate}
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
          />
          <AvailableSlots
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
          />
        </Content>
      </ModalContainer>
    </Overlay>
  );
};

// 📌 **Stylizacja**
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const ModalContainer = styled.div`
  height: 600px;
  background: ${({ theme }) => theme.palette.white};
  width: 90%;
  max-width: 700px;
  border-radius: ${({ theme }) => theme.borderRadiuses.m};
  box-shadow: ${({ theme }) => theme.shadows.l};
  overflow: hidden;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.medium};
  background: ${({ theme }) => theme.palette.secretGarden};
  color: ${({ theme }) => theme.palette.white};
`;

const ModalTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.large};
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.palette.white};
`;

const Content = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.spacing.large};
`;

export default BookingModal;
