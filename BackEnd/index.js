import express from 'express';
import mysql from 'mysql';

const app = express();
const port = 8800;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '040505',
    database: 'teste'
});

db.connect((err) => {
    if (err) {
        console.log(err);
        console.log("Failed to connect to MySQL server!");
    } else {
        console.log("Connected to MySQL server!");
    }
});


app.get("/", (req, res) => {
    res.json("Hello from the server side!");
});

app.get("/books", (req, res) => {
    const q = "SELECT * FROM teste.books;";
    db.query(q, (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send("Internal server error");
        } else {
            res.json(data);
        }
    });
});

app.listen(port, () => {
    console.log("Backend server is running!");
    
});