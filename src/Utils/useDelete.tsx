import { useState } from "react";
import { MenuItemData } from "../Menu/MenuItems/MenuItem";

export const handleDelete = (id: number) => {
  const [, setMenuItems] = useState<MenuItemData[]>([]);
  const confirmed = window.confirm(
    "Are you sure you want to delete this item?"
  );
  if (confirmed) {
    fetch(`http://localhost:3000/menu/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        setMenuItems((prevMenuItems) =>
          prevMenuItems.filter((menuItem) => menuItem.id !== id)
        );
      })
      .catch((error) => console.error("Error deleting menu item: ", error));
  }
};
