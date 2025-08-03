import React from 'react';
import styled from 'styled-components';
import IntroSection from './IntroSection';
import WorkExperience from './WorkExperience';
import Education from './Education';

const HomepageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  scroll-behavior: smooth;
`;

const Homepage = () => {
  return (
    <HomepageContainer>
      <IntroSection />
      <WorkExperience />
      <Education />
    </HomepageContainer>
  );
};

export default Homepage;
