import { MenuItemData } from "../Menu/MenuItems/MenuItem";

export const useMenuItems = async (url: string): Promise<MenuItemData[]> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
};
