const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const measurements= new Schema(
  {
    wardrobeOwner:{type:Schema.Types.ObjectId, ref:"User", required: true},
    
    
  },

  {
    // additional settings for the Schema class
    timestamps: true
  }
);

const measurements = mongoose.model("Measurements", measurementSchema);

module.exports = measurements;