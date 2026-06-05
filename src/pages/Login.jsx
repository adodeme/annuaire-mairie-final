import { useState } from "react";
import api from "../services/api";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const res = await api.post("/login", {
                email,
                password
            });

            localStorage.setItem(
                "token",
                res.data.token
            );

            alert("Connexion réussie");

            if (res.data.user.role === "admin") {

                window.location.href = "/#/admin";

            } else {

                window.location.href = "/#/dashboard";

            }

        } catch (err) {

            alert(
                err.response?.data?.message ||
                "Erreur de connexion"
            );

        }
    };

    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-100">

        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

            <h1 className="text-3xl font-bold mb-6 text-center">
            Connexion
            </h1>

            <form
            onSubmit={handleSubmit}
            className="space-y-4"
            >

            <input
                type="email"
                placeholder="Email"
                className="border rounded-lg w-full p-3"
                onChange={(e)=>setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="Mot de passe"
                className="border rounded-lg w-full p-3"
                onChange={(e)=>setPassword(e.target.value)}
            />

            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg"
            >
                Se connecter
            </button>

            </form>

        </div>

        </div>

    );
}