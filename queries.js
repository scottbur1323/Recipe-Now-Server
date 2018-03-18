const database = require("/db/knex.js")

module.exports = {
  list(){
    return database('meals').select()
  },
  // read(id){
  //   return database('coffee').where("id", id).first()
  // },
  // create(coffees){
  //   return database('coffee').insert(coffees).returning('*').then(record => record[0])
  // },
  // update(id, coffees){
  //   return database("coffee").update(coffees).where("id", id).returning("*").then(record => record[0])
  // },
  // delete(id){
  //   return database("coffee").delete().where("id", id)
  // }
}
