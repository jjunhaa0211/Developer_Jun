import React from 'react';
import styled from 'styled-components';
import { useColorMode } from '@docusaurus/theme-common';

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2rem;
  margin-bottom: 123px;
  width: 100%;
  max-width: 1024px;
`;

const FooterText = styled.p`
  font-family: inherit;
  color: var(--ifm-color-home-text-primary);
  text-align: left;
  margin: 0;
`;

const Footer = () => {
  const theme = useColorMode();

  return (
    <FooterContainer>
      <div>
        <FooterText>저는 우주최강 개발자가 될 박준하입니다</FooterText>
        <a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fjjunhaa0211.github.io%2FDeveloper_Jun%2F&count_bg=%23007AF4&title_bg=%23191919&icon=smugmug.svg&icon_color=%23007AF4&title=JN&edge_flat=true"/></a>
      </div>
    </FooterContainer>
  );
};

export default Footer;
