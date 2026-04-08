import mongoose from "mongoose"

const FileSchema = new mongoose.Schema(
  {
    fileName: {
      type: String,
      required: true,
    },
    fileSize: {
      type: Number,
      required: true,
    },
    fileType: {
      type: String,
      enum: ["pdf", "photo", "invoice", "contractor_document"],
      required: true,
      index: true,
    },
    mimeType: {
      type: String,
      required: true,
    },
    fileUrl: {
      type: String,
      required: true,
    },
    workspaceId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ExecutionWorkspace",
      required: true,
      index: true,
    },
    propertyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Property",
      required: true,
      index: true,
    },
    contractorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Contractor",
      nullable: true,
    },
    description: {
      type: String,
      trim: true,
    },
    uploadedBy: {
      type: String,
      required: true,
    },
    tags: [String],
    isArchived: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

FileSchema.index({ workspaceId: 1, fileType: 1 })
FileSchema.index({ propertyId: 1, fileType: 1 })
FileSchema.index({ createdAt: -1 })

export default mongoose.models.File || mongoose.model("File", FileSchema)