import React from 'react';
import styled from 'styled-components';
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';

export const MyContactsComponent: React.FC = () => {
  return (
    <Container>
      <Title>My Contacts</Title>
      <ContactList>
        {/* Email */}
        <ContactItem>
          <FaEnvelope />
          <ContactText>
            Email:{' '}
            <ContactLink href="mailto:karoldzwon@gmail.com">
              karoldzwon@gmail.com
            </ContactLink>
          </ContactText>
        </ContactItem>

        {/* Location */}
        <ContactItem>
          <FaMapMarkerAlt />
          <ContactText>Location: Poland, Wrocław</ContactText>
        </ContactItem>

        {/* Working Hours */}
        <ContactItem>
          <FaClock />
          <ContactText>
            Working Hours: 8:00 - 16:00 <Timezone>(UTC +1)</Timezone>
          </ContactText>
        </ContactItem>

        {/* LinkedIn */}
        <ContactItem>
          <FaLinkedin />
          <ContactLink
            href="https://www.linkedin.com/in/karol-dzwonkowski-618b89178"
            target="_blank"
          >
            LinkedIn
          </ContactLink>
        </ContactItem>

        {/* GitHub */}
        <ContactItem>
          <FaGithub />
          <ContactLink href="https://github.com/biggafleo" target="_blank">
            GitHub
          </ContactLink>
        </ContactItem>
      </ContactList>
    </Container>
  );
};

// **Dostosowanie wysokości do zawartości**
const Container = styled.div`
  width: 100%;
  max-width: 350px;
  background-color: ${({ theme }) => theme.palette.white};
  padding: ${({ theme }) => theme.spacing.large};
  border-radius: ${({ theme }) => theme.borderRadiuses.m};
  box-shadow: ${({ theme }) => theme.shadows.m};
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.large};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
`;

const ContactItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;

const ContactText = styled.span`
  font-weight: 500;
`;

const ContactLink = styled.a`
  color: ${({ theme }) => theme.palette.timide};
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const Timezone = styled.span`
  color: ${({ theme }) => theme.palette.waterloo};
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin-left: ${({ theme }) => theme.spacing.small};
`;
