/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("tasks", (table) => {
    table.string("id").primary().unique().notNullable();
    table.string("task_title").notNullable();
    table.string("description");
    table.string("status");
    table.string("priority");
    table.string("due_date");
    table.timestamps(true, true);
    table.string("assigned_to");
    table.string("project_id");
    table.string("completed_at");
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
