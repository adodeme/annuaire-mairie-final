import DashboardLayout from "../layouts/DashboardLayout";
import { useEffect, useState } from "react";
import api from "../services/api";

export default function Profile() {

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
    return <div className="p-10">Chargement...</div>;
  }

  return (
    <DashboardLayout>

      <div className="bg-white rounded-3xl shadow p-8">

        <h1 className="text-3xl font-bold mb-6">
          Mon Profil
        </h1>

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <label className="font-semibold">
              Nom
            </label>

            <input
              value={user.name || ""}
              readOnly
              className="border p-3 rounded-lg w-full"
            />
          </div>

          <div>
            <label className="font-semibold">
              Email
            </label>

            <input
              value={user.email || ""}
              readOnly
              className="border p-3 rounded-lg w-full"
            />
          </div>

          <div>
            <label className="font-semibold">
              Téléphone
            </label>

            <input
              value={user.profile?.phone || ""}
              readOnly
              className="border p-3 rounded-lg w-full"
            />
          </div>

          <div>
            <label className="font-semibold">
              Ville
            </label>

            <input
              value={user.profile?.location || ""}
              readOnly
              className="border p-3 rounded-lg w-full"
            />
          </div>

          <div>
            <label className="font-semibold">
              Secteur
            </label>

            <input
              value={user.profile?.sector || ""}
              readOnly
              className="border p-3 rounded-lg w-full"
            />
          </div>

          <div>
            <label className="font-semibold">
              Métier
            </label>

            <input
              value={user.profile?.job || ""}
              readOnly
              className="border p-3 rounded-lg w-full"
            />
          </div>

        </div>

        <div className="mt-6">
          <label className="font-semibold">
            Biographie
          </label>

          <textarea
            value={user.profile?.bio || ""}
            readOnly
            rows="5"
            className="border p-3 rounded-lg w-full"
          />
        </div>

      </div>

    </DashboardLayout>
  );
}