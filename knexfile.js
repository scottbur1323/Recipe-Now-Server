require('dotenv').load()

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/meals-db'
  },
  production: {
    client: 'pg',
    connection: `${process.env.DATABASE_URL}?sslmode=require?ssl=true`
  }

};
