import styled from 'styled-components';
import { MyButton } from './StyledButton';
import { MainNav } from './MainNav';
import { useModal } from '../../context/ModalContext';

export const Header = () => {
  const { openModal } = useModal();
  return (
    <MainDiv>
      <BorderDiv>
        <Img src="/temp.jpg" alt="Profile" />
        <MainNav />
      </BorderDiv>
      <BorderDiv>
        <StatusContainer>
          <StatusDot />
          <StatusText>Open for work</StatusText>
        </StatusContainer>
        <MyButton variant="primary" onClick={openModal}>
          Book a Call
        </MyButton>
      </BorderDiv>
    </MainDiv>
  );
};

// **Główna sekcja nagłówka**
const MainDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.palette.white};
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  padding: 0 ${({ theme }) => theme.spacing.medium};
  justify-content: space-between;
`;

// **Lewy i prawy kontener**
const BorderDiv = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.extraLarge};
`;

// **Zdjęcie profilowe**
const Img = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  flex-shrink: 0;
`;

// **Kontener statusu "Open for work"**
const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.text.default};
`;

// **Zielona kropka**
const StatusDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ theme }) =>
    theme.palette.secretGarden}; /* Zielony kolor */
`;

// **Tekst statusu**
const StatusText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;
