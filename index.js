const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/pedals")
  .then(() => {
    console.log("Connection OPEN");
  })
  .catch((err) => {
    console.log(`Conection error: ${err}`);
  });
