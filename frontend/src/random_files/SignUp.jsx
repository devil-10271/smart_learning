import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import { FaUser, FaEnvelope, FaLock, FaUserGraduate } from 'react-icons/fa';

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: ''
  });
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    if (!value.trim()) return `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    switch (name) {
      case 'email':
        return /\S+@\S+\.\S+/.test(value) ? '' : 'Invalid email address';
      case 'password':
        return value.length >= 6 ? '' : 'Password must be at least 6 characters';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log('Form submitted:', formData);
    // API call would go here
  };

  return (
    <div className="signup-container">
      <div className="signup-wrapper">
        <div className="signup-header">
          <h2>Sign Up</h2>
          <p>Join our learning community today</p>
        </div>

        <form onSubmit={handleSubmit} className="signup-form">
          <div className="input-group">
            <FaUser className="input-icon" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'error' : ''}
            />
            <span className="error-message">{errors.name || ''}</span>
          </div>

          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
            />
            <span className="error-message">{errors.email || ''}</span>
          </div>

          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className={errors.password ? 'error' : ''}
            />
            <span className="error-message">{errors.password || ''}</span>
          </div>

          <div className="input-group">
            <FaUserGraduate className="input-icon" />
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className={errors.role ? 'error' : ''}
            >
              <option value="">Select Role</option>
              <option value="student">Student</option>
              <option value="faculty">Faculty</option>
              <option value="admin">Administrator</option>
            </select>
            <span className="error-message">{errors.role || ''}</span>
          </div>

          <div className="remember-me">
            <label>
              <input type="checkbox" name="remember" />
              <span>Remember me</span>
            </label>
          </div>

          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>

        <div className="text-center mt-3">
          <p>Already have an account? <Link to="/login" className="text-primary text-decoration-none">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;


