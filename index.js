require("dotenv").config(); // if there is a .env file on the root folder it will merge it into process.env

const express = require("express");

const server = express();

server.get("/", (req, res) => {
  const message = process.env.MESSAGE || "It's working!";
  res.status(200).json({ message });
});

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
