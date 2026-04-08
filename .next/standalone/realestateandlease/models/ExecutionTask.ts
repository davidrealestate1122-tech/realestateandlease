import mongoose, { Schema, model, models } from "mongoose"

const ExecutionTaskSchema = new Schema(
  {
    executionWorkspaceId: {
      type: Schema.Types.ObjectId,
      ref: "ExecutionWorkspace",
      required: true,
      index: true,
    },
    // Task categories from SOW
    category: {
      type: String,
      enum: [
        "OVERVIEW",
        "DEMO",
        "WINDOWS",
        "LANDSCAPING",
        "EXTERIOR",
        "INTERIOR",
        "FLOORING",
        "DOORS",
        "ELECTRICAL",
        "PLUMBING",
        "HVAC",
        "BATHROOMS",
        "KITCHEN",
        "ROOF",
        "GARAGE",
        "PERMITS",
        "FINAL",
      ],
      required: true,
    },
    title: {
      type: String,
      required: true,
      example: "Install dual pane windows",
    },
    description: {
      type: String,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    completionDate: {
      type: Date,
    },
    priority: {
      type: String,
      enum: ["LOW", "MEDIUM", "HIGH", "CRITICAL"],
      default: "MEDIUM",
    },
    assignedContractor: {
      type: Schema.Types.ObjectId,
      ref: "ExecutionContractor",
    },
    dueDate: {
      type: Date,
    },
    notes: {
      type: String,
    },
    estimatedHours: {
      type: Number,
    },
    actualHours: {
      type: Number,
    },
    materials: [
      {
        name: String,
        quantity: Number,
        cost: Number,
      },
    ],
    inspectionRequired: {
      type: Boolean,
      default: true,
    },
    inspectionPassed: {
      type: Boolean,
    },
    inspectionNotes: {
      type: String,
    },
  },
  { timestamps: true }
)

export default models.ExecutionTask || model("ExecutionTask", ExecutionTaskSchema)