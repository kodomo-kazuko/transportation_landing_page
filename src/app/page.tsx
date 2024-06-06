"use client";

import React, { useState } from "react";
import NavBar from "./sections/Navbar";
import Layout from "./components/layout";
import ScrollToTopButton from "./components/ScrollToTop";
import Manual from "./page/Manual";
import Main from "./page/Main";
import Spacer from "./components/spacer";

export default function Home() {
  const [showSecondDiv, setShowSecondDiv] = useState(false);

  return (
    <Layout>
      <NavBar setShowSecondDiv={setShowSecondDiv} />

      <Spacer height="50px" width="0" />

      {showSecondDiv ? Manual() : Main()}

      <ScrollToTopButton />
    </Layout>
  );
}
