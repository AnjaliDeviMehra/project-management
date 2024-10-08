/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("projects", (table) => {
    table.string("id").primary().unique().notNullable();
    table.string("project_title").notNullable();
    table.string("start_date").notNullable();
    table.string("status").notNullable();
    table.string("theme").notNullable();
    table.string("due_date");
    table.string("type").notNullable();
    table.string("description");
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("projects");
}
