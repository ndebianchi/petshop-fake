require('dotenv').config()

module.exports =  {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: 'mysql'
}

// DATABASE.JS ORIGINAL SEM DOTENV:
// module.exports =  {
//   username: 'user',
//   password: 'senha',
//   database: 'banco',
//   host: '127.0.0.1',
//   dialect: 'mysql'
// }