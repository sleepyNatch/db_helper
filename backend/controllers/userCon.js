/*******************************************************************************
 * This file includes the functions that add, update, delete and query the data
 * from the users's collection in the database.
 ******************************************************************************/
import User from "../models/userModels.js";

/*******************************************************************************
 * This function is used to register the user.
 * Returns
 *  - true status if registered successfully
 *  - false status if registered not successfully
 ******************************************************************************/
export const register = async (req, res) => {
  const { name, surname, phone_number, gender, daybirth, monthbirth, yearbirth, username ,password, email } = req.body;
  const newUser = new User({
    name,
    surname,
    phone_number,
    gender,
    daybirth,
    monthbirth,
    yearbirth,
    username,
    password ,
    email,
 
  });

  try {
    const data = await newUser.save();
    res.status(201).json({message:"Registerd Succeesful", data: data });
  } catch (error) {
    res.status(409).json({ Error: error.message });
  }
};


export const getData = async (req, res) => {
  try {
    const data = await User.findOne({username: "ll"});
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ Error: error.message });
  }
  
};