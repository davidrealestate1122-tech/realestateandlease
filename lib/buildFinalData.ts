export function getValueFromPath(path: string, obj: any) {
  return path.split(".").reduce((o, key) => o?.[key], obj)
}

export function buildFinalData(variables: any[], sources: any) {
  const result: any = {}

  variables.forEach(v => {
    if (v.overrideValue) {
      result[v.variable] = v.overrideValue
    } else if (v.mappedTo) {
      result[v.variable] = getValueFromPath(v.mappedTo, sources)
    } else {
      result[v.variable] = ""
    }
  })

  return result
}