import DashboardLayout from "@/components/dashborads/handicraft/DashboardLayout";
import ProfileTab from "@/components/dashborads/handicraft/ProfileTab";
import React from "react";

function Dashboard({ user }) {
  return <ProfileTab user={user} />;
}
Dashboard.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
export default Dashboard;

/*
const redirectUser = (res,path)=> {
    if (res) {
        res.redirect(302,path)
        res.finished  = true;
        return {
            props:{}
        };
    }
    Router.replace(path);
    return {
        props:{}
    }
} */
