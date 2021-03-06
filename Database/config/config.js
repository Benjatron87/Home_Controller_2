module.exports = {
  "development": {
    "username": "root",
    "password": "superman",
    "database": "home_control",
    "host": 3306,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql",
    "dialectOptions": {
      "ssl": "Amazon RDS"
    },
    "username": process.env.MYSQL_USER,
    "password": process.env.MYSQL_KEY,
    "database": process.env.MYSQL_DBNAME,
    "host": process.env.JAWSDB_URL
  }
}

