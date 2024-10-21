import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Modal from './Modal';

const destinations = [
  { 
    id: 1, 
    name: 'Paris', 
    image: `${process.env.PUBLIC_URL}/paris-bg.jpg`, 
    info: 'Experience the romance of Paris with its iconic Eiffel Tower and charming cafes.',
    details: `Paris, the "City of Light," is one of the most beautiful cities in the world and a major center for art, fashion, and culture. 
    - Must-See Attractions: The Eiffel Tower, the Louvre Museum (home to the Mona Lisa), Notre-Dame Cathedral, and the Champs-Élysées.
    - Activities: Stroll along the Seine River, visit charming cafés and boutiques in Montmartre, and take a boat cruise to see the city's iconic landmarks from a different perspective.
    - Cuisine: Indulge in delicious French pastries, gourmet dining experiences, and local delicacies like escargot, coq au vin, and crème brûlée.`,
  },
  { 
    id: 2, 
    name: 'Tokyo', 
    image: `${process.env.PUBLIC_URL}/tokyo-bg.jpg`, 
    info: 'Explore the vibrant culture and cutting-edge technology of Tokyo.',
    details: `Tokyo is a bustling metropolis that perfectly blends traditional Japanese culture with cutting-edge technology and modern architecture.
    - Must-See Attractions: The serene Meiji Shrine, the bustling Shibuya Crossing, the historic Asakusa district, and the futuristic Odaiba area.
    - Activities: Enjoy shopping in the trendy Shinjuku and Shibuya districts, explore the vibrant nightlife in Roppongi, and relax in one of the many beautiful parks like Ueno or Yoyogi Park.
    - Cuisine: Savor authentic sushi, ramen, tempura.`,
  },
  { 
    id: 3, 
    name: 'New York', 
    image: `${process.env.PUBLIC_URL}/newyork-bg.jpg`, 
    info: 'Discover the bustling streets and famous landmarks of New York City.',
    details: `New York City, often referred to as "The Big Apple," is a global hub for culture, entertainment, and finance, known for its iconic skyline and vibrant neighborhoods.
    - Must-See Attractions: Central Park, Times Square, the Statue of Liberty, the Empire State Building, and the Metropolitan Museum of Art.
    - Activities: Walk the High Line, catch a Broadway show, explore the diverse neighborhoods like Greenwich Village and Chinatown, and visit the bustling markets and food halls.`,
  },
  { 
    id: 4, 
    name: 'Rome', 
    image: `${process.env.PUBLIC_URL}/rome-bg.jpg`, 
    info: 'Walk through history in Rome with its ancient ruins and delicious cuisine.',
    details: `Rome, the capital of Italy, is a city rich in history, with ancient ruins, Renaissance art, and Baroque architecture that tell the story of its glorious past.
    - Must-See Attractions: The Colosseum, Vatican City (including St. Peter's Basilica and the Sistine Chapel), the Pantheon, and the Roman Forum.
    - Activities: Take a leisurely walk through the historic center, enjoy the beautiful piazzas and fountains, and visit the numerous museums and art galleries.
    - Cuisine: Delight in traditional Italian cuisine, including pasta dishes like carbonara and amatriciana, Roman-style pizza, gelato, and espresso at local cafes.`,
  },
];

const Destinations = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedDestination, setSelectedDestination] = useState(null);

  const handleCardClick = (destination) => {
    setSelectedDestination(destination);
  };

  const handleDetailsClick = (e, destination) => {
    e.stopPropagation();
    setSelectedDestination(destination);
  };

  const closeModal = () => {
    setSelectedDestination(null);
  };

  return (
    <section id="destinations" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-14 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.05 }}
        >
          Popular Destinations
        </motion.h2>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.id}
              className="bg-slate-200 rounded-xl shadow-xl overflow-hidden cursor-pointer w-full"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.06 }}             
             onClick={() => handleCardClick(dest)}
            >
              <img src={dest.image} alt={dest.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{dest.name}</h3>
                <p className="text-gray-700 mb-4">{dest.info}</p>
                <a 
                  href="#destinations"
                  className="text-blue-600 hover:underline"
                  onClick={(e) => handleDetailsClick(e, dest)}
                >
                  More Details
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {selectedDestination && (
        <Modal 
          isOpen={!!selectedDestination} 
          onClose={closeModal} 
          content={
            <div>
              <h2 className="text-2xl font-bold mb-4">{selectedDestination.name}</h2>
              <img src={selectedDestination.image} alt={selectedDestination.name} className="w-full h-64 object-cover mb-4" />
              <p className="text-gray-700 mb-4">{selectedDestination.details}</p>
            </div>
          }
        />
      )}
    </section>
  );
};

export default Destinations;
