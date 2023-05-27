import DashboardLayout from "@/components/dashborads/handicraft/DashboardLayout";
import ProfileTab from "@/components/dashborads/handicraft/ProfileTab";
import React from "react";

function Profile({ user }) {
  return <ProfileTab user={user} />;
}
Profile.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
export default Profile;
export async function getServerSideProps({ req, res }) {
  // const currentPath = req ? req.url : window.location.pathname;
  // if (!req.user && currentPath !== '/') {
  //     return redirectUser(res, '/?openLogin=true')
  // }
  const user = {
    _id: "646f97a3e2f5ceab0bd721aa",
    fullName: "anas snhaji",
    email: "anas@gmail.com",
    profileImage: "/uploads/profileImage/1685034914503.png",
    phoneNumber: {
      number: "+212612345602",
      isVerified: true,
      _id: "646f97a3e2f5ceab0bd721a9",
    },
    address: "Hay Lablida, Fes El Bali, Fez 30110, Morocco",
    craft: "embroidery",
    items: [
      {
        itemName: "handmade wooden spatula",
        owner: {
          _id: "646f97a3e2f5ceab0bd721aa",
          fullName: "anas snhaji",
          email: "anas@gmail.com",
          profileImage: "/uploads/profileImage/1685034914503.png",
          __t: "Handicraft",
        },
        description: "Spatula for kitchen and health care usage",
        images: [
          "/uploads/items/646f97a3e2f5ceab0bd721aa-1685122869331.png",
          "/uploads/items/646f97a3e2f5ceab0bd721aa-1685122869646.png",
        ],
        rates: [],
        price: 200,
        date: "2023-05-26T17:41:10.062Z",
        visibility: true,
        checked: false,
        _id: "6470ef3677bf75312eb78568",
      },
      {
        itemName: "handmade wooden spatula",
        owner: {
          _id: "646f97a3e2f5ceab0bd721aa",
          fullName: "anas snhaji",
          email: "anas@gmail.com",
          profileImage: "/uploads/profileImage/1685034914503.png",
          __t: "Handicraft",
        },
        description: "Spatula for kitchen and health care usage",
        images: [
          "/uploads/items/646f97a3e2f5ceab0bd721aa-1685122978981.png",
          "/uploads/items/646f97a3e2f5ceab0bd721aa-1685122979264.png",
        ],
        rates: [],
        price: 200,
        date: "2023-05-26T17:42:59.577Z",
        visibility: true,
        checked: false,
        _id: "6470efa377bf75312eb7856b",
      },
      {
        itemName: "lorem ipsum",
        owner: {
          _id: "646f97a3e2f5ceab0bd721aa",
          fullName: "anas snhaji",
          email: "anas@gmail.com",
          profileImage: "/uploads/profileImage/1685034914503.png",
          __t: "Handicraft",
        },
        description: "lorem ipsum lomusin simm smion",
        images: [
          "/uploads/items/646f97a3e2f5ceab0bd721aa-1685202647802.png",
          "/uploads/items/646f97a3e2f5ceab0bd721aa-1685202648068.png",
        ],
        rates: [],
        price: 201,
        date: "2023-05-27T15:50:48.663Z",
        visibility: true,
        checked: false,
        _id: "647226d877bf75312eb7858d",
      },
      {
        itemName: "lorem ipsum",
        owner: {
          _id: "646f97a3e2f5ceab0bd721aa",
          fullName: "anas snhaji",
          email: "anas@gmail.com",
          profileImage: "/uploads/profileImage/1685034914503.png",
          __t: "Handicraft",
        },
        description: "lorem ipsum lomusin simm smion",
        images: [
          "/uploads/items/646f97a3e2f5ceab0bd721aa-1685202656105.png",
          "/uploads/items/646f97a3e2f5ceab0bd721aa-1685202656257.png",
        ],
        rates: [],
        price: 201,
        date: "2023-05-27T15:50:56.527Z",
        visibility: true,
        checked: false,
        _id: "647226e077bf75312eb78592",
      },
      {
        itemName: "lorem ipsum",
        owner: {
          _id: "646f97a3e2f5ceab0bd721aa",
          fullName: "anas snhaji",
          email: "anas@gmail.com",
          profileImage: "/uploads/profileImage/1685034914503.png",
          __t: "Handicraft",
        },
        description: "lorem ipsum lomusin simm smion",
        images: [
          "/uploads/items/646f97a3e2f5ceab0bd721aa-1685202661802.png",
          "/uploads/items/646f97a3e2f5ceab0bd721aa-1685202661960.png",
        ],
        rates: [],
        price: 201,
        date: "2023-05-27T15:51:02.258Z",
        visibility: true,
        checked: false,
        _id: "647226e677bf75312eb78598",
      },
    ],
    rates: [],
  };
  return {
    props: {
      user,
      // user: req.user || {}
    }, // will be passed to the page component as props
  };
}
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
