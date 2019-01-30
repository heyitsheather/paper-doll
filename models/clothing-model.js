const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const clothingSchema = new Schema({
    // itemOwner:{type:Schema.Types.ObjectId, ref:"User", required: true},
    type: {type: String, required: true},
    link: {type: String, required: true},
    brand: {type: String, required: true},
    price: {type: Number, required: true},
    image: {type: String, required: false},
    notes: {type: String, required: true},
  },

  {
    // additional settings for the Schema class
    timestamps: true
  }
);

// "Clothing" model -> "clothing" collection
const Clothing = mongoose.model("Clothing", clothingSchema);

module.exports = Clothing;
