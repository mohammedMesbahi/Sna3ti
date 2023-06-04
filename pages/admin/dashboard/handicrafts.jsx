import React from "react";
import AdminDashboardLayout from "@/components/dashborads/admin/AdminDashboardLayout";

function Handicrafts() {
  return <div>Handicrafts</div>;
}

export default Handicrafts;
Handicrafts.getLayout = function getLayout(page) {
  return <AdminDashboardLayout>{page}</AdminDashboardLayout>;
};
