import MenuItem from "./MenuItems/MenuItem";
import { Grid } from "./MenuItems/Styled-components";
import { Subtitle, Title } from "./Styled-components";

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
      <Grid>
        <MenuItem />
      </Grid>
    </div>
  );
};

export default Menu;
