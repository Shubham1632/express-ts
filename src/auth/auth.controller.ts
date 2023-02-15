import * as express from "express";
import * as AuthService from "./auth.service";

type User = {
  id: string;
  email: string;
  password: string;
};

const users: User[] = [];

export { User, users };

var authRouter = express.Router();

authRouter.post("/auth/signup", async (req, res, _next) => {
  const newUser = await AuthService.signUpUser(req.body);
  res.send(newUser);
});

authRouter.post("/auth/signin", async (req, res, _next) => {
  const user = await AuthService.signInUser(req.body);
  res.send(user);
});

export { authRouter };
