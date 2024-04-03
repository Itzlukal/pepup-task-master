import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GridContainer = styled.div`
  width: 800px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: 4fr;
  }
`;
export const CustomInput = styled.input`
  font-size: 20px;
  padding: 10px;
  border-radius: 20px;
  transition: all 0.5s ease;

  &:active {
    background-color: aqua;
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;
