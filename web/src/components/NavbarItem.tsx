import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

export default function NavbarItem({ name, link }: NavbarItemProps) {
  return (
    <>
      <StyledLink to={`/${link}/`}>
        <span>{name}</span>
      </StyledLink>
    </>
  );
}

const StyledLink = styled((props) => <Link {...props} />)`
  text-decoration: none;
  color: black;
  font-size: 3vh;
  line-height: 2;
  margin-left: 5vh;
  @media (max-width: 1000px) {
    color: white;
  }
`;
