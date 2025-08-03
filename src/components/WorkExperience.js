import React from 'react';
import styled from 'styled-components';
import suicaImage from '../media/suica.jpg';
import yamatoImage from '../media/com_logo02.png';
import wellbeingImage from '../media/Wellbeing.png';

// Rich text parser for embedded links in descriptions (reused from Education)
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

const WorkContainer = styled.section`
  min-height: 100vh;
  padding: 4rem 2rem 2rem 2rem;
  background: #ffffff;
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

const ExperienceGrid = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  gap: 2rem;
`;

const ExperienceCard = styled.div`
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
  margin-bottom: 0.6rem;
`;

const CompanyName = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
  color: #000000;
  margin-bottom: 0.15rem;
  letter-spacing: -0.01em;
`;

const CompanyDuration = styled.div`
  font-size: 0.85rem;
  font-weight: 300;
  color: #666666;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const TenureBadge = styled.span`
  font-size: 0.75rem;
  font-weight: 500;
  color:rgb(0, 0, 0);
  background: rgb(255, 217, 0);
  padding: 0.2rem 0.5rem;
  border-radius: 12px;
  margin-left: 0.5rem;
  white-space: nowrap;
`;

const RolesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  margin-bottom: 0.5rem;
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

const RoleDescription = styled.p`
  font-size: 0.85rem;
  line-height: 1.5;
  color: #666666;
  margin: 0.4rem 0 0.6rem 0;
  max-width: 600px;
`;

const WorkItemsContainer = styled.div`
  margin-top: 0.5rem;
  padding-left: 0.8rem;
  border-left: 2px solid #e0e0e0;
`;

const WorkItemsHeader = styled.div`
  margin-bottom: 0.5rem;
`;

const WorkItemsTitle = styled.h6`
  font-size: 0.8rem;
  font-weight: 500;
  color: #4CAF50;
  margin-bottom: 0.25rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const WorkItemsSubtitle = styled.p`
  font-size: 0.7rem;
  font-weight: 300;
  color: #999999;
  margin: 0;
  font-style: italic;
  line-height: 1.3;
`;

const WorkItem = styled.div`
  display: flex;
  gap: 0.6rem;
  margin-bottom: 0.5rem;
  align-items: flex-start;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.4rem;
  }
`;

const WorkItemImage = styled.img`
  max-width: 120px;
  max-height: 80px;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 3px;
  flex-shrink: 0;
  // border: 1px solid #e0e0e0;
`;

const WorkItemContent = styled.div`
  flex: 1;
`;

const WorkItemTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  margin-bottom: 0.25rem;
`;

const WorkItemTitle = styled.h6`
  font-size: 0.85rem;
  font-weight: 400;
  color: #000000;
  margin: 0;
  line-height: 1.3;
  flex: 1;
`;

const WorkItemLink = styled.a`
  color: #4CAF50;
  text-decoration: none;
  display: flex;
  align-items: center;
  opacity: 0.7;
  transition: all 0.2s ease;
  
  &:hover {
    opacity: 1;
    transform: translateX(2px);
  }
  
  svg {
    width: 14px;
    height: 14px;
  }
`;

const WorkItemDescription = styled.p`
  font-size: 0.75rem;
  color: #666666;
  margin-bottom: 0.25rem;
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

const calculateTenure = (duration) => {
  if (!duration || !duration.includes(' - ')) return null;
  
  const [startStr, endStr] = duration.split(' - ');
  const startDate = new Date(startStr);
  const endDate = endStr.toLowerCase() === 'present' ? new Date() : new Date(endStr);
  
  if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) return null;
  
  const diffInMs = endDate - startDate;
  const years = diffInMs / (1000 * 60 * 60 * 24 * 365.25);
  
  if (years < 1) {
    const months = Math.round(years * 12);
    return `${months} month${months !== 1 ? 's' : ''}`;
  } else {
    const wholeYears = Math.floor(years);
    const remainingMonths = Math.round((years - wholeYears) * 12);
    
    if (remainingMonths === 0) {
      return `${wholeYears} year${wholeYears !== 1 ? 's' : ''}`;
    } else {
      return `${wholeYears}.${remainingMonths} years`;
    }
  }
};

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

const WorkExperience = () => {
  const experiences = [
    {
      company: "Palantir Technologies",
      duration: "Jul 2021 - Present",
      roles: [
        {
          title: "Technical Lead, Japan New Ventures",
          description: "As Palantir Japan’s first locally hired Forward Deployed Engineer, I’ve led the integration of Palantir’s technology and culture into Japan’s complex enterprise landscape. Starting from Palantir Japan's earliest pilots, I’ve led the expansion of our organic customer base from zero to a dozen in three years and developed a sales pipeline generating a steady stream of annual recurring revenue.",
          workItems: [
            {
              title: "能登半島地震で石川県が避難者情報の把握にSuicaを活用へ",
              titleEn: "Ishikawa Prefecture to Use Suica for Evacuee Information Management in Noto Peninsula Earthquake",
              description: "Disaster response system leveraging IC card technology for evacuee tracking and management",
              image: require('../media/suica.jpg'),
              link: "https://xtech.nikkei.com/atcl/nxt/column/18/02706/012600061/"
            },
            {
              title: "ヤマトホールディングスとPalantir、日本の物流のデジタルトランスフォーメーションを加速させる取り組み",
              titleEn: "Yamato Holdings and Palantir Begin Initiative to Accelerate Digital Transformation of Japanese Logistics",
              description: "Strategic partnership to modernize Japan's logistics infrastructure through data-driven transformation",
              image: require('../media/com_logo02.png'),
              link: "https://www.yamato-hd.co.jp/news/2020/20200710.html"
            },
            {
              title: "高齢者ケアのデジタルトランスフォーメーション",
              titleEn: "Elderly Care Digital Transformation",
              description: "Driving societal change through digital transformation in elderly care and wellbeing",
              image: require('../media/Wellbeing.png'),
              link: "https://www.palantir.com/impact/sompo/japan/"
            }
          ]
        }
      ],
      link: "https://www.palantir.com",
      companyInitial: "P"
    },
    {
      company: "Microsoft Japan",
      duration: "Oct 2020 - Apr 2021",
      roles: [
        {
          title: "AI for Good - CSR team",
          description: "Worked with non-profits and research institutions in Japan and internationally to promote technology adoption for social impact, including advancing tuberculosis treatment with computer vision, directly engaging with Japanese government officials and politicians to support youth coding education, and helping reskill workers for employment in partnership with organizations like [Sodateage Net](https://www.sodateage.net/)",
        }
      ],
      link: "https://www.u-tokyo.ac.jp/en/",
      companyInitial: "UT"
    },
    {
      company: "The University of Tokyo",
      duration: "Apr 2020 - Sep 2021",
      roles: [
        {
          title: "Deep Learning Researcher",
          description: "Conducted research on neural network training dynamics and weight structure evolution.",
        }
      ],
      link: "https://www.u-tokyo.ac.jp/en/",
      companyInitial: "UT"
    },
    {
      company: "Daimler AG",
      duration: "Dec 2015 - Jun 2016",
      roles: [
        {
          title: "Data Scientist",
          description: "Applied semantic analysis techniques and built an automated system for categorizing market claims related to car malfunctions, enabling more efficient identification of trending vehicle issues. Ensured timely delivery of monthly reports, and supported the escalation of critical findings to R&D teams to drive resolution of emerging product concerns.",
        }
      ],
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
              <CompanyDuration>
                <span>{exp.duration}</span>
                {calculateTenure(exp.duration) && (
                  <TenureBadge>{calculateTenure(exp.duration)}</TenureBadge>
                )}
              </CompanyDuration>
            </CompanyHeader>
            
            <RolesList>
              {exp.roles.map((role, roleIndex) => (
                <div key={roleIndex}>
                  <RoleItem>
                    <RoleTitle>{role.title}</RoleTitle>
                    <RoleDuration>{role.duration}</RoleDuration>
                  </RoleItem>
                  
                  {role.description && (
                    <RoleDescription>
                      <RichText text={role.description} />
                    </RoleDescription>
                  )}
                  
                  {role.workItems && role.workItems.length > 0 && (
                    <WorkItemsContainer>
                      <WorkItemsHeader>
                        <WorkItemsTitle>Selected Public References</WorkItemsTitle>
                        <WorkItemsSubtitle>A small subset of publicly available work • Most projects remain confidential</WorkItemsSubtitle>
                      </WorkItemsHeader>
                      {role.workItems.map((item, itemIndex) => (
                        <WorkItem key={itemIndex}>
                          <WorkItemImage src={item.image} alt={item.title} />
                          <WorkItemContent>
                            <WorkItemTitleContainer>
                              <WorkItemTitle>{item.title}</WorkItemTitle>
                              {item.link && (
                                <WorkItemLink href={item.link} target="_blank" rel="noopener noreferrer" title="Open article">
                                  <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                                  </svg>
                                </WorkItemLink>
                              )}
                            </WorkItemTitleContainer>
                            <WorkItemDescription>
                              <RichText text={item.description} />
                            </WorkItemDescription>
                          </WorkItemContent>
                        </WorkItem>
                      ))}
                    </WorkItemsContainer>
                  )}
                </div>
              ))}
            </RolesList>
          </ExperienceCard>
        ))}
      </ExperienceGrid>
    </WorkContainer>
  );
};

export default WorkExperience;
