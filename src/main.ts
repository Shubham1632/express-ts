import * as Express from "express";
import { userRouter } from "./user/user.controller";
import { authRouter } from "./auth/auth.controller";

const app = Express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use(Express.json());
app.use(userRouter);
app.use(authRouter);

app.listen(3000, () => {
  console.log("the server is listening on 3000");
});
