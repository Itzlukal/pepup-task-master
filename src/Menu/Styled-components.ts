import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  margin: 0px;
  color: black;
`;
export const Subtitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
export const Button = styled.button<{ hasMargin?: boolean }>`
  margin: ${({ hasMargin }) => (hasMargin ? "0 auto" : "0")};
  border-radius: 20px;
  border: 2px solid #f88d26;
  background-color: transparent;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f88d26;
    border: 2px solid #f88d26;
  }
`;
