import React from 'react';
import { motion } from 'framer-motion';

const SidebarOverlay = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
      onClick={onClose}
      className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[3px] cursor-pointer pointer-events-auto"
    />
  );
};

export default SidebarOverlay;
