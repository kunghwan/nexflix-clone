import { style } from "@vanilla-extract/css";
import homeStyle from "./home.css";
import OpenColor from "open-color";

const top = 25;

const styles = {
  container: style([
    homeStyle.container.div,
    {
      border: "1px solid",
    },
  ]),
  content: style({
    border: "1px solid",
    position: "relative",
    padding: 20,
    marginTop: top,
    backgroundColor: OpenColor.gray[8],
    borderRadius: 10,
    transition: "all.3s",
    ":hover": {
      transform: "scale(1.03)",
    },
  }),
  wrap: style({
    // fontWeight: 600,
  }),
  title: style({
    fontWeight: "600",
    fontSize: "1.1rem",
  }),
  desc: style({}),
  button: style({
    backgroundColor: OpenColor.gray[7],
    marginTop: 20,
    hover: {
      backgroundColor: OpenColor.gray[6],
    },
  }),
  icon: style({
    position: "absolute",
    top: `-${top}px`,

    fontSize: 40,
  }),
};

export default styles;
