const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const axios = require("axios");
const cors = require("cors");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    console.log(file);
    const extLength = file.originalname?.split(".")?.length;
    const extension = file.originalname?.split(".")[extLength - 1];
    cb(null, file.fieldname + "-" + Date.now() + "." + extension);
  },
});

const upload = multer({ storage: storage });
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/upload-files", upload.array("files"), (req, res) => {
  console.log(req.body);
  console.log(req.files);
  res.json({ message: "Successfully uploaded files" });
});

const port = 3000;
app.listen(port, "localhost");
console.log(`server listening on port: ${port}`);
