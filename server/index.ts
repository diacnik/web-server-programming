import express from "express"; // Importing from node_modules
import usersController from "./controllers/users"; // Importing from local file
import productsController from "./controllers/products"; // Importing from local file
import cartController from "./controllers/cart"; // Importing from local file
import { DataEnvelope } from "./types";
import { config } from "dotenv";

config();

const PORT = process.env.PORT ?? 3000;
const SERVER = process.env.SERVER ?? "localhost";
const STATIC_DIR = process.env.STATIC_DIR ?? "client/dist"; // working directory is server, so we need to go up one level to access client/dist

const app = express();

// Middleware
app
.use((_req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next(); // Call the next middleware or route handler
})
.use(express.json()); // Middleware to parse JSON bodies

// mappings
// pipeline
// Routes
app
  .use(express.static(STATIC_DIR)) // Serve static files from the specified directory
  .use("/api/v1/users", usersController) // use is a catch all method, all path, and all query params that start with /users
  .use("/api/v1/products", productsController) // use is a catch all method, all path, and all query params that start with /products
  .use("/api/v1/cart", cartController); // use is a catch all method, all path, and all query params that start with /cart
// Error handling
app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  
  console.error(err);
  const response: DataEnvelope<null> = {
    data: null,
    isSuccess: false,
    message: err.message ?? "An error occurred",
  };
  res.status((err as any).status ?? 500).send(response);
});

  // callback
app.listen(PORT, () => {
  console.log(`Server is running on port http://${SERVER}:${PORT}`);
});

console.log("Listening for requests...");