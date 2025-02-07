import React from 'react';
import styled from 'styled-components';

interface FormFieldProps {
  label: string;
  type?: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  isTextArea?: boolean;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  type = 'text',
  name,
  value,
  placeholder,
  onChange,
  onBlur,
  error,
  isTextArea = false,
}) => {
  return (
    <FieldContainer>
      <Label htmlFor={name}>{label}</Label>
      {isTextArea ? (
        <TextArea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
        />
      ) : (
        <Input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
        />
      )}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </FieldContainer>
  );
};

// **Stylizacja**
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
`;

const Input = styled.input`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  padding: ${({ theme }) => theme.spacing.small};
  border: ${({ theme }) => theme.borderSize.s} solid
    ${({ theme }) => theme.palette.mystic};
  border-radius: ${({ theme }) => theme.borderRadiuses.s};
  outline: none;
  width: 100%;

  &:focus {
    border-color: ${({ theme }) => theme.palette.secretGarden};
  }
`;

const TextArea = styled.textarea`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  padding: ${({ theme }) => theme.spacing.small};
  height: 150px;
  border: ${({ theme }) => theme.borderSize.s} solid
    ${({ theme }) => theme.palette.mystic};
  border-radius: ${({ theme }) => theme.borderRadiuses.s};
  resize: none;
  outline: none;
  width: 100%;

  &:focus {
    border-color: ${({ theme }) => theme.palette.secretGarden};
  }
`;

const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.palette.tomato};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 500;
`;
