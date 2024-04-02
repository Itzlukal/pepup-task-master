import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 30px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextWrapper = styled.div`
  max-width: 60%;
  flex-direction: column;
`;

export const Title = styled.h1`
  width: 100%;
  color: black;
  font-size: 35px;
  font-weight: 500;
`;

export const Subtitle = styled.h2`
  color: black;
  font-size: 25px;
  font-weight: 400;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
export const CustomButton = styled.button<{ color: string }>`
  background-color: ${(props) => props.color};
  color: white;
  font-weight: 600;
  padding: 15px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  width: 140px;

  &:hover {
    opacity: 0.8;
  }
`;

export const Photo = styled.div`
  margin-left: 200px;
  background-image: url("https://freepngimg.com/download/food/139203-food-plate-top-nutrition-view.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 500px;
  height: 500px;
`;
