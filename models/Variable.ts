import mongoose from "mongoose"

const VariableSchema = new mongoose.Schema({
  templateId: { type: mongoose.Schema.Types.ObjectId, ref: "Template" },
  variable: String,
  mappedTo: String,
}, { timestamps: true })

export default mongoose.models.Variable || mongoose.model("Variable", VariableSchema)