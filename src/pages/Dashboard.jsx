import DashboardLayout from "../layouts/DashboardLayout";
import {
  FaUser,
  FaBriefcase,
  FaBuilding,
  FaCheckCircle
} from "react-icons/fa";
import { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";

export default function Dashboard() {
        const [user, setUser] = useState(null);

        useEffect(() => {

        api.get("/me")
            .then((res) => {
            setUser(res.data);
            })
            .catch((err) => {
            console.log(err);
            });

        }, []);
    if (!user) {
        return <div>Chargement...</div>;
    }
  return (
    <DashboardLayout>

      <div className="bg-gray-100 min-h-screen">

        <div className="max-w-7xl mx-auto p-6">

          <h1 className="text-4xl font-bold mb-8">
            Mon Espace
          </h1>

          <div className="grid md:grid-cols-4 gap-6 mb-8">

            <div className="bg-white rounded-2xl p-6 shadow">
              <FaUser className="text-3xl mb-3 text-blue-600" />
              <h3 className="font-bold">Profil</h3>
              <p className="text-gray-500">
                Complété à 85%
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow">
              <FaBriefcase className="text-3xl mb-3 text-green-600" />
              <h3 className="font-bold">Métier</h3>
              <p>{user.profile?.job}</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow">
              <FaBuilding className="text-3xl mb-3 text-purple-600" />
              <h3 className="font-bold">Secteur</h3>
              <p>{user.profile?.sector}</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow">
              <FaCheckCircle className="text-3xl mb-3 text-green-500" />
              <h3 className="font-bold">Validation</h3>
              <p>En attente</p>
            </div>

          </div>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="md:col-span-2 bg-white rounded-2xl shadow p-6">

              <h2 className="text-2xl font-bold mb-4">
                Informations du profil
              </h2>

              <div className="space-y-3">

                <p><strong>Nom :</strong> {user.name}</p>

                <p><strong>Email :</strong> {user.email}</p>

                <p><strong>Téléphone :</strong> {user.profile?.phone}</p>

                <p><strong>Ville :</strong> {user.profile?.location}</p>

                <p><strong>Bio :</strong>{user.profile?.bio}</p>

              </div>

              <Link
                to="/dashboard/profile"
                className="inline-block mt-6 bg-blue-600 text-white px-5 py-2 rounded-lg"
                >
                Voir mon profil
                </Link>

            </div>

            <div className="bg-white rounded-2xl shadow p-6">

              <h2 className="font-bold text-xl mb-4">
                Progression
              </h2>

              <div className="w-full bg-gray-200 h-4 rounded-full">

                <div className="bg-blue-600 h-4 rounded-full w-4/5"></div>

              </div>

              <p className="mt-3 text-gray-600">
                Profil complété à 85%
              </p>

            </div>

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}