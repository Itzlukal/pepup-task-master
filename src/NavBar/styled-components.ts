import styled from "styled-components";

export const CustomCenter = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 20px;
`;

export const NavBarItem = styled.div`
  color: "gray";
  display: flex;
  margin: 0 20px;
  cursor: pointer;
  padding: 10px;
  color: black;

  &:hover {
    border-bottom: 2px solid #8a7867;
  }
`;

export const CustomFlex = styled.div`
  display: flex;
`;

export const NavBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

export const CustomComponent = styled.div<{ color: string }>`
  font-size: 30px;
  font-family: "Bebas Neue", sans-serif;
  color: ${(props) => props.color};
`;
