import React from "react";
import AdminDashboardLayout from "@/components/dashborads/admin/AdminDashboardLayout";
import axios from "axios";
import {
  Avatar,
  Container,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

function newItems() {
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("/api/admins/items?chekced=false")
      .then((response) => {
        setItems(response.data.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);
  return (
    <Container>
      <h1>New Items</h1>
      <Grid container spacing={1}>
        {items.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item._id}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
                <Avatar
                  src={item.owner.profileImage}
                  alt={item.owner.fullName}
                />
                <Typography variant={"body1"}>{item.owner.fullName}</Typography>
              </Stack>
              {/* <Divider /> */}
              
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default newItems;
newItems.getLayout = function getLayout(page) {
  return <AdminDashboardLayout>{page}</AdminDashboardLayout>;
};
