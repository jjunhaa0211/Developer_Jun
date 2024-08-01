import clsx from 'clsx';
import React from 'react';
import Layout from '@theme/Layout';

import styles from './index.module.css';
import Title from '../components/Title';
import Footer from '../components/Footer';
import CommunityCard from '../components/CommunityCard';

const Homepage = () => {

  const communitySectionData = [
    {
      title: 'Github',
      subtitle: '저의 코드 저장소입니다! 제가 주로 살고 있는 곳이기도 하죠 👐',
      buttonText: '방문하기',
      isLongCard: true,
      url: 'https://github.com/jjunhaa0211',
    },
    {
      title: 'Portfolio',
      subtitle: '저의 포트폴리오를 확인할 수 있습니다! 약간..궁금하시죠?',
      buttonText: '보러가기',
      isLongCard: false,
      url: 'https://www.goodjunha.com/',
    },
    {
      title: 'Discord',
      subtitle: '질문이 있으면 편하게 연락해주세요~ 🤙🏿',
      buttonText: 'Follow',
      isLongCard: false,
      url: 'https://discord.gg/aGQJSexS',
    },
    {
      title: 'Instagram',
      subtitle: '개발은 아닌데.. 저의 일상이 올라갑니다 💪🏿',
      buttonText: '보러가기',
      isLongCard: true,
      url: 'https://www.instagram.com/jn_xhx?igsh=MTNqcHFoOWo1aGM3NA%3D%3D&utm_source=qr',
    },
  ];

  return (
    <div className="homepage">
      <Layout>
        <div className={styles.root}>
          <div />
          <Title
            title={
              <div className={clsx('grad', styles.title)}>
                박준하의
                <br className={styles.displayForExtraSmall} /> 개발 컨포넌트 독스입니다.
              </div>
            }
            subtitle={
              <>
                iOS, React를 중점으로 설명합니다.
                <br /> 컨포넌트가 올라가거나 블로그 글이 올라갑니다!
              </>
            }
            className={styles.heroTitle}
          />
          <hr
            style={{
              width: '100%',
              textAlign: 'center',
              margin: '60px',
              backgroundColor: '#e0e0e0',
            }}
          />

          <Title
            title="여기서도 저를 만나볼 수 있습니다~!"
            subtitle={
              <>
                저에게 관심이 있으시다면! 언제든 찾아와주세요
                <br /> 질문도 이쪽으로 보내주시면 좋을 것 같아요~
              </>
            }
          />
          <div className={styles.communityCardSection}>
            {communitySectionData.map((communityInfo, index) => (
              <CommunityCard {...communityInfo} key={index} />
            ))}
          </div>
          <Footer />
        </div>
      </Layout>
    </div>
  );
};

export default Homepage;
