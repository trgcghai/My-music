import { motion } from "framer-motion";

const Loading = ({
  size = "medium",
}: {
  size?: "small" | "medium" | "large";
}) => {
  const sizeMap = {
    small: 20,
    medium: 40,
    large: 60,
  };
  const borderMap = {
    small: 2,
    medium: 4,
    large: 6,
  };
  return (
    <div>
      <motion.div
        style={{
          width: `${sizeMap[size]}px`,
          height: `${sizeMap[size]}px`,
          border: `${borderMap[size]}px solid #ccc`,
          borderTop: `${borderMap[size]}px solid #007bff`,
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
