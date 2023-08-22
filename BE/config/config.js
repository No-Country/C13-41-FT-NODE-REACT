
module.exports={
  
    "development": {
      "username": process.env.DEV_DB_USER,
      "password": process.env.DEV_PASSWORD,
      "database": process.env.DEV_DB_NAME,
      "host": process.env.DEV_DB_HOST,
      "dialect": "postgres"
    },
    "production": {
      "username": process.env.PRO_DB_USER,
      "password": process.env.PRO_DB_PASSWORD,
      "database": process.env.PRO_DB_NAME,
      "host": process.env.PRO_DB_HOST,
      "dialect": "postgres"
    }
  
}

