const connection = require("../src/Database/connection");
const express = require("express");
const { CheckUserExist } = require("./Routes/CheckUserExist");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World! From Invest With Tribe");
});

app.use(express.json());
app.use(CheckUserExist)


app.listen(port, () => {
  console.log(`Invest With Tribe app listening at http://localhost:${port}`);
});
