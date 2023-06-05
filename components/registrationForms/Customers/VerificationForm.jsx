import React from "react";
import { Grid } from "@mui/material";
import Alert from "@mui/material/Alert";


const VerificationForm = ({ email, message }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
          <Alert
            severity={'success'}
          >
            {message}
            <email>{email}</email>
          </Alert>
      </Grid>
    </Grid>
  );
};
export default VerificationForm;
