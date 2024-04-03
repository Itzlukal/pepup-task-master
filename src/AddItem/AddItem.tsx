import { useState } from "react";
import { Button } from "../Menu/Styled-components";
import {
  ButtonWrapper,
  Container,
  CustomImage,
  CustomInput,
  GridContainer,
  CloseIconWrapper,
} from "./Styled-components";
import CloseIcon from "@mui/icons-material/Close";

import { handleAddDish } from "../Utils/useAdd";

export interface NewItem {
  name: string;
  price: number;
  score: number;
  ingredients: string;
  imageUrl: string;
}
export interface AddItemProps {
  setShowAddItem: React.Dispatch<React.SetStateAction<boolean>>;
}
const AddItem = ({ setShowAddItem }: AddItemProps) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [score, setScore] = useState("");

  return (
    <Container>
      <CloseIconWrapper>
        <CloseIcon onClick={() => setShowAddItem(false)} />
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
            //this limits score to max of 10
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
        <Button
          onClick={() => {
            handleAddDish(
              {
                name,
                price: Number(price),
                score: Number(score),
                ingredients,
                imageUrl,
              },
              { setShowAddItem }
            );
          }}
        >
          Add
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

export default AddItem;
