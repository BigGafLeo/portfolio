import { useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { MyButton } from './StyledButton';
import { MainNav } from './MainNav';
import { useModal } from '../../context/ModalContext';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useMediaQuery } from '../../hooks/useMediaQuery';

export const Header = () => {
  const { openModal } = useModal();
  const [isOpen, setIsOpen] = useState(false);

  const theme = useTheme();
  const isDesktop = useMediaQuery(`(min-width:  ${theme.breakpoints.sm})`);

  return (
    <MainDiv>
      {/* 🔹 Lewa sekcja: Zdjęcie + Nawigacja */}
      <BorderDiv>
        <Img src="/temp.jpg" alt="Profile" />
        <DesktopNav>
          <MainNav />
        </DesktopNav>
      </BorderDiv>

      {/* 🔹 Prawa sekcja: Status + Przycisk na dużych ekranach */}
      <BorderDiv>
        <DesktopStatus>
          <StatusContainer>
            <StatusDot />
            <StatusText>Open for work</StatusText>
          </StatusContainer>
        </DesktopStatus>

        {/* 🔹 Przycisk `Book a Call` - renderowany tylko na desktopie */}
        {isDesktop && (
          <MyButton variant="primary" onClick={openModal}>
            Book a Call
          </MyButton>
        )}

        {/* 🔹 Burger menu dla małych ekranów */}
        <BurgerMenu onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </BurgerMenu>
      </BorderDiv>

      {/* 🔹 Mobilne menu, które otwiera się po kliknięciu burger menu */}
      {isOpen && (
        <MobileMenu>
          <MainNav />
          <MobileStatusContainer>
            <StatusDot />
            <StatusText>Open for work</StatusText>
          </MobileStatusContainer>
          <MyButton variant="primary" onClick={openModal}>
            Book a Call
          </MyButton>
        </MobileMenu>
      )}
    </MainDiv>
  );
};

// **Główna sekcja nagłówka**
const MainDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.background.header};
  box-shadow: ${({ theme }) => theme.shadows.m};
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

// **Kontener statusu "Open for work" - widoczny tylko dla dużych ekranów**
const DesktopStatus = styled.div`
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

// **Status "Open for work" dla `BurgerMenu` - domyślnie ukryty, widoczny na małych ekranach**
const MobileStatusContainer = styled.div`
  display: none;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.text.default};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: flex;
    justify-content: center;
    margin-top: ${({ theme }) => theme.spacing.medium};
  }
`;

// **Kontener statusu**
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
  background-color: ${({ theme }) => theme.palette.secretGarden};
`;

// **Tekst statusu**
const StatusText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;

// **Nawigacja desktopowa (ukrywana na małych ekranach)**
const DesktopNav = styled.div`
  display: block;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

// **Burger menu (widoczne tylko na mobilkach)**
const BurgerMenu = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text.default};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: block;
  }
`;

// **Mobilne menu (pokazuje się po kliknięciu burger menu)**
const MobileMenu = styled.div`
  position: absolute;
  top: 60px;
  right: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background.element2};
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: ${({ theme }) => theme.spacing.large};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.medium};
  z-index: 999;
`;
