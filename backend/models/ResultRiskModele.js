import mongoose from "mongoose"

const ResultRiskSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  totalscore: { type: Number, required: true, unique: false },
  levelRisk: { type: String, required: true, unique: false },
})

const ResultRisk = mongoose.model("Result", ResultriskSchema)

export default ResultRisk
