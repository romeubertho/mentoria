import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/hello", (req, res) => {
  res.status(200).send("hello");
});

app.listen(8080, () => {
  console.log("listening");
});
