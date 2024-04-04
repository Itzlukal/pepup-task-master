// hooks/useMenuItemLogic.js
import { useState, useEffect } from "react";
import { useMenuItems } from "../../Utils/useMenuItems";
import { MenuItemData } from "./MenuItem";

export const useMenuItemLogic = () => {
  const [menuItems, setMenuItems] = useState<MenuItemData[]>([]);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isEditItemVisible, setIsEditItemVisible] = useState<boolean>(false);

  useEffect(() => {
    const loadMenuItems = async () => {
      try {
        const data = await useMenuItems("http://localhost:3000/menu");
        setMenuItems(data);
      } catch (error) {
        console.error("Failed to fetch menu items:", error);
      }
    };

    loadMenuItems();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleEditItemClick = () => {
    setIsEditItemVisible(true);
  };

  return {
    menuItems,
    isSmallScreen,
    isEditItemVisible,
    setIsEditItemVisible,
    handleEditItemClick,
    setMenuItems,
  };
};
