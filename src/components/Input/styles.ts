import { styled } from "@stitches/react";

export const InputContainer = styled("div", {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "1rem",
    border: "1px solid $blackGlass",
    background: "rgba(204, 197, 185, 0.09)",
    backdropFilter: "blur(2rem)",
});

export const InputField = styled("input", {
    display: "flex",
    padding: "1rem 48px 1rem 1rem",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
    borderRadius: "8px 0px 0px 8px",
    border: "2px solid $snow",
    color: "$timber",
    fontFamily: "$russo",
    fontSize: "2rem",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    background: "transparent",
});

export const SendButton = styled("button", {
    display: "flex",
    padding: "1.3rem 1rem",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    borderRadius: "0px 8px 8px 0px",
    border: "2px solid $snow",
    background: "transparent",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
        background: "$redGlass",
    },
});