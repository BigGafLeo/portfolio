import { styled } from 'styled-components';
import { BigImageComponent } from '../components/aboutPage/BigImageComponent';
import { SkillsComponent } from '../components/aboutPage/SkillsComponent';

export default function About() {
  return (
    <Container>
      <BigImageComponent />
      <SkillsComponent />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.medium};
`;
