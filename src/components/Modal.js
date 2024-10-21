import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <motion.div
        className="bg-white rounded-xl shadow-lg p-4 relative w-full max-w-xl overflow-y-auto max-h-96 m-3 sm:m-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-4xl"
        >
          &times;
        </button>
        <div className="p-2">
          {content}
        </div>
      </motion.div>
    </div>
  );
};

export default Modal;
