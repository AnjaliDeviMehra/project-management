import express from "express";
import initknex from "knex";
import configuration from "../../knexfile.js";
import crypto from "crypto";
import { deserialize } from "v8";

const knex = initknex(configuration);

const createTask = async (req, res) => {
  if (!req.body.task_title) {
    res.status(404).send("please provide atleast title to create new task");
  }

  const new_id = crypto.randomBytes(3).toString("hex");
  console.log(new_id);

  try {
    const result = await knex("tasks").insert({
      id: new_id,
      task_title: req.body.task_title,
      description: req.body.description || null,
      status: req.body.status,
      priority: req.body.priority,
      due_date: req.body.due_date || null,
      project_id: req.body.project_id,
      assigned_to: req.body.assigned_to || null,
      completed_at: req.body.completed_at || null,
      tags: req.body.tags || null,
    });

    console.log(result);
    if (!result) {
      res.send("unable to add");
    }
    const newtask = await knex("tasks")
      .select("*")
      .where({ id: new_id })
      .first();
    res.status(201).json({ newtask });
  } catch (e) {
    console.log(e);
    res.status(500).send("unable to add new task");
  }
};

const getTask = async (req, res) => {
  const { project_id } = req.params;

  try {
    const result = await knex("tasks")
      .select("*")
      .where({ project_id: project_id });
    if (!result) {
      res.status(404).send("np task found");
    }
    res.status(200).json(result);
  } catch (e) {
    console.log(e);
    res.status(500).send("unable to retrieve tasks");
  }
};
const updateTask = async (req, res) => {
  const { id } = req.params;
  if (!req.body.task_title) {
    res.status(404).send("please provide atleast title to create new task");
  }
  try {
    const result = await knex("tasks")
      .update({
        task_title: req.body.task_title,
        description: req.body.description || null,
        status: req.body.status,
        priority: req.body.priority,
        due_date: req.body.due_date || null,
        project_id: req.body.project_id,
        assigned_to: req.body.assigned_to || null,
        completed_at: req.body.completed_at || null,
        tags: req.body.tags || null,
      })
      .where({ id: id });

    console.log(result);
    if (!result) {
      res.send("unable to add");
    }
    const newtask = await knex("tasks").select("*").where({ id: id }).first();
    res.status(201).json({ newtask });
  } catch (e) {
    console.log(e);
    res.status(500).send("unable to update new task");
  }
};

export { createTask, updateTask, getTask };
