import Headline from "@/pages/Home/components/Headline"
import MainImage from "@/pages/Home/components/MainImage"
import AboutUs from "@/pages/Home/components/AboutUs"
import OurServices from "@/pages/Home/components/OurServices"
import OurPortofolio from "./components/OurPortofolio"


export default function Home() {
  return (
      <main className="">
        <Headline/>
        <MainImage/>
        <AboutUs/>
        <OurServices/>
        <OurPortofolio/>
      </main>
  )
}


