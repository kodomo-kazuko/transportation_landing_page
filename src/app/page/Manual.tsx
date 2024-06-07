import Login from "./manualSections/Login";
import Wallet from "./manualSections/Wallet";
import Charge from "./manualSections/Charge";
import History from "./manualSections/History";
import Discount from "./manualSections/Discount";
import Feedback from "./manualSections/Feedback";
import Direction from "./manualSections/Direction";
import Direction2 from "./manualSections/Direction2";
import SwipeWrapper from "../components/SwipeWrapper";
import PhysicalCard from "./manualSections/PhysicalCard";
import ScrollToTopButton from "../components/ScrollToTop";

export default function Manual() {
  let screenSize: number = 0;
  if (typeof window !== "undefined") {
    if (window.innerWidth >= window.innerHeight) {
      screenSize = 8;
    } else {
      screenSize = 2.5;
    }

    return (
      <div>
        <SwipeWrapper animation="fade-right">
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
        </SwipeWrapper>

        <ScrollToTopButton />
      </div>
    );
  }
}
