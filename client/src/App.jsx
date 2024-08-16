import { Login } from "./components/Login/Login";
import { useState } from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signup } from "./components/Signup/Signup";
import { HomePage } from "./pages/HomePage/HomePage";
import Dashboard from "./pages/Dashboard/Dashboard";
import Projects from "./components/Projects/Projects";
import TaskBoard from "./pages/TaskBoard/TaskBoard";
import { NavTop } from "./components/NavTop/NavTop";
import { SideNav } from "./components/SideNav/SideNav";

function App() {
  const base_url = "http://localhost:8080";
  const [currentUser, setCurrentUser] = useState({});
  const [currentProject, setCurrentProject] = useState({});
  const [showform, setShowForm] = useState(false);
  const [theme, setTheme] = useState();
  const handleshowform = () => {
    if (!showform) {
      setShowForm(true);
    } else {
      setShowForm(false);
    }
  };

  return (
    <>
      <BrowserRouter>
        <div className="mainpage">
          <section className={"mainpage__section-one"}>
            <SideNav currentUser={currentUser} />
          </section>
          <section className="mainpage__section-two">
            <div className="">
              <NavTop
                first_name={currentUser.first_name}
                last_name={currentUser.last_name}
              />
            </div>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<Login base_url={base_url} />} />
              <Route path="/signup" element={<Signup base_url={base_url} />} />

              <Route
                path="/dashboard"
                element={
                  <Dashboard
                    base_url={base_url}
                    setCurrentUser={setCurrentUser}
                    currentUser={currentUser}
                    handleshowform={handleshowform}
                    showform={showform}
                    theme={theme}
                    setTheme={setTheme}
                    setShowForm={setShowForm}
                  />
                }
              />
              <Route
                path="/projects"
                element={
                  <Projects
                    base_url={base_url}
                    currentUser={currentUser}
                    setCurrentProject={setCurrentProject}
                    currentProject={currentProject}
                  />
                }
              />
              <Route
                path="/taskboard"
                element={
                  <TaskBoard
                    base_url={base_url}
                    currentUser={currentUser}
                    currentProject={currentProject}
                    handleshowform={handleshowform}
                    showform={showform}
                  />
                }
              />
            </Routes>
          </section>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
