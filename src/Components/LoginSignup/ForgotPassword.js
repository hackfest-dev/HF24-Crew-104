import "./LoginForm.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [mobileNo, setMobileNo] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(null);
  const [otpSent, setOtpSent] = useState(false);
  const [verified, setVerified] = useState(false);

  const navigate = useNavigate();

  const handleSubmitMobileNo = (event) => {
    event.preventDefault();

    const mobileNoLength = 10;
    if (mobileNo.length !== mobileNoLength) {
      setError("Mobile number must be between 10.");
      return;
    }

    // opt sending logic write here
    setOtpSent(true);
    setError(null);
  };

  const handleVerifyOtp = (event) => {
    event.preventDefault();

    const validOtp = "123456"; // opt verification logic here
    if (otp !== validOtp) {
      setError("Invalid OTP. Please try again.");
      return;
    }

    setVerified(true);
    setError(null);
  };

  useEffect(() => {
    if (verified) {
      navigate("/reset-password", { state: { mobileNo } });
    }
  }, [verified]);

  return (
    <div className="sign-in-with-background">
      <div className="sign-in">
        <h1>Forgot Password</h1>
        <p>Enter your registered mobile number to reset your password.</p>
        {!otpSent && (
          <form onSubmit={handleSubmitMobileNo}>
            <label>
              <input
                type="tel"
                id="mobileNo"
                name="mobileNo"
                value={mobileNo}
                onChange={(e) => setMobileNo(e.target.value)}
                required
                placeholder="Mobile Number*"
              />
            </label>
            <button type="submit">Send OTP</button>
          </form>
        )}
        {otpSent && !verified && (
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

export default ForgotPassword;
