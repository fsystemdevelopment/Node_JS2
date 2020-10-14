const express = require("express");
const app = express();

express.urlencoded(); //urlencoded parses x-ww-form-urlencoded request bodies
app.use(express.json()); //json parses application/json request bodies


app.get("/ping", (request, response) => {
  response.send("pong");
});

app.post("/course", (req, res) => {
  console.log(req.body);
  res.json({ status: true });
});

app.listen(8080, "localhost");
