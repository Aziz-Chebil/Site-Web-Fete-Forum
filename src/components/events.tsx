import React from 'react'
import cookiesImg from "../assets/cookies.png";
import crepesImg from "../assets/crepes.png";
import ap from "../assets/ap.jpg";
import otherImg from "../assets/event2.png";
import defi from "../assets/trois_fois.png";

const Events = () => {
    const events = [
  { title: "Vente de Cookies", img: cookiesImg },
  { title: "Vente de Crêpes", img: crepesImg },
  { title: "Le BDE supporte notre événement", img: otherImg },
  { title: "Premier Apéro", img: ap },
  { title: "La 1ère place dans 3 défis", img: defi },

];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-center mb-10">Nos Événements</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <div
            key={index}
            className="rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
          >
            <img
              src={event.img}
              alt={event.title}
              className="w-full h-120 object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="text-xl font-semibold">{event.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>

  )
}

export default Events
