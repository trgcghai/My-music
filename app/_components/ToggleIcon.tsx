"use client";
import { ReactNode, useState } from "react";

export const ToggleIcon = ({ icon }: { icon: ReactNode }) => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <div onClick={handleClick} className={isActive ? "text-main" : ""}>
      {icon}
    </div>
  );
};
