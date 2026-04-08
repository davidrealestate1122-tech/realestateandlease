"use client"

import { useEffect, useState } from "react"

export default function Review({ templateId, propertyId }: any) {
  const [data, setData] = useState<any>({})

  useEffect(() => {
    fetch(`/api/templates/${templateId}/values?propertyId=${propertyId}`)
      .then(res => res.json())
      .then(setData)
  }, [])

  const save = async () => {
    await fetch("/api/deal-data", {
      method: "POST",
      body: JSON.stringify({
        propertyId,
        data
      })
    })
  }

  return (
    <div>
      {Object.keys(data).map(key => (
        <div key={key}>
          <label>{key}</label>
          <input
            value={data[key] || ""}
            onChange={e =>
              setData({ ...data, [key]: e.target.value })
            }
          />
        </div>
      ))}

      <button onClick={save}>Save</button>
    </div>
  )
}