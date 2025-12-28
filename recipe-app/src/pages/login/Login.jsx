import React, {  useState } from "react";
import toast from "react-hot-toast";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import api from "../../api/middleware";

export default function Login({ setUser }) {
  const [username, setUserName] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", {
        username,
        password,
      });
      if (res.status == 200 && res.data.access_token == null) {
        toast.error(
          "We couldn’t sign you in. Please check your details and try again.",
          {
            duration: 4000,
            icon: "🔐",
          }
        );
        return;
      } else {
        toast.success(
          "Welcome back " +
            res.data.username +
            "! You have successfully logged in.",
          {
            duration: 4000,
            icon: "🔐",
          }
        );
        setUser(true);
        navigate("/");
        localStorage.setItem("user", JSON.stringify(res.data));
        setUserName("");
        setPassword("");
      }
    } catch (error) {
      console.log("Login error:", error);
      if (error.response) {
        // Backend responded with non-2xx
        if (error.response.status === 401) {
          toast.error(
            "We couldn’t sign you in. Please check your email and password.",
            { duration: 4000, icon: "🔐" }
          );
        } else {
          toast.error("Login failed. Please try again in a moment.", {
            duration: 4000,
          });
        }
      } else {
        // Network / server down
        toast.error(
          "Unable to connect to the server. Please try again later.",
          { duration: 4000 }
        );
      }
    }
  };
  // useEffect(() => {
  //   document.title = "Login - RecipeApp";
  //   localStorage.removeItem("user");
  // }, []);
  return (
    <div className="login-container">
      <div class="login-box">
        <form className="" onSubmit={handleLogin}>
          <h2 className="login-title">Login</h2>

          <div className="form-group">
            <label>Username</label>
            <input
              id="user"
              type="text"
              autoComplete="username"
              placeholder="Enter username"
              required
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              id="password"
              autoComplete="current-password"
              type="password"
              placeholder="Enter password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="btn-login">Sign In ✔</button>
        </form>
        <button className="btn-link" onClick={() => navigate("/signup")}>
          Create a new account
        </button>
      </div>
    </div>
  );
}
