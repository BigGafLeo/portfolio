import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import styled from 'styled-components';

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <ErrorContainer>
      {isRouteErrorResponse(error) && error.status === 404 ? (
        <>
          <Title>404 - Page Not Found</Title>
          <Message>Sorry, the page you are looking for does not exist.</Message>
        </>
      ) : (
        <>
          <Title>An Error Occurred</Title>
          <Message>
            {error instanceof Error ? error.message : 'Unknown error'}
          </Message>
        </>
      )}
      <HomeButton href="/">Back to Home</HomeButton>
    </ErrorContainer>
  );
};

// **Error Page Container**
const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: ${({ theme }) => theme.palette.porcelain};
  color: ${({ theme }) => theme.colors.text.default};
`;

// **Error Title Styling**
const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.heading};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  color: ${({ theme }) => theme.palette.tomato};
`;

// **Error Message Styling**
const Message = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

// **Back to Home Button**
const HomeButton = styled.a`
  padding: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.palette.secretGarden};
  color: ${({ theme }) => theme.palette.white};
  text-decoration: none;
  border-radius: ${({ theme }) => theme.borderRadiuses.s};
  transition: background-color 0.3s ease-in-out;
  font-size: ${({ theme }) => theme.fontSizes.medium};

  &:hover {
    background-color: ${({ theme }) => theme.palette.fernGreen};
  }
`;
