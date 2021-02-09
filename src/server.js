import express from "express";
import bodyParser from "body-parser";
import router from "./Routes";

const app = express();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).send("hello");
});

app.use('/',router)

app.listen(8080, () => {
  console.log("listening");
});
