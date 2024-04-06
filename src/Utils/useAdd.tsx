import { AddItemProps, NewItem } from "../AddItem/AddItem";
import { toast } from "react-toastify";

//this is logic for adding a item to the menu
export const handleAddItem = ({
  dish_name: name,
  price,
  score,
  ingredients,
  imageUrl,
}: NewItem) => {
  const newItem = {
    dish_name: name,
    price: Number(price),
    ingredients: ingredients.split(","),
    image: imageUrl,
    score: Number(score),
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
  toast.success("Item Added Successfully !", {
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
  { dish_name, price, ingredients, imageUrl, score }: NewItem,
  { setShowAddItem }: AddItemProps
) => {
  if (dish_name && price && ingredients && imageUrl && score) {
    const newItem: NewItem = {
      dish_name,
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
