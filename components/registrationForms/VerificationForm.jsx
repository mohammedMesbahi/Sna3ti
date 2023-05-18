import React from 'react';
import { TextField, Button, Grid } from '@mui/material';

const VerificationForm = ({ onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const code = event.target.elements.verificationCode.value;
    onSubmit(code);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField name="verificationCode" label="Verification Code" required fullWidth />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">Submit</Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default VerificationForm;
