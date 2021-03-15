import React from "react";
import YouTube from 'react-youtube';
import styled from "styled-components";
import Layout from "../components/Layout";
import SEO from "../components/Seo";

export default function Live() {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
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
      <VideoWrapper>
      <YouTube videoId="isAWBIjyNW8" />
      </VideoWrapper>
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
