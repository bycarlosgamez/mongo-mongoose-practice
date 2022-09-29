const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/pedals")
  .then(() => {
    console.log("Connection OPEN");
  })
  .catch((err) => {
    console.log(`Conection error: ${err}`);
  });

const pedalSchema = new mongoose.Schema({
  name: String,
  brand: String,
  knobs: Number,
  type: String,
});

const Pedal = mongoose.model("Pedal", pedalSchema);

const smallStone = new Pedal({
  name: "Small Stone",
  brand: "Electro Harmonix",
  knobs: 1,
  type: "phaser",
});
