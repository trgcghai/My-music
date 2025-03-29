import { SongRowProps } from "_types/component";
import React, { useState, useEffect, useRef } from "react";

export const useContextMenu = () => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [additionalData, setAdditionalData] = useState<SongRowProps>(null);

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

  const handleContextMenu = (event: React.MouseEvent, data: SongRowProps) => {
    event.preventDefault();
    event.stopPropagation();

    const menuHeight = 150; // Chiều cao ước tính của context menu (có thể thay đổi)
    const menuWidth = 250; // Chiều rộng ước tính của context menu (có thể thay đổi)

    // Điều chỉnh vị trí theo chiều dọc (lên trên nếu vượt quá chiều cao cửa sổ)
    const offsetY =
      event.clientY + menuHeight > window.innerHeight
        ? event.clientY - menuHeight // Hiển thị lên trên nếu vượt quá chiều cao cửa sổ
        : event.clientY;

    // Điều chỉnh vị trí theo chiều ngang (qua trái nếu vượt quá chiều rộng cửa sổ)
    const offsetX =
      event.clientX + menuWidth > window.innerWidth
        ? event.clientX - menuWidth // Hiển thị qua trái nếu vượt quá chiều rộng cửa sổ
        : event.clientX;

    setPosition({ x: offsetX, y: offsetY });
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
