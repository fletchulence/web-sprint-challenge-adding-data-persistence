/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { task_description: "mow the lawn", task_notes: 'garage code: 1111', task_completed: true, project_id: 1},
        { task_description: "pickup your sister from piano lessons", task_notes: 'address is: 123 main ave, LA California', task_completed: false, project_id: 1},
        { task_description: "baz", task_notes: null, task_completed: false, project_id: 2},
      ]);
    });
};
