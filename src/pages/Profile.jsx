import DashboardLayout from "../layouts/DashboardLayout";

export default function Profile() {
  return (
    <DashboardLayout>

      <div className="bg-white rounded-3xl shadow p-8">

        <h1 className="text-3xl font-bold mb-6">
          Mon Profil
        </h1>

        <div className="grid md:grid-cols-2 gap-6">

          <input
            placeholder="Nom"
            className="border p-3 rounded-lg"
          />

          <input
            placeholder="Téléphone"
            className="border p-3 rounded-lg"
          />

          <input
            placeholder="Secteur"
            className="border p-3 rounded-lg"
          />

          <input
            placeholder="Métier"
            className="border p-3 rounded-lg"
          />

        </div>

        <textarea
          placeholder="Biographie"
          className="border p-3 rounded-lg w-full mt-6"
          rows="5"
        />

        <button className="mt-6 bg-blue-600 text-white px-5 py-3 rounded-lg">
          Enregistrer
        </button>

      </div>

    </DashboardLayout>
  );
}