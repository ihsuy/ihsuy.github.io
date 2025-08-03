import React from 'react';
import styled from 'styled-components';
import TbCconnect from '../media/connect.png';
import puzzle from '../media/puzzle.png';
import bicg from '../media/bicg.png';

// Rich text parser for embedded links in descriptions
const parseRichText = (text) => {
  if (!text) return null;
  
  // Match pattern: [text](url)
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts = [];
  let lastIndex = 0;
  let match;
  
  while ((match = linkPattern.exec(text)) !== null) {
    // Add text before the link
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    
    // Add the link
    parts.push({
      type: 'link',
      text: match[1],
      url: match[2]
    });
    
    lastIndex = match.index + match[0].length;
  }
  
  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  
  return parts.length > 0 ? parts : [text];
};

const EducationContainer = styled.section`
  min-height: 100vh;
  padding: 2rem 2rem 4rem 2rem;
  background:rgb(255, 255, 255);
`;

const SectionTitle = styled.h2`
  font-size: 2.0rem;
  font-weight: 200;
  text-align: center;
  margin-bottom: 3rem;
  color: #000000;
  letter-spacing: -0.01em;
  position: relative;
`;

const EducationGrid = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  gap: 1rem;
`;

const EducationCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f0f0f0;
  
  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: 768px) {
    padding: 0.6rem 0;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Degree = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
  color: #000000;
  margin-bottom: 0.15rem;
  letter-spacing: -0.01em;
`;

const SchoolHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.6rem;
`;

const School = styled.h4`
  font-size: 0.9rem;
  font-weight: 300;
  color: #2196F3; /* Summer blue accent */
  margin-bottom: 0.1rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const Duration = styled.div`
  font-size: 0.85rem;
  color: #666666;
  margin-bottom: 0.5rem;
  font-weight: 300;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const Description = styled.p`
  font-size: 0.85rem;
  line-height: 1.5;
  color: #666666;
  margin: 0.4rem 0 0.6rem 0;
  max-width: 600px;
`;

const PublicationsContainer = styled.div`
  margin-top: 0.5rem;
  padding-left: 0.8rem;
  border-left: 2px solid #e0e0e0;
`;

const PublicationsTitle = styled.h5`
  font-size: 0.8rem;
  font-weight: 500;
  color: #2196F3;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const PublicationItem = styled.div`
  display: flex;
  gap: 0.6rem;
  margin-bottom: 0.5rem;
  align-items: flex-start;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.4rem;
  }
`;

const PublicationImage = styled.img`
  max-width: 120px;
  max-height: 80px;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 3px;
  flex-shrink: 0;
`;

const PublicationContent = styled.div`
  flex: 1;
`;

const PublicationTitle = styled.h6`
  font-size: 0.9rem;
  font-weight: 400;
  color: #000000;
  margin-bottom: 0.25rem;
  line-height: 1.4;
`;

const PublicationDescription = styled.p`
  font-size: 0.8rem;
  color: #666666;
  margin-bottom: 0.5rem;
  font-style: italic;
  line-height: 1.3;
`;

const InlineLink = styled.a`
  color: #4CAF50;
  text-decoration: none;
  font-weight: 400;
  
  &:hover {
    text-decoration: underline;
  }
`;

// Component to render rich text with embedded links
const RichText = ({ text, className }) => {
  const parts = parseRichText(text);
  
  return (
    <span className={className}>
      {parts.map((part, index) => {
        if (typeof part === 'string') {
          return part;
        } else if (part.type === 'link') {
          return (
            <InlineLink
              key={index}
              href={part.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {part.text}
            </InlineLink>
          );
        }
        return null;
      })}
    </span>
  );
};

const PublicationLink = styled.a`
  font-size: 0.8rem;
  color: #4CAF50;
  text-decoration: none;
  font-weight: 300;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Education = () => {
  const educationHistory = [
    {
      degree: "PhD (drop out)",
      school: "The University of Tokyo",
      duration: "2020 - 2021",
      description: "Conducting research in deep learning after completing a mathematics-focused bachelor's degree. My work explored DNN's training dynamics, especially around how weight structures, rather than their numerical values, drives learning in neural networks. I left the program in 2021 to pursue real-world impact in industry, carrying forward the same curiosity and rigor into real-world systems",
      schoolInitial: "UTokyo",
      publications: [
        {
          title: "Train-by-Reconnect: Decoupling Locations of Weights from their Values",
          description: "In Proceedings of NeurIPS 2020",
          link: "https://papers.nips.cc/paper/2020/hash/f0682320ccbbb1f1fb1e795de5e5639a-Abstract.html",
          image: TbCconnect
        },
      ]
    },
    {
      degree: "Master of Science",
      school: "The University of Tokyo",
      duration: "2018 - 2020",
      description: "",
      schoolInitial: "UTokyo",
      publications: [
        {
          title: "Permute to Train: A New Dimension to Training Deep Neural Networks",
          description: "Preprint available @ [Arxiv](https://arxiv.org/abs/2003.02570v4)",
          image: puzzle,
          link: "https://github.com/ihsuy/SGPerm",
        },
        {
          title: "Online Autotuning of Parameters of GA-BiCG",
          description: "Oral Presentation at [ATAT in HPSC](https://sites.google.com/site/atathpsc/previous-conf/2018?authuser=0) (2018)",
          image: bicg
        }
      ]
    },
    {
      degree: "Bachelor of Science",
      school: "University of Illinois Urbana-Champaign",
      duration: "2012 - 2017",
      description: "",
      schoolInitial: "UIUC"
    }
  ];

  return (
    <EducationContainer>
      <SectionTitle>Academic Background & Publications</SectionTitle>
      <EducationGrid>
        {educationHistory.map((edu, index) => (
          <EducationCard key={index}>
            <ContentContainer>
              <Degree>{edu.degree}</Degree>
              <SchoolHeader>
                <School>{edu.school}</School>
                <Duration>
                  <span>{edu.duration}</span>
                </Duration>
              </SchoolHeader>
              {edu.description && <Description>{edu.description}</Description>}
              {edu.publications && edu.publications.length > 0 && (
                <PublicationsContainer>
                  <PublicationsTitle>Publications</PublicationsTitle>
                  {edu.publications.map((pub, pubIndex) => (
                    <PublicationItem key={pubIndex}>
                      <PublicationImage src={pub.image} alt={pub.title} />
                      <PublicationContent>
                        <PublicationTitle>{pub.title}</PublicationTitle>
                        {pub.description && (
                          <PublicationDescription>
                            <RichText text={pub.description} />
                          </PublicationDescription>
                        )}
                        {pub.link && (
                          <PublicationLink href={pub.link} target="_blank" rel="noopener noreferrer">
                            View Paper →
                          </PublicationLink>
                        )}
                      </PublicationContent>
                    </PublicationItem>
                  ))}
                </PublicationsContainer>
              )}
            </ContentContainer>
          </EducationCard>
        ))}
      </EducationGrid>
    </EducationContainer>
  );
};

export default Education;
