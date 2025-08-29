import * as cocoSsd from "@tensorflow-models/coco-ssd"
import * as tf from "@tensorflow/tfjs"

let model
async function getModel() {
  if (!model) {
    await tf.ready()
    model = await cocoSsd.load()
  }
  return model
}

export async function detectImageTags(fileOrUrl) {
  const m = await getModel()
  // Create image element
  const img = await toImage(fileOrUrl)
  const predictions = await m.detect(img)
  const tags = Array.from(new Set(predictions.map((p) => p.class.toLowerCase().replace(/\s+/g, "-"))))
  return tags
}

async function toImage(fileOrUrl) {
  return new Promise((resolve) => {
    const img = new Image()
    img.crossOrigin = "anonymous"
    img.onload = () => resolve(img)
    if (fileOrUrl instanceof File || fileOrUrl instanceof Blob) {
      const url = URL.createObjectURL(fileOrUrl)
      img.src = url
    } else {
      img.src = fileOrUrl
    }
  })
}
