//connects to database
const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "ringling23",
    host: "localhost",
    port: 5432,
    database: "laced_up"
});

module.exports = pool;