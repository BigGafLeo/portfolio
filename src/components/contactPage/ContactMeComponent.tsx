import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FormField } from '../general/FormField';
import { sendEmail } from './sendEmail';

export const ContactMeComponent: React.FC = () => {
  const [formData, setFormData] = useState({
    name: { value: '', isValid: false },
    email: { value: '', isValid: false },
    subject: { value: '', isValid: false },
    message: { value: '', isValid: false },
  });

  const [isSending, setIsSending] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const [isFormValid, setIsFormValid] = useState(false);

  const updateFormData = (name: string, value: string, isValid: boolean) => {
    setFormData((prev) => ({
      ...prev,
      [name]: { value, isValid },
    }));
  };

  useEffect(() => {
    setIsFormValid(Object.values(formData).every((field) => field.isValid));
  }, [formData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid || isSending) return;

    setIsSending(true);
    setFeedbackMessage(null);
    setIsSuccess(null);

    const formDataToSend = {
      name: formData.name.value,
      email: formData.email.value,
      subject: formData.subject.value,
      message: formData.message.value,
    };

    const result = await sendEmail(formDataToSend);

    if (result.success) {
      setFeedbackMessage('Message sent successfully!');
      setIsSuccess(true);
      setFormData({
        name: { value: '', isValid: false },
        email: { value: '', isValid: false },
        subject: { value: '', isValid: false },
        message: { value: '', isValid: false },
      });
    } else {
      setFeedbackMessage('Something went wrong. Please try again.');
      setIsSuccess(false);
    }

    setIsSending(false);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormField
        label="Name"
        name="name"
        value={formData.name.value}
        setFormData={updateFormData}
        placeholder="Enter your name"
      />
      <FormField
        label="Email"
        type="email"
        name="email"
        value={formData.email.value}
        setFormData={updateFormData}
        placeholder="Enter your email"
      />
      <FormField
        label="Subject"
        name="subject"
        value={formData.subject.value}
        setFormData={updateFormData}
        placeholder="Enter message subject"
      />
      <FormField
        label="Message"
        name="message"
        value={formData.message.value}
        setFormData={updateFormData}
        placeholder="Write your message..."
        isTextArea
      />

      {feedbackMessage && (
        <FeedbackMessage success={isSuccess}>{feedbackMessage}</FeedbackMessage>
      )}

      <ButtonContainer>
        <SendButton type="submit" disabled={!isFormValid || isSending}>
          {isSending ? 'Sending...' : 'Send'}
        </SendButton>
      </ButtonContainer>
    </FormContainer>
  );
};

// 📌 **Stylizacja**
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.large};
  width: 100%;
  max-width: 500px;
  background-color: ${({ theme }) => theme.palette.white};
  padding: ${({ theme }) => theme.spacing.large};
  border-radius: ${({ theme }) => theme.borderRadiuses.m};
  box-shadow: ${({ theme }) => theme.shadows.m};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const SendButton = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  padding: ${({ theme }) => theme.spacing.medium},
    ${({ theme }) => theme.spacing.large};
  background-color: ${({ theme }) => theme.palette.secretGarden};
  color: ${({ theme }) => theme.palette.white};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadiuses.s};
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.palette.fernGreen};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.palette.mystic};
    cursor: not-allowed;
  }
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

export default ContactMeComponent;
