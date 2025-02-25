import { rgba } from 'polished';
import styled, { css } from 'styled-components';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'danger';

interface ButtonProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  style?: React.CSSProperties;
  isSelected?: boolean;
  download?: boolean;
  isDisabled?: boolean;
}

export const MyButton = ({
  variant = 'primary',
  children,
  onClick,
  href,
  style,
  isSelected,
  download,
  isDisabled,
}: ButtonProps) => {
  if (href) {
    return (
      <StyledLink
        href={href}
        variant={variant}
        style={style}
        isSelected={isSelected}
        download={download}
      >
        {children}
      </StyledLink>
    );
  }

  return (
    <StyledButton
      onClick={isDisabled ? undefined : onClick}
      variant={variant}
      style={style}
      isSelected={isSelected}
      isDisabled={isDisabled}
    >
      {children}
    </StyledButton>
  );
};

// 🔹 **Style bazowe dla przycisku**
const baseStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 600;
  padding: ${({ theme }) => theme.spacing.small};
  border-radius: ${({ theme }) => theme.borderRadiuses.xl};
  text-decoration: none;
  transition:
    background-color 0.3s ease-in-out,
    border-color 0.3s ease-in-out;
  cursor: pointer;
`;

const StyledButton = styled.button<{
  variant: ButtonVariant;
  isSelected?: boolean;
  isDisabled?: boolean;
}>`
  ${baseStyles}
  border: none;

  ${({ variant, theme, isSelected, isDisabled }) => {
    switch (variant) {
      case 'danger':
        return css`
          background-color: ${theme.palette.chilly};
          color: ${theme.palette.white};
          position: relative;
          z-index: 0;
          overflow: hidden;

          &:hover {
            &::before {
              animation: fillTomato 2s linear forwards;
            }
            &::after {
              animation: moveLine 2s linear;
            }
          }

          &::before,
          &::after {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
          }

          &::before {
            left: 0;
            width: 0;
            background-color: ${theme.palette.tomato};
            z-index: -1;
          }

          &::after {
            width: 3px;
            left: 0;
            opacity: 0;
            background-color: ${theme.palette.bigstone};
            z-index: -1;
          }

          @keyframes fillTomato {
            0% {
              width: 0;
            }
            100% {
              width: 100%;
            }
          }

          @keyframes moveLine {
            0% {
              left: 0;
              opacity: 0;
            }
            10% {
              left: 10%;
              opacity: 1;
            }
            90% {
              left: 90%;
              opacity: 1;
            }
            100% {
              left: calc(100% - 3px);
              opacity: 0;
            }
          }
        `;
      case 'primary':
        return css`
          background-color: ${theme.palette.timide};
          color: ${theme.palette.white};

          &:hover {
            background-color: ${theme.palette.fernGreen};
          }
        `;
      case 'secondary':
        return css`
          background-color: ${theme.palette.bigstone};
          color: ${theme.palette.white};

          &:hover {
            background-color: ${theme.palette.darkWisteria};
          }
        `;
      case 'outline':
        return css`
          background-color: ${isDisabled
            ? theme.palette.carnival
            : isSelected
              ? rgba(theme.colors.background.element1, 0.8)
              : 'transparent'};
          border: 2px solid ${theme.colors.border.main};
          color: ${isDisabled
            ? null
            : isSelected
              ? theme.palette.white
              : theme.colors.text.main};

          &:hover {
            background-color: ${!isDisabled
              ? theme.colors.background.element1
              : null};
            color: ${!isDisabled ? theme.palette.white : null};
          }
        `;
      default:
        return '';
    }
  }}
`;

const StyledLink = styled.a<{ variant: ButtonVariant; isSelected?: boolean }>`
  ${baseStyles}

  ${({ variant, theme, isSelected }) => {
    switch (variant) {
      case 'outline':
        return css`
          background-color: ${isSelected
            ? theme.colors.background.element1
            : 'transparent'};
          border: 2px solid ${theme.colors.border.main};
          color: ${isSelected ? theme.palette.white : theme.colors.text.main};

          &:hover {
            background-color: ${theme.colors.background.element1};
            color: ${theme.palette.white};
          }
        `;
      default:
        return '';
    }
  }}
`;
