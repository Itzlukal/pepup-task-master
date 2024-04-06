import { useState, useEffect } from "react";
import { EditItemProps } from "../EditItem/EditItem";
import { ToastWarning } from "./useAdd";
import { toast } from "react-toastify";

const useEditItemLogic = ({
  setEditVisible,
  selectedMenuItem,
}: EditItemProps) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [score, setScore] = useState("");

  const ToastSuccess = () => {
    toast.success("Item updated Successfully !", {
      position: window.innerWidth < 768 ? "top-center" : "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  useEffect(() => {
    if (selectedMenuItem) {
      setName(selectedMenuItem.dish_name);
      setPrice(selectedMenuItem.price.toString());
      setIngredients(selectedMenuItem.ingredients.join(", "));
      setImageUrl(selectedMenuItem.image);
      setScore(selectedMenuItem.score.toString());
    }
  }, [selectedMenuItem]);

  const handleSave = async (id: number = selectedMenuItem?.id || 0) => {
    try {
      const response = await fetch(`http://localhost:3000/menu/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          dish_name: name,
          price: Number(price),
          ingredients: ingredients.split(","),
          image: imageUrl,
          score: Number(score),
        }),
      });

      if (response.ok) {
        ToastSuccess();
        setEditVisible(false);
      } else {
        ToastWarning();
      }
    } catch (error) {
      console.error("Failed to update item", error);
    }
  };

  return {
    name,
    setName,
    price,
    setPrice,
    ingredients,
    setIngredients,
    imageUrl,
    setImageUrl,
    score,
    setScore,
    handleSave,
  };
};

export default useEditItemLogic;
