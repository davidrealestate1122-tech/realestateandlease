import mongoose from "mongoose"

const schema = new mongoose.Schema({
  propertyId: mongoose.Schema.Types.ObjectId,
  stage: {
    type: String,
    enum: ["DUE_DILIGENCE", "BIDDING", "REHAB", "CLOSING"],
    default: "DUE_DILIGENCE",
  },
  executionCosts: Object,
}, { timestamps: true })

export default mongoose.models.ExecutionWorkspace ||
  mongoose.model("ExecutionWorkspace", schema)
