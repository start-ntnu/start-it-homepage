import React from "react";
import Typing from 'react-typing-animation';
import styled from "styled-components";
import Layout from "../components/Layout";
import SEO from "../components/Seo";

/*export const query = graphql`
  query {
    Facebook: file(relativePath: { eq: "partners/Facebook.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    Visma: file(relativePath: { eq: "partners/Visma.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  Iterate: file(relativePath: { eq: "partners/Iterate.png" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`;*/

export default function Partners({ data }) {
  return (
    <div className="App">
      <SEO title={"Samarbeidspartnere"} />
      <Layout>
        <Title><div><span style={{color: '#BD6631'}}>SAMARBEIDS</span>PARTNERE</div></Title>
        <Typing>
        <SubTitle><div>SOM <span style={{color: '#BD6631'}}>SAMARBEIDSPARTNER</span> FÅR DERE</div></SubTitle>
        </Typing>
        <StyledList>
          <StyledLi>Vise dere frem som en <span style={{color: '#BD6631'}}>spennende og innovativ bedrift.</span></StyledLi>
          <StyledLi>Komme i god kontakt med noen av <span style={{color: '#BD6631'}}>landets dyktigste studenter.</span></StyledLi>
          <StyledLi>Være med på å <span style={{color: '#BD6631'}}>inspirere og motivere </span>studenter til å ville jobbe med innovasjon og IT.</StyledLi>
        </StyledList>
        <SubTitle><span style={{color: '#BD6631'}}>HVORDAN?</span></SubTitle>
        <SubTitleP>
          “Hva er den beste måten å sette studenter i kontakt
          med innovasjon-mulighetene?” har vi tenkt på.
          Vår hypotese er at interaksjon med bedrifter og
          mennesker som allerede arbeider med innovasjon
          innenfor teknologi vil bidra til å inspirere.
</SubTitleP>
        <SubSubTitle><span style={{color: '#BD6631'}}>Hva</span></SubSubTitle>
        <SubTitleP>
          Planen vår for StartIT 2021 er derfor å ta studentene gjennom
          en løype med interaktive stasjoner der de får bedre innblikk i
          mulighetene til å innovere innenfor teknologi. Etterfulgt at dette vil
          det holdes en bankett med inspirerende foredrag. På de stasjonene vil
          du som samarbeidspartner ha all frihet til å lage et interaktivt opplegg som
          for eksempel kan vise fram noe av det kuleste dere jobber med akkurat nå.
          Målet er at studentene skal forlate stasjonen deres mer opplyste og inspirerte.
        </SubTitleP>
        <SubSubTitle><span style={{color: '#BD6631'}}>Hvem</span></SubSubTitle>
        <SubTitleP>
          Fra KPIen til tidligere StartIT arrangementer ser vi at det pleier å være et variert utvalg
          studenter fra ulike studieprogram og årstrinn som deltar. Vi vil gjerne høre høre hvilke
          studieretninger dere er mest interessert i å treffe, og vil forsøke å koble dere opp mot de
          under StartIT, slik at dere når ut til målgruppen dere ønsker.
        </SubTitleP>
        <SubTitleLast><span style={{color: '#BD6631'}}>INTERESSERT?</span></SubTitleLast>
        <SubTitle><span style={{color: '#BD6631'}}>Kontakt oss</span> på isabel.slorer@startntnu.no</SubTitle>
        <ProspektLink
          href={"/ProspektStartIT2021.pdf"}
          target="_blank"
        >
          Sjekk ut prospektet
        </ProspektLink>
        {/* <PartnerWrapper>
          <Title>Hovedpartnere</Title>
          <Partner>
            <ImageWrapper>
              <Img
                fluid={data.Visma.childImageSharp.fluid}
                alt="Visma logo"
              />
            </ImageWrapper>
            <PartnerInfo>
              <PartnerName>Visma</PartnerName>
              <Article>
                Visma er ett av Nordens raskest voksende selskaper og har hatt en sterk utvikling siden
                oppstarten i 1996. Allerede i 1999 ble selskapet etablert i utlandet, med Visma Software
                i Danmark og UK.

                I 2000 endret Visma strategien til å inkludere både programvare og tjenester innenfor
                regnskap, finans og lønn.

                I 2002 entret Visma markedet for offentlig sektor og i 2013 signerte Visma sin største avtale
                noensinne. Visma skal lage nettbasert løsning for skoleadministrasjon.
              </Article>
            </PartnerInfo>
          </Partner>

          <Partner>
            <ImageWrapper>
              <Img
                fluid={data.Facebook.childImageSharp.fluid}
                alt="Facebook logo"
              />
            </ImageWrapper>
            <PartnerInfo>
              <PartnerName>Facebook</PartnerName>
              <Article>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                fringilla diam ac fringilla ornare. Maecenas in arcu
                consectetur, laoreet nunc quis, lacinia nisi. Duis suscipit
                hendrerit lorem, ac condimentum elit rutrum et. Quisque
                ultrices, dolor vitae suscipit scelerisque, nibh leo dignissim
                felis, non sollicitudin leo sem et nisi. Nullam mauris nulla,
                semper et neque at, dictum venenatis nisi. Fusce vestibulum elit
                eget urna sagittis sodales. Duis suscipit hendrerit lorem, ac
                condimentum elit rutrum et. Quisque ultrices, dolor vitae
                suscipit scelerisque, nibh leo dignissim felis, non sollicitudin
                leo sem et nisi. Nullam mauris nulla, semper et neque at, dictum
                venenatis nisi. Fusce vestibulum elit eget urna sagittis
                sodales.
              </Article>
            </PartnerInfo>
          </Partner>
          <Title>SamarbeidsPartnere</Title>
          <Partner>
            <ImageWrapper>
              <Img
                fluid={data.Iterate.childImageSharp.fluid}
                alt="Iterate logo"
              />
            </ImageWrapper>
            <PartnerInfo>
              <PartnerName>Iterate</PartnerName>
              <Article>
               Iterate sin visjon er "Enable Innovators". Vi vet at entreprenørskap er krevende arbeid,
               derfor slår vi sammen gründer og ansatt. Vi vil at våre mennesker skal bruke mesteparten
               av energien sin på det de er unikt gode på. Hos oss veksler ansatte mellom å jobbe i oppdrag,
               hvor de hjelper startups og etablerte selskaper med utvikling og innovasjon, og å jobbe med
               egne ideer. Denne vekselvirkningen er en katalysator for kreativ galskap. Man ser hvordan
               verden fungerer, man får hele tiden nye ideer og man blir godt kjent med de andre byggerne
               rundt seg.
              </Article>
            </PartnerInfo>
          </Partner>

          <Partner>
            <ImageWrapper>
              <Img
                fluid={data.Facebook.childImageSharp.fluid}
                alt="facebook logo"
              />
            </ImageWrapper>
            <PartnerInfo>
              <PartnerName>Facebook</PartnerName>
              <Article>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                fringilla diam ac fringilla ornare. Maecenas in arcu
                consectetur, laoreet nunc quis, lacinia nisi. Duis suscipit
                hendrerit lorem, ac condimentum elit rutrum et. Quisque
                ultrices, dolor vitae suscipit scelerisque, nibh leo dignissim
                felis, non sollicitudin leo sem et nisi. Nullam mauris nulla,
                semper et neque at, dictum venenatis nisi. Fusce vestibulum elit
                eget urna sagittis sodales. et eros. Duis suscipit hendrerit
                lorem, ac condimentum elit rutrum et. Quisque ultrices, dolor
                vitae suscipit scelerisque, nibh leo dignissim felis, non
                sollicitudin leo sem et nisi. Nullam mauris nulla, semper et
                neque at, dictum venenatis nisi. Fusce vestibulum elit eget urna
                sagittis sodales.
              </Article>
            </PartnerInfo>
          </Partner>
          <Title>StandPartnere</Title>
          <Partner>
            <ImageWrapper>
              <Img
                fluid={data.Facebook.childImageSharp.fluid}
                alt="Facebook logo"
              />
            </ImageWrapper>
            <PartnerInfo>
              <PartnerName>Facebook</PartnerName>
              <Article>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                fringilla diam ac fringilla ornare. Maecenas in arcu
                consectetur, laoreet nunc quis, lacinia nisi. Duis suscipit
                hendrerit lorem, ac condimentum elit rutrum et. Quisque
                ultrices, dolor vitae suscipit scelerisque, nibh leo dignissim
                felis, non sollicitudin leo sem et nisi. Nullam mauris nulla,
                semper et neque at, dictum venenatis nisi. Fusce vestibulum elit
                eget urna sagittis sodales. Duis suscipit hendrerit lorem, ac
                condimentum elit rutrum et. Quisque ultrices, dolor vitae
                suscipit scelerisque, nibh leo dignissim felis, non sollicitudin
                leo sem et nisi. Nullam mauris nulla, semper et neque at, dictum
                venenatis nisi. Fusce vestibulum elit eget urna sagittis
                sodales.
              </Article>
            </PartnerInfo>
          </Partner>
        </PartnerWrapper>*/}
      </Layout>
    </div>
  );
}

const Title = styled.h1`
  font-weight: bold;
  font-size: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  @media (max-width: 1268px) {
    font-size: 36px;
  }
  @media (max-width: 800px) {
    font-size: 26px;
  }
`;

const SubTitle = styled.h2`
  margin: 15px auto;
  justify-content: center;
  text-align: center;
`;

const SubTitleLast = styled.h2`
  margin: 50px auto;
  justify-content: center;
  text-align: center;
`;


const SubSubTitle = styled.h3`
margin: 15px auto;
  justify-content: center;
  text-align: center;
`;

const SubTitleP = styled.p`
  margin: 15px auto;
  justify-content: center;
  text-align: center;
  max-width: 600px;
`;

const ProspektLink = styled.a`
  display: block;
  justify-content: center;
  text-align: center;
  text-decoration: underline;
  color: gray;
  &:hover {
    color: white;
  }
`;

const StyledList = styled.ul`
  margin: -10px auto 32px auto;
  text-align: center;
  list-style: none;
  line-height: 2;
`;

const StyledLi = styled.li`
margin: 0 auto;
font-size: 20px;
`;

/*const PartnerWrapper = styled.div`
  margin-top: 5%;
`;
const Partner = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 5%;
  width: 100%;
  height: 15%;
  @media (max-width: 1268px) {
    flex-direction: column;
  }
`;

const ImageWrapper = styled.div`
  margin: auto;
  height: 90%;
  width: 90%;
  @media (max-width: 1268px) {
    margin: auto;
    height: 30%;
    width: 30%;
  }
`;
const PartnerInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const PartnerName = styled.h2`
  font-weight: bold;
  font-size: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top:1%;
  @media (max-width: 1268px) {
    font-size: 36px;
  }
`;*/
