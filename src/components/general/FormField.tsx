import React, { useState } from 'react';
import styled from 'styled-components';
import { validateForm } from '../contactPage/validation';

interface FormFieldProps {
  label: string;
  type?: string;
  name: string;
  value: string;
  placeholder?: string;
  isTextArea?: boolean;
  isNecessary?: boolean; // ✅ Nowy props określający, czy pole jest wymagane
  setFormData: (name: string, value: string, isValid: boolean) => void;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  type = 'text',
  name,
  value,
  placeholder,
  isTextArea = false,
  isNecessary = true, // ✅ Domyślnie pola są wymagane
  setFormData,
}) => {
  const [error, setError] = useState<string | undefined>(undefined);
  const [touched, setTouched] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const newValue = e.target.value;
    const isValid = validateForm(name, newValue) === undefined;
    setFormData(name, newValue, isValid);
    if (touched) setError(validateForm(name, newValue));
  };

  const handleBlur = () => {
    setError(validateForm(name, value));
    setTouched(true);
  };

  return (
    <FieldContainer>
      <Label htmlFor={name}>
        {label} {isNecessary && <RequiredMark>*</RequiredMark>}
      </Label>
      {isTextArea ? (
        <TextArea
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={placeholder}
        />
      ) : (
        <Input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={placeholder}
        />
      )}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </FieldContainer>
  );
};

// 📌 **Stylizacja**
const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.small};
  width: 100%;
`;

const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.default};
  display: flex;
  align-items: center;
  gap: 5px; /* Dodaje odstęp między etykietą a gwiazdką */
`;

const RequiredMark = styled.span`
  color: red;
  font-size: 18px;
  font-weight: bold;
`;

const Input = styled.input`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  padding: ${({ theme }) => theme.spacing.small};
  border-radius: ${({ theme }) => theme.borderRadiuses.s};
  outline: none;
  width: 100%;
`;

const TextArea = styled.textarea`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  padding: ${({ theme }) => theme.spacing.small};
  height: 150px;
  border-radius: ${({ theme }) => theme.borderRadiuses.s};
  resize: none;
  outline: none;
  width: 100%;
`;

const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.palette.tomato};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 500;
`;
