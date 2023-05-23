import mongoose from "mongoose";

const countSchema = new mongoose.Schema({
  id: { 
        type: String, 
        required: true 
    },
  seq: { 
        type: Number, 
        },
});

export const countModel = mongoose.model("counter", countSchema);