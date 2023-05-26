import HandicraftDashboard from '@/components/dashborads/handicraft/handicraftDashboard'
import React from 'react'

function Dashboard({user}) {
    return (
        <HandicraftDashboard user={user} />
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