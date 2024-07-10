// Import Section
import express from "express";
import "dotenv/config";
import "./config/database.config.js";
import "./config/nodemailer.config.js";
import router from "./routes/index.routes.js";
import morgan from "morgan";
import cors from "cors";

// Configuration Section
const app = express();
const PORT = process.env.PORT;

// Middleware Section
app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://192.168.29.231",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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
