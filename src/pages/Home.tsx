import styled from 'styled-components';
import { AboutMeComponent } from '../components/homePage/HelloComponent';
import { WhatIDo } from '../components/homePage/WhatIDo';
import { ServiceDetail } from '../components/homePage/ServiceDetailComponent';
import { services } from '../data/servicesData';
import { useRef, useState } from 'react';
import { CollaborationSteps } from '../components/homePage/CollaborationStepsComponent';

export default function Home() {
  const serviceRef = useRef<HTMLDivElement | null>(null); // 🟢 Jeden ref dla jednego komponentu
  const [serviceDetailIndex, setServiceDetailIndex] = useState(0);

  return (
    <StyledDiv>
      <AboutMeComponent />
      <WhatIDo serviceRef={serviceRef} action={setServiceDetailIndex} />

      {/* 🟢 Ref dla ServiceDetail */}
      <ServiceDetailsContainer ref={serviceRef}>
        {}
        <ServiceDetail {...services[serviceDetailIndex]} />
      </ServiceDetailsContainer>

      <CollaborationSteps />
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.extraLarge};
`;

const ServiceDetailsContainer = styled.div`
  margin: ${({ theme }) => theme.spacing.tenHeight} 0;
`;
