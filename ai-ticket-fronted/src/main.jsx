import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import CheckAuth from "./components/CheckAuth.jsx";
import Navbar from "./components/navbar.jsx";
import Tickets from "./pages/Tickets.jsx";
import TicketDetailsPage from "./pages/TicketDetailsPage.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Ssignup.jsx";
import Admin from "./pages/Admin.jsx";

// 🧩 App layout that includes the Navbar
function AppLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Shared layout route */}
        <Route element={<AppLayout />}>
          <Route
            path="/"
            element={
              <CheckAuth protected={true}>
                <Tickets />
              </CheckAuth>
            }
          />
          <Route
            path="/tickets/:id"
            element={
              <CheckAuth protected={true}>
                <TicketDetailsPage />
              </CheckAuth>
            }
          />
          <Route
            path="/admin"
            element={
              <CheckAuth protected={true}>
                <Admin />
              </CheckAuth>
            }
          />
          <Route
            path="/login"
            element={
              <CheckAuth protected={false}>
                <Login />
              </CheckAuth>
            }
          />
          <Route
            path="/signup"
            element={
              <CheckAuth protected={false}>
                <Signup />
              </CheckAuth>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
