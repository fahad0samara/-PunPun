
const mysql = require('mysql2/promise');

async function main() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mypassword',
    database: 'mydatabase'
  });
  const query = `
  CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
    );
  `
  await connection.execute(query);
  console.log('Table created successfully!');
  await connection.end();
}
main().catch(console.error);