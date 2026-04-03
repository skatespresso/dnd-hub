import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from "@/components/ui/theme-provider"
import App from './App'
import ProjectIdea from "./pages/ProjectIdea";
import BusinessPlan from "./pages/BusinessPlan";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<ProjectIdea />} />
            <Route path="ProjectIdea" element={<ProjectIdea />} />
            <Route path="BusinessPlan" element={<BusinessPlan />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
     </ThemeProvider>
  </StrictMode>
)