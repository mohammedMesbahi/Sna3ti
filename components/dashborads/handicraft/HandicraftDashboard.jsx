import * as React from "react";
import { Grid, Stack, Box } from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";
import ProfileTab from "./ProfileTab";
import CreatItemTab from "./CreatItemTab";
import AccountTab from "./AccountTab";
import NavigationBar from "./NavigationBar";
function HandicraftDashboard({ user }) {
  const [tab, setTab] = React.useState("profile");

  const changeTab = (event, newView) => {
    setTab(newView);
  };

  return (
    <TabContext value={tab}>
      {/* Container */}
      <Stack
        width={"100%"}
        height={"100vh"}
        component={"section"}
        sx={{
          flexDirection: {
            xs: "column-reverse",
            md: "row",
          },
        }}
      >
        <NavigationBar changeTab={changeTab} />

        {/* tab section */}
        <Box component={"main"} flexGrow={1}>
          <TabPanel value="profile" sx={{ height: "100%", padding: "0px" }}  >
            <ProfileTab user={user}   />
          </TabPanel>

          <TabPanel value="handicrafts" sx={{ height: "100%", padding: "0px" }}>
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
        </Box>
      </Stack>
    </TabContext>
  );
}

export default HandicraftDashboard;
