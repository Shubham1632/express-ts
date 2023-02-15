import { NextFunction, Response } from "express";
import { Irequest } from "src/jwtPayload";
const jwt = require("jsonwebtoken");

export const authMiddleware = async (
  req: Irequest,
  res: Response,
  next: NextFunction
) => {
  const header = req.headers["authorization"];
  if (!header) {
    res.status(402).send("Acces denied");
  }
  try {
    const token = header.split(" ")[1];
    if (!token) {
      res.status(402).send("Acces denied");
    }
    const decode = await jwt.verify(token, "secret");
    if (decode) {
      req.user.email = decode.email;
      req.user.id = decode.id;
    }
    next();
  } catch (e) {
    throw new Error(e);
  }
};
