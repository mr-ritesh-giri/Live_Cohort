const express = require("express");
const app = express();

const port = 3000;

// function oldEnough(age) {
//   if (age >= 14) {
//     return true;
//   } else {
//     return false;
//   }
// }

function isOldEnoughMiddleware(req, res, next) {
  const age = req.query.age;
  if (age >= 14) {
    next();
  } else {
    res.json({
      msg: "Sorry you are not of age yet!",
    });
  }
}

app.get("/ride1", isOldEnoughMiddleware, (req, res, next) => {
  res.json({ msg: "You have successfully riden ride 1." });
  next();
});

app.get("/ride2", isOldEnoughMiddleware, (req, res) => {
  res.json({ msg: "You have successfully riden ride 2." });
});

app.listen(port, () => {
  console.log(`Your server is listening at ${port}`);
});
