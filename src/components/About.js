import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref: headingRef, inView: headingInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          ref={headingRef}
          className="text-3xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          About Us
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            ref={imageRef}
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={imageInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.03}}
          >
            <img
              src={`${process.env.PUBLIC_URL}/about-bg.jpg`}
              alt="About Us"
              className="rounded-lg shadow-md"
            />
          </motion.div>
          <motion.div
            ref={textRef}
            className="md:w-1/2 md:pl-8"
            initial={{ opacity: 0, x: 50 }}
            animate={textInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg mb-4 text-white">
              We are passionate about creating unforgettable travel experiences for our clients. With years of expertise and a dedication to excellence, we curate personalized itineraries that cater to your unique preferences and desires.
            </p>
            <p className="text-lg text-white">
              Our team of experienced travel professionals is committed to ensuring that every aspect of your journey is seamless, from planning to execution. Let us help you turn your travel dreams into reality.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
