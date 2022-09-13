// const myLib = require("./config");
// console.log(myLib);

import { PI } from "./esmodule.mjs";
import fs from "fs";

import express from "express";
//const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/ping", (request, response) => {
  response.send("pong");
});

app.post("/course", (req, res) => {
  console.log(req?.body);
  console.log(req?.body?.aaa);
  fs.writeFileSync("./summary.txt", JSON.stringify(req.body));
  res.json({ status: true });
});

app.listen(8080, "localhost", () => {
  console.log("running");
});
