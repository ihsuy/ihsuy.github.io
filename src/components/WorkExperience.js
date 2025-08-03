import React from 'react';
import styled from 'styled-components';

const WorkContainer = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem;
  background: #ffffff;
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

const ExperienceGrid = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  gap: 2rem;
`;

const ExperienceCard = styled.div`
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

const JobTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 400;
  color: #000000;
  margin-bottom: 0.5rem;
  letter-spacing: -0.01em;
`;

const Company = styled.h4`
  font-size: 1rem;
  font-weight: 300;
  color: #4CAF50; /* Summer green accent */
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

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 1rem;
`;

const TechTag = styled.span`
  color: #000000;
  font-size: 0.85rem;
  font-weight: 300;
  padding-bottom: 2px;
  border-bottom: 1px solid #e0e0e0;
  transition: border-color 0.3s ease;
  
  &:hover {
    border-color: #2196F3; /* Summer blue accent */
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

const CompanyHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const CompanyName = styled.h3`
  font-size: 1.4rem;
  font-weight: 400;
  color: #000000;
  margin-bottom: 0.25rem;
  letter-spacing: -0.01em;
`;

const CompanyDuration = styled.div`
  font-size: 0.9rem;
  font-weight: 300;
  color: #666666;
  margin-bottom: 0.75rem;
`;

const RolesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const RoleItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0.25rem 0;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.25rem;
  }
`;

const RoleTitle = styled.div`
  font-size: 1rem;
  font-weight: 400;
  color: #4CAF50; /* Summer green accent */
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const RoleDuration = styled.div`
  font-size: 0.85rem;
  font-weight: 300;
  color: #999999;
`;

const WorkExperience = () => {
  const experiences = [
    {
      company: "Palantir Technologies",
      duration: "Jul 2021 - Present",
      roles: [
        {
          title: "Technical Lead, Japan New Ventures",
          duration: "Aug 2023 - Present"
        },
        {
          title: "Forward Deployed Engineer",
          duration: "Jul 2021 - Present"
        }
      ],
      technologies: ["Python", "TypeScript", "Spark", "LLM Engineering", "Data Pipelines", "ML Deployment"],
      link: "https://www.palantir.com",
      companyInitial: "P"
    },
    {
      company: "The University of Tokyo",
      duration: "Apr 2020 - Sep 2021",
      roles: [
        {
          title: "Deep Learning Researcher",
          duration: "Apr 2020 - Sep 2021"
        }
      ],
      technologies: ["Deep Learning", "PyTorch", "Research", "Neural Networks"],
      link: "https://www.u-tokyo.ac.jp/en/",
      companyInitial: "UT"
    }
  ];

  return (
    <WorkContainer>
      <SectionTitle>Work Experience</SectionTitle>
      <ExperienceGrid>
        {experiences.map((exp, index) => (
          <ExperienceCard key={index}>
            <CompanyHeader>
              <CompanyName>{exp.company}</CompanyName>
              <CompanyDuration>{exp.duration}</CompanyDuration>
            </CompanyHeader>
            
            <RolesList>
              {exp.roles.map((role, roleIndex) => (
                <RoleItem key={roleIndex}>
                  <RoleTitle>{role.title}</RoleTitle>
                  <RoleDuration>{role.duration}</RoleDuration>
                </RoleItem>
              ))}
            </RolesList>
            
            {/* <TechStack>
              {exp.technologies.map((tech, techIndex) => (
                <TechTag key={techIndex}>{tech}</TechTag>
              ))}
            </TechStack> */}
          </ExperienceCard>
        ))}
      </ExperienceGrid>
    </WorkContainer>
  );
};

export default WorkExperience;
