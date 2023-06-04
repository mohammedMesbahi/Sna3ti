import React from 'react'
import AdminDashboardLayout from "@/components/dashborads/admin/AdminDashboardLayout";

function newItems() {
  return (
    <div>newItems</div>
  )
}

export default newItems
newItems.getLayout = function getLayout(page) {
  return <AdminDashboardLayout>{page}</AdminDashboardLayout>;
}