import Image from "next/image";
import MainNav from "@/components/MainNav";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="">
      <MainNav />
     <div className="h-[500px] bg-white"></div> 
     <div className="h-[500px] bg-black"></div>
     <div className="h-[500px] bg-white"></div>
     <div className="h-[500px] bg-black"></div>
     <div className="h-[500px] bg-white"></div>
      <Footer />
    </div>
  );
}
