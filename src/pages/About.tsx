import { styled } from 'styled-components';
import { BigImageComponent } from '../components/aboutPage/BigImageComponent';
import { SkillsComponent } from '../components/aboutPage/SkillsComponent';
import { TechStack } from '../components/aboutPage/TechStackComonent';
import { CareerTimeline } from '../components/aboutPage/CareerTimeline';
import { Hobbies } from '../components/aboutPage/HobbiesComponent';
import { MyButton } from '../components/general/StyledButton';

export default function About() {
  return (
    <Container>
      <BigImageComponent />
      <SkillsComponent />
      <TechStack />
      <CareerTimeline />
      <Hobbies />
      <DownloadCVContainer>
        <MyButton variant="primary" href="/CV_Karol_Dzwonkowski.pdf" download>
          Download CV 📥
        </MyButton>
      </DownloadCVContainer>
    </Container>
  );
}

// 📌 **Kontener dla całej strony**
const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: ${({ theme }) => theme.spacing.medium} auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* padding: ${({ theme }) => theme.spacing.medium}; */
  gap: ${({ theme }) => theme.spacing.tenHeight};
`;

// 📌 **Kontener dla przycisku pobierania CV**
const DownloadCVContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
