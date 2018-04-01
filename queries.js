const database = require("./db/knex.js")

module.exports = {
  list(){
    return database('meals').select()
  },
  read(id){
    return database('meals').where("id", id).first()
  },
  create(meal){
    return database('meals').insert(meal).returning('*').then(record => record[0])
  },
  update(id, meal){
    return database("meals").update(meal).where("id", id).returning("*").then(record => record[0])
  },
  delete(id){
    return database("meals").delete().where("id", id)
  }
  // listGrocers(){
  //   return database('grocers').select()
  // },
  // readGrocers(id){
  //   return database('grocers').where("id", id).first()
  // },
  // createGrocers(grocer){
  //   return database('grocers').insert(grocer).returning('*').then(record => record[0])
  // },
  // updateGrocers(id, grocer){
  //   return database("grocers").update(grocer).where("id", id).returning("*").then(record => record[0])
  // },
  // deleteGrocers(id){
  //   return database("grocers").delete().where("id", id)
  // }
}
