import styled from 'styled-components';

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <NavList>
        <NavItem href="/">Strona główna</NavItem>
        <NavItem href="/aboutme">O mnie</NavItem>
        <NavItem href="#">Projekty</NavItem>
        <NavItem href="#">Kontakt</NavItem>
      </NavList>
    </SidebarContainer>
  );
};

// **Sidebar zaczyna się na wysokości Headera**
const SidebarContainer = styled.nav`
  width: 150px;
  height: 50vh; /* Sidebar zajmuje 50% wysokości ekranu */
  background-color: ${({ theme }) => theme.palette.bigstone};
  color: ${({ theme }) => theme.palette.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Centrowanie nawigacji w Sidebarze */
  position: fixed;
  left: 0;
  top: 60px; /* Przesunięcie Sidebaru w dół na wysokość Headera */
  border-radius: 0 ${({ theme }) => theme.borderRadiuses.m}
    ${({ theme }) => theme.borderRadiuses.m} 0;
  z-index: 900;
`;

// **Lista nawigacyjna**
const NavList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

// **Styl poszczególnych elementów nawigacji**
const NavItem = styled.a`
  color: ${({ theme }) => theme.palette.white};
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  margin: ${({ theme }) => theme.spacing.medium} 0;
  padding: ${({ theme }) => theme.spacing.medium};
  width: 100%;
  text-align: center;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.palette.secretGarden};
  }
`;
