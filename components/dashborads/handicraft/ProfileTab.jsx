import { Grid, Rating, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";

function ProfileTab({user}) {
  user = useSelector((state) => state.user) || user || {} ;
  return (
    <Grid container height={"100%"} direction={"column"}>
      <Grid item padding={2} borderBottom={"1px solid lightGray"}>
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
              <Rating name="read-only" value={4.5} precision={0.5} readOnly />
            </Stack>
          </Stack>
        </Stack>
      </Grid>

      <Grid item flexGrow={1}>
        items
      </Grid>
    </Grid>
  );
}
export default ProfileTab;