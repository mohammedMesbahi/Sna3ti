import { useEffect } from "react";
import DefualtLayout from "@/components/dashborads/DefualtLayout";
import {
  Container,
  Skeleton,
  Typography,
  Stack,
  Box,
  Paper,
} from "@mui/material";
import { Grid, Divider } from "@mui/material";
import { useSelector } from "react-redux";
import NoSsr from "@mui/base/NoSsr";

function profile() {
  const user = useSelector((state) => state.user);
  
  return (
    <DefualtLayout>
      <Box
        sx={{
          maxWidth: { xs: "95%", md: "75%" },
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          mt: 2,
          gap: 2,
          boxShadow: {
            xs: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`,
            md: `0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`,
          },
        }}
        margin={"auto"}
        component={"section"}
        p={2}
        minHeight={"70vh"}
      >
        {/* profile Card */}
        <Paper
          elevation={0}
          sx={{
            padding: 1,
            display: "flex",
            flexDirection: "column",
            width: {
              xs: 1,
              md: 1 / 4,
            },
            minHeight: 200,
            gap: 1,
            border: "1px solid #e0e0e0",
          }}
        >
          <Stack
            sx={{
              flexDirection: {
                md: "column",
              },
              alignItems: "center",
              gap: 1,
              
            }}
          >
            <NoSsr>
              <img
                src={user.profileImage}
                width={200}
                height={200}
                alt="Picture of the author"
                style={{
                  display: "inline",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />

              <Stack direction="column" spacing={1} mt={0}>
                <Typography variant="h5" sx={{ textAlign:"center" }}>
                  {user.fullName}
                </Typography>
                <Typography variant="subtitle1" display={"inline"}>
                  {user.email}
                </Typography>
              </Stack>
            </NoSsr>
          </Stack>
        </Paper>

        <Divider orientation="vertical" flexItem />

        <Grid
          container
          component={"section"}
          spacing={1}
          sx={{
            maxHeight: { md: "600px", xs: "auto" },
            overflow: "auto",
            width: {
              md: 3 / 4,
              xs: 1,
            },
          }}
        >
          <Grid item xs={12}>
            <Typography variant="h5" sx={{ textAlign: { md: "center" } }}>
              My Handicrafts
            </Typography>
          </Grid>
          {Array(8)
            .fill()
            .map((item, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={index}
                onClick={() => {}}
              >
                <Skeleton variant="rectangular" width={"100%"} height={200} />
              </Grid>
            ))}
        </Grid>
      </Box>
    </DefualtLayout>
  );
}

export default profile;
