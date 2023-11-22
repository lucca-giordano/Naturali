const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const app = express();

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "users"
});

app.use(express.json());
app.use(cors());

app.post("/register", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    db.query("SELECT * FROM usuarios WHERE email=?", [email], (err, result) => {
        if (err) {
            res.send(err);
        }
        if (result.length == 0) {
            bcrypt.hash(password, saltRounds, (err, hash) => {
                db.query("INSERT INTO usuarios (name, email, password) VALUES (?,?,?)", [name, email, hash], (err, result) => {
                    if (err) {
                        res.send(err);
                    } else {
                        res.send({ 
                            msg: "Usuário cadastrado com sucesso!",
                            msgID: "0",
                        });
                    }
                });
            });
        }
        else {
            res.send({
                msg: "Usuário já cadastrado!",
                msgID: "1",
            });
        }

    });
});

app.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    db.query("SELECT * FROM usuarios WHERE email=?", [email], (err, result) => {
        if (err) {
            res.send(err);
        }
        if (result.length > 0) {
            bcrypt.compare(password, result[0].password, (error, result) => {
                if(result){
                    res.send({
                        msg: "Login realizado com sucesso!",
                        msgID: "0",
                    });
                }else{
                    res.send({
                        msg: "Senha incorreta!",
                        msgID: "2",
                    });
                }
            });
        }
        else {
            res.send({ 
                msg: "Conta não encontrada!",
                msgID: "1",
            });
        }

    });
});

app.post("/post", (req, res) => {
    const title = req.body.title;
    const desc = req.body.desc;
    const content = req.body.content;

    db.query("INSERT INTO posts (title, subtitle, content) VALUES (?,?,?)", [title, desc, content], (err, result) => {
        if (err) {
            res.send(err);
            console.log(err);
        } else {
            res.send({ 
                msg: "Post criado com sucesso!",
                msgID: "0",
            });
        }
    });
});

app.get("/api/posts", (req, res) => {
    db.query("SELECT * FROM posts", (err, result) => {
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    });
});

//* Requisição simples que envia dados pré-definidos para o banco de dados

// app.get('/', (req, res) => {
//     db.query("INSERT INTO usuarios (name, email, password) VALUES('name from backend', 'email@backend', 'passwordTest')"), (err, result) => {
//         if(err){
//             console.log(err);
//         }else{
//             console.log("data inserted")
//         }
//     }
// });

app.listen(3001, () => {
    console.log('server running on port 3001');
});