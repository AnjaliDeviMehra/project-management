import React, { useEffect, useState } from "react";
import axios from "axios";
import "./TaskBoard.scss";
import "../../styles/global.scss";
import { AddCard } from "../../components/AddCard/AddCard";
import { DndContext, rectIntersection, closestCenter } from "@dnd-kit/core";
import Column from "./Column";
import { Card } from "./Card";

const TaskBoard = ({
  base_url,
  currentUser,
  currentProject,
  handleshowform,
  theme,

  showform,
}) => {
  const [tasks, setTasks] = useState([]);
  const [done, setDone] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [backlog, setBacklog] = useState([]);
  const [inReview, setInReview] = useState([]);
  // const [currenttheme, setCurrentTheme] = useState();

  const selectedTheme = () => {
    if (theme == 1) {
      return "taskboard__theme-one";
    } else if (theme == 2) {
      return "taskboard__theme-two";
    } else if (theme == 3) {
      return "taskboard__theme-three";
    } else if (theme == 4) {
      return "taskboard__theme-four";
    } else if (theme == 5) {
      return "taskboard__theme-five";
    }
  };

  console.log(theme);
  useEffect(() => {
    const getTask = async () => {
      try {
        const response = await axios.get(
          `${base_url}/tasks/${currentProject.project_id}`
        );

        const taskArray = response.data;

        setInReview([]);
        setInProgress([]);
        setDone([]);
        setBacklog([]);

        taskArray.forEach((task) => {
          if (task.status === "in review") {
            setInReview((prev) => [...prev, task]);
          } else if (task.status === "in progress") {
            setInProgress((prev) => [...prev, task]);
          } else if (task.status === "done") {
            setDone((prev) => [...prev, task]);
          } else {
            setBacklog((prev) => [...prev, task]);
          }
        });

        setTasks(taskArray);
      } catch (e) {
        console.log(e);
      }
    };

    getTask();
  }, [currentProject.project_id]);

  const updateStatus = async (id, status) => {
    console.log(id, status);
    const response = await axios.patch(`${base_url}/tasks/update/${id}`, {
      status: status,
    });
    console.log(response);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${base_url}/tasks/addnew`, {
        task_title: e.target.title.value,
        description: e.target.description.value || " ",
        status: e.target.status.value || " backlog",
        priority: e.target.priority.value || " ",
        due_date: e.target.due_date.value || " ",
        assigned_to: currentUser.id || "",
        project_id: currentProject.project_id,
        tags: e.target.tags.value || " ",
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleDragStart = (e) => {
    const title = e.active.id;
    const column = e.active.data.current?.parent;
  };

  const handleDragEnd = (e) => {
    const container = e.over?.id;
    const newItem = e.active.data.current?.item || "";
    const title = e.active.data.current?.title;
    const index = e.active.data.current?.index || 0;
    const parent = e.active.data.current?.parent || "In Progress";
    let status = "";

    if (container === "In Progress") {
      setInProgress((prev) => [...prev, e.active.data.current?.item || ""]);

      status = "In Progress";
    } else if (container === "Done") {
      setDone((prev) => [...prev, e.active.data.current?.item || ""]);
      status = "Done";
    } else if (container === "Backlog") {
      setBacklog((prev) => [...prev, e.active.data.current?.item || ""]);
      status = "Backlog";
    } else if (container === "In Review") {
      setInReview((prev) => [...prev, e.active.data.current?.item || ""]);
      status = "In Review";
    }

    if (parent === "In Progress") {
      setInProgress((prev) => [
        ...prev.slice(0, index),
        ...prev.slice(index + 1),
      ]);
    } else if (parent === "Done") {
      setDone((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
    } else if (parent === "Backlog") {
      setBacklog((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
    } else if (parent === "In Review") {
      setInReview((prev) => [
        ...prev.slice(0, index),
        ...prev.slice(index + 1),
      ]);
    }

    updateStatus(newItem.id, status);
  };

  return (
    <div className={`taskboard  ${selectedTheme(currentProject.theme)}`}>
      <section className="taskboard__add">
        <button className="taskboard__add-button" onClick={handleshowform}>
          +
        </button>
      </section>

      {showform && <AddCard />}

      <DndContext
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div className="taskboard__columns">
          <Column title="In Progress" items={inProgress} id={1} />
          <Column title="In Review" items={inReview} id={2} />
          <Column title="Done" items={done} id={3} />
          <Column title="Backlog" items={backlog} id={4} />
        </div>
      </DndContext>
    </div>
  );
};

export default TaskBoard;
