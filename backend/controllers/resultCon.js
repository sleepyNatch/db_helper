import ResultRisk from "../models/resultriskModele.js";
import User from "../models/userModels.js";

export const getScore = async (req, res) => {
  const { username } = req.query;
  try {
    const data = await Risk.findOne({ username: username });
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ Error: error.message });
  }
};
