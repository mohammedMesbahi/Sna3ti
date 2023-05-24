import { Home, Items, Handicrafts, About, Contact } from '../components/sections'
import Navbar from "@/components/Navbar";
import '@fontsource/public-sans';
import { Stack } from '@mui/material';
export default function HomePage() {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Contact></Contact>
    </>
  )
}
