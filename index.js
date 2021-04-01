import express from "express";

let app = express();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(3000, () => {
  console.log("server is started on http://localhost:3000/");
});
