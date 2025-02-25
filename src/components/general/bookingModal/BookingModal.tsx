import React, { useState } from 'react';
import styled from 'styled-components';
import { useModal } from '../../../context/ModalContext';
import { MonthCalendar } from './MonthCalendar';
import { AvailableSlots } from './AvailableSlots';
import { MyButton } from '../StyledButton';

export const BookingModal: React.FC = () => {
  const { isModalOpen, closeModal } = useModal();
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [bookStep, setBookStep] = useState<number>(1);

  let content = null;

  if (!isModalOpen) return null;

  switch (bookStep) {
    case 1:
      content = (
        <>
          <BackgroundColorWrapper>
            <MonthCalendar
              currentDate={currentDate}
              setCurrentDate={setCurrentDate}
              selectedDay={selectedDay}
              setSelectedDay={setSelectedDay}
            />
          </BackgroundColorWrapper>
          <BackgroundColorWrapper>
            <AvailableSlots
              selectedTime={selectedTime}
              setSelectedTime={setSelectedTime}
            />
          </BackgroundColorWrapper>
        </>
      );
      break;
    case 2:
      content = <></>;
      break;
  }

  return (
    <Overlay>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>Book a Call</ModalTitle>
          <CloseButton onClick={closeModal}>×</CloseButton>
        </ModalHeader>
        <StepsContainer>
          <MyButton
            isSelected={bookStep === 1}
            variant="outline"
            onClick={() => setBookStep(1)}
            style={{
              width: '100%',
            }}
          >
            Step 1
          </MyButton>
          <MyButton
            isSelected={bookStep === 2}
            variant="outline"
            onClick={() => setBookStep(2)}
            style={{
              width: '100%',
            }}
          >
            Step 2
          </MyButton>
        </StepsContainer>
        <Content>{content}</Content>
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
  height: auto;
  background-color: ${({ theme }) => theme.colors.background.element2};
  width: 90%;
  max-width: 700px;
  border-radius: ${({ theme }) => theme.borderRadiuses.m};
  box-shadow: ${({ theme }) => theme.shadows.l};
  overflow: hidden;
`;

const ModalHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.medium};
  background: ${({ theme }) => theme.colors.background.element1};
  color: ${({ theme }) => theme.colors.text.light};
`;

const StepsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: ${({ theme }) => theme.spacing.small};
  padding: ${({ theme }) => theme.spacing.medium};
`;

const ModalTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.large};
  text-align: center;
  flex: 1;
`;

const CloseButton = styled.button`
  position: absolute;
  right: ${({ theme }) => theme.spacing.medium};
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text.light};
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  gap: ${({ theme }) => theme.spacing.bigger};
  justify-content: space-evenly;
  align-items: flex-start;
  padding: ${({ theme }) => theme.spacing.bigger};
`;

const BackgroundColorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export default BookingModal;
