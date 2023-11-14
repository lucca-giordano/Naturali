import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
const port = 8800;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
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


app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
    res.json("Hello from the server side!");
});

app.get("/books", (req, res) => {
    const q = "SELECT * FROM books;";
    db.query(q, (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send("Internal server error");
        } else {
            console.log("Successfully sent data to client!");
            res.json(data);
        }
    });
});

app.post("/books", (req, res) => {
    const q = "INSERT INTO books (`name`, `desc`, `cover`, `price`) VALUES (?);";
    const values = [req.body.name, req.body.desc,  req.body.cover, req.body.price,];

    db.query(q, [values], (err, data) => {
        if(err){
            console.log(err);
            res.status(500).send("Internal server error");
        }
        else{
            console.log("Successfully added data to client!");
            return res.json("Book added!");
        }
    });
});

app.listen(port, () => {
    console.log("Backend server is running!");
    
});