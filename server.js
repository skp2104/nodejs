const express = require("express");
const app = express();
PORT = 5000;
const product = require("./routes/product");

app.get("/", (req, res) => {
  res.send("Hello");
});
app.use("/product", product);

app.get("/emp", (req, res) => {
  res.send([
    {
      id: 1,
      name: "Skp",
    },
    {
      id: 2,
      name: "Ashok",
    },
  ]);
});

app.listen(PORT, () => {
  console.log("Server is running");
});
