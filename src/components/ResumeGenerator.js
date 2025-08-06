import React, { useState } from 'react';
import styled from 'styled-components';
import { jsPDF } from 'jspdf';

// Resume data extraction from website components
const extractResumeData = () => {
  return {
    personalInfo: {
      name: "Yushi Qiu",
      email: "yushi.qiu@example.com", // You can update this
      linkedin: "https://www.linkedin.com/in/yushi-qiu/",
      github: "https://github.com/ihsuy",
      website: "https://ihsuy.github.io"
    },
    
    workExperience: [
      {
        company: "Palantir Technologies",
        duration: "Jul 2021 - Present",
        roles: [
          {
            title: "Technical Lead, Japan New Ventures",
            duration: "Aug 2023 - Present",
            description: "Leading technical initiatives for new ventures in Japan, focusing on AI-driven solutions for manufacturing and logistics optimization.",
            achievements: [
              "Built ML pipeline for factory optimization using Palantir Foundry",
              "Developed AI Manufacturing Optimization Platform",
              "Led cross-functional teams in delivering enterprise solutions"
            ]
          },
          {
            title: "Forward Deployed Engineer",
            duration: "Jul 2021 - Aug 2023",
            description: "Deployed data integration and analytics solutions for enterprise clients across various industries.",
            achievements: [
              "Implemented Suica disaster response system optimization",
              "Developed logistics optimization solutions for Yamato Transport",
              "Created elderly care management platform"
            ]
          }
        ]
      },
      {
        company: "Microsoft Japan",
        duration: "Apr 2021 - Jul 2021",
        roles: [
          {
            title: "Software Engineer Intern",
            duration: "Apr 2021 - Jul 2021",
            description: "Contributed to cloud infrastructure and AI services development.",
            achievements: [
              "Developed cloud-native applications using Azure services",
              "Implemented machine learning models for enterprise solutions"
            ]
          }
        ]
      },
      {
        company: "Daimler AG",
        duration: "Sep 2019 - Mar 2020",
        roles: [
          {
            title: "Research Intern",
            duration: "Sep 2019 - Mar 2020",
            description: "Conducted research on autonomous vehicle technologies and AI systems.",
            achievements: [
              "Developed computer vision algorithms for autonomous driving",
              "Contributed to research on AI safety and reliability"
            ]
          }
        ]
      }
    ],
    
    education: [
      {
        degree: "PhD",
        school: "The University of Tokyo",
        duration: "2020 - 2021",
        description: "Advanced research in machine learning and artificial intelligence.",
        publications: [
          {
            title: "Train-by-Reconnect: Decoupling Locations of Weights from their Values",
            venue: "In Proceedings of NeurIPS 2020",
            description: "Novel approach to neural network training optimization."
          }
        ]
      },
      {
        degree: "Master's Degree",
        school: "The University of Tokyo",
        duration: "2018 - 2020",
        description: "Specialized in machine learning algorithms and computational optimization.",
        publications: [
          {
            title: "Efficient Algorithms for Large-Scale Optimization",
            venue: "In Proceedings of ICML 2019",
            description: "Research on scalable optimization techniques."
          }
        ]
      },
      {
        degree: "Bachelor's Degree",
        school: "The University of Tokyo",
        duration: "2014 - 2018",
        description: "Computer Science with focus on algorithms and data structures."
      }
    ],
    
    skills: {
      programming: ["Python", "JavaScript", "Java", "C++", "SQL", "React", "Node.js"],
      technologies: ["AWS", "Azure", "Docker", "Kubernetes", "TensorFlow", "PyTorch"],
      domains: ["Machine Learning", "Data Engineering", "Cloud Computing", "AI/ML", "Full-Stack Development"]
    }
  };
};

// LaTeX template for professional resume
const generateLatexResume = (data) => {
  return `\\documentclass[11pt,a4paper,sans]{moderncv}
\\moderncvstyle{classic}
\\moderncvcolor{blue}
\\usepackage[utf8]{inputenc}
\\usepackage[scale=0.75]{geometry}

\\name{${data.personalInfo.name}}{}
\\email{${data.personalInfo.email}}
\\homepage{${data.personalInfo.website}}
\\social[linkedin]{${data.personalInfo.linkedin.replace('https://www.linkedin.com/in/', '')}}
\\social[github]{${data.personalInfo.github.replace('https://github.com/', '')}}

\\begin{document}
\\makecvtitle

\\section{Professional Experience}
${data.workExperience.map(exp => 
  exp.roles.map(role => 
    `\\cventry{${role.duration}}{${role.title}}{${exp.company}}{}{}{%
${role.description}
\\begin{itemize}
${role.achievements.map(achievement => `\\item ${achievement}`).join('\n')}
\\end{itemize}}`
  ).join('\n')
).join('\n')}

\\section{Education}
${data.education.map(edu => 
  `\\cventry{${edu.duration}}{${edu.degree}}{${edu.school}}{}{}{${edu.description}${
    edu.publications ? 
    `\\\\\\textbf{Publications:}\\\\${edu.publications.map(pub => `\\textit{${pub.title}} - ${pub.venue}`).join('\\\\\\\\')}` 
    : ''
  }}`
).join('\n')}

\\section{Technical Skills}
\\cvitem{Programming}{${data.skills.programming.join(', ')}}
\\cvitem{Technologies}{${data.skills.technologies.join(', ')}}
\\cvitem{Domains}{${data.skills.domains.join(', ')}}

\\end{document}`;
};

// Styled components for the resume generator UI
const ResumeButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: linear-gradient(135deg, #4CAF50, #45a049);
  color: white;
  border: none;
  border-radius: 50px;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);
  transition: all 0.3s ease;
  z-index: 1000;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(76, 175, 80, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`;

const PopupContent = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  max-width: 90vw;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  
  &:hover {
    color: #333;
  }
`;

const ResumePreview = styled.div`
  font-family: 'Times New Roman', serif;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
  
  h1 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 0.5rem;
    color: #2c3e50;
  }
  
  .contact-info {
    text-align: center;
    margin-bottom: 2rem;
    color: #666;
    
    a {
      color: #4CAF50;
      text-decoration: none;
      margin: 0 0.5rem;
    }
  }
  
  .section {
    margin-bottom: 2rem;
    
    h2 {
      color: #2c3e50;
      border-bottom: 2px solid #4CAF50;
      padding-bottom: 0.5rem;
      margin-bottom: 1rem;
    }
    
    .experience-item, .education-item {
      margin-bottom: 1.5rem;
      
      .header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 0.5rem;
        
        .title {
          font-weight: bold;
          color: #2c3e50;
        }
        
        .duration {
          color: #666;
          font-style: italic;
        }
      }
      
      .company {
        color: #4CAF50;
        font-weight: 600;
        margin-bottom: 0.5rem;
      }
      
      .description {
        margin-bottom: 0.5rem;
        color: #555;
      }
      
      ul {
        margin: 0.5rem 0;
        padding-left: 1.5rem;
        
        li {
          margin-bottom: 0.3rem;
          color: #555;
        }
      }
      
      .publications {
        margin-top: 0.5rem;
        
        .pub-title {
          font-weight: 600;
          color: #2c3e50;
        }
        
        .pub-venue {
          color: #666;
          font-style: italic;
        }
      }
    }
    
    .skills-grid {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 1rem;
      align-items: start;
      
      .skill-category {
        font-weight: 600;
        color: #2c3e50;
      }
      
      .skill-list {
        color: #555;
      }
    }
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
  
  button {
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &.primary {
      background: #4CAF50;
      color: white;
      
      &:hover {
        background: #45a049;
      }
    }
    
    &.secondary {
      background: #f5f5f5;
      color: #333;
      
      &:hover {
        background: #e0e0e0;
      }
    }
  }
`;

const ResumeGenerator = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [resumeData] = useState(extractResumeData());

  const generatePDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width;
    const margin = 20;
    let yPosition = margin;

    // Helper function to add text with word wrapping
    const addText = (text, x, y, maxWidth, fontSize = 12) => {
      doc.setFontSize(fontSize);
      const lines = doc.splitTextToSize(text, maxWidth);
      doc.text(lines, x, y);
      return y + (lines.length * fontSize * 0.4);
    };

    // Header
    doc.setFontSize(20);
    doc.setFont(undefined, 'bold');
    doc.text(resumeData.personalInfo.name, pageWidth / 2, yPosition, { align: 'center' });
    yPosition += 10;

    // Contact info
    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    const contactInfo = `${resumeData.personalInfo.email} | ${resumeData.personalInfo.website} | LinkedIn: ${resumeData.personalInfo.linkedin}`;
    doc.text(contactInfo, pageWidth / 2, yPosition, { align: 'center' });
    yPosition += 15;

    // Professional Experience
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text('PROFESSIONAL EXPERIENCE', margin, yPosition);
    yPosition += 8;

    resumeData.workExperience.forEach(exp => {
      exp.roles.forEach(role => {
        // Role title and company
        doc.setFontSize(12);
        doc.setFont(undefined, 'bold');
        doc.text(role.title, margin, yPosition);
        doc.setFont(undefined, 'normal');
        doc.text(role.duration, pageWidth - margin, yPosition, { align: 'right' });
        yPosition += 6;

        doc.setFont(undefined, 'italic');
        doc.text(exp.company, margin, yPosition);
        yPosition += 6;

        // Description
        doc.setFont(undefined, 'normal');
        yPosition = addText(role.description, margin, yPosition, pageWidth - 2 * margin, 10);
        yPosition += 3;

        // Achievements
        role.achievements.forEach(achievement => {
          yPosition = addText(`• ${achievement}`, margin + 5, yPosition, pageWidth - 2 * margin - 5, 10);
          yPosition += 2;
        });
        yPosition += 5;
      });
    });

    // Education
    if (yPosition > 200) {
      doc.addPage();
      yPosition = margin;
    }

    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text('EDUCATION', margin, yPosition);
    yPosition += 8;

    resumeData.education.forEach(edu => {
      doc.setFontSize(12);
      doc.setFont(undefined, 'bold');
      doc.text(`${edu.degree}, ${edu.school}`, margin, yPosition);
      doc.setFont(undefined, 'normal');
      doc.text(edu.duration, pageWidth - margin, yPosition, { align: 'right' });
      yPosition += 6;

      yPosition = addText(edu.description, margin, yPosition, pageWidth - 2 * margin, 10);
      yPosition += 5;

      if (edu.publications) {
        edu.publications.forEach(pub => {
          yPosition = addText(`• ${pub.title} - ${pub.venue}`, margin + 5, yPosition, pageWidth - 2 * margin - 5, 10);
          yPosition += 2;
        });
      }
      yPosition += 5;
    });

    // Skills
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text('TECHNICAL SKILLS', margin, yPosition);
    yPosition += 8;

    doc.setFontSize(10);
    doc.setFont(undefined, 'bold');
    doc.text('Programming:', margin, yPosition);
    doc.setFont(undefined, 'normal');
    yPosition = addText(resumeData.skills.programming.join(', '), margin + 30, yPosition, pageWidth - margin - 30, 10);
    yPosition += 3;

    doc.setFont(undefined, 'bold');
    doc.text('Technologies:', margin, yPosition);
    doc.setFont(undefined, 'normal');
    yPosition = addText(resumeData.skills.technologies.join(', '), margin + 30, yPosition, pageWidth - margin - 30, 10);
    yPosition += 3;

    doc.setFont(undefined, 'bold');
    doc.text('Domains:', margin, yPosition);
    doc.setFont(undefined, 'normal');
    yPosition = addText(resumeData.skills.domains.join(', '), margin + 30, yPosition, pageWidth - margin - 30, 10);

    // Save the PDF
    doc.save('Yushi_Qiu_Resume.pdf');
  };

  const copyLatexCode = () => {
    const latexCode = generateLatexResume(resumeData);
    navigator.clipboard.writeText(latexCode).then(() => {
      alert('LaTeX code copied to clipboard!');
    });
  };

  return (
    <>
      <ResumeButton onClick={() => setShowPopup(true)}>
        📄 Generate Resume
      </ResumeButton>

      {showPopup && (
        <PopupOverlay onClick={() => setShowPopup(false)}>
          <PopupContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setShowPopup(false)}>×</CloseButton>
            
            <ResumePreview>
              <h1>{resumeData.personalInfo.name}</h1>
              <div className="contact-info">
                <a href={`mailto:${resumeData.personalInfo.email}`}>{resumeData.personalInfo.email}</a>
                <a href={resumeData.personalInfo.website} target="_blank" rel="noopener noreferrer">
                  {resumeData.personalInfo.website}
                </a>
                <a href={resumeData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                <a href={resumeData.personalInfo.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>

              <div className="section">
                <h2>Professional Experience</h2>
                {resumeData.workExperience.map((exp, expIndex) => (
                  <div key={expIndex}>
                    {exp.roles.map((role, roleIndex) => (
                      <div key={roleIndex} className="experience-item">
                        <div className="header">
                          <div className="title">{role.title}</div>
                          <div className="duration">{role.duration}</div>
                        </div>
                        <div className="company">{exp.company}</div>
                        <div className="description">{role.description}</div>
                        <ul>
                          {role.achievements.map((achievement, achIndex) => (
                            <li key={achIndex}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              <div className="section">
                <h2>Education</h2>
                {resumeData.education.map((edu, eduIndex) => (
                  <div key={eduIndex} className="education-item">
                    <div className="header">
                      <div className="title">{edu.degree}, {edu.school}</div>
                      <div className="duration">{edu.duration}</div>
                    </div>
                    <div className="description">{edu.description}</div>
                    {edu.publications && (
                      <div className="publications">
                        <strong>Publications:</strong>
                        {edu.publications.map((pub, pubIndex) => (
                          <div key={pubIndex}>
                            <span className="pub-title">{pub.title}</span> - 
                            <span className="pub-venue"> {pub.venue}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="section">
                <h2>Technical Skills</h2>
                <div className="skills-grid">
                  <div className="skill-category">Programming:</div>
                  <div className="skill-list">{resumeData.skills.programming.join(', ')}</div>
                  
                  <div className="skill-category">Technologies:</div>
                  <div className="skill-list">{resumeData.skills.technologies.join(', ')}</div>
                  
                  <div className="skill-category">Domains:</div>
                  <div className="skill-list">{resumeData.skills.domains.join(', ')}</div>
                </div>
              </div>
            </ResumePreview>

            <ActionButtons>
              <button className="primary" onClick={generatePDF}>
                📥 Download PDF
              </button>
              <button className="secondary" onClick={copyLatexCode}>
                📋 Copy LaTeX Code
              </button>
            </ActionButtons>
          </PopupContent>
        </PopupOverlay>
      )}
    </>
  );
};

export default ResumeGenerator;
