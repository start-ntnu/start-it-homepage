import React, { Component } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import { graphql } from "gatsby";
import Img from "gatsby-image";

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

export default function App({ data }) {
  return (
    <div className="App">
      <Header />
      <Title>Samarbeidspartnere</Title>
      <Article>
        Er din bedrift opptatt av innovasjon og teknologi? Vil dere være en del
        av NTNU`s mest fremover lente IT konferanse? Vil dere få møte noen av
        NTUS`s mest engasjerte og ny tenkende studenter og være med på å
        inspirere dem? Da er det bare å ta kontakt!
      </Article>
      <PartnerWrapper>
        <Title>Hovedpartnere</Title>
        <Partner>
          <ImageWrapper>
            <Img
              fluid={data.Facebook.childImageSharp.fluid}
              alt="StartIt logo"
            />
          </ImageWrapper>
          <PartnerInfo>
            <PartnerName>Facebook</PartnerName>
            <Article>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              fringilla diam ac fringilla ornare. Maecenas in arcu consectetur,
              laoreet nunc quis, lacinia nisi. Duis suscipit hendrerit lorem, ac
              condimentum elit rutrum et. Quisque ultrices, dolor vitae suscipit
              scelerisque, nibh leo dignissim felis, non sollicitudin leo sem et
              nisi. Nullam mauris nulla, semper et neque at, dictum venenatis
              nisi. Fusce vestibulum elit eget urna sagittis sodales. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Nulla sodales arcu vel augue accumsan, a vulputate
              nunc lacinia. Donec eget libero vitae velit elementum egestas in
              et eros.
            </Article>
          </PartnerInfo>
        </Partner>
        <Partner>
          <ImageWrapper>
            <Img
              fluid={data.Facebook.childImageSharp.fluid}
              alt="StartIt logo"
            />
          </ImageWrapper>
          <PartnerInfo>
            <PartnerName>Facebook</PartnerName>
            <Article>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              fringilla diam ac fringilla ornare. Maecenas in arcu consectetur,
              laoreet nunc quis, lacinia nisi. Duis suscipit hendrerit lorem, ac
              condimentum elit rutrum et. Quisque ultrices, dolor vitae suscipit
              scelerisque, nibh leo dignissim felis, non sollicitudin leo sem et
              nisi. Nullam mauris nulla, semper et neque at, dictum venenatis
              nisi. Fusce vestibulum elit eget urna sagittis sodales. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Nulla sodales arcu vel augue accumsan, a vulputate
              nunc lacinia. Donec eget libero vitae velit elementum egestas in
              et eros.
            </Article>
          </PartnerInfo>
        </Partner>
        <Title>Partnere</Title>
        <Partner>
          <ImageWrapper>
            <Img
              fluid={data.Facebook.childImageSharp.fluid}
              alt="StartIt logo"
            />
          </ImageWrapper>
          <PartnerInfo>
            <PartnerName>Facebook</PartnerName>
            <Article>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              fringilla diam ac fringilla ornare. Maecenas in arcu consectetur,
              laoreet nunc quis, lacinia nisi. Duis suscipit hendrerit lorem, ac
              condimentum elit rutrum et. Quisque ultrices, dolor vitae suscipit
              scelerisque, nibh leo dignissim felis, non sollicitudin leo sem et
              nisi. Nullam mauris nulla, semper et neque at, dictum venenatis
              nisi. Fusce vestibulum elit eget urna sagittis sodales. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Nulla sodales arcu vel augue accumsan, a vulputate
              nunc lacinia. Donec eget libero vitae velit elementum egestas in
              et eros.
            </Article>
          </PartnerInfo>
        </Partner>
        <Partner>
          <ImageWrapper>
            <Img
              fluid={data.Facebook.childImageSharp.fluid}
              alt="StartIt logo"
            />
          </ImageWrapper>
          <PartnerInfo>
            <PartnerName>Facebook</PartnerName>
            <Article>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              fringilla diam ac fringilla ornare. Maecenas in arcu consectetur,
              laoreet nunc quis, lacinia nisi. Duis suscipit hendrerit lorem, ac
              condimentum elit rutrum et. Quisque ultrices, dolor vitae suscipit
              scelerisque, nibh leo dignissim felis, non sollicitudin leo sem et
              nisi. Nullam mauris nulla, semper et neque at, dictum venenatis
              nisi. Fusce vestibulum elit eget urna sagittis sodales. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Nulla sodales arcu vel augue accumsan, a vulputate
              nunc lacinia. Donec eget libero vitae velit elementum egestas in
              et eros.
            </Article>
          </PartnerInfo>
        </Partner>
        <Partner>
          <ImageWrapper>
            <Img
              fluid={data.Facebook.childImageSharp.fluid}
              alt="StartIt logo"
            />
          </ImageWrapper>
          <PartnerInfo>
            <PartnerName>Facebook</PartnerName>
            <Article>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              fringilla diam ac fringilla ornare. Maecenas in arcu consectetur,
              laoreet nunc quis, lacinia nisi. Duis suscipit hendrerit lorem, ac
              condimentum elit rutrum et. Quisque ultrices, dolor vitae suscipit
              scelerisque, nibh leo dignissim felis, non sollicitudin leo sem et
              nisi. Nullam mauris nulla, semper et neque at, dictum venenatis
              nisi. Fusce vestibulum elit eget urna sagittis sodales. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Nulla sodales arcu vel augue accumsan, a vulputate
              nunc lacinia. Donec eget libero vitae velit elementum egestas in
              et eros.
            </Article>
          </PartnerInfo>
        </Partner>
      </PartnerWrapper>
    </div>
  );
}

const Title = styled.h1`
  font-weight: bold;
  font-size: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  @media (max-width: 1268px) {
    font-size: 42px;
  }
  @media (max-width: 800px) {
    font-size: 30px;
  }
`;

const Article = styled.p`
  font-size: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-left: 10%;
  margin-right: 10%;
  @media (max-width: 1268px) {
    font-size: 24px;
  }
`;

const PartnerWrapper = styled.div`
  margin-top: 5%;
`;
const Partner = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 5%;
  width: 90%;
  height: 15%;
  @media (max-width: 1268px) {
    flex-direction: column;
  }
`;

const ImageWrapper = styled.div`
  margin: auto;
  height: 100%;
  width: 100%;
  @media (max-width: 1268px) {
    height: 50%;
    width: 50%;
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
