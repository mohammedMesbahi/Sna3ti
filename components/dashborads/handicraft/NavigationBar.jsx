import React from "react";
import { Button, Stack, Typography, Box, Tabs } from "@mui/material";
import Image from "next/image";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
import { TabList } from "@mui/lab";
import { Tab } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Divider from '@mui/material/Divider';
// import { Box } from "@mui/joy";
function NavigationBar({ changeTab }) {
  const matchMD = useMediaQuery("(min-width:960px)");
  return (
    <Stack
      component={"aside"}
      border={"1px solid lightGray"}
      sx={{
        width: { xs: "100%", md: "20%" },
        height: { xs: "auto", md: "100%" },
        flexDirection: { xs: "row", md: "column" },
        // overflow: "auto",
      }}
    >
      {/* logo Box */}

      <Box  
        flexDirection="row"
        alignItems="center"
        borderBottom={"1px solid lightGray"}
        component={"header"}
        sx={{ display: { md: "flex", xs: "none" } }}
      >
        <Image
          src="/logs/6.png"
          width={64}
          height={64}
          alt="Picture of the author"
          style={{ display: "inline" }}
        ></Image>
        <Typography variant="h5" fontSize={'2rem'} >MyCraft</Typography>
      </Box>
      {/* tab list */}
      <Box
        flexGrow={1}
        sx={{
          overflow: "auto",
        }}
      >
        <TabList
          onChange={changeTab}
          // orientation={{ xs: "horizantal", md: "vertical" }}
          orientation={matchMD ? "vertical" : "horizontal"}
          variant="scrollable"
          scrollButtons="auto"
          // variant="fullWidth"
          sx={{
            overflow: "auto",
            height: { xs: "auto", md: "100%" },
          }}
        >
          <Tab
            label={matchMD ? "profile" : ""}
            value="profile"
            icon={<AccountCircleIcon />}
            iconPosition="start"
            sx={{ justifyContent: { xs: "center", md: "flex-start" } }}
            wrapped
          />
          <Divider light/>
          <Tab
            label={matchMD ? "handicrafts" : ""}
            value="handicrafts"
            icon={<PeopleOutlineIcon />}
            iconPosition="start"
            sx={{ justifyContent: { xs: "center", md: "flex-start" } }}
            wrapped
          />
          <Divider light/>
          <Tab
            label={matchMD ? "items" : ""}
            value="items"
            icon={<ShoppingCartIcon />}
            iconPosition="start"
            sx={{ justifyContent: { xs: "center", md: "flex-start" } }}
            wrapped
          />
          <Divider light/>
          <Tab
            label={matchMD ? "notifications" : ""}
            value="notifications"
            icon={<NotificationsNoneIcon />}
            iconPosition="start"
            sx={{ justifyContent: { xs: "center", md: "flex-start" } }}
            wrapped
          />
          <Divider light/>
          <Tab
            label={matchMD ? "publish an Item" : ""}
            value="creat"
            icon={<AddCircleOutlineIcon />}
            iconPosition="start"
            sx={{ justifyContent: { xs: "center", md: "flex-start" } }}
            wrapped
          />
          <Divider light/>
          <Tab
            label={matchMD ? "account" : ""}
            value="account"
            icon={<SettingsIcon />}
            iconPosition="start"
            sx={{ justifyContent: { xs: "center", md: "flex-start" } }}
            wrapped
          />
        </TabList>
      </Box>

      {/* log out button */}
      <Button startIcon={<LogoutIcon sx={{ rotate: "180deg" }} />}
        sx={{
          borderTop:{
            xs:'none',
            md:"1px solid lightGray"
          }
        }}
      >
        {matchMD ? "log out" : ""}
      </Button>
    </Stack>
  );
}

export default NavigationBar;
