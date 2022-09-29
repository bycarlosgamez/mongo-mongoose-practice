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
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  knobs: {
    type: Number,
    required: true,
  },
  effectType: {
    type: String,
    required: true,
  },
  onSale: {
    type: Boolean,
    default: true,
  },
});

const Pedal = mongoose.model("Pedal", pedalSchema);

const smallStone = new Pedal({
  name: "Small Stone",
  brand: "Electro Harmonix",
  knobs: 1,
  effectType: "phaser",
});
