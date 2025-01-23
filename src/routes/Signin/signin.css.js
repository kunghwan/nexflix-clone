import { style } from "@vanilla-extract/css";
import OpenColor from "open-color";

const styles = {
  form: style({
    border: "1px solid",
    display: "flex",
    flexDirection: "column",
    rowGap: 20,
    padding: 30,
    paddingTop: 90,
  }),
  login: style({
    background: OpenColor.red[7],
    color: OpenColor.gray[0],
  }),
  forget: style({
    background: "transparent",
    ":hover": {
      textDecoration: "underline",
    },
  }),
  new: style({
    background: "transparent",
    textAlign: "left",
    paddingLeft: 0,
    color: OpenColor.gray[5],
  }),
  span: style({
    background: "transparent",
    color: OpenColor.gray[1],
    ":hover": {
      textDecoration: "underline",
    },
  }),
};

export default styles;
