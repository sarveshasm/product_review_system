import React, { useState } from 'react';
import './LoginPage.css';
import bit from "../../assets/bit.png";
import google from "../../assets/google.svg";
import Cookies from 'js-cookie';

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(event) {
    event.preventDefault();
    
    const users = [
      { username: "sarvesh", password: "sarvesh@292004", role: "student" },
      { username: "priyan", password: "priyan@2004", role: "faculty" },
      { username: "admin", password: "admin", role: "admin" }
    ];

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
      Cookies.set('userRole', user.role, { expires: 7 }); // Set cookie with a 7-day expiration
      onLogin(user.role); // Pass the role to App
    } else {
      alert('Username or password is incorrect!');
    }
  }

  return (
    <div className="background">
      <div className="inner-container">
        <div className='logo-form'>
          <div className="welcome-logo">
            <h1>Welcome</h1>
            <img src={bit} alt="Logo" className='bit' />
            <b>Product Portal</b>
          </div>
          <div className="form-container">
            <form onSubmit={handleLogin}>
              <div className='form-input'>
                <input 
                  type="text" 
                  placeholder="Username" 
                  className="input-field" 
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)} 
                />
                <input 
                  type="password" 
                  placeholder="Password" 
                  className="input-field" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                />
                <button type="submit" className="button">
                  <b>Login</b>
                </button>
              </div>
            </form>
          </div>
        </div>
        <hr />
        <div className="google-login-button">
          <button className="google-button">
            <img src={google} alt="Google Logo" className="google-logo" />
            <b>Login with Google</b>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
