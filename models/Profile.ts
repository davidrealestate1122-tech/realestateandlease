import mongoose, { Schema } from "mongoose"
 
const ProfileSchema = new Schema({
  name:      { type: String, required: true },
  type:      { type: String, enum: ["investor","lender","contractor","company"], required: true },
  data:      { type: Map, of: String, default: {} },  // flexible key-value store
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
})
 
export default mongoose.models.Profile || mongoose.model("Profile", ProfileSchema)