import React from 'react';
import styled from 'styled-components';
import { ProjectData } from '../../data/projectsData';

interface ProjectProps {
  project: ProjectData;
}

export const Project: React.FC<ProjectProps> = ({ project }) => {
  const isEven = Number(project.id) % 2 === 0;

  return (
    <ProjectContainer>
      {isEven ? (
        <>
          {/* Left Section (Now has background image) */}
          <InfoSection $imageUrl={project.imageUrl}>
            <Overlay>
              <Title>{project.title}</Title>
              <ShortDescription>{project.shortDescription}</ShortDescription>
              <NonTechnicalDescription>
                {project.nonTechnicalDescription}
              </NonTechnicalDescription>
            </Overlay>
          </InfoSection>

          {/* Right Section */}
          <TechSection>
            <TechnicalDescription>
              {project.technicalDescription}
            </TechnicalDescription>
            <TechList>
              {project.technologies.map((tech) => (
                <TechItem key={tech}>{tech}</TechItem>
              ))}
            </TechList>
          </TechSection>
        </>
      ) : (
        <>
          {/* Right Section */}
          <TechSection>
            <TechnicalDescription>
              {project.technicalDescription}
            </TechnicalDescription>
            <TechList>
              {project.technologies.map((tech) => (
                <TechItem key={tech}>{tech}</TechItem>
              ))}
            </TechList>
          </TechSection>

          {/* Left Section (Now has background image) */}
          <InfoSection $imageUrl={project.imageUrl}>
            <Overlay>
              <Title>{project.title}</Title>
              <ShortDescription>{project.shortDescription}</ShortDescription>
              <NonTechnicalDescription>
                {project.nonTechnicalDescription}
              </NonTechnicalDescription>
            </Overlay>
          </InfoSection>
        </>
      )}
    </ProjectContainer>
  );
};

// 📌 **Component Styling**
const ProjectContainer = styled.div`
  display: flex;
  width: 100%;
  height: 75vh;
  max-width: inherit;
  border-radius: ${({ theme }) => theme.borderRadiuses.xxl};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.xl};
  background: ${({ theme }) => theme.palette.white};
`;

// ✅ **Left Section with Background Image**
const InfoSection = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'iamgeUrl',
})<{ $imageUrl: string }>`
  flex: 1;
  background-image: url(${({ $imageUrl }) => $imageUrl});
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.large};
`;

const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.6); /* Semi-transparent overlay */
  color: ${({ theme }) => theme.palette.white};
  padding: ${({ theme }) => theme.spacing.large};
  text-align: center;
  border-radius: ${({ theme }) => theme.borderRadiuses.s};
  max-width: 90%;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.heading};
  font-weight: bold;
`;

const ShortDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: bold;
  color: ${({ theme }) => theme.palette.white}; /* White text on dark overlay */
`;

const NonTechnicalDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.palette.white}; /* White text on dark overlay */
`;

// ✅ **Right Section (No Background)**
const TechSection = styled.div`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.large};
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  gap: ${({ theme }) => theme.spacing.medium};
  padding: ${({ theme }) => theme.spacing.medium};

  overflow-y: auto;

  /* 🔹 Ukrycie paska przewijania */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE i Edge */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Edge */
  }
`;

const TechnicalDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  margin-bottom: ${({ theme }) => theme.spacing.small};
  white-space: pre-line; /* 🔹 Zapewnia formatowanie nowych linii */
`;

const TechList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.small};
  justify-content: center;
`;

const TechItem = styled.li`
  color: ${({ theme }) => theme.colors.text.light};
  background: ${({ theme }) => theme.colors.background.element3};
  padding: ${({ theme }) => theme.spacing.small};
  border-radius: ${({ theme }) => theme.borderRadiuses.s};
  font-size: ${({ theme }) => theme.fontSizes.small};
`;
