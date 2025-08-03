import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import profilePicture from '../media/profile_picture.JPG';

const IntroContainer = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  background: #ffffff;
  color: #000000;
  position: relative;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 800px;
  width: 100%;
  
  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;



const AnimatedGreeting = styled.h1`
  font-size: 3rem;
  font-weight: 200;
  letter-spacing: -0.02em;
  color: #000000;
  margin-bottom: 1.5rem;
  cursor: pointer;
  transition: all 0.4s ease;
  opacity: 1;
  transform: translateY(0);
  
  &:hover {
    color: #4CAF50;
  }
  
  &.changing {
    opacity: 0;
    transform: translateY(-10px);
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.6;
  color: #333333;
  letter-spacing: 0.01em;
  max-width: 500px;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 100%;
  }
`;

const ProfilePicture = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border: 3px solid #ffffff;
`;



function IntroSection() {
  const greetings = [
    'Hi there!',
    'こんにちは', // Japanese
    'Hallo!', // German
    '你好' // Chinese
  ];
  
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isChanging, setIsChanging] = useState(false);
  
  useEffect(() => {
    let interval;
    if (isHovered) {
      interval = setInterval(() => {
        setIsChanging(true);
        setTimeout(() => {
          setCurrentGreeting((prev) => (prev + 1) % greetings.length);
          setIsChanging(false);
        }, 200); // Half of the transition duration
      }, 2200);
    } else {
      setCurrentGreeting(0);
      setIsChanging(false);
    }
    
    return () => clearInterval(interval);
  }, [isHovered, greetings.length]);
  




  return (
    <IntroContainer>
      <ContentWrapper>
        <AnimatedGreeting
          className={isChanging ? 'changing' : ''}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {greetings[currentGreeting]}
        </AnimatedGreeting>
        <Description>
         Hi 👋 I’m Yushi, an engineer in Tokyo who loves building practical data/AI solutions for real-world problems. These days, I work at Palantir, helping teams turn big ideas into useful software—whether it's for factories, logistics, supply chain, elderly care, disaster response, or something totally new. I'm happiest when I’m learning, tinkering, and making things that actually help people.
        </Description>
        <ProfilePicture src={profilePicture} alt="Yushi Qiu" />
      </ContentWrapper>
    </IntroContainer>
  );
};

export default IntroSection;
