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
import { handleDelete } from "../../Utils/useDelete";
import { useMenuItemLogic } from "./useMenuItemLogic";
import EditItem from "../../EditItem/EditItem";
import { useState } from "react";

export interface MenuItemData {
  description: string;
  dish_name: string;
  id: number;
  ingredients: string[];
  price: number;
  score: number;
  image: string;
}

const MenuItem = () => {
  const [editVisible, setEditVisible] = useState<boolean>(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItemData | null>(
    null
  );
  const { menuItems, isSmallScreen, handleEditItemClick, setMenuItems } =
    useMenuItemLogic({
      setEditVisible,
    });

  const handleEditClick = (menuItem: MenuItemData) => {
    setSelectedMenuItem(menuItem);
    handleEditItemClick();
  };

  console.log(selectedMenuItem);

  return (
    <>
      {menuItems
        .slice(0, isSmallScreen ? 3 : menuItems.length)
        .map((menuItem) => (
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
                  <DeleteIcon
                    onClick={() => handleDelete(menuItem.id, setMenuItems)}
                  />
                </ButtonWrapper>
                <ButtonWrapper>
                  <DriveFileRenameOutlineIcon
                    onClick={() => handleEditClick(menuItem)}
                  />
                </ButtonWrapper>
              </CustomFlex>
            </Footer>
          </Container>
        ))}
      {editVisible && (
        <EditItem
          setEditVisible={setEditVisible}
          selectedMenuItem={selectedMenuItem}
        />
      )}
    </>
  );
};

export default MenuItem;
