import { style } from "@vanilla-extract/css";
import OpenColor from "open-color";

const flex = style({
  display: "flex",
  flexDirection: "column",
});

const styles = {
  // 문자열
  container: style([
    flex,
    {
      padding: "30px 20px",
      background: OpenColor.indigo[9],
      display: "flex",
      flexDirection: "column",
      rowGap: 10,
      alignItems: "flex-end",
      margin: 10,
      borderRadius: 10,
      ":hover": {
        background: OpenColor.red[7],
      },
    },
  ]),
  title: style({
    fontWeight: "bold",
  }),
  desc: style({
    fontSize: ".9rem",
    color: OpenColor.gray[4],
  }),
  icon: style({
    // display: "flex",
    // justifyContent: "end",

    fontSize: 50,
  }),
  wrap: style([
    flex,
    {
      rowGap: 10,

      width: "100%",
    },
  ]),
};

export default styles;
