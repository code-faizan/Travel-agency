import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const formRef = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm('service_qzyeics', 'template_f4dlk9h', formRef.current, 'gckMwZcF1rnV_7c4D')
      .then((result) => {
        console.log(result.text);
        setSubmitStatus('success');
        setFormData({ from_name: '', email: '', message: '' });
      }, (error) => {
        console.log(error.text);
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <motion.section 
      id="contact" 
      className="py-12 md:py-20 bg-gray-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex flex-col md:flex-row">
        <div className="md:w-1/2 md:pr-8">
          <h2 className="text-3xl  text-white font-bold text-center mb-8 ml-4 md:text-left ">Contact Us</h2>
          <motion.form 
            ref={formRef}
            onSubmit={handleSubmit} 
            className="max-w-lg mx-auto ml-5 mr-5"
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
            className="mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <label htmlFor="from_name" className="block text-white font-bold mb-2">Name</label>
            <input
              placeholder='Enter Your Name Here'
              type="text"
              id="from_name"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 mb-2 md:mb-0"
            />
          </motion.div>
          <motion.div 
            className="mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <label htmlFor="email" className="block text-white font-bold mb-2">Email</label>
            <input
              placeholder='Enter Your Email Here'
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 mb-2 md:mb-0"
            />
          </motion.div>
          <motion.div 
            className="mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <label htmlFor="message" className="block text-white font-bold mb-2">Message</label>
            <textarea
              placeholder='Enter Your Message Here'
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 mb-2 md:mb-0"
            ></textarea>
          </motion.div>
          <motion.button 
            type="submit" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 w-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>
          {submitStatus === 'success' && (
            <p className="mt-4 text-green-600 text-center">Message sent successfully!</p>
          )}
          {submitStatus === 'error' && (
            <p className="mt-4 text-red-600 text-center">Failed to send message. Please try again.</p>
          )}
           </motion.form>
          {submitStatus === 'success' && (
            <p className="mt-4 text-green-600 text-center md:text-left">Message sent successfully!</p>
          )}
          {submitStatus === 'error' && (
            <p className="mt-4 text-red-600 text-center md:text-left">Failed to send message. Please try again.</p>
          )}
        </div>
        <motion.div 
  className="md:w-1/2 mt-8 md:mt-0 md:ml-8 md:p-4 md:bg-gray-200 md:rounded-lg md:shadow-md md:text-gray-700 hidden md:block"
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5, delay: 0.5 }}
>
  <p className="text-lg font-semibold">Contact Information</p>
  <p className="mt-2">
    Feel free to reach out to us for any inquiries or questions you may have. Our team is dedicated to providing you with the best possible assistance. Whether you need more information about our services, want to discuss a partnership opportunity, or have feedback to share, we're here to help.
  </p>
  <p className="mt-4">
    You can contact us via phone, email, or visit our office during business hours. Our friendly staff will ensure your queries are handled promptly and professionally.
  </p>
  <p className="mt-4">
    Here are our contact details:
  </p>
  <ul className="list-disc ml-6">
    <li>Phone: +1-123-456-7890</li>
    <li>Email: info@example.com</li>
    <li>Address: 123 Main Street, City, Country</li>
  </ul>
</motion.div>

      </div>
    </motion.section>
  );
};

export default ContactForm;