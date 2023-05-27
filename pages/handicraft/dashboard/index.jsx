import DashboardLayout from '@/components/dashborads/handicraft/DashboardLayout'
import ProfileTab from '@/components/dashborads/handicraft/ProfileTab'
import React from 'react'

function Dashboard({ user }) {
    return (
        <ProfileTab user={user} />
    )
}
Dashboard.getLayout = function getLayout(page) {
    return (
        <DashboardLayout>
            {page}
        </DashboardLayout>
    )
}
export default Dashboard
/* export async function getServerSideProps({ req, res }) {
    const currentPath = req ? req.url : window.location.pathname;
    if (!req.user && currentPath !== '/') {
        return redirectUser(res, '/?openLogin=true')
    }
    return {
        props: {
            user: req.user || {}
        }, // will be passed to the page component as props
    }
}
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