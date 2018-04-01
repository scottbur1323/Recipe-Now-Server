
exports.up = function(knex, Promise) {
  return knex.schema.createTable('grocers', function(table) {
    table.increments('id')
    table.text('grocerName').notNullable()
    table.text('grocerPic').notNullable()
    table.text('grocerLink').notNullable()
    table.integer('grocerZip').notNullable()
    table.text('other')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('grocers')
}
