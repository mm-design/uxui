import VectorShapes from "@/components/home/VectorShapes";
import VectorX from "@/components/home/VectorX";
import VectorTick from "@/components/home/VectorTick";
import TextLink from "@/components/TextLink";
import Image from "next/image";
import profilePic from '../public/mauro-micozzi.jpeg';
import ReserveFreeCall from "@/components/ReserveFreeCall";
import ContactBanner from "@/components/ContactBanner";
import CaseCard from "@/components/caseStudies/CaseCard";
import unicaThumb from '../public/caseStudies/thumbnails/unica-thumbnail.jpg';
import threeukThumb from '../public/caseStudies/thumbnails/threeuk-thumbnail.jpg';

export const metadata = {
  title: "Designing Digital Products for International Brands: Discover How I Can Elevate Your Brand",
  description: "I provide bespoke design services to help you overcome common web project challenges and build an effective digital product.",
};

export default function Home() {

  return (
    <div className="">
      <div className="relative h-screen flex justify-center items-center text-center bg-[--light-primary] px-5 sm:px-10 overflow-hidden">
        <div className="relatvie z-[50] max-w-screen-md mx-auto">
          <h1 className="block mt-[60px]">Shaping <br/> digital products <span className="block text-[15px] font-normal text-[--dark-secondary] my-2">for</span>startups, agencies<br/>and corporates</h1>
          <p className="block mt-10 text-[--dark-secondary]">Scroll down to uncover <br/>what I can do for your brand</p>
        </div>
       <VectorShapes />
       <p className="absolute bottom-[80px] text-[12px] text-[--dark-secondary] mx-auto mt-28">Mauro Micozzi<br/><span className="uppercase">UX UI Designer & Front-End Developer</span></p>
      </div>

      <div className="w-screen bg-[--dark-primary] px-5 0 sm:px-10 pt-28 md:pt-40 pb-28 md:pb-40">
          <div className="container max-w-screen-xl mx-auto">
            <h2 className="text-[--light-primary] sm:max-w-[300px]">I can help you forget common problems of web projects</h2>
            <div className="grid grid-cols-1 gap-0 lg:grid-cols-3 lg:gap-3 mt-16">
                <div className="">
                  <VectorX />
                  <div className="block ml-20 md:mr-16 mt-[-40px]">
                    <h3 className="text-[--light-primary] mb-3"><span className="text-[#D21010]">Confused</span> navigation</h3>
                    <p className="text-[--dark-secondary]">Users struggle to find their way due to unclear menus or poor structure. This leads to frustration and higher bounce rates.</p>
                  </div>
                </div>
                <div className="block mt-10 lg:mt-0">
                  <VectorX />
                  <div className="block ml-20 md:mr-16 mt-[-40px]">
                    <h3 className="text-[--light-primary] mb-3"><span className="text-[#D21010]">Low</span> user interaction</h3>
                    <p className="text-[--dark-secondary]">Users don't engage with the site, often due to design mistakes, unclear CTAs, or lack of interactive elements, impacting conversions.</p>
                  </div>
                </div>
                <div className="block mt-10 lg:mt-0">
                  <VectorX />
                  <div className="block ml-20 md:mr-16 mt-[-40px]">
                    <h3 className="text-[--light-primary] mb-3"><span className="text-[#D21010]">Poor</span> web performance</h3>
                    <p className="text-[--dark-secondary]">Slow loading times leads to higher abandonment rates and negatively impact SEO rankings, reducing site visibility and organic traffic.</p>
                  </div>
                </div>            
            </div>

            <h2 className="block text-[--light-primary] sm:max-w-[320px] mt-28 md:mt-40 mb-4">With bespoke design services to build an effective digital product</h2>
            <TextLink href="/services" text="View all services" color="light" />
            <div className="grid gridcols-1 gap-0 lg:grid-cols-3 lg:gap-3 mt-16">
                <div className="">
                  <VectorTick />
                  <div className="block ml-20 md:mr-16 mt-[-40px]">
                    <h3 className="text-[--light-primary] mb-3"><span className="text-[#3AB926]">Clear</span> content organization</h3>
                    <p className="text-[--dark-secondary]">Structuring content based on user needs ensures effective navigation, making it easier for users to find what they’re looking for.</p>
                  </div>
                </div>
                <div className="block mt-10 lg:mt-0">
                  <VectorTick />
                  <div className="block ml-20 md:mr-16 mt-[-40px]">
                    <h3 className="text-[--light-primary] mb-3"><span className="text-[#3AB926]">Functional</span> user interface</h3>
                    <p className="text-[--dark-secondary]">Designing an interactive, easy-to-use interface with clear calls to action boosts engagement and improves the user experience.</p>
                  </div>
                </div>
                <div className="block mt-10 lg:mt-0">
                  <VectorTick />
                  <div className="block ml-20 md:mr-16 mt-[-40px]">
                    <h3 className="text-[--light-primary] mb-3"><span className="text-[#3AB926]">High</span> web performance</h3>
                    <p className="text-[--dark-secondary]">Fast loading times and smooth interactions decrease user drop-off rates while helping SEO, improving both visibility and user retention.</p>
                  </div>
                </div>            
            </div>
          </div>
      </div>

      <div className="w-screen bg-[--light-primary] px-5 sm:px-10 pt-28 md:pt-40 pb-28 md:pb-40">
        <div className="container max-w-screen-xl mx-auto text-center">
          <h2 className="text-[--dark-primary] mx-auto mb-5">Check out what I’ve<br/> accomplished for other clients</h2>
          <p className="text-[--dark-secondary] mx-auto mb-5 sm:max-w-sm">The best way to understand what I can achieve for your brand is to see real results for yourself.</p>
          <TextLink href="/case-studies" text="View all case studies" color="dark" />
        </div>
          <div className="md:flex md:justify-between container max-w-screen-xl mx-auto mt-20 relative z-[50]">
              <div className=" md:mr-5">
                <CaseCard 
                  url="/case-studies/unica"
                  title="Unica"
                  subtitle="Web platform"
                  thumbSrc={unicaThumb}
                />
              </div>
              <div className="mt-20 md:mt-32 md:ml-5">
                <CaseCard 
                  url="/case-studies/three-uk"
                  title="Three UK"
                  subtitle="MVP of digital corporate portal"
                  thumbSrc={threeukThumb}
                />
              </div>     
          </div>
            
      </div>

      <div className="w-screen bg-[--dark-primary] px-5 sm:px-10 pt-28 md:pt-40 pb-28 md:pb-40">
        <div className="container max-w-screen-xl mx-auto">
          <h2 className="text-[--light-primary] sm:max-w-sm mb-5">A single expert to drive all your design goals</h2>
          <p className="text-[--dark-secondary] mb-3 sm:max-w-sm">With over 10 years of experience in international digital agencies and corporates, I bring the expertise needed to elevate your digital product.</p>
          <p className="text-[--dark-secondary] mb-5 sm:max-w-sm">The impact of an entire agency, delivered by “just” one person.</p>
          <TextLink href="/about" text="Read more about me" color="light" />
          <Image src={profilePic} width={600} height={600} alt="Mauro Micozzi UX UI Designer" className="rounded-[40px] mt-20 lg:mt-10 mx-auto"/>
        </div>
      </div>

      <ReserveFreeCall />
      <ContactBanner />

    </div>
  );
}
