// import styled from 'styled-components';
// import RightArrowIcon from '@site/static/icons/RightArrow';
// import React, { ReactNode } from 'react';
// import { useColorMode } from '@docusaurus/theme-common';
// import clsx from 'clsx';

// interface ArticleProps {
//   LightIcon?: ({ className }: { className?: string }) => JSX.Element;
//   DarkIcon?: ({ className }: { className?: string }) => JSX.Element;
//   title: string | ReactNode;
//   subtitle: string | ReactNode;
//   cta: string[];
// }

// const Article = ({
//   title,
//   subtitle,
//   cta,
//   LightIcon,
//   DarkIcon,
// }: ArticleProps) => {
//   const theme = useColorMode();

//   return (
//     <ArticleContainer className={clsx(theme.colorMode === 'light' ? 'card-light-04' : '')}>
//       <ContentSection>
//         {LightIcon && theme.colorMode === 'light' && (
//           <LightIcon className="image" />
//         )}
//         {DarkIcon && theme.colorMode === 'dark' && (
//           <DarkIcon className="image" />
//         )}
//         <Title>{title}</Title>
//         <Subtitle>{subtitle}</Subtitle>
//       </ContentSection>
//       <CtaSection>
//         {cta.map((ctaTitle, index) => (
//           <CtaContainer key={index}>
//             <RightArrowIcon className="ctaIcon" />
//             <CtaTitle>{ctaTitle}</CtaTitle>
//           </CtaContainer>
//         ))}
//       </CtaSection>
//     </ArticleContainer>
//   );
// };

// export default Article;

// const ArticleContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: space-between;
//   height: 384px;
//   padding: 2rem 1.5rem;
//   border-radius: 12px;
//   background: var(--ifm-color-home-elevation-00);

//   @media (min-width: 640px) {
//     height: 320px;
//   }
//   @media (min-width: 768px) {
//     height: 384px;
//   }

//   &[data-theme='dark'] & {
//     background: var(--ifm-color-home-elevation-03);
//   }
// `;

// const ContentSection = styled.div`
//   display: flex;
//   align-items: flex-start;
//   flex-direction: column;
// `;

// const Title = styled.h3`
//   composes: text-heading-02 from '../../css/custom.css';
//   color: var(--ifm-color-home-text-primary);
//   margin: 0;
//   margin-top: 1rem;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   display: -webkit-box;
//   -webkit-line-clamp: 2;
//   -webkit-box-orient: vertical;
// `;

// const Subtitle = styled.p`
//   font-family: 'Suisse-Intl';
//   font-style: normal;
//   font-weight: 300;
//   font-size: 14px;
//   line-height: 20px;
//   color: var(--ifm-color-home-text-primary);
//   margin: 0;
//   margin-top: 10px;
// `;

// const CtaSection = styled.div`
//   display: flex;
//   align-items: flex-start;
//   flex-direction: column;
//   width: 100%;
// `;

// const CtaContainer = styled.div`
//   padding: 10px 0;
//   display: flex;
//   flex-direction: row;
//   align-items: flex-start;
//   justify-content: flex-start;
//   gap: 4px;
//   width: 100%;
//   background: transparent;
//   border-top: 1px solid #eeeeee;
//   cursor: pointer;

//   &[data-theme='dark'] & {
//     border-top: 1px solid var(--ifm-color-home-elevation-04);
//   }
// `;

// const CtaTitle = styled.p`
//   composes: text-body-01-emphasis from '../../css/custom.css';
//   color: var(--ifm-color-home-text-primary);
//   margin: 0;
// `;

// const Image = styled.div`
//   height: 48px;
//   width: 48px;
// `;

// const CtaIcon = styled(RightArrowIcon)`
//   color: var(--ifm-color-home-text-primary);
//   height: 24px;
//   width: 20px;
// `;
