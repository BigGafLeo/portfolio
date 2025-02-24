import styled from 'styled-components';
import { MyButton } from '../general/StyledButton';
import { rgba } from 'polished';

export const AboutMeComponent = () => {
  return (
    <Card>
      <DescContainer>
        <p>Hello There 👋</p>
        <h1>I'm Karol</h1>
        <h2>Web and blockchain developer</h2>
        <p>
          I have more than 3 years of experience in designing and implementing
          high-quality products.
        </p>
        <MyButton
          variant="primary"
          style={{ marginTop: '20px', maxWidth: '150px' }}
        >
          Send inquiry
        </MyButton>
      </DescContainer>

      <ProfileImage src="/temp.jpg" alt="Profile" />
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 50vh;
  background-color: ${({ theme }) =>
    rgba(theme.colors.background.element1, 0.15)};
  color: ${({ theme }) => theme.colors.text.default};
  gap: ${({ theme }) => theme.spacing.small};
  min-width: 0;
  padding: ${({ theme }) => theme.spacing.medium};
`;

const ProfileImage = styled.img`
  flex: 1 1 40%;
  width: 100%;
  min-width: 0;
  height: 30rem;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadiuses.xs};
  border: ${({ theme }) => theme.borderSize.m} solid
    ${({ theme }) => theme.palette.delft};
`;

const DescContainer = styled.div`
  flex: 1 1 80%;
  max-width: 45vw;
  display: flex;
  flex-direction: column;
  justify-content: left;
`;
