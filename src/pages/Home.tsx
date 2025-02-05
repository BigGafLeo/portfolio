import styled from 'styled-components';
import { AboutMeComponent } from '../components/homePage/HelloComponent';
import { WhatIDo } from '../components/homePage/WhatIDo';

export default function Home() {
  return (
    <StyledDiv>
      <AboutMeComponent />;
      <WhatIDo />
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
