import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import BlogList from './components/blog/BlogList';
import BlogPost from './components/blog/BlogPost';
import AdminPage from './components/admin/AdminPage';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';

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
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="App">
                  <Homepage />
                </div>
                <div className="pos-f-t p-2 margin">
                  <span className="copyright">©️ Yushi Chonan. All rights reserved.</span>
                </div>
              </>
            }
          />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/:slug" element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
