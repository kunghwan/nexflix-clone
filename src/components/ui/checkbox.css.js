import { style } from "@vanilla-extract/css";
import OpenColor from "open-color";

const styles = {
  container: style({
    border: "1px solid",
  }),
  button: style({
    background: "transparent",
    ":hover": {
      background: "transparent",
    },
  }),
  icon: style({
    color: OpenColor.blue[6],
  }),
  label: style({}),
};

export default styles;
