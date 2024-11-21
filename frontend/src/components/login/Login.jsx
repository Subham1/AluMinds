import React, { useState } from "react";
import "./Login.css";
export default function Login(){
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          return Promise.reject("Failed to authenticate");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Login successful:", data);
        // Handle success (for example, store user data, redirect, etc.)
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error (show error message to the user)
      });
  };

  return (
    <div>
      <div className="login-container">
        <div className="login-box">
          <h2 className="login-title">LOGIN</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email Id"
              value={formData.email}
              onChange={handleChange}
              className="login-input"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="login-input"
              required
            />
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
