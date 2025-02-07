import React, { useState } from 'react';
import styled from 'styled-components';
import { FormField } from '../general/FormField';
import { validateForm, ValidationErrors } from './validation';
import { sendEmail } from './sendEmail'; // Import funkcji wysyłki e-mail

export const ContactMeComponent: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: '',
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [isSending, setIsSending] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null); // Dodaj nowy stan dla sukcesu

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateForm(name, value) }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateForm(name, value) }));
  };

  const isFormValid =
    !Object.values(errors).some((error) => error) &&
    Object.values(formData).every((value) => value.trim() !== '');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid || isSending) return;

    setIsSending(true);
    setFeedbackMessage(null);
    setIsSuccess(null);

    const result = await sendEmail(formData);

    if (result.success) {
      setFeedbackMessage('Message sent successfully!');
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '', subject: '' }); // Reset formularza
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
        value={formData.name}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Enter your name"
        error={errors.name}
      />
      <FormField
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Enter your email"
        error={errors.email}
      />
      <FormField
        label="Subject"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Enter message subject"
        error={errors.subject}
      />
      <FormField
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Write your message..."
        error={errors.message}
        isTextArea
      />

      {/* Komunikat o statusie wiadomości */}
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

// **Stylizacja**
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
