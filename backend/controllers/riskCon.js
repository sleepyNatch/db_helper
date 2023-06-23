import ResultRisk from "../models/resultriskModele.js"
import User from "../models/userModels.js"
export const getRiskTestData = async (req, res) => {
  try {
    const data = await User.findOne({ username: "ll" })
    res.status(200).json(data)
  } catch (error) {
    res.status(404).json({ Error: error.message })
  }
}

export const getUserData = async (req, res) => {
  try {
    const data = await User.findOne({ username: "ll" })
    res.status(200).json(data)
  } catch (error) {
    res.status(404).json({ Error: error.message })
  }
}

export const ResultRisk = async (req, res) => {
  const { username, totalscore, levelRisk } = req.body
  const ResultRisk = ResultRisk({
    username,
    totalscore,
    levelRisk,
  })

  try {
    const data = await ResultRisk.save()
    res
      .status(201)
      .json({ message: "The results of the risk test", data: data })
  } catch (error) {
    res.status(409).json({ Error: error.message })
  }
}
