import { graphql } from "gatsby";
import Img from 'gatsby-image';
import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import SEO from "../components/Seo";

export const query = graphql`
query {
  Iterate: file(relativePath: { eq: "partners/Iterate.png" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  Appfarm: file(relativePath: { eq: "gather/appfarm.png" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  Kvist: file(relativePath: { eq: "gather/kvist.png" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  Kvist: file(relativePath: { eq: "gather/kvist.png" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  Vistek: file(relativePath: { eq: "gather/vistek.png" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  Ludenso: file(relativePath: { eq: "gather/ludenso.png" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  Massflow: file(relativePath: { eq: "gather/massflow.png" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  Glede: file(relativePath: { eq: "gather/glede.png" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  Ntention: file(relativePath: { eq: "gather/ntention.png" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  Enernite: file(relativePath: { eq: "gather/enernite.png" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  Edyou: file(relativePath: { eq: "gather/edyou.png" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`;

export default function Gather({ data }) {
  return (
    <>
    <SEO />
    <Layout>
      <Container>
        <Title><span style={{color: '#BD6631'}}>GATHER.</span>TOWN</Title>
        <SubTitle>Mingling med spennende bedrifter</SubTitle>
      {<SubTitle>Trykk <a style={{color: '#BD6631'}} href="https://gather.town/app/I9snLMgRdQHUhreP/startIT2021">her</a> for å bli med på festen.</SubTitle>}
      <ContentContainer>
        <ContainerContentLeft>
        <ContainerSubTitle><span style={{color: '#BD6631'}}>Iterate</span></ContainerSubTitle>
        <ImageWrapper background>
        <LinkWrapper href="https://www.iterate.no/" target="_blank"><ImageContainer fluid={data.Iterate.childImageSharp.fluid} alt="Iterate"/></LinkWrapper>
        </ImageWrapper>
        <ContainerContentText>
        Iterate sin visjon er "Enable Innovators". Vi vet at entreprenørskap er krevende arbeid, derfor slår vi sammen gründer og ansatt. Vi vil at våre mennesker skal bruke mesteparten av energien sin på det de er unikt gode på.
<br /> <br />
Hos oss veksler ansatte mellom å jobbe i oppdrag, hvor de hjelper startups og etablerte selskaper med utvikling og innovasjon, og å jobbe med egne ideer. Denne vekselvirkningen er en katalysator for kreativ galskap. Man ser hvordan verden fungerer, man får hele tiden nye ideer og man blir godt kjent med de andre byggerne rundt seg.
</ContainerContentText>
</ContainerContentLeft>
<ContainerContentLeft>
        <ContainerSubTitle><span style={{color: '#BD6631'}}>Appfarm</span></ContainerSubTitle>
        <ImageWrapper background>
        <LinkWrapper href="https://appfarm.io/" target="_blank"><ImageContainer fluid={data.Appfarm.childImageSharp.fluid} alt="Appfarm"/></LinkWrapper>
        </ImageWrapper>
        <ContainerContentText>
        Appfarm er en teknologi-startup som kommersialiserer en banebrytende applikasjonsplattform for å utvikle digitale tjenester ekstremt raskt, uten å programmere.
  <br /> <br />
  Hvis du ønsker å oppleve hvordan det er å jobbe i en tech-startup, og vil utfordre deg selv med varierte arbeidsoppgaver og høyt tempo, så er Appfarm selskapet for deg!
</ContainerContentText>
</ContainerContentLeft>
<ContainerContentLeft>
        <ContainerSubTitle><span style={{color: '#BD6631'}}>Kvist</span></ContainerSubTitle>
        <ImageWrapper>
        <LinkWrapper href="https://www.kvistsolutions.com/" target="_blank"><ImageContainer fluid={data.Kvist.childImageSharp.fluid} alt="Kvist"/></LinkWrapper>
        </ImageWrapper>
        <ContainerContentText>
        Kvist INIT hjelper miljøambisiøse entreprenører å utøve effektiv og oversiktlig miljøledelse.
< br /> <br />​INIT setter all data tilknyttet en BREEAM-sertifisering i system og gir entreprenører oversikt  over og mulighet til å kommunisere med alle involverte aktører i et grønt byggeprosjekt. Ved å bruke INIT kan bedriften bruke tid på kampen for grønn omstilling og bærekraftig verdiskapning, og mindre tid på dokumentasjonsbehandling

</ContainerContentText>
</ContainerContentLeft>
<ContainerContentLeft>
        <ContainerSubTitle><span style={{color: '#BD6631'}}>Vis-tek</span></ContainerSubTitle>
        <ImageWrapper background>
        <LinkWrapper href="https://www.vis-tek.no/" target="_blank"><ImageContainer fluid={data.Vistek.childImageSharp.fluid} alt="Vis-tek"/></LinkWrapper>
        </ImageWrapper>
        <ContainerContentText>
        Vis-Tek har spesialisert seg på software for objektgjenkjenning til parkeringsplasser. Løsningen skaper effektiv kontroll og oversikt, uten store inngrep på offentlige områder, eller setter krav om elektrisk parkeringsoblat hos brukerne.
<br /> <br />
Vis-Tek fullførte et vellykket pilotprosjekt med Trondheim kommune våren 2019, og er med i et videre samarbeid. Teamet stiller med spisskompetanse fra NTNU innen datasyn og bruker denne teknologien til å skape verdi for kunden.
</ContainerContentText>
</ContainerContentLeft>
<ContainerContentLeft>
        <ContainerSubTitle><span style={{color: '#BD6631'}}>Ludenso</span></ContainerSubTitle>
        <ImageWrapper>
        <LinkWrapper href="https://www.ludenso.com/" target="_blank"><ImageContainer fluid={data.Ludenso.childImageSharp.fluid} alt="Ludenso"/></LinkWrapper>
        </ImageWrapper>
        <ContainerContentText>
        Ved å la barna utforske, lære og skape gjennom 3D og AR, skaper vi et mer inkluderende og engasjerende klasserom. Vi gjør dette ved å bygge verdens enkleste modellerings- og Augmented Reality (AR) -verktøy for barn, slik at de kan bli digitale medskapere og problemløsere.
<br /> <br />
Teamet vårt består av visjonære gjørere, teknologioptimister, forretningsutviklere, ingeniører og AR-utviklere - med en felles lidenskap for læring og kreativitet.
</ContainerContentText>
</ContainerContentLeft>
<ContainerContentLeft>
        <ContainerSubTitle><span style={{color: '#BD6631'}}>Ntention</span></ContainerSubTitle>
        <ImageWrapper background>
        <LinkWrapper href="https://ntention.com/" target="_blank"><ImageContainer fluid={data.Ntention.childImageSharp.fluid} alt="Ntention"/></LinkWrapper>
        </ImageWrapper>
        <ContainerContentText>
Samspillet med maskiner er i stadig endring. Automatiseringen øker, men antall maskiner vi kommuniserer med øker også. Disse forholdene krever nye og enklere måter å samhandle med maskiner på, slik at flere kan kontrollere et større antall maskiner med mindre innsats og trening. Derfor lanserer vi et nytt paradigme for styringssystemer.
</ContainerContentText>
</ContainerContentLeft>
<ContainerContentLeft>
        <ContainerSubTitle><span style={{color: '#BD6631'}}>Massflow</span></ContainerSubTitle>
        <ImageWrapper>
        <LinkWrapper href="https://massflow.no/" target="_blank"><ImageContainer fluid={data.Massflow.childImageSharp.fluid} alt="Massflow"/></LinkWrapper>
        </ImageWrapper>
        <ContainerContentText>
        Massflow er en digital samhandlingsplattform som gjør det enklere å gjenbruke masser fra anleggsprosjekter. Plattformen samler alle med overskudd på et sted, og gjør overskuddsmasser mer tilgjengelig for andre som har behov for masser.
</ContainerContentText>
</ContainerContentLeft>
<ContainerContentLeft>
        <ContainerSubTitle><span style={{color: '#BD6631'}}>Enernite</span></ContainerSubTitle>
        <ImageWrapper>
        <LinkWrapper href="https://www.enernite.com/" target="_blank"><ImageContainer fluid={data.Enernite.childImageSharp.fluid} alt="Enernite"/></LinkWrapper>
        </ImageWrapper>
        <ContainerContentText>
        Enernite er et teknologiselskap som er basert på troen på at datainnsikt og digitale løsninger kan akselerere revolusjonen for fornybar energi.
<br /> <br />
Vi gjør det mulig for energiutviklere å ta datadrevne beslutninger i en tidlig screeningfase av fornybare energiprosjekter. For å få dette til, automatiserer vi innsamling av informasjon fra fragmenterte kilder og produserer unike datasett basert på analyse av satellittbilder.
</ContainerContentText>
</ContainerContentLeft>
<ContainerContentLeft>
        <ContainerSubTitle><span style={{color: '#BD6631'}}>Glede</span></ContainerSubTitle>
        <ImageWrapper>
        <LinkWrapper href="https://www.glede.app/" target="_blank"><ImageContainer fluid={data.Glede.childImageSharp.fluid} alt="Glede" /></LinkWrapper>
        </ImageWrapper>
        <ContainerContentText>
        Glede er en gavegivingstjeneste som gir brukerne mulighet til å sende små og store hverdagsgleder til venner og bekjente, uansett anledning. Med Glede kan man sende alt fra en bedre middag, til en kopp kaffe, en blomsterbukett eller en opplevelse. Avsender velger produkt og forhandler, vi varsler mottaker, som selv henter varen hos leverandøren. Glede gjør sending av gaver både spontant, morsomt og enkelt!
</ContainerContentText>
</ContainerContentLeft>
<ContainerContentLeft>
        <ContainerSubTitle><span style={{color: '#BD6631'}}>EdYou</span></ContainerSubTitle>
        <ImageWrapper>
        <LinkWrapper href="https://www.edyou.no/" target="_blank"><ImageContainer fluid={data.Edyou.childImageSharp.fluid} alt="Vis-tek"/></LinkWrapper>
        </ImageWrapper>
        <ContainerContentText>
        EdTech-oppstart med sikte på å utnytte strukturerte data og AI for å gi skalerbar, personlig læring.
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

const LinkWrapper = styled.a`
  margin: 32px auto;
  width: 300px;
`;

const ContainerSubTitle = styled.h2`
`;

const ContainerContentText = styled.p`
`;

const ImageWrapper = styled.div`
  width: 300px;
  ${(props: any) =>
      props.background ? "background-color: white" : "none"};
  ${(props: any) =>
      props.background ? "padding: 6px" : "padding: 0px"};
`;

const ImageContainer = styled(Img)`
  width: 100%;
  width: 300px;
`;
