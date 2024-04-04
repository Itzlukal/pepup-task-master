import { useState } from "react";

interface MenuItem {
  id: number;
  name: string;
  price: number;
}

const useEdit = () => {
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);

  const editItem = async (id: number, updatedItem: MenuItem) => {
    try {
      const response = await fetch(`http://localhost:3000/menu/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedItem),
      });

      if (response.ok) {
        console.log("Item updated successfully");
      } else {
        console.error("Error updating item");
      }
    } catch (error) {
      console.error("Error updating item: ", error);
    }
  };

  return { editingItem, setEditingItem, editItem };
};

export default useEdit;
