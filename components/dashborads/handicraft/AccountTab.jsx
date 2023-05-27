import { faUserPen, faUnlockKeyhole } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid } from "@mui/material";
import { Tab, TabContext, TabList, TabPanel } from "@mui/lab";
import React from "react";
import DashboardLayout from "./DashboardLayout";
function AccountTab() {
  const [view, setView] = React.useState("editProfile");

  const changeView = (event, newView) => {
    setView(newView);
  };

  return (
    <Grid container sx={{ height: "100%" }} justifyContent={"center"}>
      <Grid item xs={10} marginTop={5}>
        <TabContext value={view}>
          <TabList onChange={changeView} aria-label="Tabs example" centered>
            <Tab
              icon={<FontAwesomeIcon icon={faUserPen} size="2x" />}
              iconPosition="start"
              label="edit profile"
              value="editProfile"
            />
            <Tab
              icon={<FontAwesomeIcon icon={faUnlockKeyhole} size="2x" />}
              iconPosition="start"
              label="change password"
              value="changePassword"
            />
          </TabList>
          <TabPanel value="editProfile">
            <EditProfileTab />
          </TabPanel>
          <TabPanel value="changePassword">
            <ChangePasswordTab />
          </TabPanel>
        </TabContext>
      </Grid>
    </Grid>
  );
}
AccountTab.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
export default AccountTab;
