"use client";

import LoginDialog from "@components/AuthPage/LoginDialog";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const slideVariants = {
  initial: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.3 },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
    transition: { duration: 0.3 },
  }),
};

const Page = () => {
  const [currentModal, setCurrentModal] = useState(0);
  const [direction, setDirection] = useState(1);

  const modals = [
    {
      key: "login",
      content: (
        <LoginDialog
        // setCurrentModal={setCurrentModal}
        // setDirection={setDirection}
        />
      ),
    },
    // {
    //   key: "resetpassword",
    //   content: <ResetPasswordDialog />,
    // },
  ];

  return (
    <AnimatePresence>
      <motion.div
        key={modals[currentModal].key}
        custom={direction}
        variants={slideVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {modals[currentModal].content}
      </motion.div>
    </AnimatePresence>
  );
};
export default Page;
