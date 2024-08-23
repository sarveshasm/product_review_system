import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from './pages/Login/LoginPage';
import Student from './pages/Students/students';
import Faculty from './pages/Faculty/faculty';
import Marks from './pages/Marks/marks';
import Review from './pages/Review/review';
import AdminReview from './pages/AdminReview/adminReview';
import Cookies from 'js-cookie';

function App() {
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const role = Cookies.get('userRole');
    console.log(role)
    setUserRole(role);
  }, []);

  if (!userRole) {
    return <LoginPage onLogin={setUserRole} />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={`/${userRole}`} />} />
        {userRole === "student" && (
          <Route path="/student" element={<Student />} />
        )}
        {userRole === "faculty" && (
          <>
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/marks" element={<Marks />} />
            <Route path="/review" element={<Review />} />
          </>
        )}
        {userRole === "admin" && (
          <Route path="/adminreview" element={<AdminReview />} />
        )}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
