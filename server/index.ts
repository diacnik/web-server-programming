import express from "express"; // Importing from node_modules
import usersController from "./controllers/users"; // Importing from local file
import { DataEnvelope } from "./types";

const PORT = 3000;
const SERVER = `localhost`;

const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

// mappings
// pipeline
app
  .get("/", (_req, res) => {
    res.send("Hello, World!");
  })
  .get("/suny", (_req, res) => {
    res.send("The best plan of my life!");
  })
  .use("/users", usersController); // use is a catch all method, all path, and all query params that start with /users

// Error handling
app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  
  console.error(err);
  const response: DataEnvelope<null> = {
    data: null,
    isSuccess: false,
    message: err.message,
  };
  res.status((err as any).status ?? 500).send(response);
});

  // callback
app.listen(PORT, () => {
  console.log(`Server is running on port http://${SERVER}:${PORT}`);
});

console.log("Listening for requests...");