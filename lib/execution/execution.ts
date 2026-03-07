import { NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import Property from "@/models/Property"
import Phase1Snapshot from "@/models/Phase1Snapshot"
import ExecutionWorkspace from "@/models/ExecutionWorkspace"
import DueDiligenceItem from "@/models/DueDiligenceItem"
import { DUE_DILIGENCE_CHECKLIST } from "@/lib/checklist"

export async function bootstrapExecution(evaluation: any) {
  await connectDB()
 

  const property = await Property.create({
    externalId: evaluation.externalId,
    address: evaluation.address,
    city: evaluation.city,
    state: evaluation.state,
    zip: evaluation.zip,
  })

  await Phase1Snapshot.create({
    propertyId: property._id,
    arv: evaluation.underwriting.arv,
    costs: evaluation.underwriting.costs,
    negativeFactors: evaluation.underwriting.negativeFactors,
    evaluatedAt: evaluation.evaluatedAt,
  })

  const workspace = await ExecutionWorkspace.create({
    propertyId: property._id,
    executionCosts: evaluation.underwriting.costs,
  })

  await DueDiligenceItem.insertMany(
    DUE_DILIGENCE_CHECKLIST.map(label => ({
      executionWorkspaceId: workspace._id,
      label,
    }))
  )

  return NextResponse.json({ success: true })
}
