import { useState } from "react";
import MenuItem from "./MenuItems/MenuItem";
import { Grid } from "./MenuItems/Styled-components";
import { Button, Header, Subtitle, Title } from "./Styled-components";
import AddItem from "../AddItem/AddItem";

const Menu = () => {
  const [showAddItem, setShowAddItem] = useState(false);

  const handleAddItemClick = () => {
    setShowAddItem(true);
  };

  return (
    <div
      id="Menu"
      style={{
        height: "100vh",
        position: "relative",
      }}
    >
      <Header>
        <Title> Top List</Title>
        <Subtitle>Our mainstay menu</Subtitle>
        <Button hasMargin onClick={handleAddItemClick}>
          + Add New Item
        </Button>
      </Header>
      <Grid>
        <MenuItem />
      </Grid>
      {showAddItem && <AddItem />}
    </div>
  );
};

export default Menu;
