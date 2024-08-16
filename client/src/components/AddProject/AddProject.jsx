import React from "react";
import { useState } from "react";
import axios from "axios";
import { Theme } from "../Theme/Theme";
import { useNavigate } from "react-router-dom";

const AddProject = ({
  base_url,
  currentUser,
  showform,
  setShowForm,
  handleshowform,
}) => {
  const [theme, setTheme] = useState("1");
  const [title, setTitle] = useState();
  const [description, setDescripton] = useState();
  const [dueDate, setDueDate] = useState();
  const [type, setType] = useState("individual");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescripton(e.target.value);
  };
  const handleDueDateChange = (e) => {
    setDueDate(e.target.value);
  };
  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const date = new Date();

  const newProject = {
    user_id: currentUser.id,
    project_title: title,
    status: "In Progress",
    start_date: date,
    theme: theme,
    due_date: dueDate,
    description: description,
    type: type,
  };

  console.log(newProject);
  const isFormValid = () => {
    const fields = [
      { name: "project_title" },
      { name: "description" },
      { name: "due_date" },
    ];
    const newErrors = {};

    fields.forEach((item) => {
      if (!newProject[item.name]) {
        newErrors[item.name] = "This field is required.";
      }
    });

    setErrors(newErrors);

    if (newErrors.project_title || newErrors.description || newErrors.dueDate) {
      return;
    }
    return true;
  };

  const resetform = (e) => {
    setTitle("");
    setDescripton("");
    setDueDate("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isFormValid()) {
      try {
        const response = await axios.post(
          `${base_url}/projects/addnew`,
          newProject
        );
        resetform(e);
        setShowForm(false);
        navigate("/projects");
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <div>
      <div className={`${showform ? "new-workspace" : "new-workspace--hide"}`}>
        <div className="close">
          <button className="close__button" onClick={handleshowform}>
            X
          </button>
        </div>

        <section className="new-workspace__form-container">
          <h2 className="new-workspace__heading">Create New Workspace</h2>
          <form onSubmit={handleSubmit} className="add-form">
            <ul className="add-form__first">
              <li className="add-form__input-section">
                <label htmlFor="project_title" className="add-form__label">
                  Title
                </label>
                <input
                  type="text"
                  placeholder="Enter Project Title"
                  name="project_title"
                  id="project_title"
                  value={title}
                  className="add-form__input"
                  onChange={handleTitleChange}
                />
                {errors.project_title && (
                  <div className="">{errors.project_title}</div>
                )}
              </li>

              <li className="add-form__input-section">
                <label htmlFor="due_date" className="add-form__label">
                  Due Date
                </label>
                <input
                  type="date"
                  placeholder="Due Date"
                  name="due_date"
                  id="due_date"
                  value={dueDate}
                  className="add-form__input"
                  onChange={handleDueDateChange}
                />
                {errors.due_date && <div className="">{errors.due_date}</div>}
              </li>
            </ul>
            <ul>
              <li className="add-form__input-section">
                <label htmlFor="due_date" className="add-form__label">
                  Description
                </label>
                <textarea
                  placeholder="Description....."
                  name="description"
                  id="description"
                  value={description}
                  className="add-form__description"
                  onChange={handleDescriptionChange}
                />
                {errors.description && (
                  <div className="">{errors.description}</div>
                )}
              </li>
              <li className="add-form__input-section">
                <label htmlFor="theme" className="add-form__label">
                  Choose Theme
                </label>
                <div className="add-form__theme">
                  <Theme setTheme={setTheme} theme={theme} />
                </div>
              </li>
              <li className="add-form__input-section">
                <label htmlFor="due_date" className="add-form__label">
                  Type
                </label>
                <select
                  name="type"
                  id="type"
                  className="add-form__input"
                  onChange={handleTypeChange}
                  value={type}
                >
                  <option value="individual" className="add-form__option">
                    Individual
                  </option>
                  <option value="Shared" className="add-form__option">
                    Shared
                  </option>
                </select>
              </li>
            </ul>
            <ul className="buttons-section">
              <button
                type="reset"
                className="buttons-section__button"
                onClick={resetform}
              >
                Reset
              </button>
              <button className="buttons-section__button">
                Create Workspace
              </button>
            </ul>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AddProject;
