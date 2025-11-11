import React from 'react';
import styled from 'styled-components';

const EducationContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const EducationItem = styled.div`
  margin-bottom: 1.5rem;
  text-align: left;
  max-width: 600px;
  margin: 1.5rem auto;
  padding: 1rem;
  border-left: 3px solid #333;
`;

const Degree = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const Institution = styled.p`
  font-size: 1.2rem;
  font-style: italic;
  margin-bottom: 0.5rem;
`;

const Years = styled.p`
  font-size: 1rem;
  color: #666;
`;

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Example',
      years: '2018 - 2022',
    },
    {
      degree: 'High School Diploma',
      institution: 'Example High School',
      years: '2014 - 2018',
    },
  ];

  return (
    <EducationContainer>
      <Title>Education</Title>
      {education.map((edu, index) => (
        <EducationItem key={index}>
          <Degree>{edu.degree}</Degree>
          <Institution>{edu.institution}</Institution>
          <Years>{edu.years}</Years>
        </EducationItem>
      ))}
    </EducationContainer>
  );
};

export default Education;
