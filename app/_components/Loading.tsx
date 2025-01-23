import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div>
      <motion.div
        style={{
          width: "40px",
          height: "40px",
          border: "4px solid #ccc",
          borderTop: "4px solid #007bff",
          borderRadius: "50%",
        }}
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
      />
    </div>
  );
};
export default Loading;
