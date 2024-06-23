const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

const users = [
  {
    name: "John",
    kidneys: [{ healthy: false }],
  },
];

app.get("/", (req, res) => {
  const johnKidneys = users[0].kidneys;
  const noOfKidneys = johnKidneys.length;
  let noOfHealthyKidneys = 0;

  for (let i = 0; i < johnKidneys.length; i++) {
    if (johnKidneys[i].healthy) {
      noOfHealthyKidneys++;
    }
  }

  const noOfUnhealthyKidneys = noOfKidneys - noOfHealthyKidneys;

  res.json({
    noOfKidneys,
    noOfHealthyKidneys,
    noOfUnhealthyKidneys,
  });
});

app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Done",
  });
});

app.put("/", (req, res) => {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({
    msg: "All kidneys are now healthy",
  });
});

app.delete("/", (req, res) => {
  let unhealthyKidneysExist = false;

  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) {
      unhealthyKidneysExist = true;
      break;
    }
  }

  // If unhealthy kidneys exist, mark them as healthy
  if (unhealthyKidneysExist) {
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (!users[0].kidneys[i].healthy) {
        users[0].kidneys[i].healthy = true;
      }
    }
    res.status(200).json({ msg: "Unhealthy kidneys are now healthy." });
  } else {
    res.status(400).json({ msg: "All kidneys are already healthy." });
  }
});

app.listen(port, () => {
  console.log(`Server listening at ${port}`);
});
