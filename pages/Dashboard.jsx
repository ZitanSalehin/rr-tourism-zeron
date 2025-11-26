import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../store/authSlice";

export default function Dashboard() {
  const { role } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);

  const token = Cookies.get("token");

  // Fetch all bookings (admin only)
  const fetchBookings = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:5000/api/bookings", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBookings(res.data);
      setLoading(false);
    } catch (err) {
      console.error("Fetch bookings error:", err.response?.data || err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    // define async function inside effect
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get("http://localhost:5000/api/bookings", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setBookings(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err.response?.data || err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [token]); // add token as dependency

  // Update status
  const handleStatusChange = async (id, status) => {
    try {
      await axios.put(
        `http://localhost:5000/api/bookings/${id}`,
        { status },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchBookings(); // refresh table
    } catch (err) {
      console.error("Update status error:", err.response?.data || err.message);
    }
  };

  // Delete booking
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this booking?"))
      return;

    try {
      await axios.delete(`http://localhost:5000/api/bookings/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchBookings(); // refresh table
    } catch (err) {
      console.error("Delete booking error:", err.response?.data || err.message);
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    Cookies.remove("token");
    Cookies.remove("role");
    navigate("/");
  };

  return (
    <div className="p-6">
      <p>Logged in as: {role}</p>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      {loading ? (
        <p>Loading bookings...</p>
      ) : bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="border px-2 py-1">#</th>
                <th className="border px-2 py-1">Name</th>
                <th className="border px-2 py-1">Contact</th>
                <th className="border px-2 py-1">Destination</th>
                <th className="border px-2 py-1">Date</th>
                <th className="border px-2 py-1">People</th>
                <th className="border px-2 py-1">Status</th>
                <th className="border px-2 py-1">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b, i) => (
                <tr key={b._id} className="text-center">
                  <td className="border px-2 py-1">{i + 1}</td>
                  <td className="border px-2 py-1">{b.name}</td>
                  <td className="border px-2 py-1">{b.contactNumber}</td>
                  <td className="border px-2 py-1">{b.destination}</td>
                  <td className="border px-2 py-1">{b.travelDate}</td>
                  <td className="border px-2 py-1">{b.numPeople}</td>
                  <td className="border px-2 py-1">
                    <select
                      value={b.status}
                      onChange={(e) =>
                        handleStatusChange(b._id, e.target.value)
                      }
                      className="border px-1 py-0.5 rounded"
                    >
                      <option value="pending">Pending</option>
                      <option value="approved">Approved</option>
                      <option value="rejected">Rejected</option>
                      <option value="canceled">Canceled</option>
                      <option value="done">Done</option>
                    </select>
                  </td>
                  <td className="border px-2 py-1">
                    <button
                      onClick={() => handleDelete(b._id)}
                      className="px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
