import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
`;

const About = () => {
  return (
    <AboutContainer>
      <Title>About Me</Title>
      <Text>
        I am a software developer with a passion for creating beautiful and functional web applications. I have experience in various technologies and I am always eager to learn new things.
      </Text>
    </AboutContainer>
  );
};

export default About;
