import * as React from "react";
import styled from "styled-components";

export default function NavbarScroller(props: {
  brand: { name: string; to: string };
  links: Array<{ name: string; to: string }>;
}) {
  const { brand, links } = props;
  const NavLinks: any = () =>
    links.map((link: { name: string; to: string }) => (
      <Li key={link.name}>
        <a href={link.to}>{link.name}</a>
      </Li>
    ));
  return (
    <Navbar>
      <Brand href={brand.to}>{brand.name}</Brand>
      <Ul>
        <NavLinks />
      </Ul>
    </Navbar>
  );
}

const Theme = {
  colors: {
    bg: `#fff`,
    dark: `#24292e`,
    light: `#EEEEEE`,
    red: `#ff5851`,
  },
  fonts: {
    body: `IBM Plex Sans, sans-serif`,
    heading: `IBM Plex Sans, sans-serif`,
  },
};

const Navbar = styled.nav`
  background: ${Theme.colors.dark};
  font-family: ${Theme.fonts.heading};
  color: ${Theme.colors.light};
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: white;
    text-decoration: none;
  }
  height: 50%;
`;

const Brand = styled.a`
  font-size: 3vw;
  font-weight: bold;
  font-style: italic;
  margin-left: 2rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

const Ul = styled.ul`
  display: flex;
  margin-right: 10%;
`;

const Li = styled.li`
  align-items: center;
  color: #999;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  -webkit-tap-highlight-color: transparent;
  align-items: center;
  color: #999;
  display: flex;
  font-size: 1.5vw;
  justify-content: center;
  line-height: 16px;
  margin: 0 1.125rem;
  text-decoration: none;
  white-space: nowrap;
`;
