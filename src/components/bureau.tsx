import React from "react";
import victor from "../assets/victor.jpg";
import hugo from "../assets/hugo.png";
import isra from "../assets/isra.png";
import aya from "../assets/aya.png";
import adam from "../assets/adam.png";


const Bureau = () => {
 const members = [
    {
      name: "Nom Prénom 1",
      role: "Président",
      img: hugo, // mets le vrai chemin
    },
    {
      name: "Nom Prénom 2",
      role: "Vice-Président",
      img: aya,
    },
    {
      name: "Nom Prénom 3",
      role: "Secrétaire Général",
      img: adam,
    },
    {
      name: "Nom Prénom 4",
      role: "Trésorier",
      img: isra,
    },
    {
      name: "Nom Prénom 5",
      role: "Vice trésorier",
      img:victor,
    },

];

  return (
    <section id="bureau" className="min-h-screen bg-gray-50 py-16 px-8">
      <h1 className="text-3xl font-bold text-center mb-12">Bureau Exécutif</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {members.map((member, index) => (
                    <div className="bg-white p-4 rounded-2xl shadow-md w-72 text-center hover:shadow-xl transition">
            <img
                src={member.img}
                alt={member.name}
                className="w-64 h-80 object-cover rounded-xl mx-auto mb-4"
            />
            
            </div>
        ))}
      </div>
    </section>
  );
};

export default Bureau;
