import React from "react";
import AdminDashboardLayout from "@/components/dashborads/admin/AdminDashboardLayout";

function Customers() {
  return <div>Customers</div>;
}

export default Customers;
Customers.getLayout = function getLayout(page) {
  return <AdminDashboardLayout>{page}</AdminDashboardLayout>;
};
