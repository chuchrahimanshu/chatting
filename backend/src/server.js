// Import Section
import express from "express";
import "dotenv/config";

// Configuration Section
const app = express();
const PORT = process.env.PORT;

// Routing and Port Listening Section
app.listen(PORT, (error) => {
  if (error) {
    console.log(`Error - Connecting to Server at http://localhost:${PORT}`);
    return;
  }
  console.log(
    `Success - Server connected successfully at http://localhost:${PORT}`
  );
});
