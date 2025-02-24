import styled, { css } from 'styled-components';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'danger';

interface ButtonProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  style?: React.CSSProperties;
  download?: boolean;
}

export const MyButton = ({
  variant = 'primary',
  children,
  onClick,
  href,
  style,
  download,
}: ButtonProps) => {
  if (href) {
    return (
      <StyledLink
        href={href}
        variant={variant}
        style={style}
        download={download}
      >
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

// Style bazowe dla przycisku
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

// Główne style przycisku
const StyledButton = styled.button<{ variant: ButtonVariant }>`
  ${baseStyles}
  border: none;

  ${({ variant, theme }) => {
    switch (variant) {
      case 'danger':
        return css`
          /* 1) Kolor bazowy przycisku (bez hover) */
          background-color: ${theme.palette.chilly};
          color: ${theme.palette.white};
          position: relative;
          z-index: 0;
          overflow: hidden;

          /* 2) Po najechaniu: uruchamiamy obie animacje w tym samym czasie (2s) */
          &:hover {
            &::before {
              animation: fillTomato 2s linear forwards;
            }
            &::after {
              animation: moveLine 2s linear;
            }
          }

          /* 3) Wspólne style pseudo-elementów */
          &::before,
          &::after {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
          }

          /* 4) ::before - tło tomato, od 0% do 100% szerokości */
          &::before {
            left: 0;
            width: 0;
            background-color: ${theme.palette.tomato};
            z-index: -1; /* za tekstem */
          }

          /* 5) ::after - pionowa kreska w kolorze bigstone */
          &::after {
            width: 3px;
            left: 0;
            opacity: 0; /* startowo niewidoczna */
            background-color: ${theme.palette.bigstone};
            z-index: -1; /* też za tekstem */
          }

          /* 6) Animacje kluczowe */
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
            /* Lekki fade-in na początku */
            10% {
              left: 10%;
              opacity: 1;
            }
            /* Przez większość czasu kreska jest widoczna i "jedzie" do prawej */
            90% {
              left: 90%;
              opacity: 1;
            }
            /* Na samym końcu przesuwa się ostatnie procenty i znika */
            100% {
              left: calc(100% - 3px);
              opacity: 0;
            }
          }
        `;
      /* Pozostałe warianty – przykład */
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
      default:
        return '';
    }
  }}
`;

const StyledLink = styled.a<{ variant: ButtonVariant }>`
  ${baseStyles}

  ${({ variant, theme }) => {
    switch (variant) {
      /* Jeżeli potrzebujesz taki sam efekt przy hoverze linka (danger),
         skopiuj analogicznie kod z StyledButton */
      case 'danger':
        return css`
          background-color: ${theme.palette.mintblue};
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
