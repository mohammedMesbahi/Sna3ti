import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
import { useEffect,useState } from "react";
import MyItem from "./MyItem";
import Error from "@/components/Error";
import Skeleton from "@mui/material/Skeleton";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
function ProfileTab() {
  const user = useSelector((state)=>state.user) || {};
  return (
    <Stack
      flexGrow={1}
      flexDirection="column"
      alignItems={"stretch"}
      justifyContent={"flex-start"}
      height={"100%"}
      width={"100%"}
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
      <ItemsContainer></ItemsContainer>
    </Stack>
  );
}
export default ProfileTab;
function ItemsContainer() {
  // const { data, error } = useSWR("/api/handicrafts/myProfile", fetcher)
  const [data,setData] = useState(null)
  const [error,setError] = useState(null)
  useEffect(()=>{
    fetch("/api/handicrafts/myProfile")
    .then((res)=>res.json())
    .then((data)=>{
      setData(data.data)
    })
    .catch((error)=>{
      setError(error)
      console.log(error);
    })
  },[])

  if (error) return <Error error={error} />;
  if (!data)
    return (
      <Stack
        flexGrow={1}
        flexDirection="column"
        alignItems={"stretch"}
        justifyContent={"flex-start"}
        height={"100%"}
        width={"100%"}
      >
        <Stack flexGrow={1} overflow={"auto"} p={2} gap={2}>
          <Grid container component={"section"} spacing={1}>
            {Array.from("ABCDEFGH").map((index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Paper
                  elevation={3}
                  sx={{
                    padding: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    width: "100%",
                  }}
                >
                  <Skeleton variant="text" width={"59%"}></Skeleton>

                  <Skeleton variant="rectangular" width={"100%"} height={200} />
                  <Skeleton variant="text" width={"100%"}></Skeleton>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Stack>
    );
  return (
    <Stack flexGrow={1} overflow={"auto"} p={2} gap={2}>
      <Grid container component={"section"} spacing={1}>
        {data.items.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item._id}>
            <MyItem item={item} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
