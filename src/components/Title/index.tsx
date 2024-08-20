import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface TitleProps {
  title: string | ReactNode;
  subtitle?: string | ReactNode;
  className?: string;
}

const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 0 1rem;
`;

const StyledTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin: 0;
  text-align: center;
  color: var(--ifm-color-home-text-primary);
`;

const StyledSubtitle = styled.p`
  font-size: 16px;
  margin: 0;
  text-align: center;
  color: var(--ifm-color-home-text-primary);
`;

const Title = ({ title, subtitle, className }: TitleProps) => {
  return (
    <TitleSection>
      <StyledTitle className={className}>{title}</StyledTitle>
      {subtitle && <StyledSubtitle>{subtitle}</StyledSubtitle>}
    </TitleSection>
  );
};

export default Title;
