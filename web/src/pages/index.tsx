import React, { Fragment } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { GlobalStyle } from "../globalStyles";
import StartITVideo from "../assets/startit.mp4";
export const query = graphql`
  query {
    StartNTNU: file(relativePath: { eq: "Startlogo.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    StartIT: file(relativePath: { eq: "logo.jpg" }) {
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
      <Fragment>
        <GlobalStyle></GlobalStyle>
        <Header />
        <VideoWrapper>
          <video height="100%" width="100%" loop muted autoPlay>
            <source src={StartITVideo} type="video/mp4" />
          </video>
        </VideoWrapper>

        <ImageWrapper>
          <Title>StartIT 2020</Title>
          <Article>
            {" "}
            På NTNU utdannes det for øyeblikket mange tusen studenter som snart
            skal ut i jobb og må finne ut hva de vil jobbe med. <br></br>
            <br></br>
            StartIT har som formål å motivere og inspirere studentene ved NTNU
            til å ville jobbe med å løse problemer ved hjelp av innovasjon og
            teknologien som de lærer her på NTNU. <br></br>
            <br></br>Vi ønsker å skifte fokuset fra “hvor kan man tjene mest
            penger” til “hvordan kan man være med å løse de mest spennende
            problemene vi står ovenfor i dag”.
            <br></br> <br></br>Dette forsøker vi å gjøre ved å vise mulighetene
            som finnes til å jobbe med innovasjon innenfor teknologi. Det kan
            være alt fra å vise frem de mest innovative inhouse bedriftene, de
            mest kreative konsulentselskapene, de kuleste startupsene, eller
            hvordan man kan starte noe eget.
          </Article>
          <StartNTNUlogo>
            <Img
              fluid={data.StartNTNU.childImageSharp.fluid}
              alt="StartNTNU logo"
            />
          </StartNTNUlogo>
        </ImageWrapper>
      </Fragment>
    </div>
  );
}

const Article = styled.p`
  font-size: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 1268px) {
    font-size: 24px;
  }
  @media (max-width: 800px) {
    font-size: 16px;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6%;
  margin-left: auto;
  margin-right: auto;
  height: 70%;
  width: 70%;
`;

const VideoWrapper = styled.div`
  margin-top: -12%;
  box-shadow: 3px 3px 6px 1px rgba(14, 13, 13, 0.65);
`;

const BorderDiv = styled.div`
  margin-top: -0.4%;
  height: 13px;
  background-color: grey;
  opacity: 50%;
`;

const StartNTNUlogo = styled.div`
  margin-top: 5%;
  margin-right: auto;
  margin-left: auto;
  width: 50%;
`;

const StartITlogo = styled.div`
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
  margin-right: auto;
  margin-left: auto;
  width: 40%;
  height: 20%;
  animation: rotation 4s infinite linear;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 7%;
  @media (max-width: 1268px) {
    font-size: 40px;
  }
`;
