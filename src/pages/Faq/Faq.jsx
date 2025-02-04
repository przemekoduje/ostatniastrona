import React from "react";
import "./faq.scss";
import { motion } from "framer-motion";

export default function Faq() {
  return (
    <motion.div
      className="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="page faq">
        <h1>Faq</h1>
        <p>Witaj na stronie Fa!</p>
      </div>
    </motion.div>
  );
}
