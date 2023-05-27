import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Image from "next/image";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { BookmarkAdd } from "@mui/icons-material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Paper from '@mui/material/Paper';
import VerifiedIcon from '@mui/icons-material/Verified';
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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Paper elevation={3} sx={{padding:1,maxWidth:300}} >
      <Box display={"flex"} flexDirection={"row"} width={"100%"} gap={1} >
        <Stack flexGrow={1}>
          <Typography variant="h5">Yosemite National Parkcc</Typography>
          <Typography variant="body5">April 24 to May 02, 2021</Typography>
        </Stack>
        <VerifiedIcon style={{color: !item.checked ? "#00e676" : 'gray'}} size="2x"  />
      </Box>

      <img src={item.images[0]} width={'100%'} style={{borderRadius:10}}  />

      <Stack flexDirection={"row"}>
        <Typography variant="h6" flexGrow={1}>
          {item.price}
        </Typography>
        <IconButton onClick={handleClick} id="demo-customized-button">
          <MoreVertIcon />
        </IconButton>
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
            <FileCopyIcon />
            Duplicate
          </MenuItem>
          <Divider sx={{ my: 0.5 }} />
          <MenuItem onClick={handleClose} disableRipple>
            <ArchiveIcon />
            Archive
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
            <MoreHorizIcon />
            More
          </MenuItem>
        </StyledMenu>
      </Stack>
    </Paper>
  );
}

export default MyItem;
