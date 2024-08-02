import React, { ReactNode } from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import Button from '../Button';
import styled, { css } from 'styled-components';

interface CommunityCardProps {
  title: string | ReactNode;
  subtitle: string;
  buttonText: string;
  url: string;
  isLongCard?: boolean;
}

const CommunityCard = ({
  title,
  subtitle,
  buttonText,
  url,
  isLongCard = false,
}: CommunityCardProps) => {
  const theme = useColorMode();

  const handleButtonClick = () => {
    window.open(url, '_blank');
  };

  return (
    <CommunityCardContainer theme={theme} as={isLongCard ? ImageBackground : undefined}>
      <ContentSection>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </ContentSection>
      <CardButton onClick={handleButtonClick}>
        {buttonText}
      </CardButton>
    </CommunityCardContainer>
  );
};

const CommunityCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 240px;
  padding: 2rem 3rem 2rem 1.5rem;
  border-radius: 16px;
  border: 2px solid #131313;
  background: var(--ifm-color-home-elevation-00);

  ${({ theme }) =>
    theme.colorMode === 'dark' &&
    css`
      border: none;
      background: var(--ifm-color-home-elevation-02);
    `}

  @media (min-width: 640px) {
    .communityCardContainer {
      height: 260px;
    }
  }
`;

const ImageBackground = styled.div`
  &:first-child {
    background-position-x: -150px;
    background-position-y: -14px;
  }

  &:nth-child(4) {
    background-position-x: -677px;
    background-position-y: -205px;
  }
`;

const ContentSection = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const Title = styled.h3`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 36px;
  color: var(--ifm-color-home-text-primary);
  margin: 0;
`;

const Subtitle = styled.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-size: 14px;
  line-height: 20px;
  color: var(--ifm-color-home-text-primary);
  margin: 0;
  margin-top: 10px;
`;

const CardButton = styled(Button)`
  width: 160px;

  @media (min-width: 768px) {
    width: fit-content;
  }
`;

export default CommunityCard;
