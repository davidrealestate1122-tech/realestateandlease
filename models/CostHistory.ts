import mongoose from "mongoose"

const schema = new mongoose.Schema({
  workspaceId: String,
  costType: String,
  oldPrice: Number,
  newPrice: Number,
  changedBy: String,
  createdAt: { type: Date, default: Date.now },
})

export default mongoose.models.CostHistory ||
  mongoose.model("CostHistory", schema)