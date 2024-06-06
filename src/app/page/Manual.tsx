import ColorWrapper from "../components/ColorWrapper";
import Spacer from "../components/spacer";
import SwipeWrapper from "../components/SwipeWrapper";
import Login from "./manualSections/Login";

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

            <Spacer height={"40px"} width={""} />

            <Login />
          </div>
        </SwipeWrapper>
      </div>
    );
  }
}
