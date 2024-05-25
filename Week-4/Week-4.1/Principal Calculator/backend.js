const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

app.get("/principal", (req, res) => {
  const principal = parseInt(req.query.principal);
  const rate = parseInt(req.query.rate);
  const time = parseInt(req.query.time);

  if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
    return res
      .status(400)
      .json({
        error:
          "Please provide valid numeric values for principal, rate, and time.",
      });
  }

  const interest = (principal * rate * time) / 100;
  res.json({ principal, rate, time, interest });
});

app.listen(port, () => {
  console.log(`Server is listening at ${port}`);
});
