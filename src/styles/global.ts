import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  body: {
    fontFamily: "Russo One, sans-serif",
    height: "100%",
    backgroundColor: "$black",
  },
});