import React from 'react';
import styled from 'styled-components';
import { projects } from '../data/projectsData';
import { Project } from '../components/projectsPage/ProjectComponent';

export const Projects: React.FC = () => {
  return (
    <ProjectsContainer>
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </ProjectsContainer>
  );
};

// 📌 **Stylizacja**
const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.extraLarge};
  align-items: center;
`;
