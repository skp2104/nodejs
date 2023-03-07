const express = require("express");
const routes = express.Router();

routes.get("/", (req, res) => {
  res.send([
    {
      id: 1,
      name: "Shravan",
    },
    {
      id: 2,
      name: "Ashok",
    },
    {
      id: 3,
      name: "SKP",
    },
  ]);
});

module.exports = routes;
