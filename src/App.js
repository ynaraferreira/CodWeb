import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Tecnologias from './Tecnologias';
import NavBar from './Navbar';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Calibri;
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

const App = () => {
  return (
    <Router>
      <AppContainer>
        <GlobalStyle />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Tecnologias" element={<Tecnologias />} />
        </Routes>
      </AppContainer>
    </Router>
  );
};

export default App;
