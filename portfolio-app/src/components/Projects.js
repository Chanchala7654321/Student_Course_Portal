import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

const ProjectCard = styled.div`
  background: #f4f4f4;
  padding: 1rem;
  border-radius: 5px;
  text-align: left;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const ProjectLink = styled.a`
  color: #333;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const Projects = () => {
  const projects = [
    {
      title: 'Project One',
      description: 'A brief description of the first project.',
      link: '#',
    },
    {
      title: 'Project Two',
      description: 'A brief description of the second project.',
      link: '#',
    },
    {
      title: 'Project Three',
      description: 'A brief description of the third project.',
      link: '#',
    },
  ];

  return (
    <ProjectsContainer>
      <Title>Projects</Title>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </ProjectLink>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default Projects;
