import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface StatisticsCardProps {
  statisticsNumber: number | string;
  statisticsLabel: string;
  subtitle: string | ReactNode;
  description: string | ReactNode;
  image: string;
}

const CardContainer = styled.div`
  height: 320px;
  overflow: hidden;
  position: relative;
  border-radius: 1rem;
  transition: all 400ms;

  &:hover {
    transform: scale(1.05);
  }

  @media (min-width: 768px) {
    height: 520px;
  }
`;

const ImageContainer = styled.div<{ imageUrl: string }>`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
      0deg,
      rgba(19, 19, 19, 0.5),
      rgba(19, 19, 19, 0.5)
    ),
    url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const TitleContainer = styled.div`
  position: absolute;
  top: 40px;
  width: 100%;
  padding: 0 50px;

  @media (min-width: 640px) {
    top: 60px;
    padding: 0 80px;
  }

  @media (min-width: 768px) {
    top: 56px;
    padding: 0 40px;
  }
`;

const SubtitleContainer = styled.div`
  position: absolute;
  bottom: 40px;
  width: 100%;
  padding: 0 50px;

  @media (min-width: 640px) {
    bottom: 60px;
    padding: 0 80px;
  }

  @media (min-width: 768px) {
    bottom: 46px;
    padding: 0 40px;
  }
`;

const StatisticsNumber = styled.h1`
  font-size: text-heading-title from '../../css/custom.css';
  line-height: 72px;
  color: #ffffff;
  text-align: center;
  margin: 0;
`;

const StatisticsLabel = styled.p`
  font-size: text-body-03 from '../../css/custom.css';
  color: #ffffff;
  text-align: center;
  margin: 0;
  text-transform: uppercase;
`;

const Subtitle = styled.h3`
  font-size: text-heading-03 from '../../css/custom.css';
  color: #ffffff;
  text-align: center;
  margin: 0;
`;

const Description = styled.p`
  font-size: text-body-02 from '../../css/custom.css';
  color: #ffffff;
  text-align: center;
  margin: 0;
  margin-top: 0.5rem;
`;

const StatisticsCard = ({
  statisticsNumber,
  statisticsLabel,
  subtitle,
  description,
  image,
}: StatisticsCardProps) => {
  return (
    <CardContainer>
      <ImageContainer imageUrl={image} />
      <TitleContainer>
        <StatisticsNumber>{statisticsNumber}</StatisticsNumber>
        <StatisticsLabel>{statisticsLabel}</StatisticsLabel>
      </TitleContainer>
      <SubtitleContainer>
        <Subtitle>{subtitle}</Subtitle>
        <Description>{description}</Description>
      </SubtitleContainer>
    </CardContainer>
  );
};

export default StatisticsCard;
