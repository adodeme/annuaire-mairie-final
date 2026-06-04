import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router-dom";

export default function News() {

  const news = [
    {
      id: 1,
      title: "Lancement de la plateforme",
      date: "10 Juin 2025",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      content: "La plateforme est officiellement disponible pour les acteurs du territoire."
    },
    {
      id: 2,
      title: "Forum des entrepreneurs",
      date: "15 Juin 2025",
      image: "https://images.unsplash.com/photo-1515169067868-5387ec356754",
      content: "Rencontre des acteurs économiques afin de favoriser les échanges."
    },
    {
      id: 3,
      title: "Nouveaux partenaires",
      date: "20 Juin 2025",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
      content: "De nouveaux partenaires rejoignent le projet pour soutenir son développement."
    },
    {
      id: 4,
      title: "Salon agricole",
      date: "25 Juin 2025",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854",
      content: "Présentation des innovations et solutions pour le secteur agricole."
    },
    {
      id: 5,
      title: "Transformation numérique",
      date: "01 Juillet 2025",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      content: "Promotion des outils numériques auprès des entreprises locales."
    },
    {
      id: 6,
      title: "Formation des jeunes",
      date: "05 Juillet 2025",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      content: "Programme de renforcement des compétences et d'insertion professionnelle."
    }
  ];

  return (
    <MainLayout>

      <div className="bg-gray-50 min-h-screen">

        <div className="max-w-7xl mx-auto py-10 px-6">

          <h1 className="text-5xl font-bold mb-3">
            Actualités
          </h1>

          <p className="text-gray-600 mb-10">
            Découvrez les dernières informations et événements.
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            {news.map((item) => (

              <div
                key={item.id}
                className="bg-white rounded-3xl shadow hover:shadow-xl transition duration-300 overflow-hidden"
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-48 w-full object-cover"
                />

                <div className="p-6">

                  <p className="text-sm text-gray-500">
                    {item.date}
                  </p>

                  <h2 className="text-xl font-bold mt-2 mb-3">
                    {item.title}
                  </h2>

                  <p className="text-gray-600">
                    {item.content}
                  </p>

                  <Link
                    to={`/news/${item.id}`}
                    className="block text-center mt-5 bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700"
                  >
                    Lire plus
                  </Link>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </MainLayout>
  );
}