export type User = {
  id: string;
  email: string;
  password: string;
};

export class UserStore {
  users: User[];

  save(user: User) {
    this.users.push(user);
    return user;
  }
  getById(id: string) {
    return this.users.find((user) => user.id == id);
  }
}
