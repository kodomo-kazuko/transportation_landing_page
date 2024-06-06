"use client";

import React, { useState } from "react";
import NavBar from "./sections/Navbar";
import Layout from "./components/layout";
import ScrollToTopButton from "./components/ScrollToTop";
import SwipeWrapper from "./components/SwipeWrapper";
import Main from "./page/Main";

export default function Home() {
  const [showSecondDiv, setShowSecondDiv] = useState(false);

  return (
    <Layout>
      <NavBar
        showSecondDiv={showSecondDiv}
        setShowSecondDiv={setShowSecondDiv}
      />

      {showSecondDiv ? (
        <SwipeWrapper animation="fade-right">stuff will be added</SwipeWrapper>
      ) : (
        Main()
      )}

      <ScrollToTopButton />
    </Layout>
  );
}
