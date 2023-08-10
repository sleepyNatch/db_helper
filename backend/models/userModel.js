/***
 
This file is the structure of the users's collection**/

import mongoose from "mongoose"

const userSchema = mongoose.Schema({
  name: { type: String, required: true, unique: false },
  surname: { type: String, required: true, unique: false },
  phoneNumber: { type: Number, required: true, unique: false },
  gender: { type: Number, required: true, unique: false },
  birthDate: { type: Date, required: true, unique: false },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: false },
  confirmPassword: { type: String, required: true, unique: false },
  email: { type: String, unique: true },
})

const User = mongoose.model("User", userSchema)

export default User
