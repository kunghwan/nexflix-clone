import { style } from "@vanilla-extract/css";
import OpenColor from "open-color";

const styles = {
  header: style({
    borderBottom: `1px solid ${OpenColor.gray[7]}`,
    borderColor: OpenColor.gray[7],
    paddingRight: 10,
    display: "flex",
    justifyContent: "space-between",
    background: "rgb(0,0,0,.2)",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 10000,
    backdropFilter: "blur(2px)",
  }),
  button: style({
    fontSize: 30,
    color: OpenColor.red[8],
    padding: "20px 10px",
    height: "auto",
    background: "transparent",
  }),
  ul: style({
    display: "flex",
    columnGap: 10,
    alignItems: "center",
  }),

  Lbutton: style({
    border: "1px solid",
    fontSize: ".75rem",
    display: "flex",
    alignItems: "center",
    columnGap: 5,
    fontWeight: "bold",
    background: "white",
  }),

  loginButton: style({
    background: OpenColor.red[7],
    fontSize: ".75rem",
    color: "white",
    fontWeight: "bold",
  }),
};

export default styles;
