const express = require("express");
const app = express();

app.use(express.urlencoded({extended: true})); 
app.use(express.json());

app.get("/ping", (request, response) => {
  response.send("pong");
});

app.post("/course", (req, res) => {
  console.log(req?.body);
  console.log(req?.body?.aaa);
  res.json({ status: true });
});

app.listen(8080, "localhost");
