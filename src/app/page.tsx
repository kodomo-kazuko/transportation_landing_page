"use client";

import React, { useEffect, useState } from "react";
import NavBar from "./sections/Navbar";
import Layout from "./components/layout";
import ScrollToTopButton from "./components/ScrollToTop";
import Manual from "./page/Manual";
import Main from "./page/Main";
import Spacer from "./components/spacer";

export default function Home() {
  const [showSecondDiv, setShowSecondDiv] = useState(false);
  const [scrollToId, setScrollToId] = useState<string | null>(null);

  useEffect(() => {
    if (scrollToId) {
      const element = document.getElementById(scrollToId);
      if (element) {
        const offset = window.innerHeight * 0.05;
        window.scrollTo({
          top: element.offsetTop - offset,
          behavior: "smooth",
        });
      }
      setScrollToId(null);
    }
  }, []);

  return (
    <Layout>
      <div>
        <NavBar
          setShowSecondDiv={setShowSecondDiv}
          setScrollToId={setScrollToId}
        />

        <Spacer height="70px" width="" />

        {showSecondDiv ? <Manual /> : <Main />}
      </div>
      <div className=" -z-50">
        <ScrollToTopButton />
      </div>
    </Layout>
  );
}
