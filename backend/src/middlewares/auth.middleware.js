import JWT from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const isAuthenticated = async (req, res, next) => {
  try {
    const bearerToken = req.headers["authorization"];
    if (!bearerToken?.trim()) {
      return res.status(401).json({
        message: "Bearer token missing in headers",
      });
    }

    const accessToken = bearerToken.split(" ")[1];
    if (!accessToken?.trim()) {
      return res.status(401).json({
        message: "Access token missing in bearer token",
      });
    }

    const user = await JWT.verify(
      accessToken,
      process.env.JWT_ACCESS_TOKEN_SECRET
    );

    req.user = user;
    next();
  } catch (error) {
    return res.status(500).json({
      message: "Error - isAuthenticated Middleware",
      error: error,
    });
  }
};
