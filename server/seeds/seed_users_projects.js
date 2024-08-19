/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex("users_projects").del();
  await knex("users_projects").insert([
    {
      user_id: "0b2c7f",
      project_id: "1",
    },
    {
      user_id: "0b2c7f",
      project_id: "2",
    },
    {
      user_id: "0b2c7f",
      project_id: "3",
    },
    {
      user_id: "0b2c7f",
      project_id: "4",
    },
    {
      user_id: "0b2c7f",
      project_id: "5",
    },
  ]);
}
