import Image from "next/image";
import ExternalTextLink from "@/components/ExternalTextLink";
import ReserveFreeCall from "@/components/ReserveFreeCall";
import ContactBanner from "@/components/ContactBanner";
import unicaCover from '../../../public/caseStudies/unica/unica-cover.jpg';
import CaseCard from "@/components/caseStudies/CaseCard";
import threeukThumb from '../../../public/caseStudies/thumbnails/threeuk-thumbnail.jpg';
import liraThumb from '../../../public/caseStudies/thumbnails/lira-thumbnail.jpg';
import unicaAnalysis from '../../../public/caseStudies/unica/unica-analysis.png';
import unicaWireframeHomeEvolution from '../../../public/caseStudies/unica/unica-wireframe-home-evolution.png';
import unicaHomeFinalStructure from '../../../public/caseStudies/unica/unica-home-final-structure.png';
import unicaHomeVariant1 from '../../../public/caseStudies/unica/unica-home-1.png';
import unicaHomeVariant2 from '../../../public/caseStudies/unica/unica-home-2.png';
import unicaHomeVariant3 from '../../../public/caseStudies/unica/unica-home-3.png';
import unicaHomeUI from '../../../public/caseStudies/unica/unica-homepage-ui.png';
import unicaHomeUI1 from '../../../public/caseStudies/unica/unica-ui-home-1.png';
import unicaHomeUI2 from '../../../public/caseStudies/unica/unica-ui-home-2.png';
import unicaHomeUI3 from '../../../public/caseStudies/unica/unica-ui-home-3.png';
import unicaEportfolioJourneys from '../../../public/caseStudies/unica/unica-eportfolio-journeys.png';



export default function CaseStudies() {
  return (
      <div className="">
        <div className="w-screen bg-[--light-primary] px-5 sm:px-10 pt-[30vh]">
          <div className="relative container max-w-screen-xl mx-auto">
            <div className="block">
              <h1 className="mb-5">Unica</h1>
              <p className="text-[--dark-secondary] text-[17px] leading-[23px] sm:text-[21px] sm:leading-[27px] uppercase mb-10 sm:max-w-screen-sm">designing the web platform launched by the Italian Ministry of Education and Merit that centralizes all tools and resources for students and families</p>
              <Image src={unicaCover} width={1235} height={785} alt="Unica web portal mockup" className="rounded-[40px] w-full block mb-10"/>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
                
                  <div className="mb-5">
                    <p className="text-[--dark-secondary]">Client</p>
                    <p className="">Italian Ministry of Education and Merit</p>
                  </div>
                
                  <div className="mb-5">
                    <p className="text-[--dark-secondary]">Field</p>
                    <p className="">Education technology</p>
                  </div>
              
                
                  <div className="mb-5">
                    <p className="text-[--dark-secondary]">Agency</p>
                    <p className="">Tangity</p>
                  </div>
                  <div className="mb-5">
                    <p className="text-[--dark-secondary]">Period</p>
                    <p className="">Mar - Oct 2023</p>
                  </div>
              
                
                  <div className="mb-5">
                    <p className="text-[--dark-secondary]">Role</p>
                    <p className="">UX</p>
                  </div>
                  <div className="mb-5">
                    <ExternalTextLink color="dark" href="https://unica.istruzione.gov.it/it" target="_blank" text="View live website" />
                  </div>
          
            </div>
          </div>
        </div>

        {/* Overview section */}    
          <div className="relative w-screen bg-[--light-primary] px-5 sm:px-10 mt-20">
            <span className="text-[80px] ml-[-40px] sm:text-[120px] sm:ml-[-70px] md:text-[240px] md:ml-[-70px] font-bold text-[--dark-secondary] opacity-20">Overview</span>

            <div className="relative container max-w-screen-xl mx-auto mt-[-50px] sm:mt-[-65px] md:mt-[-112px]">
              <div className="md:grid md:grid-cols-12 md:gap-4">
                <div className="md:col-start-1 md:col-span-5 lg:col-start-2 lg:col-span-4">
                  <p className="text-[--dark-secondary] mb-5">Unica is a web platform launched in 2023 by the Italian Ministry of Education and Merit. It centralizes all tools and resources for students and families.</p>
                  <p className="text-[--dark-secondary] mb-5">This high-impact project delivers digital services to support students' growth, guide informed decision-making, nurture talents, and facilitate communication between schools and families.</p>
                  <p className="text-[--dark-secondary] mb-5">In March 2023, I joined the UX team at <a className="underline text-[--dark-primary]" href="https://tangity.global/" target="_blank">Tangity</a> (part of NTT Group) for a 6-month collaboration. Working within a well-structured team and clear requirements, we developed the platform iteratively, sprint by sprint. The platform went live in November 2023.</p>
                </div>
              </div>

              <div className="mt-20 md:mt-[-80px] md:grid md:grid-cols-12 md:gap-4">
                <div className="md:col-start-8 md:col-span-5 lg:col-start-8 lg:col-span-4">
                  <h2 className="mb-3">Project statement</h2>
                  <p className="text-[--dark-secondary] mb-5">The Italian Ministry of Education and Merit aimed to design and develop a platform for families and students, serving as a single access point for informational services, educational offerings, onboarding processes, and tools for guidance and service access.</p>           
                </div>           
              </div>

              <div className="mt-20 md:mt-[-80px] md:grid md:grid-cols-12 md:gap-4">
                <div className="md:col-start-1 md:col-span-5 lg:col-start-2 lg:col-span-4">
                <h2 className="mb-3">Users</h2>
                  <p className="text-[--dark-secondary] mb-5">The platform serves over 15.5 million potential users, segmented as follows:</p>
                  <ul className="list-disc pl-8">
                    <li className="text-[--dark-secondary] mb-2">6.6 million students</li>
                    <li className="text-[--dark-secondary] mb-2">8 million parents, delegates, or parental supervisors</li>
                    <li className="text-[--dark-secondary] mb-8">1 million school directors and staff</li>
                  </ul>   
                  <p className="text-[--dark-secondary] mb-5">Below are the key needs categorized by user type:</p>
                  <ul className="list-disc pl-8">
                    <li className="text-[--dark-secondary] mb-2"><span className="font-bold">Students</span> - Access information, track academic progress, upload documents and request meeting with teachers  (touchpoint: website + mobile app))</li>
                    <li className="text-[--dark-secondary] mb-2"><span className="font-bold">Parents, delegates, or parental supervisors</span> - Access school services, monitor their child’s progress, and request appointments with teachers (touchpoint: website)</li>
                    <li className="text-[--dark-secondary] mb-2"><span className="font-bold">School directors and staff</span> - Manage school calendars, classes, student records and request meetings with students and/or parents (touchpoint: website</li>
                  </ul>             
                </div>
              </div>

              <div className="mt-20 md:mt-[-80px] md:grid md:grid-cols-12 md:gap-4">
                <div className="md:col-start-8 md:col-span-5 lg:col-start-8 lg:col-span-4">
                  <h2 className="mb-3">Responsibilities</h2>
                  <p className="text-[--dark-secondary] mb-5">As part of the UX team, my responsibilities included:</p>
                  <ul className="list-disc pl-8">
                    <li className="text-[--dark-secondary] mb-2">Analyzing requirements and outputs from the User Research team</li>
                    <li className="text-[--dark-secondary] mb-2">Creating user flows and wireframes</li>
                    <li className="text-[--dark-secondary] mb-2">Managing presentations with internal stakeholders and the client</li>
                    <li className="text-[--dark-secondary] mb-2">Collecting and integrating feedback</li>
                    <li className="text-[--dark-secondary] mb-2">Handing off designs to the UI team</li>
                    <li className="text-[--dark-secondary] mb-2">Keeping the entire team (UI, Front-End, and Back-End) informed of critical design changes</li>
                  </ul>              
                </div>           
              </div>

              <div className="mt-20 md:mt-[-80px] md:grid md:grid-cols-12 md:gap-4">
                <div className="md:col-start-1 md:col-span-5 lg:col-start-2 lg:col-span-4">
                <h2 className="mb-3">Design process</h2>
                  <p className="text-[--dark-secondary] mb-5">The project followed a structure of 6 design sprints, each lasting 3 weeks:</p>
                  <ul className="list-disc pl-8 mb-6">
                    <li className="text-[--dark-secondary] mb-2"><span className="font-bold">Weeks 1-2</span> Analyze requirements and user research outputs to define user flows</li>
                    <li className="text-[--dark-secondary] mb-2"><span className="font-bold">Weeks 3-4</span> Create wireframes, present them to the client, and collect and implement feedback</li>
                    <li className="text-[--dark-secondary] mb-2"><span className="font-bold">Weeks 5-6</span> Develop the UI, present it to the client, and collect and implement feedback</li>
                  </ul>          
                  <p className="text-[--dark-secondary] mb-5">At the end of each week, we held alignment meetings with the front-end and back-end teams to ensure there were no technical issues with the designs.</p>   
                </div>
              </div>

              <div className="mt-20 md:mt-[-80px] md:grid md:grid-cols-12 md:gap-4">
                <div className="md:col-start-8 md:col-span-5 lg:col-start-8 lg:col-span-4">
                  <h2 className="mb-3">Scope and constraints</h2>
                  <p className="text-[--dark-secondary] mb-5">We had to create a digital platform for a Public Administration, which required strict adherence to accessibility standards outlined by AGID (Agency for Digital Italy) as per their official guidelines <a className="underline text-[--dark-primary]" href="https://trasparenza.agid.gov.it/download/6000.html" target="_blank">here</a>.</p>
                  <p className="text-[--dark-secondary] mb-5">Given that the public administration sector in Italy is  not a tech-savvy environment, presenting the design to the client was initially challenging for the UX team. However, after the first few sprints, we refined our approach, making the presentation process smoother.</p>
                  <p className="text-[--dark-secondary] mb-5">The complexity of managing vast amounts of information, features and edge cases for different user types, combined with strict deadlines, pushed the entire team to exceed their skill limits.</p>
                  <p className="text-[--dark-secondary] mb-5">We maintained constant alignment between teams. The UX team ensured the UI team had the necessary information and assets for a consistent design, while keeping the development team updated on any design changes to avoid technical issues.</p>
                        
                </div>           
              </div>

            </div>
          </div>

        {/* Highlight section */}

        <div>

          <div className="w-screen bg-[--dark-primary] px-5 sm:px-10 pt-40 pb-10 mt-40">
            <span className="text-[80px] ml-[-40px] sm:text-[120px] sm:ml-[-70px] md:text-[240px] md:ml-[-70px] font-bold text-[--dark-secondary] opacity-20">Highlights</span>
            <div className="relative container max-w-screen-xl mx-auto">
              <div className="md:grid md:grid-cols-12">
                <div className="md:col-start-1 md:col-span-6 lg:col-start-1 lg:col-span-4">
                  <span className="block text-[15px] text-[--dark-secondary]">1 / 8</span>
                  <h2 className="text-[--light-primary] mt-3 mb-8">E-Portfolio: understanding the core features for students and families</h2>
                  <p className="text-[--dark-secondary] mb-5">The e-Portfolio is a digital tool that provides students, families, teachers, and school administrators with a comprehensive view of the academic and educational journey.</p>
                  <p className="text-[--dark-secondary] mb-5">The first step before starting the wireframe design process was to study all the requirements and information related to this section of the web platform. This included information architecture, user personas, and proposed user journeys.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-screen bg-[--dark-primary] pb-5">
            <Image src={unicaAnalysis} width={1664} height={872} alt="E-Portfolio requirements and fetures analysis" className="w-full block mb-10"/>
          </div>

          <div className="w-screen bg-[--dark-primary] px-5 sm:px-10 pt-10 md:pt-40 pb-10">
            <div className="relative container max-w-screen-xl mx-auto">
              <div className="md:grid md:grid-cols-12">
                <div className="md:col-start-1 md:col-span-6 lg:col-start-1 lg:col-span-4">
                  <span className="block text-[15px] text-[--dark-secondary]">2 / 8</span>
                  <h2 className="text-[--light-primary] mt-3 mb-8">Wireframing the E-Portfolio student homepage</h2>
                  <p className="text-[--dark-secondary] mb-5">The homepage design evolved throughout the project as new sections and features were introduced during the design sprints.</p>
                  <p className="text-[--dark-secondary] mb-5">I explored various options, using boxed representations of e-Portfolio sections to offer quick previews with relevant information for each area.</p>             
                </div>
              </div>
              <Image src={unicaWireframeHomeEvolution} width={1236} height={1323} alt="Wireframe E-Portfolio homepage evolution" className="w-full block mt-10 mb-10"/>
            </div>
          </div>

          <div className="w-screen bg-[--dark-primary] px-5 sm:px-10 pt-10 pb-10">
            <div className="relative container max-w-screen-xl mx-auto">
              <div className="md:grid md:grid-cols-12">
                <div className="md:col-start-1 md:col-span-6 lg:col-start-1 lg:col-span-4">
                  <h3 className="text-[--light-primary] mt-10 mb-5">Final homepage structure with content that changes overtime</h3>
                  <p className="text-[--dark-secondary] mb-5">To finalize the homepage design I had to consider how the preview information in the section boxes could change overtime.</p>
                  <p className="text-[--dark-secondary] mb-5">I realized a design solution that use text information to show boxes initial stated and progressive information.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-screen bg-gradient-to-br from-[#D5E4F0] to-[#48A8F0]">
            <Image src={unicaHomeFinalStructure} width={1689} height={818} alt="Wireframe E-Portfolio homepage final structure" className="w-full block"/>
          </div>

          <div className="w-screen grid grid-cols-1 md:grid-cols-12 gap-2 bg-[--dark-primary] pt-2">
            <div className="md:col-start-1 md:col-span-4 bg-gradient-to-br from-[#D5E4F0] to-[#48A8F0] p-10">
              <Image src={unicaHomeVariant1} width={450} height={418} alt="E-Portfolio homepage content variation 1" className="w-full block"/>
            </div>
            <div className="md:col-start-5 md:col-span-4 bg-gradient-to-br from-[#D5E4F0] to-[#48A8F0] p-10">
              <Image src={unicaHomeVariant2} width={450} height={418} alt="E-Portfolio homepage content variation 2" className="w-full block"/>
            </div>
            <div className="md:col-start-9 md:col-span-4 bg-gradient-to-br from-[#D5E4F0] to-[#48A8F0] p-10">
              <Image src={unicaHomeVariant3} width={450} height={418} alt="E-Portfolio homepage content variation 3" className="w-full block"/>
            </div>
          </div>

          <div className="w-screen bg-[--dark-primary] px-5 sm:px-10 pt-2 0 pb-10">
            <div className="relative container max-w-screen-xl mx-auto">
              <div className="md:grid md:grid-cols-12">
                <div className="md:col-start-1 md:col-span-6 lg:col-start-1 lg:col-span-4">
                  <h3 className="text-[--light-primary] mt-10 mb-5">Visual of the E-Portfolio homepage designed by the UI team</h3>
                  <p className="text-[--dark-secondary] mb-5">The final visual created based on the wireframes I designed.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-screen bg-gradient-to-br from-[#D5E4F0] to-[#48A8F0]">
            <Image src={unicaHomeUI} width={1689} height={963} alt="User interface E-Portfolio homepage" className="w-full block"/>
          </div>

          <div className="w-screen grid grid-cols-1 md:grid-cols-12 gap-2 bg-[--dark-primary] pt-2">
            <div className="md:col-start-1 md:col-span-4 bg-gradient-to-br from-[#D5E4F0] to-[#48A8F0] p-10">
              <Image src={unicaHomeUI1} width={449} height={522} alt="E-Portfolio homepage content variation 1" className="w-full block"/>
            </div>
            <div className="md:col-start-5 md:col-span-4 bg-gradient-to-br from-[#D5E4F0] to-[#48A8F0] p-10">
              <Image src={unicaHomeUI2} width={449} height={522} alt="E-Portfolio homepage content variation 2" className="w-full block"/>
            </div>
            <div className="md:col-start-9 md:col-span-4 bg-gradient-to-br from-[#D5E4F0] to-[#48A8F0] p-10">
              <Image src={unicaHomeUI3} width={449} height={522} alt="E-Portfolio homepage content variation 3" className="w-full block"/>
            </div>
          </div>

          <div className="w-screen bg-[--dark-primary] px-5 sm:px-10 pt-40 pb-10">
            <div className="relative container max-w-screen-xl mx-auto">
              <div className="md:grid md:grid-cols-12">
                <div className="md:col-start-1 md:col-span-6 lg:col-start-1 lg:col-span-4">
                  <span className="block text-[15px] text-[--dark-secondary]">3 / 8</span>
                  <h2 className="text-[--light-primary] mt-3 mb-8">Focusing on the UX for student users across all E-Portfolio sections</h2>
                  <p className="text-[--dark-secondary] mb-5">Below here graphic resume of all the sections I have been working on that students users can explore starting from the E-Portfolio homepage:</p>
                  <ul className="list-disc pl-8">
                    <li className="text-[--dark-secondary] mb-2">Course of study</li>
                    <li className="text-[--dark-secondary] mb-2">Skills development</li>
                    <li className="text-[--dark-secondary] mb-2">Masterpiece</li>
                    <li className="text-[--dark-secondary] mb-2">Student Self-Assessment</li>
                    <li className="text-[--dark-secondary] mb-2">Documents</li>
                  </ul>     
                </div>
              </div>
            </div>
          </div>

          <div className="w-screen bg-[--dark-primary] pb-5 px-5 sm:px-10">
            <Image src={unicaEportfolioJourneys} width={1582} height={1738} alt="E-Portfolio user journeys for students" className="w-full block mb-10"/>
          </div>

          <div className="w-screen bg-[--dark-primary] px-5 sm:px-10 pt-20 pb-10">
            <div className="relative container max-w-screen-xl mx-auto">
              <div className="md:grid md:grid-cols-12">
                <div className="md:col-start-1 md:col-span-6 lg:col-start-1 lg:col-span-4">
                  <span className="block text-[15px] text-[--dark-secondary]">4 / 8</span>
                  <h2 className="text-[--light-primary] mt-3 mb-8">Masterpiece section: students' journey to add a masterpiece</h2>
                  <p className="text-[--dark-secondary] mb-5">For each school year, students can indicate one piece of work recognised as a "masterpiece" that represents their progress.</p>
                </div>
              </div>
            </div>
          </div>
        
        </div>
        

       {/* Results section */}
       <div className="relative w-screen bg-[--light-primary] px-5 sm:px-10 mt-20">
       <span className="text-[80px] ml-[-40px] sm:text-[120px] sm:ml-[-70px] md:text-[240px] md:ml-[-70px] font-bold text-[--dark-secondary] opacity-20">Results</span>
          <div className="relative container max-w-screen-sm mx-auto mt-0 md:mt-[-115px]">
            <p className="uppercase text-[19px] leading-[23px] md:text-[21px] md:leading-[27px] text-[--dark-primary] mb-10"><span className="font-bold">Over 1 million applications</span> for enrollment in the 2024/25 school year were submitted through the platform.</p>
            <p className="uppercase text-[19px] leading-[23px] md:text-[21px] md:leading-[27px] text-[--dark-primary] mb-5">According to the integrated Customer Satisfaction survey:</p>
            <ul className="list-disc pl-8 mb-6">
              <li className="uppercase text-[19px] leading-[23px] md:text-[21px] md:leading-[27px] text-[--dark-primary] mb-4"><span className="font-bold">93.9% of users</span> appreciated the <span className="font-bold">time saved</span></li>
              <li className="uppercase text-[19px] leading-[23px] md:text-[21px] md:leading-[27px] text-[--dark-primary] mb-4"><span className="font-bold">96.2%</span> praised the service's <span className="font-bold">efficiency</span></li>
              <li className="uppercase text-[19px] leading-[23px] md:text-[21px] md:leading-[27px] text-[--dark-primary] mb-4"><span className="font-bold">92.3%</span> highlighted the <span className="font-bold">ease of use</span> of Unica</li>
            </ul>
          </div>
        </div>

        {/* Next cases section */}
        <div className="relative w-screen bg-[--light-primary] px-5 sm:px-10 mt-20">
          <span className="text-[80px] ml-[-40px] sm:text-[120px] whitespace-nowrap sm:ml-[-70px] md:text-[240px] md:ml-[-70px] font-bold text-[--dark-secondary] opacity-20">Next Cases</span>          
          <div className="md:flex md:justify-between container max-w-screen-xl mx-auto mt-5 md:mt-[-40px] relative z-[50]">
              <div className=" md:mr-5">
                <CaseCard 
                  url="/case-studies/lira"
                  title="L.I.R.A."
                  subtitle="Corporate website"
                  thumbSrc={liraThumb}
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
            
      <ReserveFreeCall />
      <ContactBanner />    
       
      </div>
  );
}
