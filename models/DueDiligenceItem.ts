import mongoose from "mongoose"

const schema = new mongoose.Schema({
  executionWorkspaceId: mongoose.Schema.Types.ObjectId,
  label: String,
  completed: { type: Boolean, default: false },
  completedAt: Date,
})

export default mongoose.models.DueDiligenceItem ||
  mongoose.model("DueDiligenceItem", schema)
