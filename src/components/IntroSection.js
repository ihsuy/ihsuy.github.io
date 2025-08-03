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



const GreetingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }
`;

const AnimatedGreeting = styled.h1`
  font-size: 3rem;
  font-weight: 200;
  letter-spacing: -0.02em;
  color: #000000;
  margin: 0;
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

const SocialIcons = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  text-decoration: none;
  
  &:hover {
    background: #4CAF50;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3);
  }
  
  svg {
    width: 20px;
    height: 20px;
    fill: #666666;
    transition: fill 0.3s ease;
  }
  
  &:hover svg {
    fill: #ffffff;
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

const ProfilePictureContainer = styled.div`
  position: relative;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    margin-top: 1.5rem;
  }
`;

const ProfilePicture = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.05);
  }
  
  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

const Tooltip = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.9);
  color: #ffffff;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 300;
  line-height: 1.4;
  max-width: 250px;
  z-index: 1000;
  pointer-events: none;
  opacity: 0;
  transform: translate(-50%, -100%) translateY(-10px);
  transition: opacity 0.3s ease, transform 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  
  &.visible {
    opacity: 1;
    transform: translate(-50%, -100%) translateY(-5px);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 6px solid transparent;
    border-top-color: rgba(0, 0, 0, 0.9);
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.6;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    opacity: 1;
    transform: translateX(-50%) translateY(-2px);
  }
`;

const ScrollText = styled.span`
  font-size: 0.75rem;
  font-weight: 300;
  color: #666666;
  margin-bottom: 0.5rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

const ScrollArrow = styled.div`
  width: 24px;
  height: 24px;
  border: 2px solid #4CAF50;
  border-top: none;
  border-left: none;
  transform: rotate(45deg);
  animation: bounce 2s infinite;
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: rotate(45deg) translateY(0);
    }
    40% {
      transform: rotate(45deg) translateY(-4px);
    }
    60% {
      transform: rotate(45deg) translateY(-2px);
    }
  }
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
  const [showTooltip, setShowTooltip] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
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
  
  const handleMouseEnter = () => {
    setShowTooltip(true);
  };
  
  const handleMouseLeave = () => {
    setShowTooltip(false);
  };
  
  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <IntroContainer>
      <ContentWrapper>
        <GreetingContainer>
          <AnimatedGreeting
            className={isChanging ? 'changing' : ''}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {greetings[currentGreeting]}
          </AnimatedGreeting>
          <SocialIcons>
            <SocialLink href="https://www.linkedin.com/in/yushiq/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <svg viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </SocialLink>
            <SocialLink href="https://github.com/ihsuy" target="_blank" rel="noopener noreferrer" title="GitHub">
              <svg viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </SocialLink>
          </SocialIcons>
        </GreetingContainer>
        <Description>
         Hi 👋 I’m Yushi, an engineer in Tokyo who loves building practical data/AI solutions for real-world problems. These days, I work at Palantir, helping teams turn big ideas into useful software—whether it's for factories, logistics, supply chain, elderly care, disaster response, or something totally new. I'm happiest when I’m learning, tinkering, and making things that actually help people.
        </Description>
        <ProfilePictureContainer>
          <ProfilePicture 
            src={profilePicture} 
            alt="Yushi Qiu"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
          />
          <Tooltip 
            className={showTooltip ? 'visible' : ''}
            style={{
              left: `${mousePosition.x}px`,
              top: `${mousePosition.y}px`
            }}
          >
            Snapped by my friend Akil during a customer visit in Kuala Lumpur—this was at the National Museum of Malaysia, where we took a little detour for some culture
          </Tooltip>
        </ProfilePictureContainer>
      </ContentWrapper>
      <ScrollIndicator onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
        <ScrollArrow />
      </ScrollIndicator>
    </IntroContainer>
  );
};

export default IntroSection;
