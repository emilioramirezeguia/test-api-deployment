const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.status(200).json({ message: "It's working... it's working!!!" });
});

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
