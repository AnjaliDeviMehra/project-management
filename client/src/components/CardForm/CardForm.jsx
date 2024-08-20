import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./CardForm.scss";
import close from "../../assets/icons/close.png";
import axios from "axios";

export const CardForm = ({
  base_url,
  formtype,
  currentUser,
  currentProject,
  showform,
  handleshowform,
  setShowForm,
  setTasks,
  data,
}) => {
  const [title, setTitle] = useState(data?.task_title);
  const [description, setDescription] = useState(data?.task_title);
  const [dueDate, setDueDate] = useState(data?.task_title);
  const [priority, setPriority] = useState(data?.task_title);
  const [status, setStatus] = useState();
  const [assigned_to, setAssigned_to] = useState();
  const [tags, setTags] = useState();
  const [errors, setErrors] = useState({});
  const { userId } = useParams();
  const { projectId } = useParams();
  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleDueDateChange = (e) => {
    setDueDate(e.target.value);
  };
  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };
  const handlePriorityChnage = (e) => {
    setPriority(e.target.value);
  };

  const handleTagChnage = (e) => {
    setTags(e.target.value);
  };

  const newTask = {
    task_title: title,
    description: description,
    status: "backlog",
    priority: priority,
    due_date: dueDate,
    assigned_to: userId,
    project_id: projectId,
    tags: tags,
  };

  const isFormValid = () => {
    const fields = [
      { name: "task_title" },
      { name: "description" },
      { name: "due_date" },
      { name: "priority" },
    ];
    const newErrors = {};

    fields.forEach((item) => {
      if (!newTask[item.name]) {
        newErrors[item.name] = "This field is required.";
      }
    });

    setErrors(newErrors);

    if (newErrors.task_title || newErrors.description || newErrors.due_date) {
      return;
    }
    return true;
  };

  const resetform = (e) => {
    setTitle("");
    setDescription("");
    setDueDate("");
    setPriority(""), setTags("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isFormValid()) {
      try {
        const response = await axios.post(`${base_url}/tasks/addnew`, newTask);
        const tasklist = response.data;

        setTasks(tasklist);
        resetform(e);
        navigate(`/${currentUser.id}/${currentProject.id}/tasks`);
        window.location.reload();

        handleshowform();
      } catch (e) {
        console.log(e);
      }
    }
  };

  const handleClose = () => {
    handleshowform();
    navigate(`/${currentUser.id}/${currentProject.id}/tasks`);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (isFormValid()) {
      try {
        const response = await axios.put(
          `${base_url}/projects/project/${data.id}`,
          newProject
        );
        handleshowform();
        navigate(`/${currentUser.id}/${currentProject.id}/tasks`);
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <div className="form-overlay">
      <button onClick={handleClose} className="close">
        <img src={close} alt="close icon" className="close__icon" />
      </button>
      <div className="card-form">
        <h2 className="card-form__heading">Add Task</h2>
        <form onSubmit={handleSubmit} className="card-form__form">
          <div className="card-form__input-container">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              className="card-form__input"
              onChange={handleTitleChange}
              value={title}
            />
            {errors.title && <div className="error">{errors.title}</div>}
          </div>
          <div className="card-form__input-container">
            <label htmlFor="dueDate">Due Date</label>
            <input
              type="date"
              name="due_date"
              id="due_date"
              className="card-form__input"
              onChange={handleDueDateChange}
              value={dueDate}
            />
            {errors.due_date && <div className="error">{errors.due_date}</div>}
          </div>

          <div className="card-form__input-container">
            <label htmlFor="priority">Priority</label>
            <select
              name="priority"
              id="priority"
              className="card-form__input"
              onChange={handlePriorityChnage}
              value={priority}
            >
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>

          <div className="card-form__input-container">
            <label htmlFor="tags">Tags</label>
            <select
              name="tags"
              id="tags"
              className="card-form__input"
              onChange={handleTagChnage}
              value={tags}
            >
              <option value="Planning">Planning</option>
              <option value="Research">Research</option>
              <option value="Design">Design</option>
              <option value="Setup">Setup</option>
              <option value="Database">Database</option>
              <option value="Testing">Testing</option>
            </select>
          </div>

          <div className="card-form__input-description">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              className="card-form__description"
              onChange={handleDescriptionChange}
              value={description}
            ></textarea>
            {errors.description && (
              <div className="error">{errors.description}</div>
            )}
          </div>

          <ul
            className={
              formtype === "update"
                ? "buttons-section--hide"
                : "buttons-section"
            }
          >
            <button
              type="reset"
              className="buttons-section__button"
              onClick={resetform}
            >
              Reset
            </button>
            <button type="submit" className="buttons-section__button">
              Create
            </button>
          </ul>
          <ul
            className={
              formtype == "add" ? "buttons-section--hide" : "buttons-section"
            }
          >
            <button type="submit" className="buttons-section__button">
              Update
            </button>
          </ul>
        </form>
      </div>
    </div>
  );
};
