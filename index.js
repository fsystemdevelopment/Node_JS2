const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const axios = require("axios");

const bodyParser = require("body-parser");
const myPrivateSecret = "secret";

app.use(bodyParser.json()); //for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); //application/x-www-form-urlencoded
app.use("/private", (req, res, next) => {
  if (req.body.token) {
    const token = req.body.token;
    try {
      const decoded = jwt.verify(token, myPrivateSecret);
      req.body.decoded = decoded;
      next();
    } catch (e) {
      console.log(e);
      res.sendStatus(403);
    }
  } else {
    res.sendStatus(403);
  }
});

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.post("/public/login", (req, res) => {
  const { user, password } = req.body;
  //const user = await db.get(...);
  if (user === "nodejs" && password === "mojeheslo") {
    const token = jwt.sign({ userId: 5 }, myPrivateSecret, { expiresIn: 3600 });
    res.json({ token });
  } else {
    res.sendStatus(403);
  }
});

app.post("/private/reporting", async (req, res) => {
  try {
    const { decoded } = req.body;
    const userProfile = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${decoded.userId}`
    );
    console.log("HERE");
    res.json({ userProfile: userProfile.data });
  } catch (e) {
    console.log(e);
  }
});

app.post("/save", (req, res) => {
  const { course } = req.body;
  if (course === "NodeJS") {
    res.json({
      answer: "Hurááá",
    });
  } else {
    res.json({
      answer: "Máš být asi o třídu vedle",
    });
  }
});

app.put("/myput", (req, res) => {
  res.sendStatus(404);
});

const port = 8080;
app.listen(port, "localhost");
console.log(`server listening on port: ${port}`);
