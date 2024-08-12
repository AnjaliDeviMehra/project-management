import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

const Projects = ({ id, base_url }) => {
  const [projects, setprojects] = useState([]);
  console.log("userid: ", id);

  useEffect(() => {
    const getProjects = async () => {
      const result = await axios.get(`${base_url}/projects/${id}`);
      console.log(result.data);
      setprojects(result.data);
    };

    getProjects();
  }, [id]);
  return (
    <>
      {projects.length !== 0 && (
        <div>
          {projects.map((project) => (
            <div key={project.project_id}>
              <p>{project.project_title}</p>
              <p>{project.status}</p>
              <p>{project.start_date}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Projects;
