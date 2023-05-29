import * as React from "react";
import { Stack, Box } from "@mui/material";
import NavigationBar from "./NavigationBar";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
import Navcss from "@/styles/NavBar.module.css";
import Link from "@/lib/Link";
// import Link from "next/link";
function DashboardLayout({ children }) {
  const [value, setValue] = React.useState(0);
  return (
    <Stack
      width={"100vw"}
      height={"100vh"}
      component={"section"}
      flexDirection={"row"}
    >
      <NavigationBar />

      {/* tab section */}
      <Box component={"section"} flexGrow={1} sx={{}}>
        {children}
      </Box>
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          width: "100%",
          display: {
            xs: "block",
            sm: "block",
            md: "none",
          },
        }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{
            overflowX: "auto",
          }}
        >
            <BottomNavigationAction
              label="profile"
              icon={<AccountCircleIcon />}
              component={Link}
              href='/handicraft/dashboard/'
            />
            <BottomNavigationAction
              label="handicrafts"
              icon={<PeopleOutlineIcon />}
              component={Link}
              href='/handicraft/dashboard/handicrafts'
            />
            <BottomNavigationAction
              label="items"
              icon={<ShoppingCartIcon />}
              component={Link}
              href='/handicraft/dashboard/items'
            />
            <BottomNavigationAction
              label="publish"
              icon={<AddCircleOutlineIcon />}
              component={Link}
              href='/handicraft/dashboard/publish-item'
            />
            <BottomNavigationAction
              label="account"
              icon={<SettingsIcon />}
              component={Link}
              href='/handicraft/dashboard/settings'
            />
          
        </BottomNavigation>
      </Paper>
    </Stack>
  );
}

export default DashboardLayout;
