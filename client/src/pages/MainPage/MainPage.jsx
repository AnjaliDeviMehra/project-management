import React from "react";
import { SideNav } from "../../components/SideNav/SideNav";
import { NavTop } from "../../components/NavTop/NavTop";
import TaskBoard from "../TaskBoard/TaskBoard";
import Projects from "../../components/Projects/Projects";
import "./MainPage.scss";

const MainPage = () => {
  return (
    <div className="mainpage">
      <section className="mainpage__section-one">
        <SideNav />
      </section>
      <section className="mainpage__section-two">
        <NavTop />
        <div></div>
      </section>
    </div>
  );
};

export default MainPage;
