import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import styled from "styled-components";
import Chat from './components/Chat';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
          <Appbody>
            <Sidebar/>
            <Routes>
             <Route path='/' exact element={<Chat></Chat>}></Route>
          </Routes>
        </Appbody>
      </Router>
    </div>
  );
}

export default App;


const Appbody = styled.div`
 display: flex;
 height: 100vh;
`;