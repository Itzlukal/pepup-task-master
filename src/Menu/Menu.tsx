import { useState } from "react";
import MenuItem from "./MenuItems/MenuItem";
import { Grid } from "./MenuItems/Styled-components";
import { Button, Header, Subtitle, Title } from "./Styled-components";
import AddItem from "../AddItem/AddItem";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Menu = () => {
  const [showAddItem, setShowAddItem] = useState<boolean>(false);

  return (
    <div
      id="Menu"
      style={{
        height: window.innerWidth < 768 ? "100%" : "100vh",
      }}
    >
      <Header>
        <Title> Top List</Title>
        <Subtitle>Our mainstay menu</Subtitle>
        <Button hasMargin onClick={() => setShowAddItem(true)}>
          + Add New Item
        </Button>
      </Header>
      <Grid>
        <MenuItem />
      </Grid>
      <ToastContainer />
      {showAddItem && <AddItem setShowAddItem={setShowAddItem} />}
    </div>
  );
};

export default Menu;
