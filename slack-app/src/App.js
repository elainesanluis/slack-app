import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import styled from "styled-components";
import Chat from './components/Chat';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Login from './components/Login';

function App() {
  const [user, loading] = useAuthState(auth);
  return (
    <div className="App">
      <Router>
       {!user ? (
          <Login/>
        ): (
          <>
        <Header/>
          <Appbody>
            <Sidebar/>
            <Routes>
             <Route path='/' exact>
              <Chat/>
             </Route>
          </Routes>
        </Appbody>
        </>
        )
      };
      </Router>
    </div>
  );
}

export default App;


const Appbody = styled.div`
 display: flex;
 height: 100vh;
`;