export async function generateImageFromPrompt(prompt) {
  const token = import.meta.env.VITE_REPLICATE_API_TOKEN
  if (!token) throw new Error("Missing VITE_REPLICATE_API_TOKEN")
  const resp = await fetch("https://api.replicate.com/v1/predictions", {
    method: "POST",
    headers: {
      Authorization: `Token ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // Example SDXL model
      version: "a9758cb3b0...stub...", // replace with a valid version if needed
      input: { prompt },
    }),
  })
  const pred = await resp.json()
  let status = pred.status
  let output = pred.output
  // Poll until complete (simplified)
  while (status !== "succeeded" && status !== "failed") {
    await new Promise((r) => setTimeout(r, 1500))
    const res2 = await fetch(`https://api.replicate.com/v1/predictions/${pred.id}`, {
      headers: { Authorization: `Token ${token}` },
    })
    const p2 = await res2.json()
    status = p2.status
    output = p2.output
  }
  if (status !== "succeeded") throw new Error("Generation failed")
  return Array.isArray(output) ? output[0] : output
}
