import { styled } from 'styled-components';

export const MainNav = () => {
  return (
    <NavMenu>
      <NavItem href="/">Home</NavItem>
      <NavItem href="aboutme">About</NavItem>
      <NavItem href="projects">Projects</NavItem>
      <NavItem href="contact">Contact</NavItem>
    </NavMenu>
  );
};

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.medium};
`;

const NavItem = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.large};
  white-space: nowrap;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text.default};

  &:hover {
    color: ${({ theme }) => theme.palette.secretGarden};
  }
`;
