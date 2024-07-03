import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UI = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!emailRegex.test(email)) {
      alert("Sahi Email Daal Bhai!");
      return false;
    } else {
      return true;
    }
  };

  const validatePassword = (password) => {
    if (password.length < 6) {
      alert("Password must be at least 6 characters long");
      return false;
    } else {
      return true;
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (validateEmail(email) && validatePassword(password)) {
      navigate("/app");
    }
  };

  return (
    <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center min-vh-100">
      <div className="col-md-4 col-lg-3 col-xl-5 mt-5 ps-5 pt-5 rounded shadow p-5"style={{ backgroundColor: '#f8f9fa' }}>
        <h2 className="mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default UI;
