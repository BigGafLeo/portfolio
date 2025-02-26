import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useModal } from '../../../context/ModalContext';
import { MonthCalendar } from './MonthCalendar';
import { AvailableSlots } from './AvailableSlots';
import { MyButton } from '../StyledButton';
import { FormField } from '../FormField';
import { sendBookingEmail } from './sendBookingEmail';

export const BookingModal: React.FC = () => {
  const { isModalOpen, closeModal } = useModal();
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [bookStep, setBookStep] = useState<number>(1);

  const [isSending, setIsSending] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const [isFormValid, setIsFormValid] = useState(false);

  // Nowa struktura formData przechowująca wartość i isValid
  const [formData, setFormData] = useState({
    subject: { value: '', isValid: false },
    email: { value: '', isValid: false },
    phone: { value: '', isValid: false },
    name: { value: '', isValid: false },
  });

  const updateFormData = (name: string, value: string, isValid: boolean) => {
    setFormData((prev) => ({
      ...prev,
      [name]: { value, isValid },
    }));
  };

  useEffect(() => {
    setIsFormValid(
      Object.values(formData).every((field) => {
        return field.isValid;
      }),
    );
  }, [formData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid || !selectedDay || !selectedTime || isSending) return;

    setIsSending(true);
    setFeedbackMessage(null);
    setIsSuccess(null);

    // 🔹 Konwersja daty i godziny na format YYYYMMDDTHHMMSSZ
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = selectedDay.toString().padStart(2, '0');

    // 🔹 Pobieranie godziny i minuty ze selectedTime
    const [hour, minute] = selectedTime.split(':').map(Number);

    // 🔹 Ustawienie czasu zakończenia spotkania (1 godzina później)
    const endHour = (hour + 1).toString().padStart(2, '0');
    const formattedStartDate = `${year}${month}${day}T${hour
      .toString()
      .padStart(2, '0')}${minute.toString().padStart(2, '0')}00Z`;
    const formattedEndDate = `${year}${month}${day}T${endHour}${minute
      .toString()
      .padStart(2, '0')}00Z`;

    const formDataToSend = {
      name: formData.name.value,
      email: formData.email.value || undefined,
      phone: formData.phone.value || undefined,
      subject: formData.subject.value,
      dateStart: formattedStartDate,
      dateEnd: formattedEndDate,
    };

    const result = await sendBookingEmail(formDataToSend);

    if (result.success) {
      setFeedbackMessage('Meeting request sent successfully!');
      setIsSuccess(true);

      // ✅ Resetujemy dane w formularzu
      setFormData({
        subject: { value: '', isValid: false },
        email: { value: '', isValid: false },
        phone: { value: '', isValid: false },
        name: { value: '', isValid: false },
      });

      // ✅ Resetujemy wybrany dzień i czas
      setSelectedDay(null);
      setSelectedTime(null);
      setBookStep(1);

      // ✅ Zamykamy modal po 1 sekundzie
      setTimeout(() => {
        closeModal();
      }, 1000);

      // ✅ Powiadomienie o sukcesie
      alert('Meeting successfully booked!');
    } else {
      setFeedbackMessage('Something went wrong. Please try again.');
      setIsSuccess(false);
    }

    setIsSending(false);
  };

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
      content = (
        <MainContainer>
          <DateList>
            <DateElement>
              <StyledDate>
                Date: {selectedDay?.toString().padStart(2, '0')}-
                {(currentDate.getMonth() + 1).toString().padStart(2, '0')}-
                {currentDate.getFullYear()}
              </StyledDate>
            </DateElement>

            <DateElement>
              <StyledDate>Time: {selectedTime}</StyledDate>
            </DateElement>
          </DateList>
          <FormContainer onSubmit={handleSubmit}>
            <GridContainer>
              <FormField
                label="Subject"
                name="subject"
                value={formData.subject.value}
                setFormData={updateFormData}
                placeholder="Pick a subject"
              />
              <FormField
                label="Name"
                name="name"
                value={formData.name.value}
                setFormData={updateFormData}
                placeholder="Enter your name"
              />
              <FormField
                label="Email"
                name="email"
                type="email"
                value={formData.email.value}
                setFormData={updateFormData}
                placeholder="Enter your email"
              />
              <FormField
                label="Phone number"
                name="phone"
                value={formData.phone.value}
                setFormData={updateFormData}
                placeholder="+XX YYY YYY YYY"
              />
            </GridContainer>
            {feedbackMessage && (
              <FeedbackMessage success={isSuccess}>
                {feedbackMessage}
              </FeedbackMessage>
            )}
            <MyButton isDisabled={!isFormValid}>Set up meeting!</MyButton>
          </FormContainer>
        </MainContainer>
      );
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
            isDisabled={selectedDay === null || selectedTime === null}
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

export default BookingModal;

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

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const DateList = styled.ul`
  padding: ${({ theme }) => theme.spacing.medium};
  gap: ${({ theme }) => theme.spacing.small};
  background-color: ${({ theme }) => theme.colors.background.element4};
  border-radius: ${({ theme }) => theme.borderRadiuses.l};
  max-width: 40%;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

const StyledDate = styled.p`
  font-weight: 500;
`;

const DateElement = styled.li`
  list-style-type: none;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.large};
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.medium};
  width: 600px;
  height: auto;
`;

const BackgroundColorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const FeedbackMessage = styled.p<{ success?: boolean | null }>`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ success, theme }) =>
    success === true
      ? theme.palette.secretGarden
      : success === false
        ? theme.palette.tomato
        : theme.palette.comet};
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.small};
`;
