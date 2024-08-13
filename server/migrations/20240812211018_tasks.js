/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("tasks", (table) => {
    table.string("id").primary().unique().notNullable();
    table.string("task_title").notNullable();
    table.string("description");
    table
      .enu("status", ["Not Started", "In Progress", "Completed"])
      .defaultTo("Not Started");
    table.enu("priority", ["Low", "Medium", "High"]).defaultTo("Medium");
    table.datetime("due_date");
    table.timestamps(true, true);
    table.string("assigned_to");
    table.string("project_id");
    table.datetime("completed_at");
    table.string("tags");

    table
      .foreign("assigned_to")
      .references("id")
      .inTable("users")
      .onDelete("SET NULL");
    table
      .foreign("project_id")
      .references("id")
      .inTable("projects")
      .onDelete("CASCADE");
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("tasks");
}
