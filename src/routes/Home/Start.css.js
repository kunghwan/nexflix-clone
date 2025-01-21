import { style } from "@vanilla-extract/css";
import OpenColor from "open-color";

const imgUrl =
  "https://cdn.pixabay.com/photo/2025/01/13/19/40/horse-9331340_1280.jpg";

const styles = {
  comtainer: style({
    padding: "100px 30px",

    backgroundImage: `url(${imgUrl})`,
    position: "relative",
    zIndex: 0,
    "::after": {
      content: "",
      position: "absolute",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      backgroundColor: "rgba(0,0,0,.8)",
      zIndex: -1,
    },
  }),
  div: style({
    textAlign: "center",
  }),
  h1: style({
    fontWeight: 900,
    fontSize: "2rem",
  }),
  p: style({
    margin: "10px 0",
  }),
  form: style({
    display: "flex",
    flexDirection: "column",
    rowGap: 20,
  }),
  input: style({
    backgroundColor: "rgba(255,255,255,.5)",
    outline: "none",
    border: `1px solid ${OpenColor.gray[0]}`,
    color: OpenColor.black,
  }),
  button: style({
    background: "red",
    transition: "all .3s",
    display: "flex",
    alignItems: "center",
    ":hover": {
      opacity: 0.8,
      backgroundColor: "red",
    },
    ":active": {
      opacity: 0.6,
    },
  }),
  icon: style({}),
  buttonWrap: style({
    display: "flex",
    justifyContent: "center",
  }),
};

export default styles;
