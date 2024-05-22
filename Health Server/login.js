const express = require("express");
const app = express();
const z = require("zod");

app.use(express.json());

const loginSchema = z.object({
  username: z.string().min(4),
  password: z.string().min(4),
  email: z.string().email(),
  age: z.number(),
});

app.post("/login", (req, res) => {
  const { username, password, email, age } = req.body;
  try {
    loginSchema.parse({ username, password, email, age });
    res.send(" Successfully logged in to the server.");
  } catch (error) {
    res.status(400).json({ error: "Invalid input.", details: error.errors });
  }
});

app.listen(5000, () => {
  console.log("Server is listening at 5000 port.");
});
