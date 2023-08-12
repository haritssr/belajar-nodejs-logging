import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("index");
});

app.listen(3000, () => {
  console.info("Server started at port 3000");
});
