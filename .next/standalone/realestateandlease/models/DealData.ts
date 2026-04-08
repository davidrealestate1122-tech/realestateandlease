import mongoose, { Schema } from "mongoose"
 
const DealDataSchema = new Schema({
  templateId: { type: String, required: true },
  propertyId: { type: String, required: true },
  variable:   { type: String, required: true },
  value:      { type: String, default: "" },
  source:     { type: String, default: "override" },  // "override" | "deal" | "database"
  updatedAt:  { type: Date, default: Date.now },
})
 
// Compound index: one value per variable per deal+template combo
DealDataSchema.index({ templateId: 1, propertyId: 1, variable: 1 }, { unique: true })
 
export default mongoose.models.DealData || mongoose.model("DealData", DealDataSchema)