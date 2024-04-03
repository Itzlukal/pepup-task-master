import { MenuItemData } from "../Menu/MenuItems/MenuItem";
import Swal from "sweetalert2";

export const handleDelete = (
  id: number,
  setMenuItems: React.Dispatch<React.SetStateAction<MenuItemData[]>>
) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });

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
  });
};
