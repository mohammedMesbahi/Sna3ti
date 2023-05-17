import { Home, Items, Handicrafts, About, Contact } from '../components/sections'
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar></Navbar>

      <Home></Home>
      <Handicrafts></Handicrafts>
      <Items></Items>
      <About></About>
      <Contact></Contact>
    </>
  )
}
