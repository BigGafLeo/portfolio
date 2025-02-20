import { styled } from 'styled-components';
import { ServiceDetailProps } from '../../data/servicesData';
import { DetailColumn } from './DetailsColumsComponent';
import { DetailsView } from './DetailsComponent';
import { useEffect, useState } from 'react';

export const ServiceDetail: React.FC<ServiceDetailProps> = ({
  title,
  intro,
  description,
  benefits,
  examples,
  ctaText,
}) => {
  const [selectedDetail, setSelectedDetail] = useState<string>(description);

  useEffect(() => {
    setSelectedDetail(description);
  }, [description]);

  return (
    <MainContainer>
      <Title>{title}</Title>
      <Intro>{intro}</Intro>
      <DetailsContainer>
        {/* 🔹 Pionowa etykieta "Benefits" */}
        <LabelWrapper>
          <VerticalLabel>{'B\nE\nN\nE\nF\nI\nT\nS'}</VerticalLabel>
        </LabelWrapper>

        <DetailColumn
          items={benefits.map((item) => ({
            ...item,
            onClick: () => setSelectedDetail(item.description),
          }))}
        />
        <DetailsView info={selectedDetail} ctaText={ctaText} />
        <DetailColumn
          items={examples.map((item) => ({
            ...item,
            onClick: () => setSelectedDetail(item.description),
          }))}
        />

        {/* 🔹 Pionowa etykieta "Examples" */}
        <LabelWrapper>
          <VerticalLabel>{'E\nX\nA\nM\nP\nL\nE\nS'}</VerticalLabel>
        </LabelWrapper>
      </DetailsContainer>
    </MainContainer>
  );
};

// -------------------- STYLOWANIE --------------------

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.large};
  align-items: center;
  background-color: ${({ theme }) => theme.palette.casper};
  height: 75vh;
  padding: ${({ theme }) => theme.spacing.large};
  width: 100%;
`;

const DetailsContainer = styled.div`
  height: 45vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
  width: 100%;
`;

const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px; /* 🔹 Rezerwujemy miejsce na etykietę */
`;

// 🔹 **Stylizacja pionowych etykiet**
const VerticalLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  white-space: pre-line; /* 🔹 Teraz każda litera jest w nowej linii */
  text-align: center;
  line-height: 1.2;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.heading};
  font-weight: bold;
`;

const Intro = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: bold;
`;
