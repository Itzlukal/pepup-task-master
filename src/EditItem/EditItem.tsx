import { useState } from "react";
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

export interface EditItemProps {
  setEditVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditItem = ({ setEditVisible }: EditItemProps) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [score, setScore] = useState("");

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
          placeholder="score"
          value={score}
          onChange={(e) => {
            const newScore = Number(e.target.value);
            if (newScore >= 0 && newScore <= 10) {
              setScore(newScore.toString());
            }
          }}
          required
          min={0}
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
        <Button onClick={() => {}}>Save</Button>
      </ButtonWrapper>
    </Container>
  );
};

export default EditItem;
