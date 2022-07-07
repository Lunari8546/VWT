import express from "express";
import dotenv from "dotenv";

const app = express();

dotenv.config();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("main");
});

app.use(express.static('public'));

app.listen(process.env.PORT);
