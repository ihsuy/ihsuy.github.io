import React from 'react';
import './App.css';
import Homepage from './components/Homepage';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';

// Modern theme for the new design
const modernTheme = {
  colors: {
    primary: '#667eea',
    secondary: '#764ba2',
    background: '#ffffff',
    text: '#2c3e50',
    lightGray: '#f8f9fa',
    darkGray: '#6c757d'
  },
  fonts: {
    primary: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
    heading: "'Inter', 'Segoe UI', 'Roboto', sans-serif"
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1200px'
  }
};

function App() {
  return (
    <ThemeProvider theme={modernTheme}>
      <>
        <GlobalStyles />
        <div className="App">
          <Homepage />
        </div>
        <div className="pos-f-t p-2 margin">
          <span className="copyright">©️ Yushi Qiu. All rights reserved.</span>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
