import { styled } from 'styled-components';
import { ServiceDetailProps } from '../../data/servicesData';
import { DetailColumn } from './DetailsColumsComponent';
import { DetailsView } from './DetailsComponent';
import { useEffect, useState } from 'react';
import { rgba } from 'polished';
import { Bubble } from '../general/Bubble';

export const ServiceDetail: React.FC<ServiceDetailProps> = ({
  title,
  intro,
  description,
  benefits,
  examples,
  ctaText,
}) => {
  const [selectedDetail, setSelectedDetail] = useState<string>(description);
  const [showBubble, setShowBubble] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setSelectedDetail(description);
  }, [description]);

  useEffect(() => {
    // Po 9.5 sekundy (zanim minie 10s) uruchamiamy animację zanikania
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 9500);

    // Po 10s całkiem usuwamy z DOM
    const removeTimer = setTimeout(() => {
      setShowBubble(false);
    }, 10000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <MainContainer>
      <Title>{title}</Title>
      <Intro>{intro}</Intro>

      <DetailWrapper>
        <DetailsContainer>
          <LeftBubbleWrapper>
            <Bubble
              text={
                showBubble
                  ? 'Discover an amazing use – it might change your life!'
                  : undefined
              }
              fadeOut={fadeOut}
              startingState={true}
            />
          </LeftBubbleWrapper>
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

          {/* <RightBubbleWrapper>
            <Bubble
              text={
                showBubble
                  ? 'Discover an amazing use – it might change your life!'
                  : undefined
              }
              fadeOut={fadeOut}
              startingState={true}
            />
          </RightBubbleWrapper> */}

          <DetailColumn
            items={examples.map((item) => ({
              ...item,
              onClick: () => setSelectedDetail(item.description),
            }))}
          />
          <LabelWrapper>
            <VerticalLabel>{'E\nX\nA\nM\nP\nL\nE\nS'}</VerticalLabel>
          </LabelWrapper>
        </DetailsContainer>
      </DetailWrapper>
    </MainContainer>
  );
};

// -------------------- STYLOWANIE --------------------

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.large};
  align-items: center;
  background-color: ${({ theme }) =>
    rgba(theme.colors.background.element1, 0.15)};
  height: 75vh;
  padding: ${({ theme }) => theme.spacing.large};
  width: 100%;
`;

const DetailWrapper = styled.div`
  position: relative;
  margin-top: 75px;
`;

const DetailsContainer = styled.div`
  position: relative;
  height: 45vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
  width: 100%;
`;

const LeftBubbleWrapper = styled.div`
  position: absolute;
  left: -8%;
  top: 0;
  z-index: 999;
`;

const RightBubbleWrapper = styled.div`
  position: absolute;
  left: 80%;
  top: 0;
  z-index: 999;
`;

const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
`;

// 🔹 **Stylizacja pionowych etykiet**
const VerticalLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.palette.tuna};
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  white-space: pre-line;
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
