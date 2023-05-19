import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Avatar,
  Typography,
  Stack,
  IconButton,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Link from "next/link";
import CloseIcon from '@mui/icons-material/Close';

export default function SignInModal({ open, setOpen }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        
        <DialogTitle
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingBottom: "0px",
          }}
        >
          <IconButton
          color="inherit"
          aria-label="close drawer"
          onClick={handleClose}
          sx={{position:'absolute',top:'0px',left:'0px'}}
        >
          <CloseIcon />
        </IconButton>
          <Avatar sx={{ bgcolor: "black" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="span" variant="h5" align="center">
            Sign in
          </Typography>
        </DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent sx={{ marginTop: 0 }}>
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Email Address"
              fullWidth
              value={email}
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="dense"
              id="password"
              label="Password"
              type="password"
              fullWidth
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Stack >
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Stack>
          </DialogContent>
          <DialogActions >
            <Button type="submit"  variant="contained" sx={{bgcolor:'black',color:'white',width:'100%' ,marginBottom:2}} size="large">
              submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
