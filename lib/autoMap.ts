const fields: any = {
  property_address: "property.address",
  purchase_price: "deal.purchasePrice",
  loan_amount: "deal.loanAmount",
}

const normalize = (s: string) => s.toLowerCase().replace(/_/g, "")

export function autoMap(variable: string) {
  const v = normalize(variable)

  for (let key in fields) {
    if (normalize(key) === v) return fields[key]
  }

  return null
}