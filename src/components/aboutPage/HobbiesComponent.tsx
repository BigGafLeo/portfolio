import styled from 'styled-components';
import { HobbyElement } from './HobbyElement';

export const Hobbies = () => {
  // 🔹 Dane dotyczące hobby
  const geekHobbies = [
    { icon: '/images/hobbies/crypto.png', label: 'Etehrum' },
    { icon: '/images/hobbies/trading.png', label: 'Trading' },
    { icon: '/images/hobbies/gaming.jpg', label: 'Computer Games' },
  ];

  const normalHobbies = [
    { icon: '/images/hobbies/sailing.png', label: 'Sailing' },
    { icon: '/images/hobbies/squash.jpg', label: 'Squash' },
    { icon: '/images/hobbies/piano.jpg', label: 'Piano' },
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
  gap: ${({ theme }) => theme.spacing.medium};
  flex: 1;
`;

// **📌 Kontener na listę hobby**
const HobbiesContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.medium};
`;

// **📌 Stylizacja nagłówków**
const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.heading};
`;

const Subtitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.large};
`;
