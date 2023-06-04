import React from 'react'
import AdminDashboardLayout from "@/components/dashborads/admin/AdminDashboardLayout";
import { Container } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
function NewHandicrafts() {
  return (
    <Container>
      {Array(10).fill().map((item, index) => (
        <Skeleton key={index} variant="rectangular" width="100%" height={118} sx={{ my: 0.5 }} />
      ))}
    </Container>
  )
}

export default NewHandicrafts
NewHandicrafts.getLayout = function getLayout(page) {
  return <AdminDashboardLayout>{page}</AdminDashboardLayout>;
}