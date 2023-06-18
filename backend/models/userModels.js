/***
 
This file is the structure of the users's collection**/

import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required: true, unique: false },
  surname: { type: String, required: true, unique: false },
  phone_number: { type: Number, required: true, unique: false },
  gender: { type: Boolean, required: true, unique: false },
  daybirth: { type: Number, required: true, unique: false },
  monthbirth: { type: Number, required: true, unique: false },
  yearbirth: { type: Number, required: true, unique: false },
  username: { type: String, required: true, unique: true },
  password: {type: String, required: true, unique: false},
  email: { type: String, unique: true },
  
});

const User = mongoose.model("User", userSchema);

export default User;