import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2b2942",
      contrastText: "#C3DAE1",
    },
    secondary: {
      main: "#edf2ff",
    },
  },
  typography: {
    // allVariants: { color: "#C3DAE1" },
    fontFamily: ["Poppins", "sans-serif", "Roboto"].join(","),
  },
});
export default theme;
