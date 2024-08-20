import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./OverView.scss";
import project from "../../assets/icons/project.png";
import task from "../../assets/icons/task2.png";
import { Calendar } from "react-calendar";
import { Charts } from "../Charts/Charts";

const OverView = ({ base_url, currentUser }) => {
  const [data, setData] = useState([]);
  const [tasksData, setTasksData] = useState([]);
  useEffect(() => {
    try {
      const getOverview = async () => {
        const response = await axios.get(`${base_url}/users/${currentUser.id}`);
        console.log(response);
        setData(response.data);
        const editedArray = response.data.thirdResult.splice(0, 5);
        console.log(editedArray);
        setTasksData(editedArray);
        console.log(tasksData);
      };
      getOverview();
    } catch (e) {}
  }, []);
  return (
    <div>
      {data.length !== 0 && (
        <div className="overview-info">
          <section className="overview-info__section">
            <img src={task} alt="task icon" className="overview-info__icon" />

            <h3 className="overview-info__heading--one">
              Total Task : {data.firstResult}
            </h3>
          </section>
          <section className="overview-info__section">
            <img
              src={project}
              alt="task icon"
              className="overview-info__icon"
            />

            <h3 className="overview-info__heading">
              Total Projects: {data.secondResult}
            </h3>
          </section>

          <div className="overview-info__section-two">
            <section className="overview-info__calendar">
              <Calendar />
            </section>

            {tasksData.length !== 0 && (
              <section className="task-list">
                <h3 className="task-list__recents">Recents</h3>
                <ul className="task-list__header">
                  <li>Title</li>
                  <li>Due Date</li>
                </ul>
                {tasksData.map((task) => (
                  <ul key={task.id} className="task-list__item">
                    <li>{task.task_title}</li>
                    <li>{task.due_date}</li>
                  </ul>
                ))}
              </section>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default OverView;
