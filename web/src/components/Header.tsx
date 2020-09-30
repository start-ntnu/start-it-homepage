import * as React from "react";
import { Link } from "gatsby";
import Navbar from "./Navbar";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default function Header() {
  const data = useStaticQuery(graphql`
    query {
      Facebook: file(relativePath: { eq: "partners/Facebook.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <Wrapper>
      <HeaderStyle>
        <StyledLink to="/">
          <h1>StartIT</h1>
        </StyledLink>
        <Navbar></Navbar>
      </HeaderStyle>
      <PictureContainer>
        <ImageWrapper>
          <Img fluid={data.Facebook.childImageSharp.fluid} alt="Partner logo" />
        </ImageWrapper>
        <ImageWrapper>
          <Img fluid={data.Facebook.childImageSharp.fluid} alt="Partner logo" />
        </ImageWrapper>
        <ImageWrapper>
          <Img fluid={data.Facebook.childImageSharp.fluid} alt="Partner logo" />
        </ImageWrapper>
        <ImageWrapper>
          <Img fluid={data.Facebook.childImageSharp.fluid} alt="Partner logo" />
        </ImageWrapper>
        <ImageWrapper>
          <Img fluid={data.Facebook.childImageSharp.fluid} alt="StartIt logo" />
        </ImageWrapper>
        <ImageWrapper>
          <Img fluid={data.Facebook.childImageSharp.fluid} alt="StartIt logo" />
        </ImageWrapper>
      </PictureContainer>
    </Wrapper>
  );
}

const HeaderStyle = styled.header`
  display: inline-flex;
  width: 100%;
  justify-content: space-between;
  padding-left: 32px;
  background-color: black;
  margin: 0px;
  position: relative;
`;

const StyledLink = styled((props) => <Link {...props} />)`
  text-decoration: none;
  color: white;
  font-size: 2vh;
  margin-left: 2vh;
`;

const PictureContainer = styled.div`
  margin-top: 2%;
  display: flex;
  flex-direction: row;
`;

const ImageWrapper = styled.div`
  margin: auto;
  height: 10%;
  width: 10%;
  @media (max-width: 1268px) {
    height: 5%;
    width: 5%;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 0px;
`;
