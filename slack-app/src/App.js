import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import { UserContextProvider } from './contexts/User';
import Dashboard from './pages/Dashboard';
import SignUp from './pages/SignUp';

function App() {
  
  return (
      <UserContextProvider>
        <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
			      <Route path="/signup" element={<SignUp />} />
			      <Route path="/app" element={<Dashboard />} />  
          </Routes>
        </Router>
        </div>
      </UserContextProvider>
  );
}

export default App;

 
