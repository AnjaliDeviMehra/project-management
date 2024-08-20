import React from "react";
import { useEffect, useState } from "react";
import add from "../../assets/icons/add.png";
import axios from "axios";
import "./Dashboard.scss";
import "../../styles/global.scss";
import { useNavigate } from "react-router-dom";

import "react-calendar/dist/Calendar.css";
import { Charts } from "../../components/Charts/Charts";

import AddProject from "../../components/AddProject/AddProject";
import OverView from "../../components/OverView/OverView";

const Dashboard = ({
  base_url,
  setCurrentUser,
  currentUser,
  setShowForm,
  handleshowform,
  showform,
  setShowLogIn,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setShowLogIn(false);
    const login = async () => {
      const token = sessionStorage.getItem("token");
      if (!token) return;
      try {
        const response = await axios.get(`${base_url}/dashboard`, {
          headers: {
            Authorization: " Bearer " + token,
          },
        });
        setCurrentUser(response.data);
        localStorage.setItem("user", JSON.stringify(response.data));
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
    return navigate("/login");
  }

  return (
    <>
      <div className="dashboard">
        <section className="dashboard__section-one">
          <button className="add" onClick={handleshowform}>
            <img src={add} alt="add icon" className="add__icon" />
          </button>
          <h2 className="dashboard__overview">Overview</h2>
          <AddProject
            base_url={base_url}
            currentUser={currentUser}
            showform={showform}
            handleshowform={handleshowform}
            setShowForm={setShowForm}
          />
        </section>
        <OverView base_url={base_url} currentUser={currentUser} />
        <div className="overview">
          <section>
            <Charts base_url={base_url} />
          </section>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
