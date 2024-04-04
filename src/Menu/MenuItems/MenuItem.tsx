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
  const {
    menuItems,
    isSmallScreen,

    handleEditItemClick,
    setMenuItems,
  } = useMenuItemLogic();

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
                  <DriveFileRenameOutlineIcon onClick={handleEditItemClick} />
                </ButtonWrapper>
              </CustomFlex>
            </Footer>
          </Container>
        ))}
    </>
  );
};

export default MenuItem;
