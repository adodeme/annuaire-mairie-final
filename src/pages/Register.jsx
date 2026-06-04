import { useState } from "react";
import api from "../services/api";

export default function Register() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        sector: "",
        job: "",
        education: "",
        location: "",
        bio: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const res = await api.post("/register", form);

            localStorage.setItem(
                "token",
                res.data.token
            );

            alert("Inscription réussie");

            window.location.href = "/dashboard";

        } catch (err) {

            alert(
                err.response?.data?.message ||
                "Erreur lors de l'inscription"
            );

        }
    };

    return (
        <div className="min-h-screen bg-gray-100 py-10">

            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">

            <h1 className="text-3xl font-bold mb-6 text-center">
                Inscription
            </h1>

            <form
                onSubmit={handleSubmit}
                className="space-y-4"
            >

                <input
                type="text"
                name="name"
                placeholder="Nom complet"
                className="border rounded-lg w-full p-3"
                onChange={handleChange}
                />

                <input
                type="email"
                name="email"
                placeholder="Email"
                className="border rounded-lg w-full p-3"
                onChange={handleChange}
                />

                <input
                type="password"
                name="password"
                placeholder="Mot de passe"
                className="border rounded-lg w-full p-3"
                onChange={handleChange}
                />

                <input
                type="text"
                name="phone"
                placeholder="Téléphone"
                className="border rounded-lg w-full p-3"
                onChange={handleChange}
                />

                <input
                type="text"
                name="sector"
                placeholder="Secteur d'activité"
                className="border rounded-lg w-full p-3"
                onChange={handleChange}
                />

                <input
                type="text"
                name="job"
                placeholder="Métier"
                className="border rounded-lg w-full p-3"
                onChange={handleChange}
                />

                <input
                type="text"
                name="education"
                placeholder="Niveau d'étude"
                className="border rounded-lg w-full p-3"
                onChange={handleChange}
                />

                <input
                type="text"
                name="location"
                placeholder="Ville"
                className="border rounded-lg w-full p-3"
                onChange={handleChange}
                />

                <textarea
                name="bio"
                placeholder="Biographie"
                rows="4"
                className="border rounded-lg w-full p-3"
                onChange={handleChange}
                />

                <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
                >
                S'inscrire
                </button>

            </form>

            </div>

        </div>
    );
}