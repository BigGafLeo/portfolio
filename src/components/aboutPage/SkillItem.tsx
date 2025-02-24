import { rgba } from 'polished';
import styled from 'styled-components';

interface SkillItemProps {
  icon: string;
  title: string;
  description: string;
  date: string;
}

export const SkillItem = ({
  icon,
  title,
  description,
  date,
}: SkillItemProps) => {
  return (
    <SkillCard>
      <IconContainer>
        <SkillIcon src={icon} alt={title} />
      </IconContainer>
      <TextContainer>
        <SkillTitle>{title}</SkillTitle>
        <SkillDescription>{description}</SkillDescription>
      </TextContainer>
      <SkillDate hasDate={date !== ''}>{date}</SkillDate>
    </SkillCard>
  );
};

const SkillCard = styled.li`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) =>
    rgba(theme.colors.background.element2, 0.6)};
  border-radius: ${({ theme }) => theme.borderRadiuses.pill};
  padding: ${({ theme }) => theme.spacing.medium};
  box-shadow: ${({ theme }) => theme.shadows.l};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  transition: transform 0.2s ease-in-out;
  min-height: 100px;
  justify-content: space-between;

  &:hover {
    transform: scale(1.05);
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }
`;

const IconContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${({ theme }) => theme.spacing.medium};
  flex-shrink: 0;
`;

const SkillIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 60px;
`;

const SkillTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 600;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const SkillDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.text.lower};
  margin: 0;
  flex-grow: 1;
  display: flex;
  align-items: center;
  max-height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const SkillDate = styled.span<{ hasDate: boolean }>`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.text.lower};
  white-space: nowrap;
  flex-shrink: 0;
  min-width: 80px;
  visibility: ${({ hasDate }) => (hasDate ? 'visible' : 'hidden')};
`;
