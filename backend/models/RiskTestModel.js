/***
 
This file is the structure of the users's collection**/

import mongoose from "mongoose";

const riskSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  weight: { type: Number, required: true, unique: false },
  height: { type: Number, required: true, unique: false },
  waistline: { type: Number, required: true, unique: false },
  kwamdan: { type: Boolean, required: true, unique: false },
  relatives: { type: Boolean, required: true, unique: false },
  score: { type: Number, required: true, unique: false },
  level: { type: Number, required: true, unique: false },
});

const Risk = mongoose.model("Risk", riskSchema);

export default Risk;
