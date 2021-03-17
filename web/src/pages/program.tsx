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
            <SubTitle>Thomas Anglero - F*ck janteloven</SubTitle>
            <SpeakerImg fluid={data?.Anglero?.childImageSharp.fluid} imgStyle={{width: 'auto', height: 'auto'}}></SpeakerImg>
            <SpeakerText>Thomas Anglero har vært Nordisk direktør for innovasjon for IBM med ansvar for innovasjon med IBM-kunder i Norden og Europa, og styremedlem for noen innovative startups. Han er en av de mest etterspurte motivasjons- og inspirasjon-foredragsholderne i verden og ekspert på området innovasjon og kunstig intelligens. Stilen hans er direkte, energisk og ærlig.
<br /> <br />
På StartIT kommer Anglero til å avslutte showet med en motiverende tale om å gi f i janteloven, og ikke holde deg selv tilbake.

            </SpeakerText>
          </SpeakerContainer>
          <SpeakerContainer>
            <SubTitle>Eirik Normann Hansen</SubTitle>
            <SpeakerImg fluid={data?.Eirik?.childImageSharp.fluid} imgStyle={{width: 'auto', height: 'auto'}}></SpeakerImg>
            <SpeakerText>Eirik Norman Hansen er en ekte og oppriktig teknologioptimist. Han inspirerer og engasjerer sitt publikum og ble kåret til ”Årets taler 2018” blant nesten 600 foredragsholdere på Talerlisten. Eirik kommer til å lede showet som konferansier på årets StartIT, og sørge for en underholdene kveld.
</SpeakerText>
          </SpeakerContainer>
          <SpeakerContainer>
            <SubTitle>Isabelle Ringnes - Gründertips</SubTitle>
            <SpeakerImg fluid={data?.Ringnes.childImageSharp.fluid} imgStyle={{width: 'auto', height: 'auto'}}></SpeakerImg>
            <SpeakerText>Isabelle Ringnes er gründer og produktsjef i selskapet EqualityCheck.it som er en plattform for anonyme vurderinger om mangfold på arbeidsplassen. Hun står bak TENK, et teknologinettverk for kvinner med mål om å inspirere kvinner og jenter til å forme fremtiden med teknologi. Hun er 2 ganger blitt kåret til Inspiring Fifty women in tech og blitt utnevnt som 1 av 6 nordmenn blant de 100 mest innflytelsesrike menneskene i Nordic Tech. Isabelle produserer en av Nordens mest populære podcaster «Future Forecast» og har gitt ut boken Hvem Spanderer. I 2019 var hun en av Norges mest populære foredragsholdere.
<br /> <br />
På StartIT vil Isabelle gi deg sine beste tips til hvordan du kan starte bedrift.
</SpeakerText>
          </SpeakerContainer>
          <SpeakerContainer>
            <SubTitle>Silvija Seres - Norges digitale fremtid</SubTitle>
            <SpeakerImg fluid={data?.Seres.childImageSharp.fluid} imgStyle={{width: 'auto', height: 'auto'}}></SpeakerImg>
            <SpeakerText>Silvija Seres er matematiker og teknologiinvestor. Hun har bakgrunn fra algoritmeforskning i Oxford, utvikling av søkemotoren Alta Vista i Silicon Valley, strategisk ledelse i Fast Search and Transfer, og tjenesteutvikling i Microsoft. Hun jobber nå som styremedlem i flere store selskaper, inkludert DNV og Ruter og som aktiv investor i flere teknologibedrifter. Hun er aktuell med boken Staten og dataen - Hvorfor Norge må henge med i fremtiden som kommer alt for fort.
<br /> <br />
På StartIT kommer Silvija til å snakke om Norges digitale fremtid og hva den vil kreve av oss.
</SpeakerText>
          </SpeakerContainer>
          <SpeakerContainer>
            <SubTitle>Nancy Giordano - Building a better future</SubTitle>
            <SpeakerImg fluid={data?.Nancy.childImageSharp.fluid} imgStyle={{width: 'auto', height: 'auto'}}></SpeakerImg>
            <SpeakerText>Nancy Giordano er en strategisk futurist, global keynote speaker og bedriftsstrategi. Med mer enn åtti keynote foredrag, og anerkjent som en av verdens fremste kvinnelige futurister, har hun jobbet med mange ledende selskaper for å utvikle mer enn 50 milliarder dollar i virksomhet. Hun elsker å dele denne innsikten om nye teknologier og effekten de vil ha på oss som mennesker, innovatører og medlemmer av samfunnet.
</SpeakerText>
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
  <Paragraph>Gründertips ved Isabelle Ringnes</Paragraph>
  <Paragraph>Building a better future ved Nancy Giordano</Paragraph>
  <Paragraph>F*ck janteloven ved Thomas Anglero</Paragraph>
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
  padding: 5px;
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
  margin: 5px auto;
`;

const SpeakerImg = styled(Img)`
  max-height: 400px;
`;

const SubTitle = styled.h2`
  justify-content: center;
  text-align: center;
`;

const SpeakerText = styled.p`
  margin: 0 auto;
  margin: 15px auto 10px auto;
  font-size: 18px;
`;
