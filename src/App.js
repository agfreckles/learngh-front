import React from "react";
// import "./statics/css/reset.css";
import "./assets/css/index.scss";
import { Counter } from "./features/counter/Counter";
import Home from "./features/layout/Home";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./features/theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
