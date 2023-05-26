import * as React from "react";
import { Button, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Tab } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
import ProfileTab from "./ProfileTab";
import CreatItemTab from "./CreatItemTab";
import AccountTab from "./AccountTab";
function HandicraftDashboard({ user }) {
  const [tab, setTab] = React.useState("profile");

  const changeTab = (event, newView) => {
    setTab(newView);
  };

  return (
    <TabContext value={tab}>
      {/* Container */}
      <Grid container height={"100vh"} component={"section"}
        sx={{
          flexDirection: {
            xs: "column",
            md: "row",
          },
        }}
      >
        {/* sidebar */}
        <Grid
          container
          width={2 / 12}
          component={"aside"}
          borderRight={"1px solid lightGray"}
          flexDirection={"column"}
          sx={{
            height: {
              xs: "auto",
              md: "100%",
            },
            alignSelf: {
              xs: "flex-start",
              md: "stretch",
            },
            bgcolor: {
              xs: "red",
              md: "white",
            },
          }}
        >
          {/* logo */}
          <Grid item borderBottom={"1px solid lightGray"}>
            <Stack direction="row" alignItems="center">
              <Image
                src="/logs/6.png"
                width={64}
                height={64}
                alt="Picture of the author"
                style={{ display: "inline" }}
              ></Image>
              <Typography variant="h5">MyCrffftd</Typography>
            </Stack>
          </Grid>

          {/* tab list */}
          <Grid item flexGrow={1}>
            <TabList onChange={changeTab} orientation="vertical">
              <Tab
                label="profile"
                value="profile"
                icon={<AccountCircleIcon />}
                iconPosition="start"
                sx={{ justifyContent: "flex-start" }}
              />
              <Tab
                label="handicrafts"
                value="handicrafts"
                icon={<PeopleOutlineIcon />}
                iconPosition="start"
                sx={{ justifyContent: "flex-start" }}
              />
              <Tab
                label="items"
                value="items"
                icon={<ShoppingCartIcon />}
                iconPosition="start"
                sx={{ justifyContent: "flex-start" }}
              />
              <Tab
                label="notifications"
                value="notifications"
                icon={<NotificationsNoneIcon />}
                iconPosition="start"
                sx={{ justifyContent: "flex-start" }}
              />
              <Tab
                label="publish an Item"
                value="creat"
                icon={<AddCircleOutlineIcon />}
                iconPosition="start"
                sx={{ justifyContent: "flex-start" }}
              />
              <Tab
                label="account"
                value="account"
                icon={<SettingsIcon />}
                iconPosition="start"
                sx={{ justifyContent: "flex-start" }}
              />
            </TabList>
          </Grid>

          {/* log out button */}
          <Grid item borderTop={"1px solid lightGray"}>
            <Button
              sx={{ width: "100%" }}
              startIcon={<LogoutIcon sx={{ rotate: "180deg" }} />}
            >
              Log Out
            </Button>
          </Grid>
        </Grid>

        {/* tab section */}
        <Grid container width={10 / 12} component={"main"} height={"100%"}>
          <Grid item flexGrow={1}>
            <TabPanel value="profile" sx={{ height: "100%", padding: "0px" }}>
              <ProfileTab user={user} />
            </TabPanel>

            <TabPanel
              value="handicrafts"
              sx={{ height: "100%", padding: "0px" }}
            >
              handicrafts
            </TabPanel>

            <TabPanel value="items" sx={{ height: "100%", padding: "0px" }}>
              items
            </TabPanel>

            <TabPanel
              value="notifications"
              sx={{ height: "100%", padding: "0px" }}
            >
              notifications
            </TabPanel>

            <TabPanel value="creat" sx={{ height: "100%", padding: "0px" }}>
              <CreatItemTab />
            </TabPanel>

            <TabPanel value="account" sx={{ height: "100%", padding: "0px" }}>
              <AccountTab />
            </TabPanel>
          </Grid>
        </Grid>
      </Grid>
    </TabContext>
  );
}

export default HandicraftDashboard;
