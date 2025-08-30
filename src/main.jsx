import React from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import "./styles.css"
import AppShell from "./app/AppShell.jsx"
import RoutesFile from "./router.jsx"
import { SearchProvider } from "./search/SearchContext.jsx"

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <SearchProvider>
        <AppShell>
          <RoutesFile />
        </AppShell>
      </SearchProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
