import { AddItemProps, NewItem } from "../AddItem/AddItem";
import { toast } from "react-toastify";

//this is logic for adding a item to the menu
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

  fetch("http://localhost:3000/menu", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newItem),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })

    .catch((error) => {
      console.error("Error adding item:", error);
    });
};

//those are toast notifications one for success and one for failure
export const ToastWarning = () => {
  toast.warning("Fill All Fields !", {
    position: window.innerWidth < 768 ? "top-center" : "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
export const ToastSuccess = () => {
  toast.success("Item Added Succesfully !", {
    position: window.innerWidth < 768 ? "top-center" : "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

//this is eventHandler which handles adding a dish
export const handleAddDish = (
  { name, price, ingredients, imageUrl, score }: NewItem,
  { setShowAddItem }: AddItemProps
) => {
  if (name && price && ingredients && imageUrl && score) {
    const newItem: NewItem = {
      name,
      price: Number(price),
      score: Number(score),
      ingredients,
      imageUrl,
    };
    handleAddItem(newItem);
    setShowAddItem(false);
    ToastSuccess();
  } else {
    ToastWarning();
  }
};
