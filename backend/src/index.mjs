import express from "express";
// import { User } from "./models.mjs";
import { userRouter } from "./authRoutes/userAuth.mjs";
const app = express();

// await User.sync({ force: true });
// const user = await User.create({
//   userName: "ron",
//   displayName: "ron",
//   password: "somepassword",
// });
// console.log(user.id);

app.use("/auth", userRouter);
app.get("/", (req, res) => {
  console.log("root");
  res.send("root");
  res.end();
});

app.listen(3000, () => {
  console.log("Server started at port 3000");
});
