import "./LoginForm.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const SignupOtp = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(null);
  const [verified, setVerified] = useState(false);
  const navigate = useNavigate();

  const handleVerifyOtp = (event) => {
    event.preventDefault();

    const validOtp = "123456"; // Replace with your OTP verification logic
    if (otp !== validOtp) {
      setError("Invalid OTP. Please try again.");
      return;
    }

    setVerified(true);
    setError(null);

    navigate("/login");
  };

  return (
    <div className="sign-in-with-background">
      <div className="sign-in">
        <h3>OTP is sent to your registered mobile number</h3>
        {!verified && (
          <form onSubmit={handleVerifyOtp}>
            <label>
              <input
                type="text"
                id="otp"
                name="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                placeholder="Enter OTP*"
              />
            </label>
            <button type="submit">Verify OTP</button>
          </form>
        )}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {verified && (
          <p>OTP verified successfully. You will be redirected shortly.</p>
        )}
      </div>
    </div>
  );
};

export default SignupOtp;
