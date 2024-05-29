import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    if (!email.includes('@')) {
      return 'Email must contain @';
    }
    return '';
  };

  const validatePassword = (password) => {
    const errors = [];
    if (password.length < 8) {
      errors.push('Password must be at least 8 characters long');
    }
    if (!/[A-Z]/.test(password)) {
      errors.push('Password must contain at least one uppercase letter');
    }
    if (!/[!@#$%^&*]/.test(password)) {
      errors.push('Password must contain at least one special character (!@#$%^&*)');
    }
    return errors.join(', ');
  };

  const handleEmailBlur = () => {
    const emailError = validateEmail(email);
    setErrors((prevErrors) => ({ ...prevErrors, email: emailError }));
  };

  const handlePasswordBlur = () => {
    const passwordError = validatePassword(password);
    setErrors((prevErrors) => ({ ...prevErrors, password: passwordError }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    if (emailError || passwordError) {
      setErrors({
        email: emailError,
        password: passwordError,
      });
      return;
    }

    try {
      const res = await fetch('http://localhost:8000/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        if (data.role === 'admin') {
          navigate('/adminpanel'); // Redirect to the admin panel
        } else {
          navigate('/userdashboard'); // Redirect to user dashboard or home page
        }
      } else {
        setLoginError(data.error || 'Please enter the correct email and password.');
      }
    } catch (err) {
      setLoginError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="form">
        <h1>Login</h1>
        <img src="/download.png" alt="Logo" />
        <h2>Student Attendance App</h2>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={handleEmailBlur}
        />
        {errors.email && <div className="error">{errors.email}</div>}
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={handlePasswordBlur}
        />
        {errors.password && <div className="error">{errors.password}</div>}
        {loginError && <div className="error">{loginError}</div>}
        <button type="submit">Login</button>
        <a href="#" onClick={() => navigate('/SignUp')}>
          Don`t have an account? Sign up
        </a>
      </form>
    </div>
  );
};

export default AdminLogin;
