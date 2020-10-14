const http = require("http");
const hostname = "127.0.0.1";
const cowsay = require("cowsay");

console.log(process.env.NODE_ENV);
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello	World\n");
});
server.listen(port, hostname, () => {
  console.log(`Server	running	at	http://${hostname}:${port}/`);
  console.log(
    cowsay.say({
      text: "I'm a moooodule",
      e: "oO",
      T: "U ",
    })
  );
});

const express = require("express");
const app = express();
app.get("/", (req, res) => {
  console.log(req.query);
  res.send("hello");
});
app.listen(8080);
console.log("app listening");
