import * as React from "react";
import { Stack, Box } from "@mui/material";
import NavigationBar from "./NavigationBar";

function DashboardLayout({ children }) {
  return (
    <Stack
      width={"100vw"}
      height={"100vh"}
      component={"section"}
      sx={{
        flexDirection: {
          xs: "column-reverse",
          sm: "column-reverse",
          md: "row",
        },
      }}
    >
      <NavigationBar  />

      {/* tab section */}
      <Box component={"section"} flexGrow={1} sx={{
        
      }} >
        {children}
      </Box>
    </Stack>
  );
}

export default DashboardLayout;
