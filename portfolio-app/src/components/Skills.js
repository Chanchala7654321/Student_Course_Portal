import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Skill = styled.li`
  background: #f4f4f4;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border-radius: 5px;
`;

const Skills = () => {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB'];

  return (
    <SkillsContainer>
      <Title>Skills</Title>
      <SkillsList>
        {skills.map((skill, index) => (
          <Skill key={index}>{skill}</Skill>
        ))}
      </SkillsList>
    </SkillsContainer>
  );
};

export default Skills;
