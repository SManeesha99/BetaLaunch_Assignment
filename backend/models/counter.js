const mongoose = require("mongoose");

const countSchema = new mongoose.Schema({
  id: { 
        type: String, 
        required: true 
    },
  seq: { 
        type: Number, 
        },
});

module.exports = mongoose.model("counter", countSchema);