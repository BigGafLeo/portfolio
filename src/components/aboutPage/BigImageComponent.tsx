import { styled } from 'styled-components';

export const BigImageComponent = () => {
  return (
    <ImageContainer>
      <ProfileImage src="/temp.jpg" alt="Profilowe" />
      <TextOverlay>Few words about me</TextOverlay>
    </ImageContainer>
  );
};

const ImageContainer = styled.div`
  width: 100%;
  max-width: inherit;
  flex-shrink: 0;
  height: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  position: relative;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadiuses.xs};
  border: ${({ theme }) => theme.borderSize.m} solid
    ${({ theme }) => theme.palette.delft};
`;

const TextOverlay = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.medium};
  left: ${({ theme }) => theme.spacing.medium};
  background-color: rgba(0, 0, 0, 0.6);
  color: ${({ theme }) => theme.palette.white};
  padding: ${({ theme }) => theme.spacing.small};
  border-radius: ${({ theme }) => theme.borderRadiuses.xs};
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: 600;
  text-transform: uppercase;
`;
