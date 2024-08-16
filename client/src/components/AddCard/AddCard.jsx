import React from "react";
import "./AddCard.scss";

export const AddCard = () => {
  const handleSubmit = () => {};
  return (
    <div className="form-overlay">
      <div className="form">
        <h2 className="form__heading">Add New Task</h2>
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
      </div>
    </div>
  );
};
