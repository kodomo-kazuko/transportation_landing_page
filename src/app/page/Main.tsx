import Download from "../sections/Download";
import Spacer from "../components/spacer";
import SwipeWrapper from "../wrappers/SwipeWrapper";
import FAQ from "../sections/FAQ";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import Visuals from "../sections/Visuals";

export default function Main() {
  return (
    <>
      <SwipeWrapper animation="fade-right">
        <Hero />
      </SwipeWrapper>

      <Spacer height="40px" width="0" />

      <Visuals />

      <Spacer height="40px" width="0" />

      <FAQ />

      <Download />

      <Footer />
    </>
  );
}
