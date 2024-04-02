import MenuItem from "./MenuItems/MenuItem";
import { Grid } from "./MenuItems/Styled-components";
import { Button, Subtitle, Title } from "./Styled-components";

const Menu = () => {
  return (
    <div
      id="Menu"
      style={{
        height: "100vh",
      }}
    >
      <Title> Top List</Title>
      <Subtitle>Our mainstay menu</Subtitle>
      <Button>Order Now</Button>
      <Grid>
        <MenuItem />
      </Grid>
    </div>
  );
};

export default Menu;
