
import React from 'react';
import LoginPage from './pages/Login/LoginPage';
import Student from './pages/Students/students';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<LoginPage/>} />
      <Route path="/loginpage" element={<LoginPage />} />
      <Route path="/student" element={<Student />} />

      </Routes>
      </Router>
  );
}

export default App;

