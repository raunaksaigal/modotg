import express, { Router } from "express";
import { User } from "./models.mjs";

const app = express();
const router = Router();

// await User.sync({ force: true });
// const user = await User.create({
//   userName: "ron",
//   displayName: "ron",
//   password: "somepassword",
// });
// console.log(user.id);

app.listen(3000, () => {
  console.log("Server started at port 3000");
});
