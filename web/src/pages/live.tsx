import React, { useEffect, useState } from "react";
import YouTube from 'react-youtube';
import styled from "styled-components";
import Layout from "../components/Layout";
import SEO from "../components/Seo";

export default function Live() {
  const defaultWindowWidth = 1024;
  const [windowSize, setWindowSize] = useState(defaultWindowWidth);

  useEffect(() => {
    const setWindowWidth = () => {
      if (typeof window !== undefined) {
        setWindowSize(window.innerWidth);
      }
    };

    const handleResize = () => {
      setWindowWidth();
    };

    if (typeof window !== undefined) {
      window.addEventListener('resize', handleResize);
    }

    setWindowWidth();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
    <SEO />
    <Layout>
      <Container>
        <Title><span style={{color: '#BD6631'}}>START</span>IT 2021</Title>
        <SubTitle>Livestream</SubTitle>
        <HeaderArticle>
          <div>Teknologi - <span style={{color: '#BD6631'}}>Innovasjon</span> - Muligheter</div>
      </HeaderArticle>
      {windowSize > defaultWindowWidth ? <VideoWrapper>
      <YouTube videoId="isAWBIjyNW8" />
      </VideoWrapper> : <TextWrapper><p>Denne livestreamen er optimalisert for større skjermer!</p><p>Se streamen direkte fra Youtube <a style={{color: '#BD6631'}} href="https://www.youtube.com/watch?v=isAWBIjyNW8&t=5s">her</a>.</p> </TextWrapper>}
        </Container>
    </Layout>
    </>)}

const SubTitle = styled.h2`
  justify-content: center;
  text-align: center;
`;

const Article = styled.p`
  font-size: 20px;
  line-height: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 24px auto 10px auto;
  @media (max-width: 1268px) {
    font-size: 16px;
  }
  @media (max-width: 800px) {
    font-size: 16px;
  }
`;

const HeaderArticle = styled(Article)`
  font-size: 24px;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 50px;
  text-align: center;
  margin-top: 7%;
  @media (max-width: 1268px) {
    font-size: 30px;
  }
`;

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  align-content: center;
  flex-direction: column;
  max-width: 800px;
`;

const VideoWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextWrapper = styled.div`
text-align: center;
`;
