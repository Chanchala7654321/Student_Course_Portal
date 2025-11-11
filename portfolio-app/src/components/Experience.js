import React from 'react';
import styled from 'styled-components';

const ExperienceContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ExperienceItem = styled.div`
  margin-bottom: 1.5rem;
  text-align: left;
  max-width: 600px;
  margin: 1.5rem auto;
  padding: 1rem;
  border-left: 3px solid #333;
`;

const JobTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const Company = styled.p`
  font-size: 1.2rem;
  font-style: italic;
  margin-bottom: 0.5rem;
`;

const Years = styled.p`
  font-size: 1rem;
  color: #666;
`;

const Description = styled.p`
  font-size: 1.1rem;
`;

const Experience = () => {
  const experience = [
    {
      title: 'Software Engineer',
      company: 'Tech Company',
      years: '2022 - Present',
      description: 'Developed and maintained web applications using React and Node.js.',
    },
    {
      title: 'Junior Developer',
      company: 'Another Tech Company',
      years: '2021 - 2022',
      description: 'Assisted in the development of new features and bug fixing.',
    },
  ];

  return (
    <ExperienceContainer>
      <Title>Experience</Title>
      {experience.map((exp, index) => (
        <ExperienceItem key={index}>
          <JobTitle>{exp.title}</JobTitle>
          <Company>{exp.company}</Company>
          <Years>{exp.years}</Years>
          <Description>{exp.description}</Description>
        </ExperienceItem>
      ))}
    </ExperienceContainer>
  );
};

export default Experience;
