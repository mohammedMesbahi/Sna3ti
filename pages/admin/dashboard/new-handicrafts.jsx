import React from "react";
import AdminDashboardLayout from "@/components/dashborads/admin/AdminDashboardLayout";
import NewHandicraftsComponent from "@/components/dashborads/admin/NewHandicrafts";
function NewHandicrafts() {
  return <NewHandicraftsComponent />;
}

export default NewHandicrafts;
NewHandicrafts.getLayout = function getLayout(page) {
  return <AdminDashboardLayout>{page}</AdminDashboardLayout>;
};
