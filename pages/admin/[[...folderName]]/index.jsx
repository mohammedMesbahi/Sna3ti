import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AdminDashboardLayout from "@/components/dashborads/admin/AdminDashboardLayout";

function Page404() {
    const router = useRouter();
    return (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          minHeight="90vh"
          textAlign="center"
        >
          <Typography variant="h3" component="h1" gutterBottom>
            Oops, Page Not Found!
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            <code>404</code> |
            Not Found
          </Typography>
          <Button variant="outlined"  onClick={router.back}>
            Go Back
          </Button>
        </Box>
      );
}

export default Page404;
Page404.getLayout = function getLayout(page) {
  return <AdminDashboardLayout>{page}</AdminDashboardLayout>;
};