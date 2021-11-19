import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogOutHome from './components/LogOutHomePage/LogOutHomePage';
import LogInPage from './components/LogInPage/LogInPage';
import SignUpPage from './components/SignUpPage/SignUpPage';
// import SignUpInputAgePage from './components/SignUpInputAgePage/SignUpInputAgePage';
import ForgotPasswordPage from './components/ForgotPasswordPage/ForgotPasswordPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<LogInPage />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/forgot_password" element={<ForgotPasswordPage />} />
        <Route path="/" element={<LogOutHome />} />
      </Routes>
    </Router>
  );
}

export default App;
