import { styled } from "@stitches/react";

export const HomeContainer = styled("div", {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    backgroundColor: "$black",
    color: "$white",
    fontFamily: "$russo",
    gap: "2rem",
    padding: "0.5rem",
});

export const Title = styled("h1", {
    color: "$snow",
    fontSize: "4.5rem",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
});

export const HomeTitle = styled("div", {
    display: "flex",
    padding: "4px",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
    transition: "all 0.3s ease",
    "&:hover": {
        borderBottom: "2px solid $red",
        borderRadius: "1rem",
    },
});