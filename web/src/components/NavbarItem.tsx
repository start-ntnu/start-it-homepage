import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

export default function NavbarItem({ name, link }: NavbarItemProps) {
  return (
    <>
      <StyledLink to={`/${link}/`}>
        {name}
      </StyledLink>
    </>
  );
}

const StyledLink = styled((props) => <Link {...props} />)`
  text-decoration: none;
  color: white;
  font-size: 2vh;
  line-height: 2;
  margin-left: 5vh;
  :hover {
    color: #BD6631;
  }
  @media (max-width: 1000px) {
    color: white;
  }
`;
