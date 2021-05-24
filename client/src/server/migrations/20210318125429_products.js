
exports.up = async function(knex) {
  await knex.schema.createTable('products', (table) => {
      table.increments('id')
      table.text('name').notNull().unique()
      table.text('subtitle').notNull()
      table.blob('image').notNull()
      table.integer('price').notNull()
      table.text('available colors').notNull()
      table.text('description').notNull()
  })
};

exports.down = function(knex) {
  
};
