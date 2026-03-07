import mongoose, { Schema, model, models } from "mongoose"
const ExecutionInspectionSchema = new Schema(
  {
    executionWorkspaceId: {
      type: Schema.Types.ObjectId,
      ref: "ExecutionWorkspace",
      required: true,
    },
    taskId: {
      type: Schema.Types.ObjectId,
      ref: "ExecutionTask",
    },
    inspectionType: {
      type: String,
      enum: [
        "ELECTRICAL",
        "PLUMBING",
        "HVAC",
        "STRUCTURAL",
        "ROOF",
        "FINAL",
      ],
      required: true,
    },
    inspectionDate: {
      type: Date,
      required: true,
    },
    inspector: {
      name: String,
      license: String,
    },
    passed: {
      type: Boolean,
    },
    findings: [
      {
        item: String,
        severity: {
          type: String,
          enum: ["MINOR", "MAJOR", "CRITICAL"],
        },
        resolution: String,
        resolved: Boolean,
        resolutionDate: Date,
      },
    ],
    overallNotes: String,
    documentUrl: String,
  },
  { timestamps: true }
)

export default models.ExecutionInspection ||
  model("ExecutionInspection", ExecutionInspectionSchema)

