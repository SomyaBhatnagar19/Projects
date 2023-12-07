// Importing files
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

// Use CORS middleware
app.use(cors());
// Use body parsing middleware for JSON data 
// I'm adding the below two lines to correct the post request error 404
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Somya@1901b',
  database: 'node-complete',
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

// Define a route to post data from the form to the 'users' table
app.post('/BookingForm', (req, res) => {
  const query = "INSERT INTO users (username, phone, email) VALUES (?, ?, ?)";
  const values = [
    req.body.username,
    req.body.phone,
    req.body.email,
  ];

  connection.query(query, values, (err, results) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json("BookingForm");
    }
  });
});

app.put('/UpdateForm/:id', (req, res) => {
  const query = "UPDATE users SET username=?, phone=?, email=? WHERE id=?";
  const id = req.params.id;
  const values = [
    req.body.username,
    req.body.phone,
    req.body.email,
  ];

  connection.query(query, [...values, id], (err, results) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json("UpdateForm");
    }
  });
});

app.delete('/delete/:id', (req, res) => {
  const query = "DELETE FROM users WHERE ID = ?";
  const id = req.params.id;
  
  connection.query(query, [id], (err, results) => {
    if (err) {
      console.error(err);
    } 

      return res.json("deleted");
    
  });
});


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
