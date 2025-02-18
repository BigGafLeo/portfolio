import styled from 'styled-components';
import { AboutMeComponent } from '../components/homePage/HelloComponent';
import { WhatIDo } from '../components/homePage/WhatIDo';
import { ServiceDetail } from '../components/homePage/ServiceDetailComponent';

import { services } from '../data/servicesData';
import { useRef } from 'react';
import { CollaborationSteps } from '../components/homePage/CollaborationStepsComponent';

export default function Home() {
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <StyledDiv>
      <AboutMeComponent />
      <WhatIDo serviceRefs={serviceRefs} />
      <CollaborationSteps />
      {services.map((service, index) => (
        <ServiceDetailsContainer
          ref={(el) => (serviceRefs.current[index] = el)}
          key={service.id}
        >
          <ServiceDetail {...service} />
        </ServiceDetailsContainer>
      ))}
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
