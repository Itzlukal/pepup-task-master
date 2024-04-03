import axios from "axios";
import { NewItem } from "../AddItem/AddItem";
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

  axios
    .post("http://localhost:3000/menu", newItem)
    .then((response) => {
      console.log("Item added successfully:", response.data);
    })
    .catch((error) => {
      console.error("Error adding item:", error);
    });
};

//those are toast notifications one for success and one for failure
export const ToastWarning = () => {
  toast.warning("Fill All Fields !", {
    position: "top-right",
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
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

//this is eventHandler which handles adding a dish
export const handleAddDish = ({
  name,
  price,
  ingredients,
  imageUrl,
  score,
}: NewItem) => {
  if (name && price && ingredients && imageUrl && score) {
    const newItem: NewItem = {
      name,
      price: Number(price),
      score: Number(score),
      ingredients,
      imageUrl,
    };
    handleAddItem(newItem);
    ToastSuccess();
  } else {
    ToastWarning();
  }
};
