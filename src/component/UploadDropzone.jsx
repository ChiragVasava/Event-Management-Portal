import { useDropzone } from "react-dropzone"

export default function UploadDropzone({ onFiles }) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { "image/*": [] },
    multiple: true,
    onDrop: (files) => onFiles?.(files),
  })

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-md p-6 text-center ${
        isDragActive ? "border-teal-600 bg-teal-50" : "border-gray-300"
      }`}
    >
      <input {...getInputProps()} />
      <p className="text-sm">Drag & drop images here, or click to select files</p>
    </div>
  )
}
