"use client";

import LoginDialog from "@components/AuthPage/LoginDialog";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const modalVariants = {
  initial: () => ({
    x: "100%",
    opacity: 0,
  }),
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.3 },
  },
  exit: () => ({
    x: "-100%",
    opacity: 0,
    transition: { duration: 0.3 },
  }),
};

const Page = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // return <LoginDialog />;
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={modalVariants}
          className="fixed inset-0 z-50 flex items-center justify-center bg-bgColor"
        >
          <LoginDialog />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Page;
