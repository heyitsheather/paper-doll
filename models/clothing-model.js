const mongoose = require("mongoose");

const User = require("./user-model")

const Schema = mongoose.Schema;

const clothingSchema = new Schema({
    itemOwner:{type: Schema.Types.ObjectId, ref:"User", required: false},
    type: {type: String, required: true},
    link: {type: String, required: true},
    brand: {type: String, required: true},
    price: {type: Number, required: true},
    size: {type: String, required: false},
    image: {type: String, required: false},
    notes: {type: String, required: false},
    width: {type: Number, required: false},
    height: {type: Number, required: false},
    // key:{type: String, required: false}
  },

  {
    // additional settings for the Schema class
    timestamps: true
  }
);

// "Clothing" model -> "clothing" collection
const Clothing = mongoose.model("Clothing", clothingSchema);

module.exports = Clothing;
