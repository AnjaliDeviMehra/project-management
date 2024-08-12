import React from "react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Projects from "../../components/Projects/Projects";

const Dashboard = ({ base_url }) => {
  const [session, setSession] = useState();
  // const[currentUser, setcurrentUser]=useState();
  const [isLoading, setIsLoading] = useState(true);

  const logout = () => {
    sessionStorage.removeItem("token");
    setSession(null);
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
        setSession(response.data);
      } catch (e) {
        console.log(e);
      }
      setIsLoading(false);
    };
    login();
  }, []);

  if (!session) {
    return (
      <main>
        <p>You must log in to see this page</p>
        <Link to="/login">Log In</Link>
      </main>
    );
  }
  if (isLoading) {
    return (
      <main className="dashboard">
        <p>Loading...</p>
      </main>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const date = new Date();
    console.log(date);

    const project = {
      user_id: session.id,
      project_title: e.target.project_title.value,
      status: "In Progress",
      start_date: date,
    };
    try {
      const response = await axios.post(`${base_url}/projects/addnew`, project);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      Hello
      <p>
        Welcome back, {session.first_name} {session.last_name}
      </p>
      <button className="dashboard__logout" onClick={logout}>
        Log out
      </button>
      <br />
      <h2>create new workspace</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="project_title">Title</label>
        <input
          type="text"
          placeholder="Enter Ptoject Title"
          name="project_title"
          id="project_title"
        />
        <button>Create Workspace</button>
      </form>
      <Projects id={session.id} base_url={base_url} />
    </div>
  );
};

export default Dashboard;
