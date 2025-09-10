import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("https://smart-study-material-access-backend.onrender.com/login", {
        email,
        password,
      });

      if (res.data.status === "success") {
        // ✅ Save user info to localStorage
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate("/dashboard");
      } else {
        setError(res.data.error || "Invalid credentials");
      }
    } catch (err) {
      setError("Server error. Try again later.");
      console.error(err);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2 className="title">Login</h2>
        <form className="form" onSubmit={handleSubmit}>
          <input
            className="input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="button" type="submit">Login</button>
        </form>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
