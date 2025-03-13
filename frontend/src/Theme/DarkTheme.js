import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#e91e63"  // Pinkish Red
        },
        secondary: {
            main: "#5A20CB"  // Deep Violet
        },
        black: {
            main: "#242B2E"  // Dark Grayish Blue
        },
        background: {
            default: "#0D0D0D",  // Very Dark Gray
            paper: "#0D0D0D"    // Same as default background
        },
        textColor: {
            primary: "#111111"  // Dark Gray for text
        }
    }
});
