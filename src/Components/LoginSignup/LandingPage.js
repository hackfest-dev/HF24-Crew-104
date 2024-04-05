import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

const LandingPage = () => {
  const [userType, setUserType] = useState("");
  const navigate = useNavigate();

  const handleUserTypeSelection = (selectedType) => {
    setUserType(selectedType);
    navigate(`/signup/${selectedType}`);
  };

  return (
    <div className="sign-in-with-background">
      <div className="sign-in">
        <h1 style={{ fontSize: "60px" }}>Welcome!</h1>
        <p style={{ fontSize: "25px" }}>Who are you signing up as?</p>
        <button
          style={{ margin: "5%", fontSize: "20px" }}
          onClick={() => handleUserTypeSelection("farmer")}
        >
          Farmer
        </button>
        <button
          style={{ margin: "5%", fontSize: "20px" }}
          onClick={() => handleUserTypeSelection("customer")}
        >
          Customer
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
