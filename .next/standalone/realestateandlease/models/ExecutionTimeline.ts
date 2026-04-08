import mongoose, { Schema, model, models } from "mongoose"
const ExecutionTimelineSchema = new Schema(
  {
    executionWorkspaceId: {
      type: Schema.Types.ObjectId,
      ref: "ExecutionWorkspace",
      required: true,
      index: true,
    },
    projectStartDate: {
      type: Date,
      required: true,
    },
    projectTargetDate: {
      type: Date,
      required: true,
    },
    projectActualDate: {
      type: Date,
    },
    milestones: [
      {
        name: String,
        plannedDate: Date,
        actualDate: Date,
        description: String,
        tasksCompleted: Number,
        totalTasks: Number,
        status: {
          type: String,
          enum: ["SCHEDULED", "IN_PROGRESS", "COMPLETED", "DELAYED"],
          default: "SCHEDULED",
        },
      },
    ],
    daysOverBudget: {
      type: Number,
      default: 0,
    },
    delayReason: String,
    statusUpdates: [
      {
        date: Date,
        update: String,
        percentComplete: Number,
      },
    ],
  },
  { timestamps: true }
)

export default models.ExecutionTimeline ||
  model("ExecutionTimeline", ExecutionTimelineSchema)