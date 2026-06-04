import MainLayout from "../layouts/MainLayout";
import api from "../services/api";
import { useEffect, useState } from "react";
import {
  FaUsers,
  FaUserCheck,
  FaUserClock,
  FaNewspaper
} from "react-icons/fa";

export default function Admin() {
    const [profiles,setProfiles] = useState([]);
    const [stats,setStats] = useState({});
        useEffect(()=>{

            loadData();

        },[]);
    const loadData = ()=>{

        api.get("/admin/profiles")
        .then((res)=>{
            setProfiles(res.data);
        });

        api.get("/stats")
        .then((res)=>{
            setStats(res.data);
        });

        }

        const approve = async(id)=>{

            await api.put(`/admin/profiles/${id}/approve`);

            loadData();

            }

            const reject = async(id)=>{

            await api.put(`/admin/profiles/${id}/reject`);

            loadData();

            }
  return (
    <MainLayout>

      <div className="bg-gray-100 min-h-screen">

        <div className="max-w-7xl mx-auto p-6">

          <h1 className="text-4xl font-bold mb-8">
            Tableau de Bord Administrateur
          </h1>

          <div className="grid md:grid-cols-4 gap-6 mb-8">

            <div className="bg-white p-6 rounded-2xl shadow">

              <FaUsers className="text-4xl text-blue-600 mb-3" />

              <h2 className="text-3xl font-bold">
                {stats.total}
              </h2>

              <p>Acteurs inscrits</p>

            </div>

            <div className="bg-white p-6 rounded-2xl shadow">

              <FaUserCheck className="text-4xl text-green-600 mb-3" />

              <h2 className="text-3xl font-bold">
                {stats.approved}
              </h2>

              <p>Profils validés</p>

            </div>

            <div className="bg-white p-6 rounded-2xl shadow">

              <FaUserClock className="text-4xl text-orange-500 mb-3" />

              <h2 className="text-3xl font-bold">
                {stats.pending}
              </h2>

              <p>En attente</p>

            </div>

            <div className="bg-white p-6 rounded-2xl shadow">

              <FaNewspaper className="text-4xl text-purple-600 mb-3" />

              <h2 className="text-3xl font-bold">
                0
              </h2>

              <p>Actualités</p>

            </div>

          </div>

          <div className="bg-white rounded-2xl shadow p-6">

            <div className="flex justify-between items-center mb-6">

              <h2 className="text-2xl font-bold">
                Gestion des profils
              </h2>

              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                Exporter
              </button>

            </div>

            <table className="w-full">

              <thead>

                <tr className="border-b">

                  <th className="text-left py-3">Nom</th>

                  <th className="text-left py-3">Secteur</th>

                  <th className="text-left py-3">Métier</th>

                  <th className="text-left py-3">Statut</th>

                  <th className="text-left py-3">Action</th>

                </tr>

              </thead>

              <tbody>

                    {profiles.map((profile)=>(

                        <tr key={profile.id}>

                        <td className="py-4">
                        {profile.user?.name}
                        </td>

                        <td>
                        {profile.sector}
                        </td>

                        <td>
                        {profile.job}
                        </td>

                        <td>

                            {profile.status === "approved" && (
                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                                Validé
                            </span>
                            )}

                            {profile.status === "pending" && (
                            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                                En attente
                            </span>
                            )}

                            {profile.status === "rejected" && (
                            <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full">
                                Rejeté
                            </span>
                            )}

                            </td>

                        <td>

                        <button
                        onClick={()=>approve(profile.id)}
                        className="bg-green-600 text-white px-3 py-1 rounded mr-2"
                        >
                        Valider
                        </button>

                        <button
                        onClick={()=>reject(profile.id)}
                        className="bg-red-600 text-white px-3 py-1 rounded"
                        >
                        Rejeter
                        </button>

                        </td>

                        </tr>

                        ))}

                        </tbody>
            </table>

          </div>

        </div>

      </div>

    </MainLayout>
  );
}