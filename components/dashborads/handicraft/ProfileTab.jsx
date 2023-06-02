import { Card, Rating, Stack, Typography, Box, Grid } from "@mui/material";
// import { useSelector } from "react-redux";
// import Image from "next/image";
import MyItem from "./MyItem";
function ProfileTab() {
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
  return (
    <Stack
      flexGrow={1}
      flexDirection="column"
      alignItems={"stretch"}
      justifyContent={"flex-start"}
      height={"100%"}
      width={"100%"}
    >
      <Box padding={2} borderBottom={"1px solid lightGray"}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <img
            src={user.profileImage}
            width={100}
            height={100}
            alt="Picture of the author"
            style={{
              display: "inline",
              borderRadius: "50%",
            }}
          />
          <Stack direction="column" spacing={1}>
            <Typography variant="h5">{user.fullName}</Typography>
            <Stack direction="row" spacing={2} alignItems={"center"}>
              <Typography variant="subtitle1" display={"inline"}>
                {user.craft}
              </Typography>
              <Rating name="read-only" value={1.5} precision={0.5} readOnly />
            </Stack>
          </Stack>
        </Stack>
      </Box>

      <Stack flexGrow={1} overflow={"auto"} p={2} gap={2}>
        <Grid container component={"section"} spacing={1}>
          {user.items.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item._id} >
              <MyItem item={item} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Stack>
  );
}
export default ProfileTab;
