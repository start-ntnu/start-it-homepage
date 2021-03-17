import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

export default function NavbarItemMobile({ name, link, directLink }: NavbarItemProps) {
  return (
    <>
    {directLink ?
    <StyledDirectLink target="_blank" href={directLink}>
    {name}
  </StyledDirectLink>
  :
  <StyledLink to={`/${link}/`}>
        {name}
      </StyledLink>
  }
    </>
  );
}

const StyledLink = styled((props) => <Link {...props} />)`
  text-decoration: none;
  color: white;
  font-size: 3vh;
  margin: 16px auto;
  text-align: center;
  margin-left: 5vh;
  :hover {
    color: #BD6631;
  }
  @media (max-width: 1000px) {
    color: white;
  }
`;

const StyledDirectLink = styled.a`
  text-decoration: none;
  color: white;
  font-size: 3vh;
  margin: 16px auto;
  text-align: center;
  margin-left: 5vh;
  :hover {
    color: #BD6631;
  }
  @media (max-width: 1000px) {
    color: white;
  }
`;
