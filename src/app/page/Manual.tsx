import SwipeWrapper from "../wrappers/SwipeWrapper";
import Charge from "./manualSections/Charge";
import Direction from "./manualSections/Direction";
import Direction2 from "./manualSections/Direction2";
import Discount from "./manualSections/Discount";
import Feedback from "./manualSections/Feedback";
import History from "./manualSections/History";
import Login from "./manualSections/Login";
import PhysicalCard from "./manualSections/PhysicalCard";
import Wallet from "./manualSections/Wallet";

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
        <div className="mb-10 md:px-5">
          <Login />

          <Wallet />

          {/* <Discount /> */}

          <Charge />

          <PhysicalCard />

          <Direction />

          <Direction2 />

          <Feedback />

          <History />
        </div>
      </SwipeWrapper>
    );
  }
}
