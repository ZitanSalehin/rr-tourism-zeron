// src/App.jsx
import Cookies from "js-cookie";
import { Provider, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { store } from "../store/index.js";

import AdminRoute from "../components/AdminRoute";

import Header from "../components/Header.jsx";
import PublicRoute from "../components/PublicRoute";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

// Component to show current user
function CurrentUserDisplay() {
  const auth = useSelector((state) => state.auth);

  // Fallback to cookies if Redux state is empty (page refresh)
  const token = auth.token || Cookies.get("token");
  const role = auth.role || Cookies.get("role");

  if (!token) return null; // no user logged in

  return (
    <div className="p-2 bg-gray-100 text-gray-800">
      Logged in as: <span className="font-bold">{role}</span>
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {/* Current user info always visible */}
        <CurrentUserDisplay />
        <Header />
        <Routes>
          {/* Public home page */}
          <Route path="/" element={<Home />} />

          {/* Public routes: login & register */}
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />

          {/* Admin-only dashboard */}
          <Route
            path="/dashboard"
            element={
              <AdminRoute>
                <Dashboard />
              </AdminRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
