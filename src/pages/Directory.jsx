import MainLayout from "../layouts/MainLayout";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";

export default function Directory() {

  const [profiles, setProfiles] = useState([]);
  const [stats, setStats] = useState({
    total: 0,
    approved: 0,
    pending: 0,
  });

  const [search, setSearch] = useState("");
  const [selectedSector, setSelectedSector] = useState("Tous");

  useEffect(() => {

    api.get("/stats")
      .then((res) => {
        setStats(res.data);
      });

    api.get("/profiles")
      .then((res) => {
        setProfiles(res.data);
      });

  }, []);

  const filteredProfiles = profiles.filter((profile) => {

    const matchName =
      profile.user?.name
        ?.toLowerCase()
        .includes(search.toLowerCase());

    const matchSector =
      selectedSector === "Tous" ||
      profile.sector === selectedSector;

    const isApproved =
      profile.status === "approved";

    return matchName && matchSector && isApproved;

  });

  return (
    <MainLayout>

      <div className="bg-gray-50 min-h-screen">

        {/* HERO */}

        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">

          <div className="max-w-7xl mx-auto px-6 py-16">

            <h1 className="text-5xl font-bold mb-4">
              Annuaire des Acteurs
            </h1>

            <p className="text-lg opacity-90 mb-8">
              Découvrez les professionnels et acteurs de développement.
            </p>

            <div className="bg-white rounded-2xl p-3 flex items-center">

              <FaSearch className="text-gray-500 ml-3" />

              <input
                type="text"
                placeholder="Rechercher un acteur..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full p-3 outline-none text-black"
              />

            </div>

          </div>

        </div>

        {/* STATS */}

        <div className="max-w-7xl mx-auto px-6 -mt-10">

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white rounded-2xl shadow p-6">
              <h2 className="text-4xl font-bold text-blue-600">
                {stats.total}
              </h2>
              <p>Acteurs enregistrés</p>
            </div>

            <div className="bg-white rounded-2xl shadow p-6">
              <h2 className="text-4xl font-bold text-green-600">
                {stats.approved}
              </h2>
              <p>Profils validés</p>
            </div>

            <div className="bg-white rounded-2xl shadow p-6">
              <h2 className="text-4xl font-bold text-orange-500">
                {stats.pending}
              </h2>
              <p>Profils en attente</p>
            </div>

          </div>

        </div>

        {/* FILTRES */}

        <div className="max-w-7xl mx-auto px-6 mt-10">

          <div className="flex flex-wrap gap-3">

            <button
              onClick={() => setSelectedSector("Tous")}
              className="bg-blue-600 text-white px-4 py-2 rounded-full"
            >
              Tous
            </button>

            <button
              onClick={() => setSelectedSector("Informatique")}
              className="bg-white px-4 py-2 rounded-full shadow"
            >
              Informatique
            </button>

            <button
              onClick={() => setSelectedSector("Agriculture")}
              className="bg-white px-4 py-2 rounded-full shadow"
            >
              Agriculture
            </button>

            <button
              onClick={() => setSelectedSector("Commerce")}
              className="bg-white px-4 py-2 rounded-full shadow"
            >
              Commerce
            </button>

            <button
              onClick={() => setSelectedSector("Santé")}
              className="bg-white px-4 py-2 rounded-full shadow"
            >
              Santé
            </button>

          </div>

        </div>

        {/* CARTES */}

        <div className="max-w-7xl mx-auto px-6 py-10">

          {filteredProfiles.length === 0 ? (

            <div className="bg-white p-8 rounded-2xl text-center shadow">
              Aucun profil trouvé.
            </div>

          ) : (

            <div className="grid md:grid-cols-3 gap-8">

              {filteredProfiles.map((profile) => (

                <div
                  key={profile.id}
                  className="bg-white rounded-3xl shadow hover:shadow-xl transition overflow-hidden"
                >

                  <div className="h-24 bg-gradient-to-r from-blue-500 to-indigo-600"></div>

                  <div className="px-6 pb-6">

                    <div className="w-24 h-24 bg-gray-200 rounded-full border-4 border-white -mt-12 mb-4"></div>

                    <h2 className="text-xl font-bold">
                      {profile.user?.name}
                    </h2>

                    <p className="text-gray-500">
                      {profile.job}
                    </p>

                    <div className="mt-3 flex items-center text-gray-500">
                      <FaMapMarkerAlt className="mr-2" />
                      {profile.location}
                    </div>

                    <span className="inline-block mt-4 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                      {profile.sector}
                    </span>

                    <Link
                      to={`/profile/${profile.id}`}
                      className="block text-center mt-5 bg-blue-600 text-white py-2 rounded-xl"
                    >
                      Voir le profil
                    </Link>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

      </div>

    </MainLayout>
  );
}