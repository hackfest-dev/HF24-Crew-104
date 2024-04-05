import React, { useState } from "react";
import "./LoginForm.css";
import { Link, useNavigate } from "react-router-dom";
import { validatePassword } from "./validatePassword";

const SignupFormCustomer = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [location, setLocation] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!username || !password) {
      setError("Username and Password are required fields!");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    const passwordError = validatePassword(password);
    if (passwordError) {
      setError(passwordError);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    const mobileNoLength = 10;
    if (mobileNo.length !== mobileNoLength) {
      setError("Mobile number must be between 10.");
      return;
    }

    const formData = {
      username,
      email,
      market_rep_name: fullName,
      location,
      city,
      zipcode: zipCode,
      state,
      country,
      phone_number: mobileNo,
      password,
      user_type: "customer",
    };
    let response;

    try {
      //   response = { put backend api }
      if (response.status === 200) {
        console.log("Request successful");
        setSubmitted(true);
        setError(null);
        navigate("/customer-profile");
      } else {
        setSubmitted(true);
        setError(`Response Code: ${response.code}, Error is ${response.data}`);
      }
    } catch (err) {
      setSubmitted(true);
      setError(error.toString());
    }
  };

  return (
    <div className="sign-in-with-background">
      <div className="sign-in">
        <div className="title">
          <h1>Create Account As Customer</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Username*"
            />
          </label>
          <label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email Id*"
            />
          </label>
          <label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              placeholder="Full Name*"
            />
          </label>
          <label>
            <input
              type="text"
              id="location"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
              placeholder="Location*"
            />
          </label>
          <label>
            <input
              type="text"
              id="city"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              placeholder="City*"
            />
          </label>
          <label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              required
              placeholder="Zip Code*"
            />
          </label>
          <label>
            <input
              type="text"
              id="state"
              name="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
              placeholder="State*"
            />
          </label>
          <label>
            <input
              type="text"
              id="country"
              name="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
              placeholder="Country*"
            />
          </label>
          <label>
            <input
              type="tel"
              id="mobileNo"
              name="mobileNo"
              value={mobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
              required
              placeholder="Mobile No*"
            />
          </label>
          <label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password*"
            />
          </label>
          <label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="Confirm Password*"
            />
          </label>

          <button type="submit">Register</button>
          {submitted && <p>Form submitted successfully!</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
        <p>
          Already Registered? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupFormCustomer;
