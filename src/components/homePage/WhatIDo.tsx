import styled from 'styled-components';

interface WhatIDoProps {
  serviceRef: React.MutableRefObject<HTMLDivElement | null>; // 🟢 Tylko jedna referencja
  action: (index: number) => void;
}

export const WhatIDo: React.FC<WhatIDoProps> = ({ serviceRef, action }) => {
  const setDetailsAndScroll = (index: number) => {
    action(index);
    if (serviceRef.current) {
      serviceRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <MainContainer>
      <Title>What I can help You with:</Title>
      <Container>
        <Grid>
          <Tile onClick={() => setDetailsAndScroll(0)}>Websites</Tile>
          <Tile onClick={() => setDetailsAndScroll(1)}>Automatization</Tile>
          <Tile onClick={() => setDetailsAndScroll(2)}>AI Implementation</Tile>
          <Tile onClick={() => setDetailsAndScroll(3)}>Web3 & Blockchain</Tile>
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
  grid-template-columns: repeat(2, minmax(200px, 1fr));
  grid-template-rows: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.large};
  width: 600px;
  align-items: stretch;
`;

const Title = styled.h1``;

const Tile = styled.button`
  background-color: ${({ theme }) => theme.palette.mintblue};
  color: ${({ theme }) => theme.palette.bigstone};
  font-size: ${({ theme }) => theme.fontSizes.large};
  padding: ${({ theme }) => theme.spacing.extraLarge};
  border-radius: ${({ theme }) => theme.borderRadiuses.l};
  border: none;
  cursor: pointer;
  text-align: center;
  transition:
    background-color 0.3s ease-in-out,
    transform 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.palette.fernGreen};
    transform: scale(1.05);
  }
`;
