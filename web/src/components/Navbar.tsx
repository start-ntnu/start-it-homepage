import React, { Component } from "react";
import "reset-css";
import NavbarScroller from "./NavbarScroller";

const navigation = {
  brand: { name: "StartIT", to: "/" },
  links: [
    { name: "Program", to: "/" },
    { name: "Blog", to: "/" },
    { name: "Partners", to: "/" },
    { name: "The team", to: "/" },
    { name: "StartNTNU", to: "/" },
  ],
};

export default function Navbar() {
  const { brand, links } = navigation;

  return (
    <div className="App">
      <NavbarScroller brand={brand} links={links} />
    </div>
  );
}
