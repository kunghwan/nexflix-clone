import { style } from "@vanilla-extract/css";
import OpenColor from "open-color";

const styles = {
  h1: style({
    fontSize: 100,
    fontWeight: 900,
    color: "red",
  }),
  input: {
    div: style({
      display: "flex",
      flexDirection: "column",
    }),
    input: style({
      outline: "none",
      backgroundColor: "transparent",
      border: `1px solid ${OpenColor.green[6]}`,
      color: OpenColor.gray[2],
      "::placeholder": {
        color: "tomato",
      },
    }),
  },
};

export default styles;

// npm i vite@^4.0.0
// npm i
// npm i -D @vanilla-extract/vite-plugin
