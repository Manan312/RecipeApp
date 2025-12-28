import React, { useState } from "react";
import toast from "react-hot-toast";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import api from "../../api/middleware";

export default function SignUp({ setUser }) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    const isValidEmail = (email) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };
    // ✅ Email format check
    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address 📧");
      return;
    }
    // ✅ Password match check
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const res = await api.post("/auth/signup", {
        username,
        password,
        email,
        fullname: fullName,
      });
      console.log(res);
      toast.success("Account created successfully 🎉");
      setUser(true);
      localStorage.setItem("user", JSON.stringify(username));
      navigate("/login");
    } catch (error) {
      if (error.response?.status === 409) {
        toast.error("User already exists");
      } else {
        toast.error("Signup failed. Please try again.");
      }
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <form onSubmit={handleSignUp}>
          <h2 className="signup-title">Sign Up</h2>

          {/* Username */}
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              autoComplete="username"
              placeholder="Enter username"
              required
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          {/* Full Name */}
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter full name"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              autoComplete="email"
              placeholder="Enter email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="form-group password-group">
            <label>Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="toggle-eye"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="form-group password-group">
            <label>Confirm Password</label>
            <div className="password-wrapper">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <span
                className="toggle-eye"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? "🙈" : "👁️"}
              </span>
            </div>
          </div>

          <button className="btn-signup">Sign Up ✔</button>
        </form>
        <button className="btn-link" onClick={() => navigate("/login")}>
          Already have an account?
        </button>
      </div>
    </div>
  );
}
