import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
  });

  const PostData = async (e) => {
    e.preventDefault();
  
    const nameError = validateName(name);
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
  
    if (nameError || emailError || passwordError) {
      setErrors({
        name: nameError,
        email: emailError,
        password: passwordError,
      });
      return;
    }
  
    try {
      const res = await fetch('http://localhost:8000/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }), // Include the name field here
      });
  
      const data = await res.json();
  
      if (!res.ok) { // Check for non-ok responses
        window.alert('Invalid Registration');
        console.log('Invalid Registration');
        if (data.error) {
          console.log(data.error);
        }
      } else {
        window.alert('Registration Successful');
        console.log('Registration Successful');
        navigate('/login');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };
  

  const validateName = (name) => {
    const words = name.trim().split(/\s+/);
    if (words.length > 4) {
      return 'Name must contain at most 4 words';
    }
    return '';
  };

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

  const handleNameBlur = () => {
    const nameError = validateName(name);
    setErrors((prevErrors) => ({ ...prevErrors, name: nameError }));
  };

  const handleEmailBlur = () => {
    const emailError = validateEmail(email);
    setErrors((prevErrors) => ({ ...prevErrors, email: emailError }));
  };

  const handlePasswordBlur = () => {
    const passwordError = validatePassword(password);
    setErrors((prevErrors) => ({ ...prevErrors, password: passwordError }));
  };

  return (
    <div className="login-container">
      <form onSubmit={PostData}>
        <div className="form">
          <h1>SignUp</h1>
          <img src="/download.png" alt="Logo" />
          <h2>Student Attendance App</h2>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={handleNameBlur}
          />
          {errors.name && <div className="error">{errors.name}</div>}
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
          <button type="submit">Sign Up</button>
          <a href="#" onClick={() => navigate('/login')}>
            Already have an account? Login!
          </a>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
