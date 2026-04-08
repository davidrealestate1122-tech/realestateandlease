import mongoose, { Schema, model, models } from "mongoose"

const Cost = new Schema(
  {
    executionWorkspaceId: {
      type: Schema.Types.ObjectId,
      ref: "ExecutionWorkspace",
      required: true,
      index: true,
    },
    category: {
      type: String,
      required: true,
    },
    plannedAmount: {
      type: Number,
      required: true,
      default: 0,
    },
    actualAmount: {
      type: Number,
      required: true,
      default: 0,
    },
    notes: {
      type: String,
    },
  },
  { timestamps: true }
)

Cost.virtual("variance").get(function () {
  return this.actualAmount - this.plannedAmount
})

export default models.Cost ||
  model("Cost", Cost)