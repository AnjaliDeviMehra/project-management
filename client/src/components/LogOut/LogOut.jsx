import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LogOut = ({ setCurrentUser }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = () => {
      sessionStorage.removeItem("token");
      setCurrentUser(null);
      navigate("/login");
      window.location.reload();
    };
    logout();
  }, [navigate]);

  return <div>Logging Out........</div>;
};

export default LogOut;
