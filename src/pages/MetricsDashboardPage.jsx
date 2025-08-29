"use client"

import { useState } from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import metricsData from "../data/metrics.json"
import Button from "../component/ui/Button.jsx"
import { precomputeVendorEmbeddings } from "../lib/vectorStore.js"

const COLORS = ["#0d9488", "#f59e0b", "#111827", "#f3f4f6"]

export default function MetricsDashboardPage() {
  const [data, setData] = useState(metricsData)

  function refresh() {
    // simulate small random improvements
    const mutate = (arr) => arr.map((d) => ({ ...d, value: Math.max(0, d.value + (Math.random() * 2 - 1)) }))
    setData({
      ...data,
      accuracy: mutate(data.accuracy),
      responseTimeMs: mutate(data.responseTimeMs),
      relevanceScore: mutate(data.relevanceScore),
      taggingPrecision: mutate(data.taggingPrecision),
      promptSuccess: mutate(data.promptSuccess),
    })
  }

  return (
    <div className="container py-8 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Metrics Dashboard</h1>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => precomputeVendorEmbeddings()}>
            Precompute embeddings
          </Button>
          <Button variant="primary" onClick={refresh}>
            Refresh data
          </Button>
        </div>
      </div>

      <Section title="Accuracy (%)">
        <LineArea data={data.accuracy} color={COLORS[0]} />
      </Section>

      <Section title="Response Time (ms)">
        <Bars data={data.responseTimeMs} color={COLORS[1]} />
      </Section>

      <Section title="Relevance Score">
        <LineArea data={data.relevanceScore} color={COLORS[0]} />
      </Section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Section title="Tagging Precision">
          <LineArea data={data.taggingPrecision} color={COLORS[0]} />
        </Section>
        <Section title="Prompt Success Rate">
          <Bars data={data.promptSuccess} color={COLORS[1]} />
        </Section>
      </div>

      <Section title="Search to Click Ratio">
        <Donut value={data.searchToClickRatio?.value ?? 0} />
      </Section>
    </div>
  )
}

function Section({ title, children }) {
  return (
    <section className="border rounded-md p-4">
      <h2 className="font-semibold mb-3">{title}</h2>
      {children}
    </section>
  )
}

function LineArea({ data, color }) {
  return (
    <div className="h-56">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="t" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke={color} strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
function Bars({ data, color }) {
  return (
    <div className="h-56">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="t" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill={color} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
function Donut({ value }) {
  const chart = [
    { name: "Clicks", value },
    { name: "Other", value: 100 - value },
  ]
  return (
    <div className="h-56">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={chart} innerRadius={60} outerRadius={80} paddingAngle={2} dataKey="value">
            {chart.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
