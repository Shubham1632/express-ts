import * as express from "express";
import * as UserService from "./user.service";
type User = {
  id: string;
  email: string;
  password: string;
};

const users: User[] = [];

export { User, users };

var userRouter = express.Router();

userRouter.post("/user", (req, res, _next) => {
  const newUser = UserService.saveUser(req.body);
  res.send(newUser);
});

userRouter.get("/user", (req, res) => {
  res.send(UserService.getAllUser());
});

userRouter.get("/user/:id", (req, res) => {
  res.send(UserService.getById(req.params.id));
});

export { userRouter };
