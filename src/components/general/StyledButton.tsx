import styled, { css } from 'styled-components';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'danger';

interface ButtonProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  style?: React.CSSProperties;
}

export const MyButton = ({
  variant = 'primary',
  children,
  onClick,
  href,
  style,
}: ButtonProps) => {
  if (href) {
    return (
      <StyledLink href={href} variant={variant} style={style}>
        {children}
      </StyledLink>
    );
  }

  return (
    <StyledButton onClick={onClick} variant={variant} style={style}>
      {children}
    </StyledButton>
  );
};

// **Style bazowe dla przycisku**
const baseStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 600;
  padding: ${({ theme }) => theme.spacing.small};
  border-radius: ${({ theme }) => theme.borderRadiuses.xl};
  cursor: pointer;
  text-decoration: none;
  transition:
    background-color 0.3s ease-in-out,
    border-color 0.3s ease-in-out;
`;

// **Główne style przycisku**
const StyledButton = styled.button<{ variant: ButtonVariant }>`
  ${baseStyles}
  border: none;

  ${({ variant, theme }) => {
    switch (variant) {
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
          background-color: transparent;
          border: 2px solid ${theme.palette.secretGarden};
          color: ${theme.palette.secretGarden};

          &:hover {
            background-color: ${theme.palette.secretGarden};
            color: ${theme.palette.white};
          }
        `;
      case 'danger':
        return css`
          background-color: ${theme.palette.tomato};
          color: ${theme.palette.white};

          &:hover {
            background-color: ${theme.palette.chilly};
          }
        `;
      default:
        return '';
    }
  }}
`;

// **Styl dla przycisku jako link**
const StyledLink = styled.a<{ variant: ButtonVariant }>`
  ${baseStyles}

  ${({ variant, theme }) => {
    switch (variant) {
      case 'primary':
        return css`
          background-color: ${theme.palette.secretGarden};
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
          background-color: transparent;
          border: 2px solid ${theme.palette.secretGarden};
          color: ${theme.palette.secretGarden};

          &:hover {
            background-color: ${theme.palette.secretGarden};
            color: ${theme.palette.white};
          }
        `;
      case 'danger':
        return css`
          background-color: ${theme.palette.tomato};
          color: ${theme.palette.white};

          &:hover {
            background-color: ${theme.palette.chilly};
          }
        `;
      default:
        return '';
    }
  }}
`;
