//this file is our altercations to login table. This is the syntax:

exports.up = async function(knex) {
  await knex.schema.alterTable('login', (table) => {
      table.text('date created').notNull()
  })
};
//run $ npx knex migrate:latest - run to update login table

exports.down = async function(knex) {
  
};
