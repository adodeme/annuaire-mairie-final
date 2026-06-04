import MainLayout from "../layouts/MainLayout";
import { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";

export default function Home() {
    const [stats, setStats] = useState({
        total:0,
        approved:0,
        pending:0
        });

        useEffect(() => {

        api.get("/stats")
        .then((res)=>{
            setStats(res.data);
        });

        },[]);
  return (
    <MainLayout>

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div>

            <span className="text-blue-600 font-semibold">
              Plateforme professionnelle de gestion communautaire
            </span>

            <h1 className="text-6xl font-bold mt-4 leading-tight">

              Connecter les acteurs de votre territoire/commune

            </h1>

            <p className="text-gray-600 mt-6 text-lg">

              Découvrez les professionnels,
              entrepreneurs et acteurs du développement.

            </p>

            <div className="flex gap-4 mt-8">

              <Link
                to="/directory"
                className="bg-blue-600 text-white px-6 py-3 rounded-xl"
              >
                Découvrir
              </Link>

              <Link
                to="/news"
                className="border px-6 py-3 rounded-xl"
                >
                En savoir plus
              </Link>

            </div>

          </div>

          <div>

            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt=""
              className="rounded-3xl shadow-lg"
            />

          </div>

        </div>

      </section>

      <section className="bg-white py-20">

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

          <div className="bg-blue-50 p-8 rounded-2xl">
            <h2 className="text-4xl font-bold">
              {stats.total}
            </h2>
            <p>Acteurs inscrits</p>
          </div>

          <div className="bg-blue-50 p-8 rounded-2xl">
            <h2 className="text-4xl font-bold">
              {stats.approved}
            </h2>
            <p>Profils validés</p>
          </div>

          <div className="bg-blue-50 p-8 rounded-2xl">
            <h2 className="text-4xl font-bold">
              {stats.pending}
            </h2>
            <p>Profils en attente</p>
          </div>

        </div>

      </section>
      <section className="py-20 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

            <h2 className="text-4xl font-bold text-center mb-12">
            Secteurs représentés
            </h2>

            <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-white p-6 rounded-2xl shadow">
                Informatique
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
                Agriculture
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
                Commerce
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
                Santé
            </div>

            </div>

        </div>

    </section>

    </MainLayout>
  );
}