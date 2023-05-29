import HandicraftsTab from "@/components/dashborads/handicraft/HandicraftsTab";
import React from "react";
import DashboardLayout from "@/components/dashborads/handicraft/DashboardLayout";
import NoSsr from "@mui/base/NoSsr";
function Handicrafts() {
  return (
    <NoSsr>
      <HandicraftsTab></HandicraftsTab>
    </NoSsr>
  );
}

Handicrafts.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
export default Handicrafts;
