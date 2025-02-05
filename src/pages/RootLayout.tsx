import { Outlet } from 'react-router-dom';
import { Header } from '../components/general/Header';
import styled from 'styled-components';

export const RootLayout = () => {
  return (
    <LayoutContainer>
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
    </LayoutContainer>
  );
};

// **Główna siatka layoutu**
const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  padding-top: 60px; /* Zapewnia miejsce na Header */
  overflow: hidden;
`;

// **Główna zawartość strony**
const MainContent = styled.main`
  padding-top: ${({ theme }) => theme.spacing.large};
  overflow-y: auto;
  flex-grow: 1;
`;
