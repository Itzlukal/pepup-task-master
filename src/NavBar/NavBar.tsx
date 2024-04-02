import {
  NavBarWrapper,
  NavBarItem,
  CustomCenter,
  CustomFlex,
  CustomComponent,
} from "./styled-components";
import { scrollToSection } from "../Utils/useScroll";

const NavBar = () => {
  return (
    <CustomCenter>
      <NavBarWrapper>
        <CustomFlex>
          <CustomComponent color="#fdcb47">Food</CustomComponent>
          <CustomComponent color="  #c0997a ">Eat</CustomComponent>
        </CustomFlex>
        <CustomFlex>
          <NavBarItem onClick={() => scrollToSection("Home")}>Home</NavBarItem>
          <NavBarItem onClick={() => scrollToSection("Menu")}>Menu</NavBarItem>
          <NavBarItem onClick={() => scrollToSection("About")}>
            About
          </NavBarItem>
        </CustomFlex>
      </NavBarWrapper>
    </CustomCenter>
  );
};

export default NavBar;
