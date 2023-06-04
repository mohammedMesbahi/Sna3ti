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
import Navcss from "@/styles/NavBar.module.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import Divider from "@mui/material/Divider";
import Link from "next/link";
// import { Box } from "@mui/joy";
function NavigationBar() {
  const matchMD = useMediaQuery("(min-width:960px)");
  return (
    <Stack
      component={"aside"}
      border={"1px solid lightGray"}
      sx={{
        flexDirection: { xs: "row", md: "column" },
        width: { xs: "100%", md: "20%" },
        display: { xs: "none",sm:'none', md: "flex" },
      }}
    >
      {/* logo Box */}

      <Box
        flexDirection="row"
        alignItems="center"
        
        borderBottom={"1px solid lightGray"}
        component={"header"}
        sx={{ display: { md: "flex", xs: "none" },
        justifyContent:{
          md:"center",
          lg:"flex-start"
        },
       }}
      >
        <Image
          src="/logs/6.png"
          width={64}
          height={64}
          alt="Picture of the author"
          style={{ display: "inline" }}
        ></Image>
        <Typography
          variant="body2"
          fontWeight={"bold"}
          sx={{ fontSize: "2rem",display: { md:'none',lg:'flex'} }}
        >
          MyCraft
        </Typography>
      </Box>
      {/* tab list */}
      <Box
        flexGrow={1}
        sx={{
          overflow: "auto",
          display: "flex",
          flexDirection: { xs: "row", md: "column" },
        }}
      >
        <Link
          href="/handicraft/dashboard/"
          className={Navcss.navbar__link}          
        >
          <Stack
            variant="body2"
            flexDirection={"row"}
            spacing={1}
            alignItems={"center"}
          >
            <AccountCircleIcon fontSize="large" sx={{marginRight:1}}  /> {matchMD ? "profile" : ""}
          </Stack>
        </Link>
        <Link
          href="/handicrafts"
          className={Navcss.navbar__link}          
        >
          <Stack
            variant="body2"
            flexDirection={"row"}
            spacing={1}
            alignItems={"center"}
          >
            <PeopleOutlineIcon fontSize="large" sx={{marginRight:1}} /> {matchMD ? "handicrafts" : ""}
          </Stack>
        </Link>
        <Link
          href="/items"
          className={Navcss.navbar__link}          
        >
          <Stack
            variant="body2"
            flexDirection={"row"}
            spacing={1}
            alignItems={"center"}
          >
            <ShoppingCartIcon fontSize="large" sx={{marginRight:1}} /> {matchMD ? "items" : ""}
          </Stack>
        </Link>
        <Link
          href="/handicraft/dashboard/publish-item"
          className={Navcss.navbar__link}          
        >
          <Stack
            variant="body2"
            flexDirection={"row"}
            spacing={1}
            alignItems={"center"}
          >
            <AddCircleOutlineIcon fontSize="large" sx={{marginRight:1}} /> {matchMD ? "publish item" : ""}
          </Stack>
        </Link>
        <Link
          href="/handicraft/dashboard/settings"
          className={Navcss.navbar__link}          
        >
          <Stack
            variant="body2"
            flexDirection={"row"}
            spacing={1}
            alignItems={"center"}
          >
            <SettingsIcon fontSize="large" sx={{marginRight:1}} /> {matchMD ? "account" : ""}
          </Stack>
        </Link>
      </Box>

      {/* log out button */}
      <Button
        startIcon={<LogoutIcon sx={{ rotate: "180deg" }} />}
        sx={{
          borderTop: {
            xs: "none",
            md: "1px solid lightGray",
          },
        }}
      >
        {matchMD ? "log out" : ""}
      </Button>
    </Stack>
  );
}

export default NavigationBar;
