import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Layout } from './components/styles';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { UserContextProvider } from './contexts/User';

function App() {
	return (
		<UserContextProvider>
			<div className="App">
				<Layout>
					<Routes>
						<Route path="/" element={<Login />} />
						<Route path="signup" element={<Signup />} />
						<Route path="app/*" element={<Dashboard />} />
					</Routes>
				</Layout>
			</div>
		</UserContextProvider>
	);
}

export default App;
