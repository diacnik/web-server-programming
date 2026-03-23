import express from "express"; // Importing from node_modules
import usersController from "./controllers/users"; // Importing from local file

const PORT = 3000;
const SERVER = `localhost`;

const app = express();

// pipeline
app
  .get("/", (_req, res) => {
    res.send("Hello, World!");
  })
  .get("/suny", (_req, res) => {
    res.send("The best plan of my life!");
  })
  .use("/users", usersController); // use is a catch all method, all path, and all query params that start with /users

// callback
app.listen(PORT, () => {
  console.log(`Server is running on port http://${SERVER}:${PORT}`);
});

console.log("Listening for requests...");