import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/Login", { replace: true });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Logout</h1>
      <h2>Are You Sure You want to Logout?</h2>
      <button onClick={handleLogout} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
