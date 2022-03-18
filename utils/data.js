import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Admin",
      email: "admin@mail.com",
      password: bcrypt.hashSync("123123"),
      isAdmin: true,
    },
    {
      name: "User1",
      email: "user1@mail.com",
      password: bcrypt.hashSync("123123"),
      isAdmin: false,
    },
    {
      name: "User2",
      email: "user2@mail.com",
      password: bcrypt.hashSync("123123"),
      isAdmin: false,
    },
  ],
};
export default data;
