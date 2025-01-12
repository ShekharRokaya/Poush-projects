import React, { useState } from "react";
import { useParams } from "react-router-dom"; // If you're using React Router

const ResetPassword = () => {
  const { token } = useParams(); // Token passed from the URL
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const handlePasswordReset = async () => {
    // Clear previous message
    setMessage("");

    try {
      // Make an API call to reset the password
      const response = await fetch(`/reset-password/${token}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newPassword }),
      });

      if (response.ok) {
        setMessage("Password successfully reset. You can now log in.");
      } else {
        setMessage("Error resetting password. Please try again.");
      }
    } catch (error) {
      setMessage("Error: Could not reset password.");
    }
  };

  return (
    <div>
      <h2>Reset Your Password</h2>
      <input
        type="password"
        placeholder="Enter your new password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button onClick={handlePasswordReset}>Reset Password</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ResetPassword;
