import mongoose from "mongoose"

const schema = new mongoose.Schema({
  externalId: String,
  address: String,
  city: String,
  state: String,
  zip: String,
}, { timestamps: true })

export default mongoose.models.Property ||
  mongoose.model("Property", schema)
