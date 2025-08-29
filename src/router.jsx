import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage.jsx"
import CategoriesPage from "./pages/CategoriesPage.jsx"
import SearchPage from "./pages/SearchPage.jsx"
import VendorsPage from "./pages/VendorsPage.jsx"
import VendorProfilePage from "./pages/VendorProfilePage.jsx"
import SignInPage from "./pages/auth/SignInPage.jsx"
import SignUpPage from "./pages/auth/SignUpPage.jsx"
import UserDashboardPage from "./pages/dashboard/UserDashboardPage.jsx"
import VendorOnboardingPage from "./pages/vendor/VendorOnboardingPage.jsx"
import VendorDashboardPage from "./pages/vendor/VendorDashboardPage.jsx"
import VendorProfileEditPage from "./pages/vendor/VendorProfileEditPage.jsx"
import VendorPortfolioManagerPage from "./pages/vendor/VendorPortfolioManagerPage.jsx"
import VendorServicesPage from "./pages/vendor/VendorServicesPage.jsx"
import VendorInquiriesPage from "./pages/vendor/VendorInquiriesPage.jsx"
import MetricsDashboardPage from "./pages/MetricsDashboardPage.jsx"
import ProtectedRoute from "./app/ProtectedRoute.jsx"

// Phase 2 (stubs)
import ForgotPassword from "./pages/phase2/ForgotPassword.jsx"
import VerifyEmail from "./pages/phase2/VerifyEmail.jsx"
import Assistant from "./pages/phase2/Assistant.jsx"
import GenAIStudio from "./pages/phase2/GenAIStudio.jsx"
import Moodboard from "./pages/phase2/Moodboard.jsx"
import Admin from "./pages/phase2/Admin.jsx"
import AdminVendors from "./pages/phase2/AdminVendors.jsx"
import AdminUsers from "./pages/phase2/AdminUsers.jsx"
import AdminTagReview from "./pages/phase2/AdminTagReview.jsx"
import AdminMetrics from "./pages/phase2/AdminMetrics.jsx"
import MapPage from "./pages/phase2/MapPage.jsx"
import Terms from "./pages/phase2/Terms.jsx"
import Privacy from "./pages/phase2/Privacy.jsx"
import HowItWorks from "./pages/phase2/HowItWorks.jsx"
import About from "./pages/phase2/About.jsx"
import Contact from "./pages/phase2/Contact.jsx"

export default function RoutesFile() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<HomePage />} />
      <Route path="/categories" element={<CategoriesPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/vendors" element={<VendorsPage />} />
      <Route path="/vendors/:vendorId" element={<VendorProfilePage />} />

      {/* Auth */}
      <Route path="/auth/sign-in" element={<SignInPage />} />
      <Route path="/auth/sign-up" element={<SignUpPage />} />

      {/* User */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <UserDashboardPage />
          </ProtectedRoute>
        }
      />

      {/* Vendor */}
      <Route
        path="/vendor/onboarding"
        element={
          <ProtectedRoute requireVendor>
            <VendorOnboardingPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/vendor"
        element={
          <ProtectedRoute requireVendor>
            <VendorDashboardPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/vendor/profile"
        element={
          <ProtectedRoute requireVendor>
            <VendorProfileEditPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/vendor/portfolio"
        element={
          <ProtectedRoute requireVendor>
            <VendorPortfolioManagerPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/vendor/services"
        element={
          <ProtectedRoute requireVendor>
            <VendorServicesPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/vendor/inquiries"
        element={
          <ProtectedRoute requireVendor>
            <VendorInquiriesPage />
          </ProtectedRoute>
        }
      />

      {/* Metrics */}
      <Route path="/metrics" element={<MetricsDashboardPage />} />

      {/* Phase 2 (stubs) */}
      <Route path="/auth/forgot-password" element={<ForgotPassword />} />
      <Route path="/auth/verify" element={<VerifyEmail />} />
      <Route path="/assistant" element={<Assistant />} />
      <Route path="/genai/studio" element={<GenAIStudio />} />
      <Route path="/moodboard" element={<Moodboard />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin/vendors" element={<AdminVendors />} />
      <Route path="/admin/users" element={<AdminUsers />} />
      <Route path="/admin/tag-review" element={<AdminTagReview />} />
      <Route path="/admin/metrics" element={<AdminMetrics />} />
      <Route path="/map" element={<MapPage />} />
      <Route path="/legal/terms" element={<Terms />} />
      <Route path="/legal/privacy" element={<Privacy />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}
