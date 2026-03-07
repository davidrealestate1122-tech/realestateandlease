import mongoose from "mongoose"

const ContractorFileSchema = new mongoose.Schema(
  {
    contractorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Contractor",
      required: true,
      index: true,
    },
    fileName: { type: String, required: true },
    originalName: { type: String, required: true },
    fileUrl: { type: String, required: true },
    fileSize: { type: Number, required: true },
    mimeType: { type: String, required: true },
    fileType: {
      type: String,
      enum: ["signed_sow", "invoice", "payment_confirmation", "progress_photo"],
      required: true,
      index: true,
    },
    description: { type: String, trim: true },
    uploadedBy: { type: String, required: true },
  },
  { timestamps: true }
)

ContractorFileSchema.index({ contractorId: 1, fileType: 1 })
ContractorFileSchema.index({ createdAt: -1 })

export default mongoose.models.ContractorFile || mongoose.model("ContractorFile", ContractorFileSchema)