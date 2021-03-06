import { graphql } from "gatsby";
import Img from 'gatsby-image';
import React from "react";
import Slider from "react-slick";
import Typing from 'react-typing-animation';
import styled from "styled-components";
import Layout from "../components/Layout";
import SEO from "../components/Seo";


export const query = graphql`
  query {
    StartNTNU: file(relativePath: { eq: "Startlogo.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    Anglero: file(relativePath: { eq: "speakers/Anglero.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    Eirik: file(relativePath: { eq: "speakers/Eirik.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    Ringnes: file(relativePath: { eq: "speakers/Ringnes.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    Seres: file(relativePath: { eq: "speakers/Silvia.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    Nancy: file(relativePath: { eq: "speakers/Nancy.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default function App({ data }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

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
      <Slider {...settings}>
          <SpeakerContainer>
            <SubTitle>Thomas Anglero</SubTitle>
            <SpeakerImg fluid={data?.Anglero?.childImageSharp.fluid} imgStyle={{width: 'auto', height: 'auto'}}></SpeakerImg>
          </SpeakerContainer>
          <SpeakerContainer>
            <SubTitle>Eirik Normann Hansen</SubTitle>
            <SpeakerImg fluid={data?.Eirik?.childImageSharp.fluid} imgStyle={{width: 'auto', height: 'auto'}}></SpeakerImg>
          </SpeakerContainer>
          <SpeakerContainer>
            <SubTitle>Isabelle Ringnes</SubTitle>
            <SpeakerImg fluid={data?.Ringnes.childImageSharp.fluid} imgStyle={{width: 'auto', height: 'auto'}}></SpeakerImg>
          </SpeakerContainer>
          <SpeakerContainer>
            <SubTitle>Silvija Seres</SubTitle>
            <SpeakerImg fluid={data?.Seres.childImageSharp.fluid} imgStyle={{width: 'auto', height: 'auto'}}></SpeakerImg>
          </SpeakerContainer>
          <SpeakerContainer>
            <SubTitle>Nancy Giordano</SubTitle>
            <SpeakerImg fluid={data?.Nancy.childImageSharp.fluid} imgStyle={{width: 'auto', height: 'auto'}}></SpeakerImg>
          </SpeakerContainer>
        </Slider>
      <ContentContainer>
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
        <ContainerContentRight>
        <ContainerSubTitle><span style={{color: '#BD6631'}}>Hvordan</span></ContainerSubTitle>
        <ContainerContentText>På årets StartIT vil vi vise deg hvordan man kan jobbe med fremtidens teknologier i samarbeid med <span style={{color: '#BD6631'}}>Visma</span> og <span style={{color: '#BD6631'}}>Iterate.</span>
      <br />
      <br />
      Vi vil eksponere deg for noen av landets mest suksessfulle <span style={{color: '#BD6631'}}>gründere</span>, og eksperter på <span style={{color: '#BD6631'}}>teknologi.</span>  </ContainerContentText>
        </ContainerContentRight>
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
    </>
  );
}

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

const ContainerContentRight = styled.div`
  flex-direction: column;
  align-items: right;
  text-align: end;
`;

const ContainerSubTitle = styled.h2`
`;

const ContainerContentText = styled.p`
`;

const SpeakerContainer = styled.div`
`;

const SpeakerImg = styled(Img)`
  max-height: 400px;
`;
