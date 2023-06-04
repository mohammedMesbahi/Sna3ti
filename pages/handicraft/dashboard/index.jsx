import DashboardLayout from "@/components/dashborads/handicraft/DashboardLayout";
import ProfileTab from "@/components/dashborads/handicraft/ProfileTab";
// import React from "react";
// import NoSsr from "@mui/base/NoSsr";

function Dashboard() {
  return <ProfileTab />;
}
Dashboard.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
export default Dashboard;
