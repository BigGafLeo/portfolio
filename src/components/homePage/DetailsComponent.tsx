import { styled } from 'styled-components';
import { MyButton } from '../general/StyledButton';
import { useModal } from '../../context/ModalContext';

interface ViewData {
  info: string;
  ctaText: string;
}

export const DetailsView: React.FC<ViewData> = ({ info, ctaText }) => {
  const { openModal } = useModal();
  return (
    <MainContainer>
      <ViewContainer>
        <DetailContainer>
          <Details>{info}</Details>
        </DetailContainer>
      </ViewContainer>
      <MyButton variant="danger" onClick={openModal}>
        {ctaText}
      </MyButton>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50vw;
  justify-content: space-between;
`;

const ViewContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80%;
  border-radius: ${({ theme }) => theme.borderRadiuses.l};
  border:
    solid ${({ theme }) => theme.borderSize.xl},
    ${({ theme }) => theme.colors.border.main};
`;

const DetailContainer = styled.div`
  margin: ${({ theme }) => theme.spacing.large};
  padding: ${({ theme }) => theme.spacing.large};
  background: ${({ theme }) => theme.palette.lightTimide};
  border-radius: ${({ theme }) => theme.borderRadiuses.xxl};
  overflow: hidden;
  width: 90%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  overflow-y: auto;

  /* 🔹 Ukrycie paska przewijania */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE i Edge */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Edge */
  }
`;

const Details = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: normal;
  font-style: italic;
`;
