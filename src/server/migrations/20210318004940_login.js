
exports.up = async function(knex) {
  await knex.schema.createTable('login', (table) => {
      table.increments('id') //creates our id col
      table.text('username').notNull().unique()
      table.text('password').notNull()
      table.boolean('admin').defaultTo(false)
  })
};

//reverse what happened in the up function
//await knex.schema.dropTableIfExists('login')
//run $ npx knex migrate:rollback to delete a change
//run $ npx knex migrate:latest again to get it back


//if it's been amonth and you need to make a change to this
//CREATE A NEW MIGRATION FILE, do not drop and remake this file
//$ npx knex migrate:make {newtableName}
exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('login');
};
