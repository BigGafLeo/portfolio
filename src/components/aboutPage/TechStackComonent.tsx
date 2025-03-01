import { useState } from 'react';
import styled from 'styled-components';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { rgba } from 'polished';

export const TechStack = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      {/* Nagłówek sekcji - kliknięcie otwiera/zamyka */}
      <Header onClick={() => setIsOpen(!isOpen)}>
        <Title>TECH STACK</Title>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </Header>

      {/* Sekcja rozwijana */}
      <StackContent $isOpen={isOpen}>
        <Category>
          <CategoryTitle>Languages & Syntax</CategoryTitle>
          <Items>
            <TechItem>JavaScript</TechItem>
            <TechItem>TypeScript</TechItem>
            <TechItem>Python</TechItem>
            <TechItem>Solidity</TechItem>
            <TechItem>Java</TechItem>
            <TechItem>C++</TechItem>
          </Items>
        </Category>

        <Category>
          <CategoryTitle>Databases</CategoryTitle>
          <Items>
            <TechItem>MySQL</TechItem>
            <TechItem>MongoDB</TechItem>
            <TechItem>PostgreSQL</TechItem>
          </Items>
        </Category>

        <Category>
          <CategoryTitle>Backend Development</CategoryTitle>
          <Items>
            <TechItem>Node.js</TechItem>
            <TechItem>Express.js</TechItem>
            <TechItem>GraphQL</TechItem>
            <TechItem>Socket.io</TechItem>
          </Items>
        </Category>

        <Category>
          <CategoryTitle>Frontend Development</CategoryTitle>
          <Items>
            <TechItem>HTML, CSS</TechItem>
            <TechItem>React</TechItem>
            <TechItem>TanStack</TechItem>
            <TechItem>React Router</TechItem>
          </Items>
        </Category>

        <Category>
          <CategoryTitle>DevOps & Cloud</CategoryTitle>
          <Items>
            <TechItem>Docker</TechItem>
            <TechItem>Kubernetes</TechItem>
            <TechItem>AWS</TechItem>
          </Items>
        </Category>

        <Category>
          <CategoryTitle>Data Science & Machine Learning</CategoryTitle>
          <Items>
            <TechItem>NumPy</TechItem>
            <TechItem>TensorFlow</TechItem>
            <TechItem>PyTorch</TechItem>
            <TechItem>Pandas</TechItem>
          </Items>
        </Category>
      </StackContent>
    </Container>
  );
};

// **Główny kontener**
const Container = styled.div`
  width: 100%;
  max-width: inherit;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.background.element4};
  border-radius: ${({ theme }) => theme.borderRadiuses.m};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

// **Nagłówek - klikany do rozwijania**
const Header = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.large};
  align-items: center;
  padding: ${({ theme }) => theme.spacing.medium};
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: bold;
  cursor: pointer;
  user-select: none;
  background-color: ${({ theme }) =>
    rgba(theme.colors.background.element1, 0.6)};
  transition: background 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background.element1};
  }
`;

// **Tytuł w nagłówku**
const Title = styled.span`
  text-transform: uppercase;
`;

// **Sekcja rozwijana**
const StackContent = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isOpen',
})<{ $isOpen: boolean }>`
  max-height: ${({ $isOpen }) => ($isOpen ? '1000px' : '0')};
  overflow: hidden;
  transition:
    max-height 0.4s ease-in-out,
    padding 0.3s ease-in-out;

  /* Poprawiona składnia padding */
  padding: ${({ $isOpen, theme }) =>
    $isOpen ? `${theme.spacing.medium} ${theme.spacing.medium}` : '0px'};

  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.large};
`;

// **Pojedyncza kategoria (np. Languages, Databases)**
const Category = styled.div`
  flex: 1 1 45%;
  min-width: 300px;
`;

// **Nagłówek kategorii**
const CategoryTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.spacing.small};
  text-transform: uppercase;
`;

// **Lista technologii**
const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.small};
`;

// **Pojedynczy element technologii**
const TechItem = styled.span`
  color: ${({ theme }) => theme.colors.text.default};
  background-color: ${({ theme }) =>
    rgba(theme.colors.background.element1, 0.6)};
  padding: ${({ theme }) => theme.spacing.small};
  border-radius: ${({ theme }) => theme.borderRadiuses.s};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 800;
`;
