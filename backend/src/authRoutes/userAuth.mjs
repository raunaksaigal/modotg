import express, { Router } from "express";

export const userRouter = Router();

userRouter.get("/login", (req, res) => {
  console.log("login");
  res.send("login");
  res.end();
});
userRouter
  .route("/users")
  .get((req, res) => {
    console.log("users");
    res.send("users");
    res.end();
  })
  .post((req, res) => {
    res.send("user created");
  });

userRouter.get("/user/me", (req, res) => {
  console.log("user/me");
  res.send("me");
  res.end();
});
