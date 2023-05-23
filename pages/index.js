import { Home, Items, Handicrafts, About, Contact } from '../components/sections'
import Navbar from "@/components/Navbar";
import '@fontsource/public-sans';
import { Stack } from '@mui/material';
export default function HomePage() {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <Stack
        flexDirection={'row'}
        flexWrap={'wrap'}
        width={'100%'}
        sx={{
          height: {
            md: '70vh'
          }
        }}
        spacing={{ xs: 2, sm: 0 }}
        p={2}
        alignItems={'center'}
      >
        <Handicrafts></Handicrafts>
        <Items></Items>
      </Stack>
      <About></About>
      <Contact></Contact>
    </>
  )
}
