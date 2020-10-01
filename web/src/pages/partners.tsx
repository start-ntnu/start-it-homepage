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
        {/*<PartnerWrapper>
          <Title>Hovedpartnere</Title>
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
                eget urna sagittis sodales. et eros. Duis suscipit hendrerit
                lorem, ac condimentum elit rutrum et. Quisque ultrices, dolor
                vitae suscipit scelerisque, nibh leo dignissim felis, non
                sollicitudin leo sem et nisi. Nullam mauris nulla, semper et
                neque at, dictum venenatis nisi. Fusce vestibulum elit eget urna
                sagittis sodales.
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
  height: 70%;
  width: 70%;
  @media (max-width: 1268px) {
    margin: auto;
    height: 20%;
    width: 20%;
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
  @media (max-width: 1268px) {
    font-size: 36px;
  }
`;
