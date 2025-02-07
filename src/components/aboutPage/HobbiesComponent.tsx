import styled from 'styled-components';
import { HobbyElement } from './HobbyElement';

export const Hobbies = () => {
  // 🔹 Dane dotyczące hobby
  const geekHobbies = [
    { icon: '/icons/blockchain.png', label: 'Blockchain' },
    { icon: '/icons/trading.png', label: 'Trading' },
    { icon: '/icons/games.png', label: 'Computer Games' },
  ];

  const normalHobbies = [
    { icon: '/icons/sailing.png', label: 'Sailing' },
    { icon: '/icons/squash.png', label: 'Squash' },
    { icon: '/icons/piano.png', label: 'Piano' },
  ];

  return (
    <MainContainer>
      <Title>My Hobbies</Title>
      <TypeContainer>
        {/* 🔹 Geek Interests */}
        <ColumnContainer>
          <Subtitle>Geek Interests</Subtitle>
          <HobbiesContainer>
            {geekHobbies.map((hobby, index) => (
              <HobbyElement key={index} icon={hobby.icon} label={hobby.label} />
            ))}
          </HobbiesContainer>
        </ColumnContainer>

        {/* 🔹 Normal Interests */}
        <ColumnContainer>
          <Subtitle>Normal Interests</Subtitle>
          <HobbiesContainer>
            {normalHobbies.map((hobby, index) => (
              <HobbyElement key={index} icon={hobby.icon} label={hobby.label} />
            ))}
          </HobbiesContainer>
        </ColumnContainer>
      </TypeContainer>
    </MainContainer>
  );
};

// **📌 Główny kontener sekcji**
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: inherit;
  gap: ${({ theme }) => theme.spacing.medium};
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.large};
`;

// **📌 Kontener na kategorie hobby**
const TypeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1000px;
`;

// **📌 Kolumny (wyśrodkowane)**
const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

// **📌 Kontener na listę hobby**
const HobbiesContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.small};
`;

// **📌 Stylizacja nagłówków**
const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.large};
`;

const Subtitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;
