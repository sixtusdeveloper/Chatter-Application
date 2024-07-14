import Hero from "@/components/Hero";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import Services from "@/components/Services";
import Posts from "@/components/Posts";
import Features from "@/components/Features";
import Collaboration from "@/components/Collaboration";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-screen">
      
        {/* Components */}
        <NavBar LogoImg={""} title={""} LogoImgDark={""} />
        <Hero />
        <Features />
        <Services />
        <Posts />
        <Collaboration />
        <Testimonials />
      </div>
      
    </main>
  );
}
