const express = require("express");
const z = require("zod");
const app = express();
const port = 3000;
app.use(express.json());

const schema = z.array(z.number());

const schema1 = z.object({
  email: z.string(),
  password: z.number(),
  country: z.literal("IN").or(z.literal("US")),
  kidney: z.array(z.number()),
});

app.post("/health-checkup", (req, res) => {
  const kidney = req.body.kidney;
  const response = schema.safeParse(kidney);

  if (!response.success) {
    res.status(411).json({
      msg: "Input is invalid.",
    });
  } else {
    res.status(200).send({
      response: "Inputs are valid.",
    });
  }
});

app.use(function (err, req, res, next) {
  res.send(
    "There is something wrong with the server. Sorry for the inconvenience."
  );
});

app.listen(port, () => {
  console.log(`Your port is listening at ${port}`);
});

// app.use((req, res, next) => {
//   req.startTime = Date.now();
//   next();
// });

// function userMiddleware(req, res, next) {
//   const username = req.headers.username;
//   const password = req.headers.password;

//   if (!(username == "mr_ritesh_giri" && password == "pass")) {
//     res.status(403).json({ msg: "Inputs are incorrect." });
//   } else {
//     next();
//   }
// }

// function kidneyMiddleware(req, res, next) {
//   const kidneyId = req.query.kidneyId;

//   if (kidneyId != 1 && kidneyId != 2) {
//     res.status(400).json({
//       msg: "Incorrect Query",
//     });
//   } else {
//     next();
//   }
// }

// app.get("/health-checkup", userMiddleware, kidneyMiddleware, (req, res) => {
//   res.json({ msg: "Your heart is healthy" });

//   req.endTime = Date.now();
//   let averageTime = req.endTime - req.startTime;
//   console.log(`Request took ${averageTime} milliseconds to process.`);
// });
