const express = require("express");
const app = express();
const zod = require("zod");
app.use(express.json());

function validateInput(obj) {
  const schema = zod.object({
    email: zod.string().email(),
    password: zod.string(),
  });

  return schema.safeParse(obj);
}

app.post("/login", (req, res) => {
  const response = validateInput(req.body);
  if (!response.success) {
    res.status(400).send("Your inputs are invalid.");
    return;
  }
  res.send("Login successful!");
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
