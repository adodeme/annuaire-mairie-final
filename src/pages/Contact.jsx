import MainLayout from "../layouts/MainLayout";
import { useState } from "react";

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Message envoyé avec succès");

    setForm({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <MainLayout>

      <div className="bg-gray-100 min-h-screen py-12">

        <div className="max-w-3xl mx-auto bg-white p-8 rounded-3xl shadow">

          <h1 className="text-4xl font-bold mb-8">
            Contact
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Nom"
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full border p-3 rounded-lg"
            />

            <textarea
              rows="6"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              className="w-full border p-3 rounded-lg"
            />

            <button
              type="submit"
              className="bg-blue-600 text-white px-5 py-3 rounded-lg"
            >
              Envoyer
            </button>

          </form>

        </div>

      </div>

    </MainLayout>
  );
}