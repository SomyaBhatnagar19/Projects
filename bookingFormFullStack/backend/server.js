/* /backend/server.js */

//importing files
const express = require('express');
const mysql = require('mysql2'); // Import the mysql2 library
const cors = require('cors');

const app = express();

app.use(cors());

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost', 
  user: 'root', 
  password: 'Somya@1901b', 
  database: 'node-complete' 
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// Define a route to fetch data from the 'users' table
app.get('/', (req, res) => {
  const query = 'SELECT * FROM users'; 

  // Execute the query
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


