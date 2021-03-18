import { graphql, Link, useStaticQuery } from "gatsby";
import Img from 'gatsby-image';
import * as React from "react";
import styled from 'styled-components';
import Navbar from "./Navbar";
import SEO from './Seo';

export default function Header() {
  const data = useStaticQuery(graphql`
  query {
    logo: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`);
  return (
    <>
    <SEO />
    <Wrapper>
      <HeaderStyle>
        <StyledLink to="/">
          <FlexWrapper>
          <StyledImg fluid={data.logo.childImageSharp.fluid} />
          <Title><span style={{color: '#BD6631'}}>START</span>IT</Title>
          </FlexWrapper>
        </StyledLink>
        <Navbar />
      </HeaderStyle>
      <MessageWrapper>
        Dersom du har meldt deg på workshop og ikke har mottatt mail - sjekk spam-mail!
    </MessageWrapper>
    </Wrapper>
    </>
  );
}

const HeaderStyle = styled.header`
  display: inline-flex;
  width: 100%;
  justify-content: space-between;
  margin: 0px;
  position: relative;
  z-index: 2;
`;

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledImg = styled(Img)`
  width: 50px;
  z-index: 2;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 2rem;
  display: flex;
  color: white;
  padding-left: 5%;
  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

const StyledLink = styled((props) => <Link {...props} />)`
  text-decoration: none;
  color: white;
  font-size: 2vh;
  margin-left: 2vh;
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 0px;
  background-color: black;
`;

const MessageWrapper = styled.div`
  width: 100%;
  text-align: center;
  background-color: #BD6631;
  padding: 5px;
`;
