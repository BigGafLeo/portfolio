import styled from 'styled-components';
import { SkillItem } from './SkillItem';

export const SkillsComponent = () => {
  return (
    <Container>
      <Title>What I bring to the table</Title>
      <SkillsWrapper>
        <SkillsColumn>
          <ColumnTitle>Hard Skills 🛠️</ColumnTitle>
          <SkillList>
            <SkillItem
              icon="/icons/skills/web.svg"
              title="Web Development"
              description="Building scalable and responsive apps."
              date="Since 2021"
            />
            <SkillItem
              icon="/icons/skills/api.svg"
              title="API Development"
              description="Creating REST & GraphQL APIs."
              date="Since 2021"
            />
            <SkillItem
              icon="/icons/skills/database.svg"
              title="Database Modeling"
              description="Optimizing structures and queries."
              date="Since 2018"
            />
            <SkillItem
              icon="/icons/skills/cloud.svg"
              title="Cloud & DevOps"
              description="Deploying and managing cloud apps."
              date="Since 2022"
            />
            <SkillItem
              icon="/icons/skills/algorithimc.svg"
              title="Algorithmic Thinking"
              description="Solving problems efficiently."
              date="Since born"
            />
            <SkillItem
              icon="/icons/skills/blockchain.svg"
              title="Blockchain & Smart Contracts"
              description="Developing secure Web3 solutions."
              date="Since 2023"
            />
            <SkillItem
              icon="/icons/skills/trading.svg"
              title="Trading Strategies"
              description="Automated and algorithmic trading."
              date="Since 2023"
            />
          </SkillList>
        </SkillsColumn>

        <Divider />

        <SkillsColumn>
          <ColumnTitle>Soft Skills 🧠</ColumnTitle>
          <SkillList>
            <SkillItem
              icon="/icons/skills/analitic.svg"
              title="Analytical Thinking"
              description="Breaking down complex problems."
              date=""
            />
            <SkillItem
              icon="/icons/skills/team.svg"
              title="Teamwork & Collaboration"
              description="Working efficiently in teams."
              date=""
            />
            <SkillItem
              icon="/icons/skills/communication.svg"
              title="Effective Communication"
              description="Clear and concise explanations."
              date=""
            />
            <SkillItem
              icon="/icons/skills/learning.svg"
              title="Self-Learning & Adaptability"
              description="Quickly mastering new technologies."
              date=""
            />
            <SkillItem
              icon="/icons/skills/manage.svg"
              title="Project Management"
              description="Organizing and prioritizing tasks."
              date=""
            />
            <SkillItem
              icon="/icons/skills/share.svg"
              title="Knowledge Sharing"
              description="Helping others grow in tech."
              date=""
            />
            <SkillItem
              icon="/icons/skills/talk.svg"
              title="Negotiation & Persuasion"
              description="Influencing decision-making."
              date=""
            />
          </SkillList>
        </SkillsColumn>
      </SkillsWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.large};
  width: 100%;
  max-width: inherit;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.heading};
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.large};
  text-align: center;
  margin-bottom: 5vh;
`;

const SkillsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  max-width: 800px;
  gap: ${({ theme }) => theme.spacing.large};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

const SkillsColumn = styled.div`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.medium};
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ColumnTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  text-align: center;
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
`;

const Divider = styled.div`
  width: 2px;
  background-color: ${({ theme }) => theme.palette.delft};
  flex-shrink: 0;
  min-height: 100%;
  align-self: stretch;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;
