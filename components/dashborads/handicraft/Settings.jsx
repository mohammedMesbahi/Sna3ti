import { faUserPen, faUnlockKeyhole } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import React from "react";
import DashboardLayout from "./DashboardLayout";
import EditProfileTab from "./EditProfileTab";
import ChangePasswordTab from "./ChangePasswordTab";
function AccountTab() {
  const [view, setView] = React.useState("editProfile");

  const changeView = (event, newView) => {
    setView(newView);
  };

  return (
    <Grid
      container
      // width={10/12}
      margin={"auto"}
      sx={{ height: "100%",width:{xs:'100%',md:'80%'} }}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Grid item height={"80%"}>
        <TabContext value={view}>
          <TabList onChange={changeView} scrollButtons="auto" centered>
            <Tab
              icon={<FontAwesomeIcon icon={faUserPen} />}
              iconPosition="start"
              label="edit profile"
              value="editProfile"
            />
            <Tab
              icon={<FontAwesomeIcon icon={faUnlockKeyhole} />}
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
