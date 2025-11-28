import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <Link className="text-xl font-bold" to="/">
        BookStore
      </Link>

      <div className="flex gap-4">
        <Link to="/catalogue">Catalogue</Link>

        {user ? (
          <>
            <span>{user.name}</span>
            <button
              onClick={logout}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              className="bg-blue-500 text-white px-3 py-1 rounded"
              to="/login"
            >
              Login
            </Link>
            <Link className="border px-3 py-1 rounded" to="/register">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
