const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Genre model Schema
const GenreSchema = new Schema({
  name: { type: String, required: true, min: 3, max: 100 },
});

// Virtual get for the genre url
GenreSchema.virtual("url").get(function () {
  return `/catalog/genre/${this._id}`;
});

// Export Model
module.exports = mongoose.model("Genre", GenreSchema);
