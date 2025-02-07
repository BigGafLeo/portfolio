import React from 'react';
import styled from 'styled-components';

export const WelcomeComponent: React.FC = () => {
  return (
    <Container>
      <TextWrapper>
        <TextLine offset={0}>Feel free to reach</TextLine>
        <TextLine offset={80}>out for collaborations,</TextLine>
        <TextLine offset={160}>job offers, or just to say hi!</TextLine>
      </TextWrapper>
    </Container>
  );
};

const Container = styled.div`
  border: solid 5px;
  width: 100%;
  max-width: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.small};
`;

const TextLine = styled.p<{ offset: number }>`
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 1.4;
  text-align: left;
  padding-left: ${({ offset }) => offset}px;
`;
