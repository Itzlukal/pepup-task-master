import { Subtitle, TextWrapper, Title } from "../Home/styled-components";
import { Photo, Wrapper } from "./Styled-components";

const About = () => {
  return (
    <>
      <Wrapper id="About">
        <Photo />
        <TextWrapper>
          <Title>Best Potatoes for french fries </Title>
          <Subtitle>
            Russet Potatoes are ideal, since they're dense, they don't contain
            as much water inside, which allows them to get extra crispy
          </Subtitle>
        </TextWrapper>
      </Wrapper>
    </>
  );
};

export default About;
