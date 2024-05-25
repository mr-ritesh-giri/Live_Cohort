const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/principal", (req, res) => {
  const principal = parseInt(req.query.principal);
  const rate = parseInt(req.query.rate);
  const time = parseInt(req.query.time);

  const calculation = (principal * rate * time) / 100;
  res.send(calculation.toString());
});

app.listen(port, function () {
  console.log(`Server is listening at ${port}`);
});
