import Spacer from "../components/spacer";
import Download from "../sections/Download";
import FAQ from "../sections/FAQ";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import Visuals from "../sections/Visuals";
import SwipeWrapper from "../wrappers/SwipeWrapper";

export default function Main() {
  return (
    <>
      <SwipeWrapper animation="fade-right">
        <Hero />
      </SwipeWrapper>

      {/* <Spacer height="3vh" width="0" />

      <Glider /> */}

      <Spacer height="3vh" width="0" />

      <Visuals />

      {/* <Spacer height="3vh" width="0" />

      <Glider /> */}

      <Spacer height="3vh" width="0" />

      <FAQ />

      <Spacer height="3vh" width="0" />

      <Download />

      <Footer />
    </>
  );
}
