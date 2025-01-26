"use client";
import OtpDialog from "@components/AuthPage/OtpDialog";
import RegisterDialog from "@components/AuthPage/RegisterDialog";
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
  const [email, setEmail] = useState("");

  const modals = [
    {
      key: "register",
      content: (
        <RegisterDialog
          setCurrentModal={setCurrentModal}
          setDirection={setDirection}
          setEmail={setEmail}
        />
      ),
    },
    {
      key: "otp",
      content: <OtpDialog email={email} />,
    },
  ];

  return (
    <AnimatePresence custom={direction}>
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
