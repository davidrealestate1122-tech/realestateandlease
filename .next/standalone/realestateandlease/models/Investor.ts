import mongoose from "mongoose"

const InvestorSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
})

export default mongoose.models.Investor || mongoose.model("Investor", InvestorSchema)