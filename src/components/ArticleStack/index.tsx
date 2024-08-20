import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { useColorMode } from '@docusaurus/theme-common';
import Button from '../Button';

interface ArticleStackProps {
  LightIcon?: ({ className }: { className?: string }) => JSX.Element;
  DarkIcon?: ({ className }: { className?: string }) => JSX.Element;
  title: string | ReactNode;
  subtitle: string;
  buttonText?: string;
}

const ArticleStack = ({
  LightIcon,
  DarkIcon,
  title,
  subtitle,
  buttonText = 'Learn More',
}: ArticleStackProps) => {
  const theme = useColorMode();

  return (
    <ArticleStackContainer>
      <ContentSection>
        {LightIcon && theme.colorMode === 'light' && (
          <LightIcon className="image" />
        )}
        {DarkIcon && theme.colorMode === 'dark' && (
          <DarkIcon className="image" />
        )}
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </ContentSection>
      <Button variant="solid" onClick={() => console.log('Learn more clicked')}>
        {buttonText}
      </Button>
    </ArticleStackContainer>
  );
};

const ArticleStackContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 320px;
  padding: 2rem 1.5rem;
  background: var(--ifm-color-home-elevation-00);

  ${({ theme }) =>
    theme.colorMode === 'dark' &&
    `
    background: var(--ifm-color-home-elevation-02);
  `}

  @media (min-width: 640px) {
    height: 280px;
  }
`;

const ContentSection = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: text-heading-03 from '../../css/custom.css';
  color: var(--ifm-color-home-text-primary);
  margin: 0;
  margin-top: 1rem;
`;

const Subtitle = styled.p`
  font-size: text-body-02 from '../../css/custom.css';
  color: var(--ifm-color-home-text-primary);
  margin: 0;
  margin-top: 10px;
`;

export default ArticleStack;
