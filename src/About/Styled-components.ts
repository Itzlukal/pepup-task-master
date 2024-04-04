import styled from "styled-components";

export const Photo = styled.div`
  background-image: url("https://www.nicepng.com/png/full/14-149009_best-free-fries-icon-png-transparent-background-french.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 700px;
  height: 700px;
  @media (max-width: 600px) {
    margin: 0;
    width: 200px;
  }
`;

export const Wrapper = styled.div`
  padding: 30px;
  height: calc(100vh - 200px);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
