import { User, users } from "./user.controller";
import { v4 as uuid } from "uuid";

export function saveUser(userData: { email: string; password: string }) {
  const id = uuid();
  users.push({ id: id, email: userData.email, password: userData.password });
  return {
    id: id,
    email: userData.email,
  };
}

export function getAllUser() {
  return users;
}

export function getById(id: string) {
  const currentUser = users.find((user) => user.id == id);
  console.log(currentUser);
  return { id: currentUser.id, email: currentUser.email };
}
