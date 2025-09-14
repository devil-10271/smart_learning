import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from 'react-router-dom';


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    // Basic email format check
    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Enter a valid email address.";
    }
    // Basic password length check
    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Role:", role);
    alert("Login submitted!");
    navigate('/');  // Navigate to dashboard root
  };

  return (
    <div className="login-page-container">
      <div className="container d-flex justify-content-center align-items-center position-relative">
        <div className="login-academic-icon" style={{ top: "50px", left: "50px" }}>
          <svg width="80" height="80" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
          </svg>
        </div>

        <div className="login-card p-3" style={{ width: "420px", maxWidth: "90vw" }}>
          <div className="text-center mb-4">
            <div
              className="d-inline-flex justify-content-center align-items-center rounded-circle mb-3"
              style={{
                width: "70px",
                height: "70px",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                
              }}
            >
              <svg width="35" height="35" fill="white" viewBox="0 0 24 24">
                <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
              </svg>
            </div>
            <h2 className="login-title fw-bold mb-2">Login Page</h2>
            <p className="text-muted small">Welcome back to your learning hub</p>
          </div>

          <div className="mb-4">
            <label className="login-label fw-semibold text-dark">
              Select Your Role
            </label>
            <select
              className="login-select"
              style={{ paddingLeft: "1rem" }}
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="">Choose your role...</option>
              <option value="student">🎓 Student</option>
              <option value="faculty">👨‍🏫 Faculty</option>
              <option value="admin">⚙️ Admin</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="login-label fw-semibold text-dark">
              Email Address
            </label>
            <div className="login-input-group">
              <span className="login-input-icon">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
              <input
                type="email"
                className="login-input"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            {errors.email && (
              <div className="text-danger small mt-1">{errors.email}</div>
            )}
          </div>

          <div className="mb-4">
            <label className="login-label fw-semibold text-dark">Password</label>
            <div className="login-input-group">
              <span className="login-input-icon">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </span>
              <input
                type="password"
                className="login-input"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {errors.password && (
              <div className="text-danger small mt-1">{errors.password}</div>
            )}
          </div>

          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="form-check d-flex">
              <input type="checkbox" className="form-check-input" />
              <label className="form-check-label small text-muted mt-2 ms-2">
                Remember me
              </label>
            </div>
            <a href="#" className="small text-decoration-none">
              Forgot password?
            </a>
          </div>

          <button
            onClick={handleSubmit}
            className="login-button w-100 mb-4"
            type="submit"
          >
            Sign In to Portal
          </button>

          <div className="text-center mt-3">
            <p>Don't have an account? <Link to="/signup" className="login-link text-decoration-none">Sign Up</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
