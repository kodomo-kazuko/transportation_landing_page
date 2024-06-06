import Download from "../sections/Download";
import Spacer from "../components/spacer";
import SwipeWrapper from "../components/SwipeWrapper";
import FAQ from "../sections/FAQ";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import Visuals from "../sections/Visuals";

export default function Main() {
  return (
    <SwipeWrapper animation="fade-right">
      <Hero />
      <Spacer height="40px" width="0" />
      <Visuals />
      <Spacer height="40px" width="0" />
      <FAQ />
      <Spacer height="40px" width="0" />

      <div className="relative z-10  bottom-0 mb-[-25px]">
        <Download />
      </div>

      <Footer />
    </SwipeWrapper>
  );
}
