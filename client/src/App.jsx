import { Login } from "./components/Login/Login";
import { useState } from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signup } from "./components/Signup/Signup";
import { HomePage } from "./pages/HomePage/HomePage";
import Dashboard from "./pages/Dashboard/Dashboard";
import Projects from "./pages/Projects/Projects";
import TaskBoard from "./pages/TaskBoard/TaskBoard";
import { NavTop } from "./components/NavTop/NavTop";
import { SideNav } from "./components/SideNav/SideNav";
import EditProject from "./components/EditProject/EditProject";
import AddProject from "./components/AddProject/AddProject";
import LogOut from "./components/LogOut/LogOut";

function App() {
  const base_url = "http://localhost:8080";
  const [currentUser, setCurrentUser] = useState({});
  const [currentProject, setCurrentProject] = useState();
  const [showform, setShowForm] = useState(false);
  const [theme, setTheme] = useState();
  const [showLogin, setShowLogIn] = useState(false);

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
          <section className={showLogin ? "" : "mainpage__section-one"}>
            <SideNav currentUser={currentUser} />
          </section>
          <section
            className={
              showLogin
                ? "mainpage__section-two--login"
                : "mainpage__section-two"
            }
          >
            <div>
              <NavTop
                first_name={currentUser?.first_name}
                last_name={currentUser?.last_name}
              />
            </div>
            <Routes>
              <Route
                path="/login"
                element={
                  <Login base_url={base_url} setShowLogIn={setShowLogIn} />
                }
              />
              <Route
                path="/"
                element={
                  <Signup base_url={base_url} setShowLogIn={setShowLogIn} />
                }
              />
              <Route
                path="/:projectId/edit"
                element={
                  <EditProject
                    base_url={base_url}
                    currentUser={currentUser}
                    handleshowform={handleshowform}
                    showform={showform}
                  />
                }
              />
              <Route path="/add" element={<AddProject base_url={base_url} />} />
              <Route
                path="/:projectId/delete"
                element={<Signup base_url={base_url} />}
              />
              {/* <Route path="/:taskId/edit" element={<HomePage />} />
              <Route path="/task/add" element={<Login base_url={base_url} />} />
              <Route
                path="/:taskID/delete"
                element={<Signup base_url={base_url} />}
              /> */}

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
                    setShowLogIn={setShowLogIn}
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
                    setTheme={setTheme}
                    theme={theme}
                    handleshowform={handleshowform}
                    showform={showform}
                    setShowForm={setShowForm}
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
                    setShowForm={setShowForm}
                    theme={theme}
                  />
                }
              />
              <Route
                path="/logout"
                element={<LogOut setCurrentUser={setCurrentUser} />}
              />
            </Routes>
          </section>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
