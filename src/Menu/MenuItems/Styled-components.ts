import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(50px);
  width: 250px;
  border-radius: 20px;
  padding: 20px;
`;

export const Photo = styled.img`
  width: 140px;
  height: auto;
  object-fit: cover;
  border-radius: 50%;
  margin: 0 auto;
  display: block;
  overflow: visible;
  position: relative;
  top: -45px;
`;

export const Review = styled.div`
  font-size: 20px;
  color: #feea54;
  display: flex;
  align-items: center;
`;

export const About = styled.div`
  margin-top: -50px;
`;

export const Title = styled.div`
  font-size: 25px;
`;

export const Description = styled.div`
  font-size: 15px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonWrapper = styled.div`
  &:hover {
    cursor: pointer;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.3);
  }
`;
export const CustomFlex = styled.div`
  display: flex;
  gap: 10px;
`;

export const Price = styled.div`
  font-size: 20px;
`;

export const Grid = styled.div`
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 40px;
  padding: 50px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
