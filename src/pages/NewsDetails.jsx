import MainLayout from "../layouts/MainLayout";
import { useParams } from "react-router-dom";

export default function NewsDetails() {

  const { id } = useParams();

  const news = [
    {
      id: 1,
      title: "Lancement de la plateforme",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      content: "La plateforme est officiellement disponible pour tous les acteurs du territoire. Elle permet de faciliter les échanges et de valoriser les compétences locales."
    },
    {
      id: 2,
      title: "Forum des entrepreneurs",
      image: "https://images.unsplash.com/photo-1515169067868-5387ec356754",
      content: "Rencontre des acteurs économiques afin de favoriser les partenariats et le développement local."
    },
    {
      id: 3,
      title: "Nouveaux partenaires",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
      content: "De nouveaux partenaires rejoignent le projet afin de soutenir son évolution."
    },
    {
      id: 4,
      title: "Salon agricole",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854",
      content: "Présentation des innovations agricoles et des nouvelles pratiques de production."
    },
    {
      id: 5,
      title: "Transformation numérique",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      content: "Promotion du numérique dans les entreprises et les collectivités."
    },
    {
      id: 6,
      title: "Formation des jeunes",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      content: "Programme de formation visant à renforcer les compétences professionnelles des jeunes."
    }
  ];

  const article = news.find(
    (item) => item.id === Number(id)
  );

  if (!article) {
    return <h1>Actualité introuvable</h1>;
  }

  return (
    <MainLayout>

      <div className="max-w-5xl mx-auto py-10 px-6">

        <img
          src={article.image}
          alt=""
          className="w-full h-96 object-cover rounded-3xl"
        />

        <h1 className="text-5xl font-bold mt-8">
          {article.title}
        </h1>

        <p className="mt-6 text-lg text-gray-700">
          {article.content}
        </p>

      </div>

    </MainLayout>
  );
}