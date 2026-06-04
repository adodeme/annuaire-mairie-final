import { Link } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaUsers,
  FaNewspaper,
  FaSignOutAlt,
} from "react-icons/fa";

export default function DashboardLayout({ children }) {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="flex min-h-screen bg-gray-100">

      <aside className="w-72 bg-slate-900 text-white">

        <div className="p-6 border-b border-slate-700">

          <h1 className="text-2xl font-bold">
            Acteurs+
          </h1>

        </div>

        <nav className="p-4 space-y-2">

          <Link
            to="/dashboard"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
          >
            <FaHome />
            Dashboard
          </Link>

          <Link
            to="/dashboard/profile"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
          >
            <FaUser />
            Mon Profil
          </Link>

          <Link
            to="/directory"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
          >
            <FaUsers />
            Annuaire
          </Link>

          <Link
            to="/news"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
          >
            <FaNewspaper />
            Actualités
          </Link>

          <button
            onClick={logout}
            className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-red-600"
          >
            <FaSignOutAlt />
            Déconnexion
          </button>

        </nav>

      </aside>

      <main className="flex-1 p-8">
        {children}
      </main>

    </div>
  );
}