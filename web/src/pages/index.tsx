import React, { useEffect } from "react";
import Typing from 'react-typing-animation';
import styled from "styled-components";
import Intro from '../assets/rain.mp4';
import Layout from "../components/Layout";
import SEO from "../components/Seo";

export default function App() {
  useEffect(() => {
    const video = document.querySelector('video');
    if (video) {
      video.muted = true;
      video.loop = true;
      video.play();
    }
  });
  return (
    <>
    <SEO />
    <Layout>
      <Container>
        <Title><span style={{color: '#BD6631'}}>START</span>IT 2021</Title>
        <Typing>
        <SubTitle>En innovativ konferanse.</SubTitle>
        </Typing>
        <HeaderArticle>
          <div>Teknologi - <span style={{color: '#BD6631'}}>Innovasjon</span> - Muligheter</div>
      </HeaderArticle>
      <SubTitle>Påmelding er åpnet!</SubTitle>
      <SubTitle>Trykk <a style={{color: '#BD6631'}} href="https://startit2021.hoopla.no/sales">her</a> for å melde deg på.</SubTitle>
      <ContentContainer>
        <VideoContainer>
        <VideoPlayer>
      <source src={Intro} type="video/mp4" />
    </VideoPlayer>
      </VideoContainer>
        <ContainerContentLeft>
        <ContainerSubTitle><span style={{color: '#BD6631'}}>Hvorfor</span></ContainerSubTitle>
        <ContainerContentText>
          Verden er avhengig av nye og teknologiske løsninger for å kunne løse noen av de største <span style={{color: '#BD6631'}}>utfordringene</span> vi står overfor i dag.
          <br />
          <br />
          For å opprettholde velstanden i Norge vil vi trenge over <span style={{color: '#BD6631'}}>250 000 nye arbeidsplasser</span> innen 2030.
          <br />
          <br />
          NTNU har noen av landets dyktigste <span style={{color: '#BD6631'}}>IT-studenter</span> som snart skal ta fatt på disse utfordringene.
          <br />
          <br />
          Vi vil vise dere <span style={{color: '#BD6631'}}>mulighetene.</span>
</ContainerContentText>
        </ContainerContentLeft>
        <ContainerContentLeft>
        <ContainerSubTitle><span style={{color: '#BD6631'}}>Hvordan</span></ContainerSubTitle>
        <ContainerContentText>På årets StartIT vil vi vise deg hvordan man kan jobbe med fremtidens teknologier i samarbeid med <span style={{color: '#BD6631'}}>Visma</span> og <span style={{color: '#BD6631'}}>Iterate.</span>
      <br />
      <br />
      Vi vil eksponere deg for noen av landets mest suksessfulle <span style={{color: '#BD6631'}}>gründere</span>, og eksperter på <span style={{color: '#BD6631'}}>teknologi.</span>  </ContainerContentText>
        </ContainerContentLeft>
        <ContainerContentLeft>
        <ContainerSubTitle><span style={{color: '#BD6631'}}>Hva</span></ContainerSubTitle>
        <ContainerContentText>
        StartIT er en innovativ IT-konferanse som arrangeres for å inspirere nettopp <span style={{color: '#BD6631'}}>deg.</span>
      <br />
      <br />
      <span style={{color: '#BD6631'}}>18. Mars</span> braker det løs med det mest spennende arrangementet NTNU har å by på 2021.

</ContainerContentText>
        </ContainerContentLeft>
      </ContentContainer>
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
`

const ContentContainer = styled.div`
  margin: 24px auto;
  display: flex;
  flex-direction: column;
`;

const ContainerContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: start;
`;

const ContainerSubTitle = styled.h2`
`;

const ContainerContentText = styled.p`
`;

const VideoContainer = styled.div`
  margin: 0 auto;
  width: 100%;
`;

const VideoPlayer = styled.video`
  margin: 0 auto;
  width: 100%;
`;
