import { useEffect, useState } from "react";
import Error from "@/components/Error";
import Skeleton from "@mui/material/Skeleton";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useSelector } from "react-redux";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import { Container, NoSsr, Alert, Slide } from "@mui/material";
import axios from "axios";
import DashboardLayout from "@/components/dashborads/handicraft/DashboardLayout";
export default function Dashboard() {
  const user = useSelector((state) => state.user) || {};
  const [items, setItems] = useState(undefined);
  const [error, setError] = useState(undefined);
  const [view, setView] = useState("UnArchivedItems");

  const [acceptRejectMessage, setAcceptRejectMessage] =
    useState("success message");
  const [open, setOpen] = useState(false);
  const [vertical, setVertical] = useState("top");
  const [horizontal, setHorizontal] = useState("right");
  const [severity, setSeverity] = useState("success");

  function SlideTransition(props) {
    return <Slide {...props} direction="left" />;
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const changeView = (event, newView) => {
    setView(newView);
  };
  useEffect(() => {
    axios
      .get("/api/handicrafts/myProfile")
      .then((res) => res.data.data.items)
      .then((items) => {
        setItems(items);
      })
      .catch((error) => {
        setError(error);
        console.log(error);
      });
  }, []);

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
      }}
    >
      <TabContext value={view}>
        <TabList
          onChange={changeView}
          sx={{ flexGrow: 1 }}
          scrollButtons="auto"
        >
          <Tab
            icon={<CollectionsBookmarkIcon />}
            iconPosition="start"
            label="Items"
            value="UnArchivedItems"
          />
          <Tab
            icon={<ArchiveIcon />}
            iconPosition="start"
            label="Archived Items"
            value="ArchivedItems"
          />
        </TabList>
        <TabPanel
          value="UnArchivedItems"
          sx={{
            height: "90%",
            overflow: "auto",
          }}
        >
          <UnArchivedItems error={error} items={items} />
        </TabPanel>
        <TabPanel
          value="ArchivedItems"
          sx={{
            height: "90%",
            overflow: "auto",
          }}
        >
          <ArchifedItems error={error} items={items} />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
function UnArchivedItems({ error, items }) {
  if (error) return <Error error={error} />;
  if (!items)
    return (
      <Grid container spacing={1}>
        {Array(10)
          .fill()
          .map((number, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={3}
                sx={{
                  padding: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  width: "100%",
                  m: 0,
                }}
              >
                <Skeleton variant="text" width={"59%"}></Skeleton>
                <Skeleton variant="rectangular" width={"100%"} height={200} />
                <Skeleton variant="text" width={"100%"}></Skeleton>
              </Paper>
            </Grid>
          ))}
      </Grid>
    );
  return (
    <Grid container spacing={1}>
      {items.map((item) => {
        if (item.visibility === false) return;
        return (
          <Grid item xs={12} sm={6} md={4} key={item._id}>
            <MyItem item={item} />
          </Grid>
        );
      })}
    </Grid>
  );
}
function ArchifedItems({ items, error }) {
  if (!items)
    return (
      <Grid container component={"section"} spacing={1}>
        {Array(10)
          .fill()
          .map((number, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
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
    );
  return (
    <Grid container component={"section"} spacing={1}>
      {items.map((item) => {
        if (item.visibility === true) return;
        return (
          <Grid item xs={12} sm={6} md={4} key={item._id}>
            <MyItem item={item} />
          </Grid>
        );
      })}
    </Grid>
  );
}
Dashboard.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
import { styled, alpha } from "@mui/material/styles";
import Image from "next/image";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { BookmarkAdd, DeleteForever } from "@mui/icons-material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Paper from "@mui/material/Paper";
import VerifiedIcon from "@mui/icons-material/Verified";
import Rating from "@mui/material/Rating";
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

import { IconButton, Stack, Typography, Box, Grid } from "@mui/material";
function MyItem({ item }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const formatDate = (date) => {
    const d = new Date(date);
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Paper
      elevation={3}
      sx={{
        padding: 1,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "100%",
        height: 390,
      }}
      // key={item._id}
    >
      <Stack flexDirection={"row"} gap={1} alignItems={"center"}>
        <Typography fontSize={20} fontWeight="lg" flexGrow={1}>
          2,900 <strong>MAD</strong>
        </Typography>
        <VerifiedIcon
          style={{ color: item.checked ? "#00e676" : "gray" }}
          size="2x"
        />
      </Stack>
      <Box
        sx={{
          height: 300,
          overflow: "hidden",
        }}
      >
        <img
          src={item.images[0]}
          style={{
            maxWidth: "100%",
            minWidth: "100%",
            maxWidth: "100%",
            minHeight: "100%",
            maxHeight: "100%",
            borderRadius: 10,
            objectFit: "cover",
          }}
        />
      </Box>

      <Stack>
        <Typography variant="subtitle1" fontWeight={"bold"} flexGrow={1}>
          {item.itemName}
        </Typography>
        <Typography variant="subtitle2">{formatDate(item.date)}</Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Rating
            name="read-only"
            value={calculateAverageRating(item.rates)}
            precision={0.5}
            readOnly
          />
          <Typography variant="subtitle2" color="text.secondary">
            (
            {item.rates.length > 1
              ? `${item.rates.length} reviews`
              : `${item.rates.length} review`}{" "}
            )
          </Typography>
        </Box>
        <IconButton
          onClick={handleClick}
          id="demo-customized-button"
          sx={{ alignSelf: "flex-end", justifySelf: "flex-end", p: 0 }}
        >
          <MoreVertIcon />
        </IconButton>
      </Stack>

      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <EditIcon />
          Edit
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <DeleteForever />
          Delete
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={() => toggleItemVisibility(item)} disableRipple>
          <ArchiveIcon />
          {item.visibility ? "Archive" : "Unarchive"}
        </MenuItem>
      </StyledMenu>
    </Paper>
  );
}
function calculateAverageRating(rates) {
  let sum = 0;
  if (rates.length === 0) return 0;
  rates.forEach((rate) => {
    sum += rate.rate;
  });
  return sum / rates.length;
}
function toggleItemVisibility(item) {
  axios
    .put(`/api/handicrafts/items/${item._id}`, {
      visibility: !item.visibility,
    })
    .then((res) => {
      setItems((prev) => {
        const index = prev.findIndex((i) => i._id === item._id);
        const newItems = [...prev];
        newItems[index] = res.data.data;
        return newItems;
      });
      setSeverity("success");
      setOpen(true);
      setMessage(res.data.data.message);
    })
    .catch((err) => {
      setSeverity("error");
      setOpen(true);
      setMessage(err.response.data.message);
      console.log(err);
    });
}
