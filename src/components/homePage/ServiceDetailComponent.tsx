import { styled } from 'styled-components';
import { ServiceDetailProps } from '../../data/servicesData';
import { MyButton } from '../general/StyledButton';
import { useTheme } from 'styled-components';

export const ServiceDetail: React.FC<ServiceDetailProps> = ({
  id,
  title,
  intro,
  description,
  benefits,
  examples,
  imageUrl,
  ctaText,
}) => {
  const theme = useTheme();
  return (
    <MainContainer id={id}>
      <Title>{title}</Title>
      <ThemeContainer>
        <LeftContainer>
          <Intro>{intro}</Intro>
          <Desc>{description}</Desc>
          <PointsContainer>
            <div>
              <PointTitle>How it can help you:</PointTitle>
              <PointList>
                {benefits.map((benefit, index) => (
                  <PointElement key={index}>{benefit}</PointElement>
                ))}
              </PointList>
            </div>

            <div>
              <PointTitle>Best aplication for your business:</PointTitle>
              <PointList>
                {examples.map((example, index) => (
                  <PointElement key={index}>{example}</PointElement>
                ))}
              </PointList>
            </div>
          </PointsContainer>
        </LeftContainer>
        <RightContainer>
          <ImageSection>
            <ServiceImage src={imageUrl} alt="Test" />
          </ImageSection>
          <MyButton
            variant="danger"
            style={{ width: 'auto', marginTop: theme.spacing.small }}
          >
            {ctaText}
          </MyButton>
        </RightContainer>
      </ThemeContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div<{ id: number }>`
  background-color: ${({ theme, id }) =>
    id % 2 === 0 ? theme.palette.casper : theme.palette.mystic};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: ${({ theme }) => theme.spacing.large};
  padding-right: ${({ theme }) => theme.spacing.large};
  padding-top: ${({ theme }) => theme.spacing.extraLarge};
  padding-bottom: ${({ theme }) => theme.spacing.extraLarge};
  gap: ${({ theme }) => theme.spacing.large};
`;

const ThemeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.large};
`;

const LeftContainer = styled.div`
  display: flex;
  flex-basis: 70%;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
`;

const PointsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const RightContainer = styled.div`
  flex-basis: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageSection = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.heading};
  font-weight: bold;
`;

const Intro = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: bold;
`;
const Desc = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: normal;
`;

const PointTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: bold;
`;

const PointList = styled.ul``;

const PointElement = styled.li`
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

const ServiceImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;
