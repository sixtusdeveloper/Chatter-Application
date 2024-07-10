import Hero from "@/components/Hero";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import Grid from "@/components/Grid";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col justify-center items-center overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
      
        {/* Components */}
        <NavBar LogoImg={""} title={""} LogoImgDark={""} />
        <Hero />
        <Grid />
        <Services />
      </div>
      
    </main>
  );
}
