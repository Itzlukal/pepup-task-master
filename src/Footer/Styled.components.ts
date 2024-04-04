import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 20px;
`;

export const FooterTitle = styled.h1`
  margin-top: auto;
  margin-bottom: auto;
  color: black;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 35px;
  }
`;

export const FooterItemsContainer = styled.div`
  margin-top: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 100px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

export const FooterItem = styled.div`
  color: black;
  padding: 10px;
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  transition: all 0.6s ease;

  &:hover {
    cursor: pointer;
    background-color: #c0997c;
    backdrop-filter: blur(50px);
    border-radius: 10px;
  }
`;
