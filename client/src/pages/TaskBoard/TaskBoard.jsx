import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./TaskBoard.scss";
import { NavTop } from "../../components/NavTop/NavTop";

const TaskBoard = ({ base_url }) => {
  const { userId, projectId } = useParams();
  const [tasks, setTasks] = useState([]);
  console.log(userId, projectId);

  useEffect(() => {
    const getTask = async () => {
      try {
        const response = await axios.get(`${base_url}/tasks/${projectId}`);
        setTasks(response.data);
        console.log(tasks);
      } catch (e) {
        console.log(e);
      }
    };
    getTask();
  }, [projectId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${base_url}/tasks/addnew`, {
        task_title: e.target.title.value,
        description: e.target.description.value || " ",
        status: e.target.status.value || " ",
        priority: e.target.priority.value || " ",
        due_date: e.target.due_date.value || " ",
        assigned_to: userId,
        project_id: projectId,
        tags: e.target.tags.value || " ",
      });
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <NavTop />
      <h2>create new task</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" />
        <br />
        <label htmlFor="description">Description</label>
        <textarea name="description" id="description"></textarea>
        <br />
        <label htmlFor="dueDate">Due Date</label>
        <input type="date" name="due_date" id="due_date" />
        <br />
        <label htmlFor="priority">Priority</label>
        <select name="priority" id="priority">
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <br />
        <label htmlFor="status">Status</label>
        <select name="status" id="status">
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Compeleted">Done</option>
        </select>
        <label htmlFor="completed_at"></label>
        <input type="date" name="due_date" id="due_date" />
        <label htmlFor="assignedTo">Assign To</label>
        <input type="text" name="tags" id="tags" />
        <br />
        <label htmlFor="tags">Tags</label>
        <select name="tags" id="tags">
          <option value="tag1">tag1</option>
          <option value="tag2">tag2</option>
          <option value="tag3">tag3</option>
        </select>

        <button>create task</button>
      </form>
      <div>
        {tasks.length !== 0 &&
          tasks.map((task) => {
            <h2>{task.title}</h2>;
          })}
      </div>
    </div>
  );
};

export default TaskBoard;
