import ColorWrapper from "../components/ColorWrapper";
import SwipeWrapper from "../components/SwipeWrapper";

export default function Manual() {
  return (
    <div>
      <SwipeWrapper animation="fade-in">
        <ColorWrapper color="white">
          <h1>Stuff will be added here</h1>
        </ColorWrapper>
      </SwipeWrapper>
    </div>
  );
}
