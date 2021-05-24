
exports.up = async function(knex) {
    await knex.schema.alterTable('products', (table) => {
        table.renameColumn('available colors', 'availableColors')
    })
};

exports.down = function(knex) {
  
};
