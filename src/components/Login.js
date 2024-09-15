import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import the CSS file for styling

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Add a state to track show password
  const [error, setError] = useState(''); // Error message state

  const navigate = useNavigate(); // To navigate after successful login

  // Dummy credentials
  const dummyEmail = "user@example.com";
  const dummyPassword = "password123";

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === dummyEmail && password === dummyPassword) {
      // If the credentials are correct, redirect to homepage
      navigate('/Home');
    } else {
      // If credentials are wrong, show an error message
      setError('Invalid email or password');
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h2>Login</h2>
        <p>
          By signing in you are agreeing to our 
          <a href="#"> Term and privacy policy</a>
        </p>
        
        <div className="login-register-toggle">
          <span className="active">Login</span> | <span>Register</span>
        </div>

        {error && <p className="error-message">{error}</p>} {/* Show error if exists */}

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
              <span className="show-password" onClick={handleShowPassword}>👁️</span>
            </div>
          </div>

          <div className="options">
            <label>
              <input type="checkbox" />
              Remember password
            </label>
            <a href="#" className="forgot-password">Forget password</a>
          </div>

          <button type="submit" className="login-btn">Login</button>
        </form>

        <div className="social-login">
          <p>or connect with</p>
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-pinterest-p"></i>
            <i className="fab fa-linkedin-in"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
