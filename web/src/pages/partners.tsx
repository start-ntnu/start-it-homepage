import React, { Fragment } from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/Layout";

export const query = graphql`
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
`;

export default function Partners({ data }) {
  return (
    <div className="App">
      <Layout>
        <Title>Samarbeidspartnere</Title>
        <Article>
          Er din bedrift opptatt av innovasjon og teknologi? Vil dere være en
          del av NTNU`s mest fremover lente IT konferanse? Vil dere få møte noen
          av NTUS`s mest engasjerte og ny tenkende studenter og være med på å
          inspirere dem? Da er det bare å ta kontakt!
        </Article>
        <ProspektLink
          href={require("../components/ProspektStartIT2021.pdf")}
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

const ProspektLink = styled.a`
  display: block;
  justify-content: center;
  text-align: center;
  text-decoration: underline;
  color: black;
  &:hover {
    color: grey;
  }
`;

const Article = styled.p`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-left: 20%;
  margin-right: 20%;
  @media (max-width: 1268px) {
    font-size: 15px;
  }
`;

const PartnerWrapper = styled.div`
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
`;
