import Login from "./manualSections/Login";
import Wallet from "./manualSections/Wallet";
import Charge from "./manualSections/Charge";
import History from "./manualSections/History";
import Discount from "./manualSections/Discount";
import Feedback from "./manualSections/Feedback";
import Direction from "./manualSections/Direction";
import Direction2 from "./manualSections/Direction2";
import SwipeWrapper from "../wrappers/SwipeWrapper";
import PhysicalCard from "./manualSections/PhysicalCard";
import Spacer from "../components/spacer";
import Footer from "../sections/Footer";

export default function Manual() {
  let screenSize: number = 0;
  if (typeof window !== "undefined") {
    if (window.innerWidth >= window.innerHeight) {
      screenSize = 8;
    } else {
      screenSize = 2.5;
    }

    return (
      <SwipeWrapper animation={"fade-right"}>
        <Spacer height="3vh" width="0" />
        <div>
          <Login />

          <Wallet />

          <Discount />

          <Charge />

          <PhysicalCard />

          <Direction />

          <Direction2 />

          <Feedback />

          <History />
        </div>
        <Footer />
      </SwipeWrapper>
    );
  }
}
