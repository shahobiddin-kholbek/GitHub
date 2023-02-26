const express = require("express");
const pg = require("pg");
const cors = require("cors");
const pool = require("./db");

const port = 3002;
const app = express();

const contacts = [
  {
    id: 1,
    name: "Shahob",
    lastname: "Kholbekzoda",
    img: "../../img/shahob_icon.jpg",
  },
  {
    id: 2,
    name: "Nur",
    lastname: "Nurov",
    img: "../../img/nur-icon.jpg",
  },
  {
    id: 3,
    name: "Said",
    lastname: "Saidov",
    img: "../../img/said-icon.jpg",
  },
  {
    id: 4,
    name: "Aziz",
    lastname: "Azizov",
    img: "../../img/aziz-icon.jpg",
  },
];

app.use(cors());
app.use(express.json());
app.get("/contacts", (req, res) => {
  res.send(contacts);
});

app.post("/input-messages", (req, res) => {
  const { id, receiverId, senderId, content } = req.body;
  pool.query(
    `INSERT INTO messages ("id", "receiverId", "senderId", "content") VALUES($1, $2, $3, $4)`,
    [id, receiverId, senderId, content],
    (error, results) => {
      if (error) throw error;
      res.status(201).json("");
    }
  );
});

app.get("/messages/:user1/:user2", (req, res) => {
  const { user1, user2 } = req.params;
  pool.query(
    `SELECT * FROM "messages" WHERE ("receiverId"=$1 AND "senderId"=$2) OR ("receiverId"=$2 AND "senderId"=$1)`,
    [user1, user2],
    (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    }
  );
});

app.delete("/messages/:id", (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  pool.query(`DELETE FROM "messages" WHERE "id"=$1`, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json("");
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
