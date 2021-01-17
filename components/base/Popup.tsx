import { motion } from "framer-motion";
import React from "react";

export const Popup = React.memo(({ isVisible }: any) => {
  return <motion.div animate={{ opacity: isVisible ? 1 : 0 }} />;
});
