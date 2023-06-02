import React from "react";
import DashboardLayout from "@/components/dashborads/handicraft/DashboardLayout";
import axios from "axios";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import ItemCard from "@/components/shared/ItemCard";
import ItemModale from "@/components/shared/ItemModale";

function HandicraftProfile({ handicraft: user }) {
  const [selectedItem, setSelectedItem] = React.useState({});
  const [openModale, setOpenModale] = React.useState(false);
  const clickHandler = (item) => {
    setSelectedItem(item);
    setOpenModale(true);
  };

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
              <Rating name="read-only" value={0} precision={0.5} />
            </Stack>
          </Stack>
        </Stack>
      </Box>

      <Stack flexGrow={1} overflow={"auto"} p={2} gap={2}>
        <Grid container component={"section"} spacing={1}>
          {user.items.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item._id} onClick={() => clickHandler(item) } >
              <ItemCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Stack>
      <ItemModale
        item={selectedItem}
        setSelectedItem={setSelectedItem}
        open={openModale}
        setOpen={setOpenModale}
      />
    </Stack>
  );
}

HandicraftProfile.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
export default HandicraftProfile;

export async function getStaticPaths() {
  try {
    const res = await axios.get(
      "http://localhost:3000/api/resources/handicrafts"
    );
    const handicrafts = res.data.data;
    const paths = handicrafts.map((handicraft) => ({
      params: { id: handicraft._id },
    }));

    return { paths, fallback: "blocking" };
  } catch (error) {
    console.error(`Error fetching data: ${error}`);
    // throw new Error(`Failed to fetch handicrafts, error: ${error}`);
    return {
      notFound: true,
    };
  }
}

export async function getStaticProps({ params }) {
  try {
    const res = await axios.get(
      `http://localhost:3000/api/resources/handicrafts/${params.id}?includeItems=true`
    );
    const handicraft = res.data.data[0];

    return {
      props: { handicraft },
    };
  } catch (error) {
    console.error(`Error fetching data: ${error}`);
    return {
      notFound: true,
    };
  }
}
