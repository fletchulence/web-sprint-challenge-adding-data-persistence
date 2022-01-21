/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { project_name: "foo", project_description: null, project_completed: false },
        { project_name: "bar", project_description: 'Sounds like a Cliff Bar snack -- i love those!', project_completed: true },
        { project_name: "baz", project_description: 'no idea what baz is supposed to mean', project_completed: false },
      ]);
    });
};
