import axios from "axios";
import { NewItem } from "../AddItem/AddItem";

export const handleAddItem = ({
  name,
  price,
  score,
  ingredients,
  imageUrl,
}: NewItem) => {
  const newItem = {
    name,
    price,
    score,
    ingredients: ingredients.split(","),
    imageUrl,
  };

  axios
    .post("http://localhost:3000/menu", newItem)
    .then((response) => {
      console.log("Item added successfully:", response.data);
    })
    .catch((error) => {
      console.error("Error adding item:", error);
    });
};
