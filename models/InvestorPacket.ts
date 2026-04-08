import mongoose, { Schema } from "mongoose"

const InvestorPacketSchema = new Schema({
  propertyId: { type: String, required: true },
  name:       { type: String, default: "Investor Packet" },
  version:    { type: Number, default: 1 },
  pdfUrl:     { type: String },
  pdfPath:    { type: String },
  documents:  [{
    documentId: String,
    fileUrl:    String,
    title:      String,
    order:      Number,
  }],
  createdAt:  { type: Date, default: Date.now },
})

export default mongoose.models.InvestorPacket ||
  mongoose.model("InvestorPacket", InvestorPacketSchema)