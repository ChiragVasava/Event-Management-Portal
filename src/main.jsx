import React from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import "./styles.css"
import AppShell from "./app/AppShell.jsx"
import RoutesFile from "./router.jsx"
import { SearchProvider } from "./search/SearchContext.jsx"

const queryClient = new QueryClient()

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SearchProvider>
          <AppShell>
            <RoutesFile />
          </AppShell>
        </SearchProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
)
