import React from "react";
import "./blackHole.scss";
import { motion } from "framer-motion";

export default function BlackHole() {
  return (
    <motion.div
      className="page1"
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 0.6 }}
    >
      <div className="page blackHole">
        <h1>Black Hole</h1>
        <p>Witaj na stronie BlackHole!</p>
      </div>
    </motion.div>
  );
}
