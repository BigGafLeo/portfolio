import styled from 'styled-components';

interface TileData {
  image: string;
  description: string;
  onClick: () => void;
}

interface ColumnProps {
  items: TileData[];
}

export const DetailColumn: React.FC<ColumnProps> = ({ items }) => {
  return (
    <ColumnContainer>
      {items.map((item, index) => (
        <ImgContainer key={index} onClick={item.onClick}>
          <StyledImg src={item.image} alt={item.description} />
        </ImgContainer>
      ))}
    </ColumnContainer>
  );
};

// Kontener kolumny
const ColumnContainer = styled.div`
  overflow: hidden;

  height: 90%;
  border-radius: ${({ theme }) => theme.borderRadiuses.l};
  border:
    solid ${({ theme }) => theme.borderSize.xl},
    ${({ theme }) => theme.colors.border.serviceDetail};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;

  /* 🔹 Ukrycie paska przewijania */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE i Edge */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Edge */
  }
`;

const ImgContainer = styled.button`
  width: 50px;
  height: 50px;
  min-height: 50px;
  min-width: 50px;
  border:
    solid ${({ theme }) => theme.borderSize.m},
    ${({ theme }) => theme.palette.bigstone};
  border-radius: ${({ theme }) => theme.borderRadiuses.round};
  margin: ${({ theme }) => theme.spacing.small};
  background: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0; /* 🔹 Zapobiega spłaszczaniu elementów */

  &:hover {
    transform: scale(1.1);
    transition: transform 0.2s ease-in-out;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px ${({ theme }) => theme.palette.bigstone};
  }
`;

// Obrazek wewnątrz kontenera
const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadiuses.round};
`;
