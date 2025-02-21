import React, { useState, useEffect, useRef } from "react";

export const useContextMenu = () => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [additionalData, setAdditionalData] = useState("");

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutSide = (event: MouseEvent) => {
      if (!menuRef.current.contains(event.target as Node)) {
        setVisible(false);
        setPosition({ x: 0, y: 0 });
        setAdditionalData(null);
      }
    };

    document.addEventListener("click", handleClickOutSide);

    return () => {
      document.removeEventListener("click", handleClickOutSide);
    };
  }, []);

  const handleContextMenu = (event: React.MouseEvent, data: string) => {
    event.preventDefault();
    event.stopPropagation();
    setPosition({ x: event.clientX, y: event.clientY });
    setVisible(true);
    setAdditionalData(data);
  };
  return {
    visible,
    position,
    menuRef,
    additionalData,
    handleContextMenu,
  };
};
