import React from 'react';
import './LoginPage.css';
import bit from "../../assets/bit.png";
import google from "../../assets/google.svg";

function LoginPage() {
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
            <form>
              <div className='form-input'>
                <input  type="email" placeholder="Email" className="input-field" />
                <input  type="password" placeholder="Password" className="input-field" />
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


