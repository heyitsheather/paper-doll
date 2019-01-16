const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const wardrobeSchema = new Schema(
  {
    wardrobeOwner:{type:Schema.Types.ObjectId, ref:"User", required: true},
    measurements:{type:Schema.Types.ObjectId, ref:"Measurements"},
    clothingItem:{type:Schema.Types.ObjectId, ref:"Item"},
  },

  {
    // additional settings for the Schema class
    timestamps: true
  }
);

const Wardrobe = mongoose.model("Wardrobe", wardrobeSchema);

module.exports = Wardrobe;