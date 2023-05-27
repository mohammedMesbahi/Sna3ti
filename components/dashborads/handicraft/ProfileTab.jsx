import { Card, Rating, Stack, Typography, Box, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import MyItem from "./MyItem";
function ProfileTab({ user }) {
  return (
    <Stack flexGrow={1} flexDirection="column" height={"100%"} width={"100%"}
      alignItems={"stretch"}
      justifyContent={"flex-start"}

    >
      <Box padding={2} borderBottom={"1px solid lightGray"}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <img
            src={user.profileImage}
            width={100}
            height={100}
            alt="Picture of the author"
            style={{
              display: "inline",
              borderRadius: "50%",
            }}
          />
          <Stack direction="column" spacing={1}>
            <Typography variant="h5">{user.fullName}</Typography>
            <Stack direction="row" spacing={2} alignItems={"center"}>
              <Typography variant="subtitle1" display={"inline"}>
                {user.craft}
              </Typography>
              <Rating name="read-only" value={1.5} precision={0.5} readOnly />
            </Stack>
          </Stack>
        </Stack>
      </Box>

      <Box
        p={2}
        display={"flex"}
        flexDirection={"row"}
        flexWrap={"wrap"}
        gap={1}
        overflow={"auto"}
        flexGrow={1}
        sx={{
          height:{
            md:"calc(100vh - 200px)",
            xs:"calc(100vh - 650px)",

          },
          justifyContent:{
            xs:"center",
            sm:'flex-start',
            md:"flex-start"
          }
        }}
      >
        {user.items.map((item) => (
          <MyItem item={item} />
        ))}
      </Box>
    </Stack>
  );
}
export default ProfileTab;
