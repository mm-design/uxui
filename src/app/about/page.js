import Image from "next/image";
import ExternalTextLink from "@/components/ExternalTextLink";
import profilePic from '../../public/placeholder.jpg';
import NTTLogo from "@/components/about/NTTLogo";
import TangityLogo from "@/components/about/TangityLogo";
import PokerStarsLogo from "@/components/about/PokerStarsLogo";
import TangentLogo from "@/components/about/TangentLogo";
import iconObjective from '../../public/icon-objective.png';
import iconAnalysis from '../../public/icon-analysis.png';
import iconWireframe from '../../public/icon-wireframe.png';
import iconUserInterface from '../../public/icon-user-interface.png';
import iconDevelopment from '../../public/icon-development.png';
import iconDeploy from '../../public/icon-deploy.png';
import ReserveFreeCall from "@/components/ReserveFreeCall";
import ContactBanner from "@/components/ContactBanner";

export default function About() {
  return (
    <div className="">
      <div className="w-screen bg-[--light-primary] px-5 sm:px-10 pt-[20vh]">
        <div className="relative container md:grid md:grid-cols-12 max-w-screen-xl mx-auto">
          <p className="md:col-start-2 md:col-span-10 text-[15px] sm:text-[27px] text-[--dark-secondary] uppercase">Professionally formed in</p>
        </div>
        <div className="relative container md:grid md:grid-cols-12 max-w-screen-xl mx-auto mt-[-10px] sm:mt-[-40px] md:mt-[-60px]">
          <p className="ml-[-5px] sm:ml-[-10px] md:ml-[-15px] md:col-start-2 md:col-span-11 text-[80px] sm:text-[160px] md:text-[240px] font-bold bg-[url('../public/rome.jpg')] bg-no-repeat bg-cover bg-clip-text text-transparent bg-center ">Rome</p>
        </div>
      </div>

      <div className="w-screen bg-[--light-primary] px-5 sm:px-10 pt-[20vh]">
        <div className="relative container md:grid md:grid-cols-12 max-w-screen-xl mx-auto text-right">
          <p className="md:col-start-2 md:col-span-10 text-[15px] sm:text-[27px] text-[--dark-secondary] uppercase">Steadily specialized in</p>
        </div>
        <div className="relative container md:grid md:grid-cols-12 max-w-screen-xl mx-auto text-right mt-[-10px] sm:mt-[-40px] md:mt-[-60px]">
          <p className="mr-[-5px] sm:mr-[-10px] md:mr-[-15px] md:col-start-1 md:col-span-11 text-[80px] sm:text-[160px] md:text-[240px] font-bold bg-[url('../public/london.jpg')] bg-no-repeat bg-cover bg-clip-text text-transparent bg-center ">London</p>
        </div>
      </div>

      <div className="w-screen bg-[--light-primary] px-5 sm:px-10 pt-[20vh]">
        <div className="relative container md:grid md:grid-cols-12 max-w-screen-xl mx-auto">
          <p className="md:col-start-2 md:col-span-10 text-[15px] sm:text-[27px] text-[--dark-secondary] uppercase">Currently operating from</p>
        </div>
        <div className="relative container md:grid md:grid-cols-12 max-w-screen-xl mx-auto mt-[-10px] sm:mt-[-40px] md:mt-[-60px]">
          <p className="ml-[-5px] sm:ml-[-10px] md:col-start-2 md:col-span-11 text-[80px] sm:text-[160px] md:text-[240px] font-bold bg-[url('../public/tenerife.jpg')] bg-no-repeat bg-cover bg-clip-text text-transparent bg-bottom ">Tenerife</p>
        </div>
      </div>

      <div className="w-screen bg-[--dark-primary] px-5 sm:px-10 pt-10 md:pt-40 pb-20 mt-40">
        <div className="relative container max-w-screen-md mx-auto text-center">
            <p className="text-[--dark-secondary] mb-3">Hi there! I’m Mauro Micozzi</p>
            <h1 className="text-[--light-primary] mb-2">Freelance UX/UI designer and front-end developer</h1>
            <div className="mb-5 inline-block mx-auto mt-5">
                <ExternalTextLink color="light" href="https://www.dropbox.com/scl/fi/uijuoczyspep80gsprteq/resume-mauro-micozzi.pdf?rlkey=yzyn0rhakbnjre3n6rotmgrwo&e=1&st=l65wuz7o&dl=0" target="_blank" text="View resume in pdf" />
            </div>
            <Image src={profilePic} width={604} height={783} alt="Mauro Micozzi UX UI Designer" className="rounded-[40px] mt-10 mx-auto"/>
        </div>

        <div className="relative container max-w-screen-xl mx-auto mt-40">
          <div className="md:grid md:grid-cols-12">
            <div className="md:col-start-1 md:col-span-6 lg:col-start-1 lg:col-span-4">
              <h2 className="text-[--light-primary] mt-3 mb-2">I’ve had the chance to collaborate with some of the leading digital agencies and corporations worldwide</h2>
              <div className="mb-5 inline-block mx-auto mt-5">
                <ExternalTextLink color="light" href="https://www.linkedin.com/in/mauro-micozzi-ux-ui-designer/" target="_blank" text="View LinkedIn profile" />
            </div>
            </div>
          </div>

          <div className="grid grid-cols-12 mt-10 gap-8">
            <div className="col-start-1 col-span-12 md:col-span-6 lg:col-span-3 mb-5">
                <div className="bg-[--dark-secondary] rounded-[10px] flex justify-center items-center h-[140px]"> <NTTLogo /></div>
                <h3 className="text-[--light-primary] mt-8 mb-2">NTT Data</h3>
                <p className="text-[--dark-secondary] mb-5">Global IT services provider offering consulting, system integration and digital solutions.</p>   
            </div>
            <div className="col-start-1 col-span-12 md:col-start-7 md:col-span-6 lg:col-span-3 mb-5">
                <div className="bg-[--dark-secondary] rounded-[10px] flex justify-center items-center h-[140px]"> <TangityLogo /></div>
                <h3 className="text-[--light-primary] mt-8 mb-2">Tangity</h3>
                <p className="text-[--dark-secondary] mb-5">Design consultancy agency specialized in user-centered digital experiences and innovation.</p>   
            </div>
            <div className="col-start-1 col-span-12 md:col-span-6 lg:col-span-3 mb-5">
                <div className="bg-[--dark-secondary] rounded-[10px] flex justify-center items-center h-[140px]"> <PokerStarsLogo /></div>
                <h3 className="text-[--light-primary] mt-8 mb-2">PokerStars</h3>
                <p className="text-[--dark-secondary] mb-5">Leading online poker platform, offering a wide range of games and global tournaments.</p>   
            </div>
            <div className="col-start-1 col-span-12 md:col-start-7 md:col-span-6 lg:col-span-3 mb-5">
                <div className="bg-[--dark-secondary] rounded-[10px] flex justify-center items-center h-[140px]"> <TangentLogo /></div>
                <h3 className="text-[--light-primary] mt-8 mb-2">Tangent</h3>
                <p className="text-[--dark-secondary] mb-5">UK-based creative agency specializing in digital marketing, design and brand development.</p>   
            </div>
          </div>

          <div className="md:grid md:grid-cols-12 mt-28 mb-20">
            <div className="md:col-start-1 md:col-span-6 lg:col-start-1 lg:col-span-4">
              <h2 className="text-[--light-primary]">I learned in the field how to manage a project using a structured process to deliver effective digital products</h2>
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-12 mt-10 mb-10 sm:mb-5 gap-12">
            <div className="col-start-1 col-span-12 md:col-span-6 lg:col-span-4 mb-5 flex">
                <Image src={iconObjective} width={80} height={100} alt="Icon representing objective definition step" className="inline-block w-[80px] h-[100px]"/>
                <div className="ml-[20px]">
                  <p className="text-[--dark-secondary] mb-2">1 / 6</p>  
                  <h3 className="text-[--light-primary] mb-5">Objective definition</h3>
                  <p className="text-[--dark-secondary] mb-5">Clearly define the project’s goals, target audience, and desired outcomes to ensure alignment with user needs and business objectives</p>  
                </div>               
            </div>
            <div className="col-start-1 col-span-12 md:col-start-7 md:col-span-6 lg:col-span-4 mb-10 sm:mb-5 flex">
                <Image src={iconAnalysis} width={80} height={88} alt="Icon representing analysis step" className="inline-block w-[80px] h-[88px]"/>
                <div className="ml-[20px]">
                  <p className="text-[--dark-secondary] mb-2">2 / 6</p>  
                  <h3 className="text-[--light-primary] mb-5">Analysis and research</h3>
                  <p className="text-[--dark-secondary] mb-5">Gather insights through user research, competitor analysis, and market trends to inform design decisions and create a solid foundation</p>  
                </div>      
            </div>
            <div className="col-start-1 col-span-12 md:col-span-6 lg:col-span-4 mb-10 sm:mb-5 flex">
                <Image src={iconWireframe} width={80} height={89} alt="Icon representing wireframe step" className="inline-block w-[80px] h-[89px]"/>
                <div className="ml-[20px]">
                  <p className="text-[--dark-secondary] mb-2">3 / 6</p>  
                  <h3 className="text-[--light-primary] mb-5">Wireframe design and prototype</h3>
                  <p className="text-[--dark-secondary] mb-5">Develop low-fidelity wireframes to map out the product’s structure, followed by an interactive prototype to visualize the user experience</p>  
                </div>    
            </div>
          
            <div className="col-start-1 col-span-12 md:col-span-6 lg:col-span-4 mb-10 sm:mb-5 flex">
                <Image src={iconUserInterface} width={80} height={98} alt="Icon representing user interface step" className="inline-block w-[80px] h-[98px]"/>
                <div className="ml-[20px]">
                  <p className="text-[--dark-secondary] mb-2">4 / 6</p>  
                  <h3 className="text-[--light-primary] mb-5">User interface design and prototype</h3>
                  <p className="text-[--dark-secondary] mb-5">Design an intuitive and aesthetically pleasing interface, followed by a high-fidelity prototype to validate design choices and interactions</p>  
                </div>               
            </div>
            <div className="col-start-1 col-span-12 md:col-span-6 lg:col-span-4 mb-10 sm:mb-5 flex">
                <Image src={iconDevelopment} width={80} height={91} alt="Icon representing web development step" className="inline-block w-[80px] h-[91px]"/>
                <div className="ml-[20px]">
                  <p className="text-[--dark-secondary] mb-2">5 / 6</p>  
                  <h3 className="text-[--light-primary] mb-5">Web development and testing </h3>
                  <p className="text-[--dark-secondary] mb-5">Develop the front-end based on the approved design, ensuring it works flawlessly through comprehensive testing and debugging</p>  
                </div>      
            </div>
            <div className="col-start-1 col-span-12 md:col-span-6 lg:col-span-4 mb-10 sm:mb-5 flex">
                <Image src={iconDeploy} width={80} height={81} alt="Icon representing deploy step" className="inline-block w-[80px] h-[81px]"/>
                <div className="ml-[20px]">
                  <p className="text-[--dark-secondary] mb-2">6 / 6</p>  
                  <h3 className="text-[--light-primary] mb-5">Deploy and handover</h3>
                  <p className="text-[--dark-secondary] mb-5">Launch the product, ensure smooth handover to stakeholders, and provide documentation or support for ongoing maintenance and improvements</p>  
                </div>    
            </div>
          </div>

        </div>

      </div>

      <ReserveFreeCall />
      <ContactBanner />

    </div>
  );
}
