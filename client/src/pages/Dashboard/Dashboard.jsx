import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Dashboard.scss";
import "../../styles/global.scss";
import { useNavigate } from "react-router-dom";

import AddProject from "../../components/AddProject/AddProject";

const Dashboard = ({
  base_url,
  setCurrentUser,
  currentUser,
  setShowForm,
  handleshowform,
  showform,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const logout = () => {
    sessionStorage.removeItem("token");
    setCurrentUser(null);
  };

  const isEmailValid = () => {
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    if (!emailRegex.test(contact_email)) return false;
    return true;
  };

  useEffect(() => {
    const login = async () => {
      const token = sessionStorage.getItem("token");
      if (!token) return;
      try {
        const response = await axios.get(`${base_url}/dashboard`, {
          headers: {
            Authorization: " Bearer " + token,
          },
        });
        console.log(response.data);
        setCurrentUser(response.data);
      } catch (e) {
        console.log(e);
      }
      setIsLoading(false);
    };
    login();
  }, []);

  if (isLoading) {
    return (
      <main className="dashboard">
        <p>Loading...</p>
      </main>
    );
  }

  if (!currentUser) {
    return (
      <main>
        <p>You must log in to see this page</p>
        <Link to="/login">Log In</Link>
      </main>
    );
  }
  return (
    <>
      <div className="dashboard">
        <section>
          <div className="add">
            <button className="add__button" onClick={handleshowform}>
              +
            </button>
          </div>
          <AddProject
            base_url={base_url}
            currentUser={currentUser}
            showform={showform}
            handleshowform={handleshowform}
            setShowForm={setShowForm}
          />
        </section>
      </div>
    </>
  );
};

export default Dashboard;
