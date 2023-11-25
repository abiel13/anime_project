"use client";
import React from "react";
import { motion } from "framer-motion";

const MotionDiv = ({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ ease: "easeIn", delay: index * 0.25 }}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;
