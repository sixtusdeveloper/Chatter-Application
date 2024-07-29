import Hero from "../../components/Hero";
import Image from "next/image";
import NavBar from "../../components/NavBar";
import Services from "../../components/Services";
import Posts from "../../components/Posts";
import Features from "../../components/Features";
import Testimonials from "../../components/Testimonials";
import Collaboration from "../../components/Collaboration";
import FAQ from "../../components/FAQ";
import FAQFeedBack from "../../components/FAQFeedBack";
import Footer from "../../components/Footer";



export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-screen">
      
        {/* Components */}
        <NavBar/>
        <Hero />
        <Features />
        <Services />
        <Posts />
        <Testimonials />
        <Collaboration />
        <FAQ />
        <FAQFeedBack />
        <Footer />
        
      </div>
    </main>
  );
}
