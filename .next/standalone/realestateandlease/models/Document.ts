import mongoose, { Schema } from "mongoose"
 
const DocumentSchema = new Schema({
  templateId:        { type: String, required: true },
  propertyId:        { type: String, required: true },
  version:           { type: Number, required: true },   // auto-incremented
  fileUrl:           { type: String },                   // public URL for download
  filePath:          { type: String },                   // server-side path
  resolvedVariables: { type: Map, of: String },          // snapshot of values used
   pdfUrl:            { type: String },   // ← add this
  pdfPath:           { type: String },   // ← add this
  status:            { type: String, default: "generated" },
  createdAt:         { type: Date, default: Date.now },
})
// Compound index for quick lookup per deal+template
DocumentSchema.index({ templateId: 1, propertyId: 1, version: 1 })
 
export default mongoose.models.Document || mongoose.model("Document", DocumentSchema)