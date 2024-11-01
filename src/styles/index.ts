import { createStitches } from "@stitches/react";

export const {
    config,
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
} = createStitches({
    theme: {
        colors: {
            black: "#252422",
            blackGlass: "rgba(204, 197, 185, 0.10)",
            borderBlack:" rgba(33, 192, 118, 0.01)",
            olive: "#403D39",
            orange: "#FFA737",
            orangeGlass: "rgba(255, 167, 55, 0.4)",
            red: "#C03221",
            redGlass: "rgba(192, 50, 33, 0.35)",
            snow: "#FFFBFC",
            timber: "#CCC5B9",
            white: "#FFFCF2",
            green: "#21C076",
            greenGlass: "rgba(33, 192, 118, 0.35)",
        },
        fonts: {
            russo: "Russo One, sans-serif",
        },
    },
});