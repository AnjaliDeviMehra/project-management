import initknex from "knex";
import Configuration from "../../knexfile.js";
import crypto from "crypto";

const knex = initknex(Configuration);

const getProjects = async (req, res) => {
  const { user_id } = req.params;

  try {
    const projects = await knex("users_projects")
      .join("projects", "projects.id", "=", "users_projects.project_id")
      .select("*")
      .where("users_projects.user_id", user_id);

    if (!projects) {
      res.send("no projects found");
    }
    res.status(200).json(projects);
  } catch (e) {
    res.status(500).send("unable to retrieve projects");
  }
};

const getSingleProject = async (req, res) => {
  const { project_id } = req.params;
  try {
    const result = await knex("projects").select("*").where({ id: project_id });
    if (result.length == 0) {
      res.status(404).send("project not found");
    }
    console.log(result);
    console.log(result[0]);
    res.status(200).json(result[0]);
  } catch (e) {
    console.log(e);
    res.status(500).send("Unable to retrieve project information");
  }
};
const createProject = async (req, res) => {
  if (
    !req.body.project_title ||
    !req.body.status ||
    !req.body.start_date ||
    !req.body.theme ||
    !req.body.due_date ||
    !req.body.description ||
    !req.body.type
  ) {
    return res.status(400).send("please provide all the required fields");
  }

  const {
    user_id,
    project_title,
    status,
    start_date,
    theme,
    due_date,
    description,
    type,
  } = req.body;

  const id = crypto.randomBytes(3).toString("hex");

  try {
    const project = await knex("projects").insert({
      id: id,
      project_title: project_title,
      status: status,
      start_date: start_date,
      theme: theme,
      due_date: due_date,
      description: description,
      type: type,
    });

    const userProject = await knex("users_projects").insert({
      user_id: user_id,
      project_id: id,
    });
    const newProject = await knex("projects")
      .join("users_projects", "users_projects.project_id", "=", "projects.id")
      .select(
        "users_projects.user_id",
        "users_projects.project_id",
        "projects.project_title",
        "projects.start_date",
        "projects.status",
        "projects.theme"
      )
      .where("projects.id", id);

    console.log(newProject);
    res.status(201).json(newProject[newProject.length - 1]);
  } catch (e) {
    res.status(500).send("unable to add new project");
  }
};

const updateProject = async (req, res) => {
  const { project_id } = req.params;

  if (
    !req.body.project_title ||
    !req.body.status ||
    !req.body.start_date ||
    !req.body.theme ||
    !req.body.due_date ||
    !req.body.description ||
    !req.body.type
  ) {
    return res.status(400).send("please provide all the required fields");
  }
  const {
    user_id,
    project_title,
    status,
    start_date,
    theme,
    due_date,
    description,
    type,
  } = req.body;

  try {
    const result = await knex("projects").where({ id: project_id }).update({
      id: project_id,
      project_title: project_title,
      status: status,
      start_date: start_date,
      theme: theme,
      due_date: due_date,
      description: description,
      type: type,
    });
    const newProject = await knex("projects")
      .join("users_projects", "users_projects.project_id", "=", "projects.id")
      .select(
        "users_projects.user_id",
        "users_projects.project_id",
        "projects.project_title",
        "projects.start_date",
        "projects.status",
        "projects.theme"
      )
      .where("projects.id", project_id);

    res.json(newProject);
  } catch (e) {
    console.log(e);
    res.status(500).send("unable to update the project");
  }
};
const deleteProject = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await knex("projects").where({ id: id }).delete();
    if (result == 0) {
      res.status(404).send(`project with id ${id} not found`);
    }
    res.status(204);
  } catch (e) {
    console.log(e);
    res.status(500).send("unable to delete project");
  }
};
export { createProject, getProjects, updateProject, getSingleProject };
