import React from 'react';
import ReactDOM from 'react-dom'; 
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import styled from "styled-components";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Login from './components/Login';
import { UserContextProvider } from './components/User';

function App() {
  const [user, loading] = useAuthState(auth);
  return (
    <div className="App">
      <UserContextProvider>
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
             </Route>
          </Routes>
        </Appbody>
        </>
        )
      };
      </Router>
      </UserContextProvider>
    </div>
  );
}

export default App;


const Appbody = styled.div`
 display: flex;
 height: 100vh;
`;