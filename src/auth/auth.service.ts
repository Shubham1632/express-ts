import { User, users } from "../user/user.controller";
import { v4 as uuid } from "uuid";
import { hash, compare } from "bcrypt";

type authData = {
  email: string;
  password: string;
};

export async function signUpUser(authData: {
  email: string;
  password: string;
}) {
  const id = uuid();
  const hashedPassword = await hash(authData.password, 10);
  users.push({
    id: id,
    email: authData.email,
    password: hashedPassword,
  });
  return {
    id: id,
    email: authData.email,
  };
}

export async function signInUser(authData: {
  email: string;
  password: string;
}) {
  const user = users.find((user) => user.email == authData.email);
  if (!user) throw new Error("user not found");
  if (!compare(authData.password, user.password))
    throw new Error("Password dosent match");
  return { id: user.id, email: user.email };
}
