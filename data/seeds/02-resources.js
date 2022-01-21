/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { resource_name: 'github', resource_description: null},
        { resource_name: 'dictionary.com', resource_description: 'websters rendition of the most popular words'},
        { resource_name: 'wiki.gov', resource_description: 'mostly bs from the government'},
      ]);
    });
};
