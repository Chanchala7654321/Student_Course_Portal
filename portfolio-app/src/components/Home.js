import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Title>Welcome to My Portfolio</Title>
      <Subtitle>I'm a passionate developer ready to build amazing things.</Subtitle>
    </HomeContainer>
  );
};

export default Home;
