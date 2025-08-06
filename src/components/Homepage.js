import React from 'react';
import styled from 'styled-components';
import IntroSection from './IntroSection';
import WorkExperience from './WorkExperience';
import Education from './Education';
import ResumeGenerator from './ResumeGenerator';

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
      <ResumeGenerator />
    </HomepageContainer>
  );
};

export default Homepage;
