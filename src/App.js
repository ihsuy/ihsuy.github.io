import React, { useState } from "react";

import "./App.css";
import MyNavBar from "./components/navbar";
import About from "./components/about";

import { ThemeProvider } from "styled-components";
import {
  springTheme,
  summerTheme,
  autumnTheme,
  winterTheme,
  standardTheme,
} from "./theme";

import { GlobalStyles } from "./global";

function App() {
  const getSeason = d => Math.floor((d.getMonth() / 3)) % 4
  const season = ['winter', 'spring', 'summer', 'autumn'][getSeason(new Date())]
  const [theme, setTheme] = useState(season); 
  
  // The function that toggles between themes
  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (theme === "spring") {
      setTheme("summer");
    } else if (theme === "summer") {
      setTheme("autumn");
    } else if (theme === "autumn") {
      setTheme("winter");
    } else if (theme === "winter") {
      setTheme("standard");
    } else {
      setTheme("spring");
    }
  };

  const getTheme = (theme) => {
    return theme === "spring"
      ? springTheme
      : theme === "summer"
      ? summerTheme
      : theme === "autumn"
      ? autumnTheme
      : theme === "winter"
      ? winterTheme
      : standardTheme;
  };

  return (
    <ThemeProvider theme={getTheme(theme)}>
      <div className="App">
        <GlobalStyles />
        <div className="pos-f-t p-2 margin"></div>
        <MyNavBar
          onToggleTheme={toggleTheme}
          theme={theme}
          background={getTheme(theme).navbarBackground}
          textColor={getTheme(theme).navbarTextColor}
          textColorUnavailable={getTheme(theme).navbarTextColorUnavailable}
        />
        <div className="container">
          <About theme={theme} />
        </div>
        <div className="pos-f-t p-2 margin"><span className="copyright">©️ Yushi Qiu. All rights reserved.</span>
        </div>
        
      </div>
    </ThemeProvider>
  );
}

export default App;
