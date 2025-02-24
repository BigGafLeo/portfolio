// MobileNotification.tsx
import React, { useState } from 'react';
import styled from 'styled-components';

/**
 * Komponent wyświetla modal z powiadomieniem
 * tylko na ekranach o szerokości <= 768px.
 */
const MobileNotification: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  // Jeśli modal jest zamknięty, zwracamy null (nic nie renderujemy)
  if (!isOpen) {
    return null;
  }

  return (
    <Wrapper>
      <Modal>
        <Message>Mobile version coming soon!</Message>
        <CloseButton onClick={() => setIsOpen(false)}>Close</CloseButton>
      </Modal>
    </Wrapper>
  );
};

export default MobileNotification;

/* ---------------- STYLOWANIE ---------------- */

/** Nakładka – ciemne, półprzezroczyste tło na całej stronie */
const Wrapper = styled.div`
  position: fixed; /* zawsze w tym samym miejscu */
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  /* półprzezroczyste tło */
  background-color: rgba(0, 0, 0, 0.5);

  /* wyśrodkowanie zawartości w pionie i poziomie */
  display: none; /* domyślnie ukrywamy dla szerokich ekranów */

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  z-index: 9999; /* ponad innymi elementami */
`;

const Modal = styled.div`
  background-color: #fff;
  width: 90%; /* szerokość okienka – 90% ekranu */
  max-width: 400px; /* max. szerokość na telefonach/tabletach */
  border-radius: 8px;
  padding: 2rem;
  text-align: center; /* wyśrodkowanie tekstu */
`;

const Message = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
`;

const CloseButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;
