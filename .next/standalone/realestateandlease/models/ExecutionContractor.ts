import mongoose, { Schema } from "mongoose"

const ScopeItemSchema = new Schema(
  {
    category: {
      type: String,
      enum: [
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
    },
    description: String,
    status: {
      type: String,
      enum: ["PENDING", "IN_PROGRESS", "COMPLETED"],
      default: "PENDING",
    },
  },
  { timestamps: true }
)

const PaymentMilestoneSchema = new Schema(
  {
    milestone: String, // e.g., "First", "Second", "Third", etc.
    percentage: Number, // 20, 40, 60, 80, 100
    amount: Number,
    status: {
      type: String,
      enum: ["PENDING", "INVOICED", "PAID"],
      default: "PENDING",
    },
    paidDate: Date,
  },
  { timestamps: true }
)

const ExecutionContractorSchema = new Schema(
  {
    // Property Reference
    propertyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Property",
      required: true,
    },
    executionWorkspaceId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ExecutionWorkspace",
    },

    // Basic Contractor Info (from SOW Agreement)
    name: String, // Contractor Name
    email: String,
    phone: String,
    address: String,
    state: String,
    licenseNumber: String,

    // SOW Status Workflow
    sowStatus: {
      type: String,
      enum: ["DRAFT", "SENT", "SIGNED", "ACTIVE", "COMPLETED", "TERMINATED"],
      default: "DRAFT",
    },

    // Timeline
    sowStartDate: Date,
    sowCompletionDate: Date, // Target completion date

    // Budget & Payment
    sowBudget: {
      type: Number,
      default: 0,
    },
    sowPaidToDate: {
      type: Number,
      default: 0,
    },

    // Scope Items (mapped from SOW categories)
    scopeItems: [ScopeItemSchema],

    // Payment Schedule (5 milestone payments: 20%, 40%, 60%, 80%, 100%)
    paymentSchedule: [PaymentMilestoneSchema],

    // Additional Notes
    notes: String,
    documents: [String], // URLs to SOW documents, permits, etc.
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
)

// Index for queries
ExecutionContractorSchema.index({ propertyId: 1 })
ExecutionContractorSchema.index({ executionWorkspaceId: 1 })

export default mongoose.models.ExecutionContractor ||
  mongoose.model("ExecutionContractor", ExecutionContractorSchema)