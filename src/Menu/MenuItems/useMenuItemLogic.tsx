// hooks/useMenuItemLogic.js
import { useState, useEffect } from "react";
import { useMenuItems } from "../../Utils/useMenuItems";
import { MenuItemData } from "./MenuItem";
import { EditItemProps } from "../../EditItem/EditItem";

export const useMenuItemLogic = ({ setEditVisible }: EditItemProps) => {
  const [menuItems, setMenuItems] = useState<MenuItemData[]>([]);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

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
  }, [menuItems]);

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
    setEditVisible(true);
  };

  return {
    menuItems,
    isSmallScreen,
    setEditVisible,
    handleEditItemClick,
    setMenuItems,
  };
};
