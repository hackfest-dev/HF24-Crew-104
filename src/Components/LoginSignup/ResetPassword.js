import "./LoginForm.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { validatePassword } from "./validatePassword";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const [messageVisible, setMessageVisible] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const passwordError = validatePassword(newPassword);
    if (passwordError) {
      setError(passwordError);
      return;
    }

    // Replace with API call to reset password
    const resetSuccess = true;

    if (!resetSuccess) {
      setError(
        "An error occurred while resetting your password. Please try again."
      );
      return;
    }

    setSuccess(true);
    setError(null);
  };

  useEffect(() => {
    if (success) {
      setMessageVisible(true);
      requestAnimationFrame(() => {
        navigate("/login", {
          state: { message: "Password reset successfully!" },
        });
      });
    }
  }, [success]);

  return (
    <div className="sign-in-with-background">
      <div className="sign-in">
        <h1>Reset Password</h1>
        <p>Enter your new password and confirm it.</p>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              placeholder="New Password*"
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
              placeholder="Confirm New Password*"
            />
          </label>
          <button type="submit">Reset Password</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && (
          <p>
            Password reset successfully! Redirecting to login in a few
            seconds...
          </p>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
