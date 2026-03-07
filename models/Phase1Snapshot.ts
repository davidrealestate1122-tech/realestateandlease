import mongoose from "mongoose"

const schema = new mongoose.Schema({
  propertyId: mongoose.Schema.Types.ObjectId,
  arv: Object,
  costs: Object,
  negativeFactors: [String],
  evaluatedAt: Date,
}, { timestamps: true })

export default mongoose.models.Phase1Snapshot ||
  mongoose.model("Phase1Snapshot", schema)
