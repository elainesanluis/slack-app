import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Login from './components/Login';
import { UserContextProvider } from './components/User';
import Dashboard from './components/Dashboard';
import SignUp from './components/SignUp';

function App() {
  const [user, loading] = useAuthState(auth);
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

 
