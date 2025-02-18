import { Chrono } from 'react-chrono';
import styled from 'styled-components';

export const CareerTimeline = () => {
  const items = [
    {
      title: '2018-2022',
      cardTitle: 'Started University',
      cardSubtitle: 'Automation and Robotics',
      cardDetailedText:
        'Began my studies in automation and control systems, focusing on mechanics, electronics, and programming.',
    },
    {
      title: '2020-2024',
      cardTitle: 'Started University',
      cardSubtitle: 'Algorithmics and Informatics',
      cardDetailedText:
        'Expanded my expertise into computer science, focusing on algorithms, data structures, and software development.',
    },
    {
      title: '2021',
      cardTitle: 'First Internship',
      cardSubtitle: 'Intern at Apiss',
      cardDetailedText:
        'Completed a 2-month internship at a ship repair company, diagnosing PID-controlled systems, programming PLCs, and repairing printed circuit boards.',
    },
    {
      title: '2022-2023',
      cardTitle: 'Solution Engineer',
      cardSubtitle: 'Siemens',
      cardDetailedText:
        'Worked on international projects using AX4 and LogX4. Focused on process modeling, business logic, and UI design. Developed JavaScript, Velocity, HTML/CSS, SQL, and Java components, specializing in system integration via WebService. Also contributed to testing, Agile/SCRUM processes, and software architecture.',
    },
    {
      title: '2023-now',
      cardTitle: 'Freelancer',
      cardSubtitle: 'Web Development & Automation',
      cardDetailedText:
        'Built and optimized websites, integrated third-party APIs, and developed backend services. Focused on automating business processes, improving workflow efficiency, and ensuring seamless data synchronization using React, Node.js, PostgreSQL, and cloud-based solutions.',
    },
    {
      title: '2025-2025',
      cardTitle: 'Blockchain Developer',
      cardSubtitle: 'Archblock',
      cardDetailedText:
        'Developed and optimized Solidity smart contracts, integrating blockchain with the stablecoin ecosystem. Built and maintained web applications using React, TanStack, Node.js, PostgreSQL, GraphQL, and REST API. Focused on scalability, performance, and synchronization of on-chain and off-chain data while ensuring secure API integrations.',
    },
  ];

  return (
    <Container>
      <Title>My Career Timeline</Title>

      <Chrono
        items={items}
        mode="VERTICAL_ALTERNATING"
        scrollable={{ scrollbar: true }}
        useReadMore={false}
        disableToolbar={true}
        theme={{
          primary: '#2F64B6',
          secondary: '#D0D6E6',
          cardBgColor: '#F8F9FB',
          titleColor: '#0B0E14',
          cardTitleColor: '#2B7858',
          cardSubtitleColor: '#515A6C',
        }}
        cardHeight={180}
        slideShow
        slideItemDuration={4000}
        allowDynamicScroll={true}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: inherit;
  margin: 100px auto;
  padding: 20px;
  overflow-x: hidden;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.heading};
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.text.default};
`;

export default CareerTimeline;
