import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md px-8 h-20 flex justify-between items-center overflow-hidden">

      {/* Logo */}
      <div className="flex items-center h-full">
        <img
          src="/logo.png"
          alt="MedSingh Pharma"
          className="h-20 w-auto object-contain"
        />
      </div>

      {/* Nav Links */}
      <div className="flex items-center gap-6 font-medium text-lg">

        <Link
          to="/"
          className="hover:text-blue-600 transition"
        >
          Home
        </Link>

        <Link
          to="/login"
          className="hover:text-blue-600 transition"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Register
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;