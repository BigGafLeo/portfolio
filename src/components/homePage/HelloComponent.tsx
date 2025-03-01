import styled from 'styled-components';
import { MyButton } from '../general/StyledButton';
import { rgba } from 'polished';
import { useNavigate } from 'react-router-dom';

export const AboutMeComponent = () => {
  const navigate = useNavigate();

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
          onClick={() => navigate('/contact')}
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

  /* 🔹 Zmiana układu na kolumnowy dla breakpointa md */
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: start;
  }
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

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 100%;
  }
`;
