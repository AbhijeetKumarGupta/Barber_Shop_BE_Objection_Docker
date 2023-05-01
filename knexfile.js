require('dotenv').config({path:'./.env.development'});

module.exports = {
    mysql:{
        client: process.env.DB_DIALECT,
        connection: {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        }
    },
    pool: {
      min: 2,
      max: 100,
    },
}