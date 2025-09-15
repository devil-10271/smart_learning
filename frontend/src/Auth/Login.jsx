import React, { useState } from "react";
import "./Login.css";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import SP from "../Profile/Student_Profile";
// import Student_Profile from "../Profile/Student_Profile";
import axios from "axios";
import { handleError } from '../Basics/Noti';



function Login() {

  const Navig = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [errors, setErrors] = useState({});

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

    axios.post("http://localhost:8081/Login", [email, password, role])
      .then(res => {
        localStorage.removeItem('email');
        localStorage.removeItem('role');
        if (res.data.fetch_data.length === 0) {
          handleError("No user Found . please check the data inputs !!") ||
            alert("No user Found . please check the data inputs !!")
        }
        const one_user = res.data.fetch_data[0]
        if (res.data.fetch_data.length === 1) {
          localStorage.setItem("email", one_user.email);
          localStorage.setItem("role", one_user.role);

          if (localStorage.getItem("role") === "faculty") {
            setTimeout(() => {
              Navig("/Faculty_profile"); // ✅ fixed
            }, 1000);
          } else if (localStorage.getItem("role") === "student") {

            setTimeout(() => {
              Navig("/Student_profile"); // ✅ fixed
            }, 1000);
          }
        }
      })
      .catch(err => console.log(err))
  };


  return (

    <div className="login-container d-flex justify-content-center align-items-center position-relative">
      {/* Background Academic Icons */}
      <div className="academic-icon" style={{ top: "50px", left: "50px" }}>
        <svg width="80" height="80" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
        </svg>
      </div>


      {/* Main Login Card */}
      <div className="card" style={{ width: "420px", maxWidth: "90vw", padding: "1rem 2rem" }}>
        {/* Header */}
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
          <h2 className="header1 fw-bold mb-2">Login Page</h2>
          <p className="text-muted small">Welcome back to your learning hub</p>
        </div>

        {/* Role Selection */}
        <div className="mb-4">
          <label className="form-label fw-semibold text-dark">
            Select Your Role
          </label>
          <select
            className="form-select input"
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

        {/* Email Field */}
        <div className="mb-4">
          <label className="form-label fw-semibold text-dark">
            Email Address
          </label>
          <div className="input-group">
            <span className="input-icon">
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
              className="form-control input"
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

        {/* Password Field */}
        <div className="mb-4">
          <label className="form-label fw-semibold text-dark">Password</label>
          <div className="input-group">
            <span className="input-icon">
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
              className="form-control input"
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

        {/* Remember Me & Forgot Password */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="form-check d-flex">
            <input type="checkbox" className="form-check-input" />
            <label className="form-check-label small text-muted mt-2 ms-2">
              Remember me
            </label>
          </div>
          <a href={"/"} className="small text-decoration-none">
            Forgot password?
          </a>
        </div>

        {/* Login Button */}
        <button
          onClick={handleSubmit}
          className="button w-100 mb-4"
          type="submit"
        >
          Sign In to Portal
        </button>

        <div className="text-center mt-2">
          <span className="small text-muted">Don't have an account? </span>
          <Link to="/signup">Sign Up</Link>
        </div>


      </div>
    </div>


  );
}

export default Login;
