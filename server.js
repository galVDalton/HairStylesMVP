import express from "express";
import pg from "pg";
import dotenv from "dotenv"

dotenv.config();

const app = express();

const db = new pg.Pool ({
  connectionString: process.env.DATABASE_URL,
});

app.use(express.static("public"));

app.get("/api/HairstylesMVP/hairstyle/:hair_length", (req, res) => {
  let hair_length = req.params.hair_length;
    db.query(`SELECT * FROM hairstyles WHERE hair_length = $1`, [hair_length]
    ).then((data) => {
      if (data.rows.length === 0) {
        res.sendStatus(404);
      } else {
        res.json(data.rows);
      }
  });
  //console.log("hair_length = " , req.params);
});

app.get("/api/HairstylesMVP/products/:hairsyles_id", (req, res) => {
  let hairsyles_id = req.params.hairsyles_id;
  let sql = `SELECT p.*
    FROM table_ids as t
    LEFT OUTER JOIN products as p
    ON t.products_id = p.id
    WHERE t.hairsyles_id = $1`

    db.query(sql, [hairsyles_id]
    ).then((data) => {
      if (data.rows.length === 0) {
        //res.sendStatus(404);
        res.json('');
      } else {
        res.json(data.rows);
        //console.log('TEST')
      }
  });
});

// TODO: Replace 3000 with process.env.PORT
app.listen(3000, () => {
  console.log(`listening on Port ${3000}`);
});




