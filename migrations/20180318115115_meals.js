
exports.up = function(knex, Promise) {
  return knex.schema.createTable('meals', function(table) {
    table.increments('id')
    table.text('mealName').notNullable()
    table.text('mealPic').notNullable()
    table.text('instructionsLink').notNullable()
    table.text('funIdeas').notNullable()
    table.text('i1').notNullable()
    table.text('i2')
    table.text('i3')
    table.text('i4')
    table.text('i5')
    table.text('i6')
    table.text('i7')
    table.text('i8')
    table.text('i9')
    table.text('i10')
    table.text('i11')
    table.text('i12')
    table.text('i13')
    table.text('i14')
    table.text('i15')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('meals')
}
