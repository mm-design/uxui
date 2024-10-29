import ReserveFreeCall from "@/components/ReserveFreeCall";
import ContactBanner from "@/components/ContactBanner";
import Accordion from "@/components/services/Accordion";

export default function Services() {

  return (
    <div className="">
      <div className="w-screen bg-[--light-primary] px-5 sm:px-10 pt-[20vh]">
        <div className="">
          <div className="container max-w-screen-xl mx-auto">
            <div className="block sm:max-w-screen-sm">
              <h1 className="mb-10">Design solutions to expand your digital vision</h1>
              <p className="text-[--dark-secondary] mb-5 sm:max-w-[450px]">Working across various design disciplines ensures the creation of a digital product that performs effectively.</p>
              <p className="text-[--dark-secondary] mb-5 sm:max-w-[450px]">From understanding every aspect of your target audience and competitors to designing a tailored user experience and a functional user interface, and web developing with cutting-edge technologies to guarantee high performance.</p>
              <p className="text-[--dark-secondary] mb-5 sm:max-w-[450px]">Explore in detail how I can assist in each design area with clear objectives and deliverables.</p>
            </div>
          </div>
        </div>

        <div className="container max-w-screen-xl mx-auto mt-40">
          <h2 className="mb-5">User Experience</h2>

          <div className="animated-lines w-full h-[1px] bg-[--dark-secondary] opacity-20"></div>
          <Accordion 
          title="UX audit"
          objective="Analyze the user journeys of your digital product to identify pain points and friction areas in order to improve the user experience." 
          deliverables="Detailed analysis conducted screen by screen, along with a report that includes actionable recommendations for immediate implementation."/>
          <div className="animated-lines w-full h-[1px] bg-[--dark-secondary] opacity-20"></div>
          <Accordion 
          title="UX research"
          objective="Analyze the user journeys of your digital product to identify pain points and friction areas in order to improve the user experience." 
          deliverables="Detailed analysis conducted screen by screen, along with a report that includes actionable recommendations for immediate implementation."/>
          <div className="animated-lines w-full h-[1px] bg-[--dark-secondary] opacity-20"></div>
          <Accordion 
          title="Competitive analysis"
          objective="Analyze the user journeys of your digital product to identify pain points and friction areas in order to improve the user experience." 
          deliverables="Detailed analysis conducted screen by screen, along with a report that includes actionable recommendations for immediate implementation."/>
          <div className="animated-lines w-full h-[1px] bg-[--dark-secondary] opacity-20"></div>
          <Accordion 
          title="Information architecture"
          objective="Analyze the user journeys of your digital product to identify pain points and friction areas in order to improve the user experience." 
          deliverables="Detailed analysis conducted screen by screen, along with a report that includes actionable recommendations for immediate implementation."/>
          <div className="animated-lines w-full h-[1px] bg-[--dark-secondary] opacity-20"></div>
          <Accordion 
          title="User flows definition"
          objective="Analyze the user journeys of your digital product to identify pain points and friction areas in order to improve the user experience." 
          deliverables="Detailed analysis conducted screen by screen, along with a report that includes actionable recommendations for immediate implementation."/>
          <div className="animated-lines w-full h-[1px] bg-[--dark-secondary] opacity-20"></div>
          <Accordion 
          title="Wireframe and interactive prototyping"
          objective="Analyze the user journeys of your digital product to identify pain points and friction areas in order to improve the user experience." 
          deliverables="Detailed analysis conducted screen by screen, along with a report that includes actionable recommendations for immediate implementation."/>
          <div className="animated-lines w-full h-[1px] bg-[--dark-secondary] opacity-20"></div>
          <Accordion 
          title="Early user testing"
          objective="Analyze the user journeys of your digital product to identify pain points and friction areas in order to improve the user experience." 
          deliverables="Detailed analysis conducted screen by screen, along with a report that includes actionable recommendations for immediate implementation."/>
          <div className="animated-lines w-full h-[1px] bg-[--dark-secondary] opacity-20"></div>

        </div>

      </div>

      <ReserveFreeCall />
      <ContactBanner />
    </div>
  );
}
