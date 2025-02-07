import styled from 'styled-components';

interface HobbyElementProps {
  icon: string;
  label: string;
}

export const HobbyElement = ({ icon, label }: HobbyElementProps) => {
  return (
    <HobbyCard>
      <IconContainer>
        <HobbyIcon src={icon} alt={label} />
      </IconContainer>
      <Label>{label}</Label>
    </HobbyCard>
  );
};

// **📌 Pojedynczy element hobby**
const HobbyCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 160px;
  border: solid 1px black;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.small};
  border-radius: ${({ theme }) => theme.borderRadiuses.m};
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

// **📌 Kontener na ikonę**
const IconContainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 2px ${({ theme }) => theme.palette.indigoLight};
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

// **📌 Ikona hobby**
const HobbyIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// **📌 Podpis pod ikoną**
const Label = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.default};
`;
