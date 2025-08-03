import React from 'react';
import styled from 'styled-components';

const EducationContainer = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem;
  background: #f9f9f9;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 200;
  text-align: center;
  margin-bottom: 5rem;
  color: #000000;
  letter-spacing: -0.01em;
  position: relative;
`;

const EducationGrid = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  gap: 2rem;
`;

const EducationCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  
  @media (max-width: 768px) {
    padding: 0.75rem 0;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Degree = styled.h3`
  font-size: 1.8rem;
  font-weight: 400;
  color: #000000;
  margin-bottom: 0.5rem;
  letter-spacing: -0.01em;
`;

const School = styled.h4`
  font-size: 1rem;
  font-weight: 300;
  color: #2196F3; /* Summer blue accent */
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const Duration = styled.p`
  font-size: 0.9rem;
  color: #999999;
  margin-bottom: 2rem;
  font-weight: 300;
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: #666666;
  margin-bottom: 2rem;
  max-width: 600px;
`;

const Achievements = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
`;

const Achievement = styled.li`
  font-size: 0.9rem;
  color: #666666;
  margin-bottom: 0.8rem;
  position: relative;
  padding-left: 1rem;
  font-weight: 300;
  
  &::before {
    content: '—';
    position: absolute;
    left: 0;
    color: #4CAF50; /* Summer green accent */
  }
`;

const LinkButton = styled.a`
  display: inline-block;
  margin-top: 1rem;
  color: #000000;
  text-decoration: none;
  font-weight: 300;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding-bottom: 2px;
  border-bottom: 1px solid #4CAF50; /* Summer green accent */
  transition: all 0.3s ease;
  width: fit-content;
  
  &:hover {
    color: #4CAF50;
    text-decoration: none;
  }
`;

const Education = () => {
  const educationHistory = [
    {
      degree: "PhD (Neural Network Training Dynamics)",
      school: "The University of Tokyo",
      duration: "2020 - 2022",
      description: "Conducting research in deep learning after completing a mathematics-focused bachelor’s degree. My work explored DNN's training dynamics, especially around how weight structures, rather than their numerical values, drives learning in neural networks. I left the program in 2021 to pursue real-world impact in industry, carrying forward the same curiosity and rigor into real-world systems",
      schoolInitial: "UTokyo"
    },
    {
      degree: "Master of Science - Computer Science and Algorithms",
      school: "The University of Tokyo",
      duration: "2018 - 2020",
      description: "",
      schoolInitial: "UTokyo"
    },
    {
      degree: "Bachelor of Science - Computer Science and Mathematics",
      school: "University of Illinois Urbana-Champaign",
      duration: "2012 - 2017",
      description: "",
      schoolInitial: "UIUC"
    }
  ];

  return (
    <EducationContainer>
      <SectionTitle>Education</SectionTitle>
      <EducationGrid>
        {educationHistory.map((edu, index) => (
          <EducationCard key={index}>
            <ContentContainer>
              <Degree>{edu.degree}</Degree>
              <School>{edu.school}</School>
              <Duration>{edu.duration}</Duration>
              <Description>{edu.description}</Description>
            </ContentContainer>
          </EducationCard>
        ))}
      </EducationGrid>
    </EducationContainer>
  );
};

export default Education;
