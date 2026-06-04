import MainLayout from "../layouts/MainLayout";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

export default function ProfileDetails() {

  const { id } = useParams();

  const [profile, setProfile] = useState(null);

  useEffect(() => {

    api.get(`/profiles/${id}`)
      .then((res) => {
        setProfile(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, [id]);

  if (!profile) {
    return (
      <MainLayout>
        <div className="p-10 text-center">
          Chargement...
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>

      <div className="bg-gray-100 min-h-screen py-10">

        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow overflow-hidden">

          <div className="h-40 bg-gradient-to-r from-blue-600 to-indigo-600"></div>

          <div className="p-8">

            <div className="w-32 h-32 rounded-full bg-gray-200 border-4 border-white -mt-24 mb-6"></div>

            <h1 className="text-4xl font-bold">
              {profile.user?.name}
            </h1>

            <p className="text-gray-500 text-lg mt-2">
              {profile.job}
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">

              <div>
                <h3 className="font-bold">
                  Secteur
                </h3>
                <p>{profile.sector}</p>
              </div>

              <div>
                <h3 className="font-bold">
                  Téléphone
                </h3>
                <p>{profile.phone}</p>
              </div>

              <div>
                <h3 className="font-bold">
                  Ville
                </h3>
                <p>{profile.location}</p>
              </div>

              <div>
                <h3 className="font-bold">
                  Niveau d'étude
                </h3>
                <p>{profile.education}</p>
              </div>

            </div>

            <div className="mt-8">

              <h3 className="font-bold text-xl mb-3">
                Biographie
              </h3>

              <p className="text-gray-700">
                {profile.bio}
              </p>

            </div>

          </div>

        </div>

      </div>

    </MainLayout>
  );
}