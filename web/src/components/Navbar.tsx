import React, { useState } from "react";
import styled from "styled-components";
import { NavLinks } from "../fixtures/navLinks";
import NavbarItem from "./NavbarItem";
import NavbarItemMobile from "./NavBarItemMobile";

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;
  margin-right: -25px;

  @media (max-width: 1000px) {
    display: flex;
  }
`;

const Hamburger = styled.div`
  background-color: white;
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  margin-right: -60px;
  transform: ${(props) => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    margin-right: -60px;
    background-color: white;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${(props: any) =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${(props: any) => (props.open ? "0" : "1")};
    transform: ${(props: any) => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`;

export default function Navbar() {
  const navLinks = NavLinks.map((link: any, index: number) => (
    <NavbarItem key={index} name={link.name} link={link.link} />
  ));
  const navLinksMobile = NavLinks.map((link: any, index: number) => (
    <NavbarItemMobile key={index} name={link.name} link={link.link} />
  ));
  const [navbarOpen, setNavbarOpen] = useState(false);

  const windowGlobal = typeof window !== 'undefined' && window;

  if (navbarOpen){
    if (windowGlobal){
        windowGlobal.document.body.style.position = 'fixed';
      }
  }
  else {
    if (windowGlobal){
        windowGlobal.document.body.style.position = 'relative';
    }
  }

  return (
    <Navigation>
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <NavbarDivMobile>{navLinksMobile}</NavbarDivMobile>
        </Navbox>
      ) : (
        <Navbox open>
          <NavbarDiv>{navLinks}</NavbarDiv>
        </Navbox>
      )}
    </Navigation>
  );
}


const NavbarDivMobile = styled.nav`
  display: flex;
  position: fixed;
  height: 100%;
  flex-direction: row;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const NavbarDiv = styled.nav`
  display: flex;
  flex-direction: row;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const Navigation = styled.nav`
  height: 10vh;
  display: flex;
  background-color: black;
  position: relative;
  justify-content: space-between;
  text-transform: uppercase;
  margin: auto 5vh auto auto;

  z-index: 2;
  align-self: center;

  @media (max-width: 1000px) {
    position: sticky;
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`;

const Navbox = styled.div`
  margin-right: 10vh;
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 1000px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    margin-top: 5vh;
    background-color: black;
    transition: all 0.3s ease-in;
    top: 3vh;
    left: ${(props) => (props.open ? "-100%" : "0")};
  }
`;
