import * as React from "react";
import styled from "styled-components";
import { NavLinks } from "../fixtures/navLinks";
import NavbarItemFooter from "./NavbarItemFooter";

export default function Footer(){
    const navLinks = NavLinks.map((link: any, index: number) => (
        <NavbarItemFooter  key={index} name={link.name} link={link.link} />
    ));
    return(
        <FooterStyle>
            <Wrapper>
                <Contact>
                    <StyledH3>Email</StyledH3>
                    <StyledText>isabel.slorer@startntnu.no</StyledText>
                    <StyledH3>Telefon</StyledH3>
                    <StyledText>45023651</StyledText>
                </Contact>
                <NavbarDiv><StyledH3>Sider</StyledH3>{navLinks}</NavbarDiv>
                <Annet>
                    <StyledH3>Annet</StyledH3>
                    <StyledLinks href='https://www.facebook.com/startntnu'>Facebook</StyledLinks>
                    <StyledLinks href='https://www.instagram.com/startntnu'>Instagram</StyledLinks>
                    <StyledLinks href='https://www.linkedin.com/company/start-ntnu/'>LinkedIn</StyledLinks>
                </Annet>
            </Wrapper>
        </FooterStyle>

    )
}


const FooterStyle = styled.footer`
    display: flex;
    justify-content: center;
    flex-direction: row;
    position: relative;
    padding-bottom: 30px;
    color:white;
    font-weight: 500;
    background: black;
    padding-top: 32px;
    margin-top:10px;
    @media (max-width: 700) {
        flex-direction:column;
  }
`;

const StyledH3 = styled.h3`
  color: #BD6631;
  text-transform: uppercase;
`;

const Wrapper = styled.div`
    margin-top:auto;
    margin-bottom:auto;
    display: flex;
    flex-direction: row;
    justify-content:space-evenly;
    @media (max-width: 700px) {
        flex-direction:column;
  }
`;

const StyledText = styled.p`
    font-size:2vh;
`;

const StyledLinks = styled.a`
    color:white;
    text-decoration: none;
    margin-bottom:2vh;
`;

const Contact = styled.div`
    flex-direction:column;
    margin-right:30%;
    @media (max-width: 700px) {
        margin-left:20%;
  }
`;

const NavbarDiv = styled.nav`
    display:flex;
    flex-direction: column;
    margin-right:30%;
    @media (max-width: 700px) {
        margin-left:20%;

  }
`;

const Annet = styled.div`
    display:flex;
    flex-direction: column;
    margin-left:auto;
    margin-right:auto;
    @media (max-width: 700px) {
        margin-left:20%;

  }

`;
