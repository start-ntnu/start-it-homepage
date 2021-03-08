import { graphql } from "gatsby";
import Img from 'gatsby-image';
import React from "react";
import Slider from "react-slick";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import styled from 'styled-components';
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
    <SEO title={'Program'}/>
    <Layout>
      <Title style={{color: '#BD6631'}}>SPEAKERS</Title>
      <Container>
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
        </Container>
        <Title>
          <div><span style={{color: '#BD6631'}}>ÅRETS</span> PROGRAM</div>
        </Title>
        <VerticalTimeline>
        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="8. mars"
    iconStyle={{ background: 'white', color: '#fff' }}
    icon={""}
  ><HeaderTitle color={'black'}>Påmelding til <span style={{color: '#BD6631'}}>START</span>IT 2021 åpner.</HeaderTitle></VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#BD6631', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #BD6631' }}
    date="18. mars"
    iconStyle={{ background: '#BD6631', color: '#fff' }}
    icon={""}
  ><HeaderTitle>Interaktiv workshop med samarbeidspartnere.</HeaderTitle>
  <Paragraph>12:00 Iterate workshop åpner</Paragraph>
  <Paragraph>14:00 Visma Capture the Flag </Paragraph>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'black', color: '#BD6631' }}
    contentArrowStyle={{ borderRight: '7px solid black' }}
    date="18. mars"
    iconStyle={{ background: 'white', color: 'white' }}
    icon={""}
  ><HeaderTitle>Mingling med StartUps på Gather.town</HeaderTitle>
  <Paragraph color={'#BD6631'}>16:00 Dørene åpner på Gather.town</Paragraph>
  <Paragraph color={'#BD6631'}>Lightning talks med utvalgte StartUps</Paragraph>
  </VerticalTimelineElement>

  <VerticalTimelineElement
   className="vertical-timeline-element--work"
    contentStyle={{ background: 'black', color: '#BD6631', borderWidth: '0.5px', borderStyle: "solid", borderColor: 'white' }}
    contentArrowStyle={{ borderRight: '7px solid black' }}
    iconStyle={{ background: 'black', color: '#fff' }}
    date="18. mars"
    icon={""}
  ><HeaderTitle color={'#BD6631'}>Kveldsarrangement</HeaderTitle>
  <Paragraph>18:00 åpning ved Eirik Norman Hansen</Paragraph>
  <Paragraph>Norges digitale fremtid ved Silvija Seres</Paragraph>
  <Paragraph>Cybersecurity ved Visma</Paragraph>
  <Paragraph>Sofaprat - Hvordan er det å være gründer?</Paragraph>
  <Paragraph>Foredrag ved Isabelle Ringnes</Paragraph>
  <Paragraph>Foredrag ved Nancy Giordano</Paragraph>
  <Paragraph>Motivasjonsforedrag ved Thomas Anglero</Paragraph>
  <Paragraph>20:00 avslutning</Paragraph>
  </VerticalTimelineElement>
</VerticalTimeline>
    </Layout>
    </>
  );
}


const Container = styled.div`
  margin: 0 auto;
  display: flex;
  align-content: center;
  flex-direction: column;
  max-width: 800px;
`

const Title = styled.h1`
  font-weight: bold;
  font-size: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  @media (max-width: 1268px) {
    font-size: 46px;
  }
  @media (max-width: 800px) {
    font-size: 25px;
  }
`;

const HeaderTitle = styled.h3`
  margin-top: 0px;
  color: ${props => props.color ? props.color : 'white'};
`;

const Paragraph = styled.p`
  color: ${props => props.color ? props.color : 'white'};
`;

const SpeakerContainer = styled.div`
  margin: 0 auto;
`;

const SpeakerImg = styled(Img)`
  max-height: 400px;
`;

const SubTitle = styled.h2`
  justify-content: center;
  text-align: center;
`;
