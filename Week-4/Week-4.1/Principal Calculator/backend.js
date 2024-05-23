const express = require("express");
const app = express();
const port = 4000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.post("/calculate", (req, res) => {
  const { principal, rate, time } = req.query;

  const principalVal = parseFloat(principal);
  const rateVal = parseFloat(rate);
  const timeVal = parseFloat(time);

  if (isNaN(principalVal) || isNaN(rateVal) || isNaN(timeVal)) {
    return res
      .status(400)
      .json({ error: "Invalid input values. Please enter numbers." });
  }

  const interest = (principalVal * rateVal * timeVal) / 100;

  res.json({
    principal: principalVal,
    interest: interest,
  });
});

app.listen(port, function () {
  console.log(`Server is listening at ${port}`);
});
