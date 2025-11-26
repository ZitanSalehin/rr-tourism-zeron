import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PublicRoute({ children }) {
  // Check if user is logged in
  const { token: reduxToken } = useSelector((state) => state.auth);
  const token = reduxToken || Cookies.get("token");

  // If logged in → redirect to dashboard
  if (token) return <Navigate to="/dashboard" replace />;

  // Otherwise allow access
  return children;
}
