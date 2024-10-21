import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen bg-cover bg-center relative flex items-center"
      style={{ backgroundImage: "url('/home-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="container mx-auto text-center text-white relative z-10">
        <motion.h1 
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Discover the World
        </motion.h1>
        <motion.p 
          className="text-xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Experience unforgettable adventures with our expert travel guidance
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer transition duration-300"
          >
            Plan Your Trip
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
