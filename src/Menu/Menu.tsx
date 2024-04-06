import { useState } from "react";
import MenuItem, { MenuItemData } from "./MenuItems/MenuItem";
import { Grid } from "./MenuItems/Styled-components";
import { Button, Header, Subtitle, Title } from "./Styled-components";
import AddItem from "../AddItem/AddItem";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditItem from "../EditItem/EditItem";

const Menu: React.FC = () => {
  const [editedMenuItem, setEditedMenuItem] = useState<MenuItemData | null>(
    null
  );

  const [showAddItem, setShowAddItem] = useState<boolean>(false);

  // const handleEditItemClick = (menuItemData: MenuItemData) => {
  //   setEditedMenuItem(menuItemData);
  //   setEditVisible(true);
  // };

  // const handleEditSubmit = (editedData: MenuItemData) => {
  //   // Handle submission logic
  //   setEditVisible(false);
  // };

  return (
    <div
      id="Menu"
      style={{
        height: window.innerWidth < 768 ? "100%" : "100vh",
        position: window.innerWidth < 768 ? undefined : "relative",
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
