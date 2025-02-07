import styled from 'styled-components';
import { WelcomeComponent } from '../components/contactPage/WelcomeComponent';
import { ContactMeComponent } from '../components/contactPage/ContactMeComponent';
import { MyContactsComponent } from '../components/contactPage/MyContactsComponent';

export const Contact = () => {
  return (
    <Container>
      <WelcomeWrapper>
        <WelcomeComponent />
      </WelcomeWrapper>
      <ContactContainer>
        <ContactMeComponent />
        <MyContactsComponent />
      </ContactContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.medium};
  gap: ${({ theme }) => theme.spacing.large};
`;

// **Aby `WelcomeComponent` miał taką samą szerokość jak `ContactContainer`**
const WelcomeWrapper = styled.div`
  width: 100%;
  max-width: 800px;
`;

const ContactContainer = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.large};
`;
