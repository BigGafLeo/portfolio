import React, { FC } from 'react';
import styled from 'styled-components';

// Typy wejściowe
interface TileData {
  image: string; // URL do grafiki
  description: string; // Tekst opisu
}

interface HumanWithTilesProps {
  benefits: TileData[];
  examples: TileData[];
}

const PlaceholderImage = 'https://via.placeholder.com/80';

const HumanWithTiles: FC<HumanWithTilesProps> = ({ benefits, examples }) => {
  return (
    <Container>
      <SpeechBubble>Hover on the tiles!</SpeechBubble>
      <HumanWrapper>
        {/* Obrazek ludzika */}
        <HumanImage
          src="/public/images/mainPage/humanv1.jpg"
          alt="Human Placeholder"
        />

        {/* Lewa strona (benefits) */}
        <LeftArc>
          {benefits.map(({ image, description }, index) => (
            <Tile key={`benefit-${index}`}>
              <TileImage
                src={image || PlaceholderImage}
                alt={`Benefit ${index}`}
              />
              <DescriptionOverlay>{description}</DescriptionOverlay>
            </Tile>
          ))}
        </LeftArc>

        {/* Prawa strona (examples) */}
        <RightArc>
          {examples.map(({ image, description }, index) => (
            <Tile key={`example-${index}`}>
              <TileImage
                src={image || PlaceholderImage}
                alt={`Example ${index}`}
              />
              <DescriptionOverlay>{description}</DescriptionOverlay>
            </Tile>
          ))}
        </RightArc>
      </HumanWrapper>
    </Container>
  );
};

// Kontener główny całego komponentu
const Container = styled.div`
  position: relative;
  width: 100%;
  /* Można dostosować minimalną wysokość lub szerokość rodzica */
  min-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Dymek nad głową ludzika
const SpeechBubble = styled.div`
  position: absolute;
  top: 0;
  /* Wyrównanie na środek szerokości */
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  border: 2px solid #ccc;
  border-radius: 8px;
  padding: 8px 16px;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &::after {
    content: '';
    position: absolute;
    bottom: -16px;
    left: 50%;
    transform: translateX(-50%);
    border: 8px solid transparent;
    border-top-color: #ccc; /* trójkąt wskazujący głowę ludzika */
  }
`;

// Wrapper zawierający ludzika i obie listy płytek
const HumanWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Grafika ludzika (docelowo wstawić właściwy obrazek)
const HumanImage = styled.img`
  width: 200px; /* stały rozmiar: np. 200px */
  height: auto;
`;

// Kontener na lewą stronę płytek (benefits)
const LeftArc = styled.div`
  position: absolute;
  left: -200px;
  /* Wysokość: mniej więcej wyśrodkowanie względem ludzika */
  top: 50%;
  transform: translateY(-50%);
  width: 200px;
  height: 400px;

  gap: ${({ theme }) => theme.spacing.medium};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

// Kontener na prawą stronę płytek (examples)
const RightArc = styled.div`
  position: absolute;
  right: -200px;
  top: 50%;
  transform: translateY(-50%);
  width: 200px;
  height: 400px;

  gap: ${({ theme }) => theme.spacing.medium};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

// Pojedyncza płytka
const Tile = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  background-color: #f1f1f1;
  border: 2px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  /* Wyśrodkowanie wewnątrz */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    /* Po najechaniu powiększamy całą płytkę */
    transform: scale(3);
    z-index: 2;
  }
`;

// Obrazek wewnątrz płytki
const TileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// Warstwa z opisem pojawiająca się przy hoverze
const DescriptionOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  font-size: ${({ theme }) => theme.fontSizes.tiny};
  padding: 4px;
  text-align: center;
  transform: translateY(100%);
  transition: transform 0.3s ease-in-out;

  /* Pokazujemy opis w momencie hover na głównym kontenerze Tile */
  ${Tile}:hover & {
    transform: translateY(0%);
  }
`;

export default HumanWithTiles;
