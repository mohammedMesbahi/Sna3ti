import React from "react";
import AdminDashboardLayout from "@/components/dashborads/admin/AdminDashboardLayout";

function Items() {
  return <div>Items</div>;
}

export default Items;
Items.getLayout = function getLayout(page) {
  return <AdminDashboardLayout>{page}</AdminDashboardLayout>;
};
