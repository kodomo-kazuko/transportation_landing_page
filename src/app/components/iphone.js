"use client";

import styled from "@emotion/styled";
import { rgba, darken } from "polished";

const chasisColor = "#41729f";

const IPhoneRoot = styled.div((props) => ({
  position: "relative",
  fontSize: `${props.fontSize}px`,
  height: "692em",
  width: "342em",
  "& *, & *::before, & *::after": {
    boxSizing: "border-box",
    display: "block",
  },
  "& .side": {
    background: "#000",
    borderRadius: "60em",
    boxShadow: [
      `inset 0 0 1em 1em ${darken(0.3, chasisColor)}`,
      "0em 0em 1em 2em rgba(255,255,255,1) inset",
      "0em 0em 1em 2em rgba(255,255,255,1) inset",
      `0em 0em 1em 5em ${rgba(chasisColor, 0.8)} inset`,
      props.boxShadow,
    ]
      .filter(Boolean)
      .join(","),
    height: "100%",
    padding: "15em 22em",
    width: "100%",
  },
  "& .screen": {
    background: "#000",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    borderRadius: "44em",
    position: "relative",
    height: "658em",
    width: "308em",
    marginLeft: "-5em",
    marginTop: "1em",
    overflow: "hidden",
  },
  "& .content": {
    height: "698em",
    width: "350em",
    marginTop: "-30em",
    marginLeft: "-10em",
  },
  "& .line::after, & .line::before": {
    content: '""',
    position: "absolute",
    border: `solid ${rgba("#fff", 0.4)}`,
    borderWidth: "0 5em",
    height: "5em",
    left: "0",
    width: "100%",
  },
  "& .line::after": { top: "69em" },
  "& .line::before": { bottom: "71em" },
  "& .header": {
    background: "#000",
    borderBottomLeftRadius: "18em",
    borderBottomRightRadius: "18em",
    height: "28em",
    left: "50%",
    marginLeft: "-62em",
    position: "absolute",
    top: "12em",
    width: "124em",
  },
  "& .sensor-1::after, & .sensor-1::before": {
    content: '""',
    position: "absolute",
  },
  "& .sensor-1::after": {
    background: "#444",
    borderRadius: "50%",
    height: "6em",
    width: "6em",
    left: "1%",
    marginLeft: "12.5em",
    top: "10.5em",
    boxShadow: "0em 0em 2em 1em navy inset",
  },
  "& .sensor-1::before": {
    background: "rgb(20,20,20)",
    borderRadius: "50%",
    height: "12em",
    width: "12em",
    left: "1%",
    marginLeft: "10em",
    top: "8em",
  },
  "& .sensor-2::after, & .sensor-2::before": {
    content: '""',
    position: "absolute",
  },
  "& .sensor-2::before": {
    background: "#131313",
    borderRadius: "1.5em",
    height: "3em",
    width: "54em",
    left: "50%",
    marginLeft: "-27em",
    top: "-3em",
  },
  "& .volume-button": {
    backgroundColor: chasisColor,
    boxShadow: [
      `inset 0 0 1em 0.5em ${darken(0.3, chasisColor)}`,
      "0em 0em 3em 2em rgba(255,255,255,0.4) inset",
    ].join(","),
    borderTopLeftRadius: 1.5,
    borderBottomLeftRadius: 1.5,
    height: "26em",
    left: "-3em",
    position: "absolute",
    top: "122em",
    width: "3em",
  },
  "& .volume-button::after, & .volume-button::before": {
    content: '""',
    position: "absolute",
    backgroundColor: chasisColor,
    boxShadow: [
      `inset 0 0 1em 0.5em ${darken(0.3, chasisColor)}`,
      "0em 0em 3em 2em rgba(255,255,255,0.4) inset",
    ].join(","),
    borderTopLeftRadius: 1.5,
    borderBottomLeftRadius: 1.5,
    height: "50em",
    left: "0",
    width: "3em",
  },
  "& .volume-button::after": { top: "48em" },
  "& .volume-button::before": { top: "112em" },
  "& .power-button": {
    backgroundColor: chasisColor,
    boxShadow: [
      `inset 0 0 1em 0.5em ${darken(0.3, chasisColor)}`,
      "0em 0em 3em 2em rgba(255,255,255,0.4) inset",
    ].join(","),
    borderTopRightRadius: 1.5,
    borderBottomRightRadius: 1.5,
    height: "75em",
    right: "-3em",
    position: "absolute",
    top: "175em",
    width: "3em",
  },
}));

export const IPhone = ({ children, boxShadow, width }) => {
  return (
    <>
      <IPhoneRoot boxShadow={boxShadow} fontSize={width / 342}>
        <div className="side">
          <div className="screen">
            <div className="content">{children}</div>
          </div>
        </div>
        <div className="line" />
        <div className="header">
          <div className="sensor-1" />
          <div className="sensor-2" />
        </div>
        <div className="volume-button" />
        <div className="power-button" />
      </IPhoneRoot>
    </>
  );
};
