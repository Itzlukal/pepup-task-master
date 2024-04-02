import { useEffect, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import DeleteIcon from "@mui/icons-material/Delete";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import {
  About,
  ButtonWrapper,
  Container,
  CustomFlex,
  Description,
  Footer,
  Photo,
  Price,
  Review,
  Title,
} from "./Styled-components";

interface MenuItemData {
  description: string;
  dish_name: string;
  id: number;
  ingredients: string[];
  price: number;
  score: number;
  image: string;
}

const MenuItem = () => {
  const [menuItems, setMenuItems] = useState<MenuItemData[]>([]);

  useEffect(() => {
    const getMenuItems = async () => {
      try {
        const response = await fetch("http://localhost:3000/menu", {
          method: "GET",
        });
        const data = await response.json();
        setMenuItems(data);
      } catch (error) {
        console.error("Error fetching menu data: ", error);
      }
    };

    getMenuItems();
  }, []);

  const handleDelete = (id: number) => {
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

  return (
    <>
      {menuItems.map((menuItem) => (
        <Container key={menuItem.id}>
          <Photo src={menuItem.image} alt="Menu Item" />
          <About>
            <Review>
              <StarIcon fontSize="medium" />
              {menuItem.score}
            </Review>
            <Title>{menuItem.dish_name}</Title>
            <Description>{menuItem.ingredients.join(", ")}</Description>
          </About>
          <Footer>
            <Price>${menuItem.price}</Price>
            <CustomFlex>
              <ButtonWrapper>
                <DeleteIcon onClick={() => handleDelete(menuItem.id)} />
              </ButtonWrapper>
              <ButtonWrapper>
                <DriveFileRenameOutlineIcon />
              </ButtonWrapper>
            </CustomFlex>
          </Footer>
        </Container>
      ))}
    </>
  );
};

export default MenuItem;
