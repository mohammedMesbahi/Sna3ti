// HandiCraftRegistrationForm.jsx
import React, { useState } from 'react';
import { TextField, Button, Grid, Stack, Typography } from "@mui/material";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const HandiCraftRegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [verificationCode, setVerificationCode] = useState('');
  const [userDetails, setUserDetails] = useState({
    fullName: '',
    email: '',
    password: '',
    phoneNumber: '',
    address: '',
    profileImageName: undefined,
    carft: '',
  });


  const handleUserDetailsSubmit = (details) => {
    setUserDetails(details);
    setStep(2);
    // Here, you would typically also send the details to your server,
    // and start the process for sending the verification code.
  };

  const handleVerificationSubmit = (code) => {
    setVerificationCode(code);
    // You'd then verify the code on the server. If it's correct,
    // you can consider the user fully registered.
  };

  return step === 1
    ? <UserDetailsForm onSubmit={handleUserDetailsSubmit} setStep={setStep} />
    : <VerificationForm onSubmit={handleVerificationSubmit} phoneNumber='+212612345678' />;
};


// UserDetailsForm.jsx

const UserDetailsForm = ({ onSubmit, setStep }) => {
  const [profileImageName, setProfileImageName] = React.useState(undefined);

  const handleProfileImageChange = (event) => {
    const file = event.target.files[0];
    // Do something with the file
    const maxSizeInMB = 2;
    const maxSizeInBytes = maxSizeInMB * 1024 * 1024;

    if (file.size > maxSizeInBytes) {
      setProfileImageName(undefined);
      alert("File size exceeds 2MB limit.choose another file");
      return (event.target.value = ""); // Clear the selected file
    }
    setProfileImageName(file.name);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const serverResponse = await fetch("/api/handicrafts/signup", {
        method: "POST",
        // Do not set 'Content-Type' header when using FormData,
        // the browser will automatically set it to 'multipart/form-data'
        // and append the appropriate boundary parameter.
        body: formData,
      });

      // If response is ok, then parse it to JSON
      if (serverResponse.ok) {
        const response = await serverResponse.json();
        console.log(response);
      } else {
        console.error("Server response was not ok.", serverResponse);
      }
    } catch (error) {
      console.error("Error:", error);
    }

    // Generate a simple data object for demonstration purposes
    const data = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      // ...etc for each field
    };

    // If `onSubmit` is a prop function passed to the component, it could be called like this
    // Be sure that it exists and is a function before calling it
    if (onSubmit && typeof onSubmit === "function") {
      //   onSubmit(data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={1} >
        {/* full name */}
        <Grid item xs={12} md={6}>
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
        <Grid item xs={12} md={6}>
          <input
            // className={classes.input}
            style={{ display: "none" }}
            id="profileImage"
            type="file"
            accept="image/*"
            name="profileImage"
            onChange={handleProfileImageChange}
          />
          <label htmlFor="profileImage">
            <Button variant="outlined" fullWidth component="span">
              {profileImageName ? profileImageName : "Choose A Profile Image"}
            </Button>
          </label>
        </Grid>

        {/* craft */}
        <Grid item xs={12} md={6}>
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

        {/* address */}
        <Grid item xs={12} md={6}>
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

        {/* email */}
        <Grid item xs={12} md={6}>
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

        {/* phone number */}
        <Grid item xs={12} md={6}>
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
        <Grid item xs={12} >
          <TextField
            name="password"
            label="password"
            required
            fullWidth
            type="password"
            size="small"
            //TODO: remove the default value
            defaultValue="123456789"
          />
        </Grid>

        <Grid item xs={12}>

          <Stack direction={'row'} spacing={2} >
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>

            <Button variant="outlined" color="primary" onClick={() => setStep(2)}>
              Next
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </form>
  );
};

const VerificationForm = ({ onSubmit, phoneNumber }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const code = event.target.elements.verificationCode.value;
    onSubmit(code);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            A verification code has been sent to the phone number 
            <strong> {phoneNumber}</strong>
          </Alert>
        </Grid>

        <Grid item xs={12}>
          <TextField name="verificationCode" label="Enter The Verification Code Here" required fullWidth />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">Submit</Button>
        </Grid>
      </Grid>
    </form>
  );
};
export default HandiCraftRegistrationForm;
