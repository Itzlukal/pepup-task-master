import { handleAddItem } from "../Utils/UseAdd";
import { Container, CustomInput, GridContainer } from "./Styled-components";
import { useState } from "react";

export interface NewItem {
  name: string;
  price: number;
  score: number;
  ingredients: string;
  imageUrl: string;
}

const AddItem = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [score, setScore] = useState("");

  return (
    <Container>
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
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <CustomInput
          type="number"
          placeholder="score"
          value={score}
          onChange={(e) => setScore(e.target.value)}
          required
        />
        <CustomInput
          type="text"
          placeholder="Ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
        />
        <CustomInput
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
      </GridContainer>
      <button
        onClick={() =>
          handleAddItem({
            name,
            price: Number(price),
            score: Number(score),
            ingredients,
            imageUrl,
          })
        }
      >
        Add
      </button>
    </Container>
  );
};

export default AddItem;
