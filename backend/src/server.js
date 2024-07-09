// Import Section
import express from "express";
import "dotenv/config";
import "./config/database.config.js";
import "./config/nodemailer.config.js";
import router from "./routes/index.routes.js";

// Configuration Section
const app = express();
const PORT = process.env.PORT;

// Routing and Port Listening Section
app.use("/", router);
app.listen(PORT, (error) => {
  if (error) {
    console.log(`Error - Connecting to Server at http://localhost:${PORT}`);
    return;
  }
  console.log(
    `Success - Server connected successfully at http://localhost:${PORT}`
  );
});
