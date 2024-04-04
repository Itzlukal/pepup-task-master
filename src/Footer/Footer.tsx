import {
  FooterContainer,
  FooterItem,
  FooterItemsContainer,
  FooterTitle,
} from "./Styled.components";
import SecurityUpdateGoodOutlinedIcon from "@mui/icons-material/SecurityUpdateGoodOutlined";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterTitle>Our Services</FooterTitle>
      <FooterItemsContainer>
        <FooterItem>
          <SecurityUpdateGoodOutlinedIcon fontSize="large" />
          Online booking
        </FooterItem>
        <FooterItem>
          <RestaurantOutlinedIcon fontSize="large" />
          Catering services
        </FooterItem>
        <FooterItem>
          <PeopleAltOutlinedIcon fontSize="large" />
          Membership
        </FooterItem>
        <FooterItem>
          <LocalShippingOutlinedIcon fontSize="large" />
          Delivery
        </FooterItem>
      </FooterItemsContainer>
    </FooterContainer>
  );
};

export default Footer;
