// UserDetailsForm.jsx
import React from "react";
import { TextField, Button, Grid } from "@mui/material";

const UserDetailsForm = ({ onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(formData);
    const data = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      // ...etc for each field
    };
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        {/* full name */}
        <Grid item xs={6}>
          <TextField
            name="fullName"
            label="Full Name"
            required
            fullWidth
            size="small"
            inputProps={{
              required: true,
              pattern: "[A-Za-z ]{3,}",
              placeholder: "Name must contain at least 3 characters",
              //TODO: remove the default value
              defaultValue: "John Doe",
            }}
          />
        </Grid>

        {/* profile image */}
        <Grid item xs={6}>
          <input
            // className={classes.input}
            style={{ display: "none" }}
            id="raised-button-file"
            multiple
            type="image"
          />
          <label htmlFor="raised-button-file">
            <Button
              variant="contained"
              component="span"
              //   className={classes.button}
            >
              Upload Profile Image
            </Button>
          </label>
        </Grid>

        {/* craft */}
        <Grid item xs={6}>
          <TextField
            name="craft"
            label="craft"
            required
            fullWidth
            size="small"
            //TODO: remove the default value
            defaultValue="Carpenter"
          />
        </Grid>

        {/* email */}
        <Grid item xs={6}>
          <TextField
            name="email"
            label="Email"
            required
            fullWidth
            size="small"
            //TODO: remove the default value
            defaultValue="email@example.com"
          />
        </Grid>

        {/* address */}
        <Grid item xs={6}>
          <TextField
            name="address"
            label="Address"
            required
            fullWidth
            size="small"
            //TODO: remove the default value
            defaultValue="Address 123 Imb Park, Morocco"
          />
        </Grid>

        {/* phone number */}
        <Grid item xs={6}>
          <TextField
            name="phoneNumber"
            label="phone number"
            required
            fullWidth
            size="small"
            inputProps={{
              type: "tel",
              required: true,
              pattern: "\\+212[56][0-9]{8}",
              placeholder: "Phone number must be in the format +2126xxxxxx",
            }}
            //TODO: remove the default value
            defaultValue="+212612345678"
          />
        </Grid>

        {/* password */}
        <Grid item xs={6}>
          <TextField
            name="password"
            label="passworo"
            required
            fullWidth
            type="password"
            size="small"
            //TODO: remove the default value
            defaultValue="password"
          />
        </Grid>

        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Next
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default UserDetailsForm;
