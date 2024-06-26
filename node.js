const mysql = require('mysql2');
const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());
const hotelPath = path.join(__dirname, '');
app.use(express.static(hotelPath));
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Suganth@01',
    database: 'restaurant'
});

con.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err.stack);
        return;
    }
    console.log('Connected to MySQL');
});
app.get('/', (req, res) => {
    res.sendFile(path.join(hotelPath, 'food.html'));
});
app.post('/submit-reservation', (req, res) => {
    const { name, contact, time, date, persons } = req.body;

    const query = 'INSERT INTO reservations (name, contact, time, date, persons) VALUES (?, ?, ?, ?, ?)';
    con.query(query, [name, contact, time, date, persons], (error, results) => {
        if (error) {
            console.error('Error inserting into database:', error.stack);
            res.status(500).send('Database error');
            return;
        }
        res.status(200).send('Reservation submitted successfully');
    });
});
const PORT = process.env.PORT || 4000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});

