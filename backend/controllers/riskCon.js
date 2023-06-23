/*******************************************************************************
 * This file includes the functions that add, update, delete and query the data
 * from the users's collection in the database.
 ******************************************************************************/
import Risk from "../models/RiskTestModel.js";

/*******************************************************************************
 * This function is used to register the user.
 * Returns
 *  - true status if registered successfully
 *  - false status if registered not successfully
 ******************************************************************************/
export const saveRisk = async (req, res) => {
  const {weight,height,waistline,kwamdan,relatives } = req.body;
  const  newRisk= new Risk({
    weight,
    height,
    waistline,
    kwamdan,
    relatives,
  });

  try {
    const data = await newRisk.save();
    res.status(201).json({message:"information filled", data: data });
  } catch (error) {
    res.status(409).json({ Error: error.message });
  }
};


// export const getData = async (req, res) => {
//   try {
//     const data = await User.findOne({username: "ll"});
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(404).json({ Error: error.message });
//   }
  
// };

// export const deleteData = async (req, res) => {
//     try {
//       const data = await User.deleteMany ({username: "ll"});
//       res.status(200).json(data);
//     } catch (error) {
//       res.status(404).json({ Error: error.message });
//     }
    
//   };
// export const updateData = async (req, res) => {
//   try {
//     const data = await User.updateOne({username:"ll"},{$set: {name:"Varakron"}});
//     res.status(200).json(data);({status : true,Massage: "Update Successfully"})
//   } catch (error) {
//     res.status(404).json({ Error: error.message });
//   }
  
// };
