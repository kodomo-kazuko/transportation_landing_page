import React from "react";
import NavBar from "./sections/Navbar";
import Spacer from "./components/spacer";
import Layout from "./components/layout";
import Visuals from "./sections/Visuals";
import Download from "./sections/Download";
import Hero from "./sections/Hero";
import FAQ from "./sections/FAQ";
import ScrollToTopButton from "./components/ScrollToTop";
import Footer from "./sections/Footer";
import ColorWrapper from "./components/ColorWrapper";

export default function Home() {
  return (
    <Layout>
      <NavBar />

      <Spacer height="20px" width="0" />

      <Hero />

      <Spacer height="40px" width="0" />

      <Visuals />

      <Spacer height="40px" width="0" />

      <FAQ />

      <Spacer height="40px" width="0" />

      <Download />

      <Spacer height="40px" width="0" />

      <Footer />

      <ScrollToTopButton />
    </Layout>
  );
}
