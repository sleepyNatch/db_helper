/*******************************************************************************
 * This file includes the functions that add, update, delete and query the data
 * from the users's collection in the database.
 ******************************************************************************/
import User from "../models/userModel.js";

/*******************************************************************************
 * This function is used to register the user.
 * Returns
 *  - true status if registered successfully
 *  - false status if registered not successfully
 ******************************************************************************/
export const register = async (req, res) => {
  const {
    name,
    surname,
    phoneNumber,
    gender,
    birthDate,
    username,
    password,
    confirmPassword,
    email,
  } = req.body;
  const newUser = new User({
    name,
    surname,
    phoneNumber,
    gender,
    birthDate,
    username,
    password,
    confirmPassword,
    email,
  });

  try {
    const data = await newUser.save();
    res.status(201).json({ message: "Register Successful", data: data });
  } catch (error) {
    res.status(409).json({ Error: error.message });
  }
};

export const getUserDataByUsername = async (req, res) => {
  const username = req.params.username;

  try {
    const data = await User.findOne({ username: username });
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ Error: error.message });
  }
};

export const getData = async (req, res) => {
  try {
    const data = await User.findOne();
    res.status(200).json(req);
  } catch (error) {
    res.status(404).json({ Error: error.message });
  }
};

export const deleteData = async (req, res) => {
  try {
    const data = await User.deleteMany({ username: "ll" });
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ Error: error.message });
  }
};
export const updateData = async (req, res) => {
  try {
    const data = await User.updateOne(
      { username: "ll" },
      { $set: { name: "Varakron" } }
    );
    res.status(200).json(data);
    ({ status: true, Massage: "Update Successfully" });
  } catch (error) {
    res.status(404).json({ Error: error.message });
  }
};
