import React from "react";
import 'react-vertical-timeline-component/style.min.css';
import { GlobalStyle } from "../globalStyles";
import Footer from "./Footer";
import Header from "./Header";

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
