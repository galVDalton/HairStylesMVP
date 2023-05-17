import express from "express";
import pg from "pg";
import dotenv from "dotenv"

dotenv.config();

const app = express();

const db = new pg.Pool ({
  connectionString: process.env.DATABASE_URL,
});

app.use(express.static("public"));

app.get("/api/HairstylesMVP/:id", (req, res) => {
  let hair_length = req.params.id;
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

// TODO: Replace 3000 with process.env.PORT
app.listen(3000, () => {
  console.log(`listening on Port ${3000}`);
});




