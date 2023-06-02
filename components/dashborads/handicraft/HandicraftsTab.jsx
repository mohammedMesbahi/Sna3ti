import {
  Stack,
  Box,
  Divider,
  Paper,
  Typography,
  Rating,
  Grid,
} from "@mui/material";
import React from "react";
import useSWR from "swr";
import Pagination from "@mui/material/Pagination";
import Skeleton from "@mui/material/Skeleton";
import { HandicraftSearchBar } from "./SearchBars";
import HandicraftsTabSkeleton from "./HandicraftsTabSkeleton";
import Link from "@/lib/Link";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

function HandicraftsTab() {
  const { data, error } = useSWR("/api/resources/handicrafts", fetcher);

  if (error) return <div>Failed to load</div>;

  if (!data)
    return (
      <HandicraftsTabSkeleton />
    );

  const formatAddress = (address) => {
    if (address.length > 20) {
      return address.slice(0, 20) + "...";
    }
    return address;
  };
  return (
    <Stack
      gap={1}
      width={"100%"}
      height={"100%"}
      flexGrow={1}
    >
      <Box
        sx={{
          padding: 2,
          width: {
            xs: "100%",
            md: "80%",
          },
          alignSelf: "center",
        }}
      >
        {/* serch bar */}
        <HandicraftSearchBar />
        {/* sort */}
      </Box>

      <Divider />

      <Stack flexGrow={1} overflow={"auto"} p={2} gap={2}>
        <Grid container component={"section"} spacing={2}>
          {/* data is an array of handicrafts */}
          {data.data.map((handicraft) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={handicraft._id}>
              <Paper
                key={handicraft._id}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: 1,
                  width: "100%",
                }}
                elevation={3}
              >
                {/* handicraft image */}
                <img
                  src={"/uploads/profileImage/1685034914503.png"}
                  alt={handicraft.fullName}
                  style={{ width: "90%", borderRadius: "50%" }}
                />
                {/* handicraft infos */} 
                <Stack alignItems={"center"}>
                  <Typography variant="h6" fontWeight="bold" component={Link} href={`/handicraft/dashboard/handicrafts/${handicraft._id}`} >
                    {handicraft.fullName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {handicraft.craft}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {formatAddress(handicraft.address)}
                  </Typography>
                  <Stack flexDirection={"row"} alignItems={"center"}>
                    <Rating
                      name="read-only"
                      value={3.5}
                      precision={0.5}
                      readOnly
                    />
                    <Typography variant="body2" color="text.secondary">
                      (2 reviews)
                    </Typography>
                  </Stack>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Box alignSelf={"center"} justifySelf={"center"}>
          {/* bagination */}
          <Pagination count={10} color="primary" />
        </Box>
      </Stack>
    </Stack>
  );
}

export default HandicraftsTab;
