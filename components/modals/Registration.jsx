import * as React from "react";
import Box from "@mui/material/Box";
import { Button, Modal, Tab, IconButton } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HandymanIcon from "@mui/icons-material/Handyman";
import CustomerRegistrationForm from "../registrationForms/CustomerRegistrationForm";
import HandiCraftRegistrationForm from "../registrationForms/HandiCraftRegistrationForm";
import CloseIcon from "@mui/icons-material/Close";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", md: "50%" },
  height: { xs: "80%", md: "60%" },
  padding: "10px",
  background: "white",
};

export default function RegistrationModal({ open, setOpen }) {
  const [view, setView] = useState("1");

  const changeView = (event, newView) => {
    setView(newView);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal hideBackdrop open={open} sx={style}>
      <>
        <IconButton
          color="inherit"
          aria-label="close drawer"
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
        <TabContext value={view}>
          <TabList onChange={changeView} aria-label="Tabs example" centered>
            <Tab
              sx={{ padding: "0px" }}
              icon={<HandymanIcon />}
              iconPosition="start"
              label="As Handicraft"
              value="1"
            />
            <Tab
              icon={<ShoppingCartIcon />}
              iconPosition="start"
              sx={{ padding: "0px", paddingLeft: "10px" }}
              label="Or As Customer"
              value="2"
            />
          </TabList>
          <TabPanel value="1">
            <HandiCraftRegistrationForm></HandiCraftRegistrationForm>
          </TabPanel>
          <TabPanel value="2">
            <CustomerRegistrationForm></CustomerRegistrationForm>
          </TabPanel>
        </TabContext>
      </>
    </Modal>
  );
}
