import { Button } from "../Menu/Styled-components";
import {
  ButtonWrapper,
  Container,
  CustomImage,
  CustomInput,
  GridContainer,
  CloseIconWrapper,
} from "../AddItem/Styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { MenuItemData } from "../Menu/MenuItems/MenuItem";
import useEditItemLogic from "../Utils/useEdit";

export interface EditItemProps {
  setEditVisible: React.Dispatch<React.SetStateAction<boolean>>;
  selectedMenuItem?: MenuItemData | null;
}

const EditItem = ({ setEditVisible, selectedMenuItem }: EditItemProps) => {
  const {
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
  } = useEditItemLogic({ setEditVisible, selectedMenuItem });

  return (
    <Container>
      <CloseIconWrapper>
        <CloseIcon
          onClick={() => {
            setEditVisible(false);
          }}
        />
      </CloseIconWrapper>
      <GridContainer>
        <CustomInput
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <CustomInput
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => {
            const newPrice = Number(e.target.value);
            if (newPrice >= 0) {
              setPrice(newPrice.toString());
            }
          }}
          required
          min={0}
        />
        <CustomInput
          type="number"
          placeholder="Score"
          value={score}
          onChange={(e) => {
            const newScore = Number(e.target.value);
            if (newScore >= 0 && newScore <= 10) {
              setScore(newScore.toString());
            }
          }}
          required
          min={0}
          max={10}
        />
        <CustomInput
          type="text"
          placeholder="Ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
        />
        <CustomInput
          required
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        {imageUrl && <CustomImage src={imageUrl} alt="Uploaded Image" />}
      </GridContainer>
      <ButtonWrapper>
        <Button onClick={() => handleSave(selectedMenuItem?.id)}>Save</Button>
      </ButtonWrapper>
    </Container>
  );
};

export default EditItem;
