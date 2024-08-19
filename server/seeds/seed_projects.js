/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex("projects").del();
  await knex("projects").insert([
    {
      id: "1",
      project_title: "Project Alpha",
      start_date: "2024-01-15",
      status: "In Progress",
      theme: "1",
      due_date: "2024-06-30",
      type: "shared",
      description:
        "An internal project focused on developing new technology solutions.",
    },
    {
      id: "2",
      project_title: "Project Beta",
      start_date: "2024-02-01",
      status: "Review",
      theme: "2",
      due_date: "2024-05-15",
      type: "shared",
      description:
        "An external marketing project aimed at increasing brand awareness.",
    },
    {
      id: "3",
      project_title: "Project Gamma",
      start_date: "2024-03-10",
      status: "Done",
      theme: "3",
      due_date: "2024-07-20",
      type: "individual",
      description: "A research project to explore new market opportunities.",
    },
    {
      id: "4",
      project_title: "Project Delta",
      start_date: "2024-04-05",
      status: "Backlog",
      theme: "4",
      due_date: "2024-12-31",
      type: "shared",
      description:
        "A product development project with a focus on new features for existing products.",
    },
    {
      id: "5",
      project_title: "Project Epsilon",
      start_date: "2024-05-20",
      status: "In Progress",
      theme: "5",
      due_date: "2024-09-15",
      type: "shared",
      description:
        "A design project aimed at revamping the user interface of our main product.",
    },
  ]);
}
