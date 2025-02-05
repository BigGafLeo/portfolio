import styled from 'styled-components';
import { MyButton } from '../general/StyledButton';

export const AboutMeComponent = () => {
  return (
    <Card>
      <DescContainer>
        <p>Hello There 👋</p>
        <h1>I'm Karol</h1>
        <h2>Web and blockchain developer</h2>
        <p>
          I Have more than 4 years of expirience in designing and implementing
          high-quality products
        </p>
        <MyButton
          variant="primary"
          style={{ margin: '20px 0 0 0 ', maxWidth: '150px' }}
        >
          Send inquiry
        </MyButton>
      </DescContainer>
      <CardRow>
        <ImageContainer>
          <ProfileImage src="/temp.jpg" alt="Profilowe" />
        </ImageContainer>
      </CardRow>
    </Card>
  );
};

const Card = styled.div`
  padding: ${({ theme }) => theme.spacing.medium};
  justify-content: space-between;
  align-items: center;
  width: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.palette.mystic};
  color: ${({ theme }) => theme.colors.text.default};
  gap: ${({ theme }) => theme.spacing.small};
`;

const CardRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
  justify-content: space-evenly;
`;

const ImageContainer = styled.div`
  flex-shrink: 0;
  margin-right: ${({ theme }) => theme.spacing.medium};
  width: 20rem;
  height: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadiuses.xs};
  border: ${({ theme }) => theme.borderSize.m} solid
    ${({ theme }) => theme.palette.delft};
`;

const DescContainer = styled.div`
  max-width: 45vw;
  display: flex;
  flex-direction: column;
  justify-content: left;
`;
