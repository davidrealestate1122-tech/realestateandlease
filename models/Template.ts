import mongoose from "mongoose"

const TemplateSchema = new mongoose.Schema({
  name: String,
  fileUrl: String,
  type: String,
}, { timestamps: true })

export default mongoose.models.Template || mongoose.model("Template", TemplateSchema)