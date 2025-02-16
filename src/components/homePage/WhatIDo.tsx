import styled from 'styled-components';

export const WhatIDo = () => {
  return (
    <MainContainer>
      <Title>What I can help You with:</Title>
      <Container>
        <Grid>
          <Tile>Websites</Tile>
          <Tile>API's</Tile>
          <Tile>Automatization</Tile>
          <Tile>AI Implementation</Tile>
          <Tile>Web3 & Blockchain</Tile>
          <Tile>Algorithmic Trading</Tile>
        </Grid>
      </Container>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.large};
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.large};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr)); /* Większe kolumny */
  grid-template-rows: repeat(3, 1fr); /* Wiersze tej samej wysokości */
  gap: ${({ theme }) => theme.spacing.large}; /* Większe odstępy */
  width: 600px; /* Większa szerokość całego grid */
  align-items: stretch; /* Kafelki rozciągają się do tej samej wysokości */
`;

const Title = styled.h1``;

const Tile = styled.button`
  background-color: ${({ theme }) => theme.palette.mintblue};
  color: ${({ theme }) => theme.palette.bigstone};
  font-size: ${({ theme }) => theme.fontSizes.large}; /* Większa czcionka */
  padding: ${({ theme }) => theme.spacing.extraLarge}; /* Większy padding */
  border-radius: ${({ theme }) =>
    theme.borderRadiuses.l}; /* Większe zaokrąglenie */
  border: none;
  cursor: pointer;
  text-align: center;
  transition:
    background-color 0.3s ease-in-out,
    transform 0.2s ease-in-out;

  /* Ustawienie flexa, aby treść była wyśrodkowana */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%; /* Kafelki zawsze pełnej wysokości */

  &:hover {
    background-color: ${({ theme }) => theme.palette.fernGreen};
    transform: scale(1.05); /* Efekt powiększenia */
  }
`;
