// src/components/Logout.jsx
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../store/authSlice";

export default function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);

  // Check cookie if Redux state is empty (page refresh)
  const isLoggedIn = token || Cookies.get("token");

  // If not logged in → render nothing
  if (!isLoggedIn) return null;

  const handleLogout = () => {
    // 1️⃣ Clear Redux state
    dispatch(logout());

    // 2️⃣ Clear cookies
    Cookies.remove("token");
    Cookies.remove("role");

    // 3️⃣ Redirect to home
    navigate("/");
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
    >
      Logout
    </button>
  );
}
