import { styled, keyframes} from "@stitches/react";

const fadeOut = keyframes({
    '0%':{opacity:1, transform:'translateY(0px)'},
    '100%':{opacity:0, transform: 'translateY(20px)'},
  });

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

export const GameContainer = styled("div", {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2rem",
    variants:{
        exit: {
            True:{
                animation: `${fadeOut} 0.5s ease-in-out forwards`
            }
        }

    }
})

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

export const TableContainer = styled("div", {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
    padding: "0.5rem",
    width: "100%",
    height: "100%",
});

export const Linha = styled("div", {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
    width: "100%",
    height: "6px",
    backgroundColor: "rgba(255, 255, 255, 0.10)",
    backdropFilter: "blur(10px)",
});