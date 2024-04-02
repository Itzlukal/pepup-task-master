import {
  ButtonsWrapper,
  CustomButton,
  Photo,
  Subtitle,
  TextWrapper,
  Title,
  Wrapper,
} from "./styled-components";
import { scrollToSection } from "../Utils/useScroll";

const Home = () => {
  return (
    <div>
      <Wrapper id="Home">
        <TextWrapper>
          <Title>Delicious food is waiting for you </Title>
          <Subtitle>
            this food is very delicious, you might develop addiction and become
            our daily consumer
          </Subtitle>
          <ButtonsWrapper>
            <CustomButton
              color="#c0997c"
              onClick={() => scrollToSection("Menu")}
            >
              Food Menu
            </CustomButton>
            <CustomButton color="#ccb9a3">Book a Table</CustomButton>
          </ButtonsWrapper>
        </TextWrapper>
        <Photo />
      </Wrapper>
    </div>
  );
};

export default Home;
