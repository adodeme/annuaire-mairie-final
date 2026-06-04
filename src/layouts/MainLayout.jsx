import { Link } from "react-router-dom";


export default function MainLayout({ children }) {
    const logout = () => {
        localStorage.removeItem("token");
        window.location.href = "/";
    };

  return (
    <div className="min-h-screen bg-gray-50">

      <nav className="bg-white shadow-sm">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex justify-between items-center h-16">

            <h1 className="font-bold text-xl text-blue-600">
              Acteurs+
            </h1>

            <div className="flex gap-6">

              <Link to="/">Accueil</Link>

              <Link to="/directory">Annuaire</Link>

              <Link to="/news">Actualités</Link>

              <Link to="/contact">Contact</Link>

              <Link to="/login">Connexion</Link>

              <Link
                to="/register"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Inscription
              </Link>
              <button
                onClick={logout}
                className="text-red-600"
                >
                Déconnexion
             </button>

            </div>

          </div>

        </div>

      </nav>

      <main>
        {children}
      </main>

    </div>
  );
}