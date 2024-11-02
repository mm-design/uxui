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
import unicaMasterpieceStart from '../../../public/caseStudies/unica/unica-masterpiece-start.png';
import unicaMasterpieceUpload from '../../../public/caseStudies/unica/unica-masterpiece-upload.png';
import unicaMasterpieceSaveDraft from '../../../public/caseStudies/unica/unica-masterpiece-save-draft.png';
import unicaMasterpieceMobile from '../../../public/caseStudies/unica/unica-masterpiece-mobile.png';
import unicaMasterpieceUI from '../../../public/caseStudies/unica/unica-masterpiece-ui.png';
import unicaEportfolioMix from '../../../public/caseStudies/unica/unica-eportfolio-wireframe-mix.png';
import unicaEportfolioUIMix from '../../../public/caseStudies/unica/unica-eportfolio-ui-mix.png';
import unicaEportfolioAllUsers from '../../../public/caseStudies/unica/unica-eportfolio-all-users.png';
import unicaStatsReq from '../../../public/caseStudies/unica/unica-statistics-requirements.png';
import unicaStatsViews from '../../../public/caseStudies/unica/unica-statistics-views.png';
import unicaStatsGuide from '../../../public/caseStudies/unica/unica-statistics-guide.png';
import unicaStatsUIMix from '../../../public/caseStudies/unica/unica-statistics-ui-mix.png';
import unicaPresenttionScreen from '../../../public/caseStudies/unica/unica-presentation-screen.png';
import unicaMiroUILibrary from '../../../public/caseStudies/unica/unica-miro-ui-library.png';

export const metadata = {
  title: "Unica Web Platform: UX UI Case Study",
  description: "Designing a centralized web platform for the Italian Ministry of Education and Merit, offering students and families streamlined access to resources, educational services, and guidance tools.",
};

export default function CaseStudies() {
  return (
      <div className="">
        <div className="w-screen bg-[--light-primary] px-5 sm:px-10 pt-[20vh] sm:pt-[30vh]">
          <div className="relative container max-w-screen-xl mx-auto">
            <div className="block">
              <h1 className="mb-5">Unica</h1>
              <p className="text-[--dark-secondary] text-[17px] leading-[23px] sm:text-[21px] sm:leading-[27px] uppercase mb-10 sm:max-w-screen-sm">Designing the web platform launched by the Italian Ministry of Education and Merit that centralizes all tools and resources for students and families</p>
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

          <div className="w-screen bg-[--dark-primary] px-5 sm:px-10 pt-20 pb-10 mt-20">
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

          <div className="w-screen bg-[--dark-primary] px-5 sm:px-10 pt-10 pb-10">
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

          <div className="w-screen bg-[--dark-primary] px-5 sm:px-10 py-2 pb-5">
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

          <div className="w-screen bg-[--dark-primary] px-5 sm:px-10 pt-20 pb-5">
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

          <div className="w-screen bg-[--dark-primary] px-5 sm:px-10 pt-28 pb-10">
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

          <div className="w-screen bg-[--dark-primary] px-5 sm:px-10 pt-10 pb-10">
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

          <div className="w-screen bg-[--dark-primary] px-5 sm:px-10 pb-10">
            <div className="relative container max-w-screen-xl mx-auto">
              <div className="md:grid md:grid-cols-12 md:items-center">
                <div className="md:col-start-1 md:col-span-6 lg:col-start-1 lg:col-span-4">
                  <h3 className="text-[--light-primary] mb-5">How the journey begins</h3>
                  <p className="text-[--dark-secondary] mb-5">Students can access the masterpiece page from the e-Portfolio home by clicking the arrow icon button in the top right corner of the masterpiece box.</p>
                  <p className="text-[--dark-secondary] mb-5">Alternatively, they can immediately begin their journey to add a new masterpiece by clicking the "Add masterpiece" CTA button.</p>
               </div>
                
                <div className="md:col-start-1 md:col-span-12 lg:col-start-6 lg:col-span-7">
                  <Image src={unicaMasterpieceStart} width={708} height={719} alt="Masterpiece section how the user journey begins" className="w-full block md:mb-10 mt-10 md:mt-0"/>
                </div>
              </div>

              <div className="grid md:grid md:grid-cols-12 md:items-center pt-0 md:pt-20">
                <div className="order-last lg:order-first md:col-start-1 md:col-span-12 lg:col-start-1 lg:col-span-7">
                  <Image src={unicaMasterpieceUpload} width={705} height={664} alt="How to upload the masterpiece" className="w-full block md:mb-10 mt-10 md:mt-0"/>
                </div>

                <div className="order-first lg:order-last md:col-start-1 md:col-span-6 lg:col-start-9 lg:col-span-4 mt-20 md:mt-0">
                  <h3 className="text-[--light-primary] md:mt-0 mb-5">Main steps to upload the Masterpiece</h3>
                  <p className="text-[--dark-secondary] mb-5">The journey is divided into three steps, where students must input all the required information to complete the process.</p>
                  <p className="text-[--dark-secondary] mb-5">The main layout consists of two columns: </p>
                  <ul className="list-disc pl-8 mb-6">
                    <li className="text-[--dark-secondary] mb-2">Left column displays the progress through the steps with different states (in progress, done, to be done)</li>
                    <li className="text-[--dark-secondary] mb-2">Right column contains the required information input fields, a CTA text link at the bottom to save the masterpiece as a draft, along with navigation buttons for the steps</li>
                  </ul>  
                </div>              
        
              </div>

              <div className="md:grid md:grid-cols-12 md:items-center pt-0 md:pt-20">
                <div className="md:col-start-1 md:col-span-6 lg:col-start-1 lg:col-span-4 mt-20 md:mt-0">
                  <h3 className="text-[--light-primary] md:mt-0 mb-5">Save the Masterpiece as a draft and complete the process later</h3>
                  <p className="text-[--dark-secondary] mb-5">A fullscreen modal is displayed when students click the CTA to save the masterpiece as a draft or attempt to exit the journey using the X icon in the top right corner.</p>
                  <p className="text-[--dark-secondary] mb-5">They can choose to save and exit (main CTA) or leave without saving (secondary CTA).</p>
                  <p className="text-[--dark-secondary] mb-5">After saving, students are redirected to the masterpiece page, which has now updated its layout:</p>
                  <ul className="list-disc pl-8 mb-6">
                    <li className="text-[--dark-secondary] mb-2">the masterpiece preview is presented as a card element in tis draft state, summarizing relevant information and including a CTA to finalize the process</li>
                    <li className="text-[--dark-secondary] mb-2">to add a new masterpiece, I designed a separate card with a different treatment and a CTA to initiate a new process</li>
                  </ul>  
               </div>
                
                <div className="md:col-start-1 md:col-span-12 lg:col-start-6 lg:col-span-7">
                  <Image src={unicaMasterpieceSaveDraft} width={720} height={669} alt="How to save the masterpiece as a draft" className="w-full block md:mb-10 mt-10 md:mt-0"/>
                </div>
              </div>

              <div className="grid md:grid md:grid-cols-12 md:items-center pt-0 md:pt-20">
                <div className="order-last lg:order-first md:col-start-1 md:col-span-12 lg:col-start-1 lg:col-span-7">
                  <Image src={unicaMasterpieceUpload} width={705} height={664} alt="How to upload the masterpiece" className="w-full block md:mb-10 mt-10 md:mt-0"/>
                </div>

                <div className="order-first lg:order-last md:col-start-1 md:col-span-6 lg:col-start-9 lg:col-span-4 mt-20 md:mt-0">
                  <h3 className="text-[--light-primary] md:mt-0 mb-5">Complete the process and return to the Masterpiece section</h3>
                  <p className="text-[--dark-secondary] mb-5">After completing the process, students are directed to a success page that displays the skill badges earned for their work on the masterpiece.</p>
                  <p className="text-[--dark-secondary] mb-5">Students can then return to the Masterpiece page, where the updated layout now shows the masterpiece card element in its completed state.</p>
                  <p className="text-[--dark-secondary] mb-5">Below the cards, an additional section has been added for students to post a reflection on the masterpiece, along with a CTA that initiates the related journey.</p>
                </div>              
        
              </div>

              <div className="md:grid md:grid-cols-12 md:items-center pt-0 md:pt-20">
                <div className="md:col-start-1 md:col-span-6 lg:col-start-1 lg:col-span-4 mt-20 md:mt-0">
                  <h3 className="text-[--light-primary] mb-5">Designing the user journey for the mobile app version</h3>
                  <p className="text-[--dark-secondary] mb-5">As mentioned in the case study overview, in addition to the desktop touchpoint, student users also have access to a mobile app for managing all E-Portfolio sections.</p>
                  <p className="text-[--dark-secondary] mb-5">I designed the mobile version of the journey presented earlier, adapting layout elements such as the step progress to improve the user experience on mobile devices.</p>                
               </div>
                
                <div className="md:col-start-1 md:col-span-12 lg:col-start-6 lg:col-span-7">
                  <Image src={unicaMasterpieceMobile} width={710} height={665} alt="Masterpiece journey mobile version" className="w-full block md:mb-10 mt-10 md:mt-0"/>
                </div>
              </div>
            </div>
          </div>

          <div className="w-screen bg-[--dark-primary] px-5 sm:px-10 pt-20 pb-5">
            <div className="relative container max-w-screen-xl mx-auto">
              <div className="md:grid md:grid-cols-12">
                <div className="md:col-start-1 md:col-span-6 lg:col-start-1 lg:col-span-4">
                  <h3 className="text-[--light-primary] mb-5">Visuals of the Masterpiece section for students, designed by the UI team</h3>
                  <p className="text-[--dark-secondary] mb-5">A selection of the final visuals created based on the wireframes I designed.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-screen bg-gradient-to-br from-[#D5E4F0] to-[#48A8F0]">
            <Image src={unicaMasterpieceUI} width={1680} height={1064} alt="Selection of UI pages of the Materpiece section" className="w-full block"/>
          </div>

          <div className="w-screen bg-[--dark-primary] px-5 sm:px-10 pt-28 pb-10">
            <div className="relative container max-w-screen-xl mx-auto">
              <div className="md:grid md:grid-cols-12">
                <div className="md:col-start-1 md:col-span-6 lg:col-start-1 lg:col-span-4">
                  <span className="block text-[15px] text-[--dark-secondary]">5 / 8</span>
                  <h2 className="text-[--light-primary] mt-3 mb-8">Wireframing the other E-Portfolio sections for student users, including all associated journeys</h2>
                  <p className="text-[--dark-secondary] mb-5">I have been working on the entire E-Portfolio, designing all user journeys for students.</p>
                  <p className="text-[--dark-secondary] mb-5">Each section had specific requirements and features that needed to be considered in the design decisions.</p>             
                  <p className="text-[--dark-secondary] mb-5">Below is a quick overview of the mobile app and desktop versions of the other E-Portfolio sections.</p>             
                </div>
              </div>
            </div>
          </div>

          <div className="w-screen bg-[--dark-primary]">
            <Image src={unicaEportfolioMix} width={1680} height={947} alt="Mix of E-Portfolio wireframes for desktop and mobile devices" className="w-full block"/>
          </div>

          <div className="w-screen bg-[--dark-primary] px-5 sm:px-10 pt-10 pb-5">
            <div className="relative container max-w-screen-xl mx-auto">
              <div className="md:grid md:grid-cols-12">
                <div className="md:col-start-1 md:col-span-6 lg:col-start-1 lg:col-span-4">
                  <h3 className="text-[--light-primary] mt-10 mb-5">Visuals of E-Portfolio sections for students  designed by the UI team</h3>
                  <p className="text-[--dark-secondary] mb-5">A selection of the final visuals created based on the wireframes I designed.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-screen bg-gradient-to-br from-[#D5E4F0] to-[#48A8F0]">
            <Image src={unicaEportfolioUIMix} width={1680} height={1064} alt="Selection of UI pages of the E-Portfolio section" className="w-full block"/>
          </div>

          <div className="w-screen bg-[--dark-primary] px-5 sm:px-10 pt-28 pb-0">
            <div className="relative container max-w-screen-xl mx-auto">
              <div className="md:grid md:grid-cols-12">
                <div className="md:col-start-1 md:col-span-6 lg:col-start-1 lg:col-span-4">
                  <span className="block text-[15px] text-[--dark-secondary]">6 / 8</span>
                  <h2 className="text-[--light-primary] mt-3 mb-8">Defining E-Portfolio sections and journeys for other user types</h2>
                  <p className="text-[--dark-secondary] mb-5">The E-Portfolio serves as the core area for student users, but other user types can also access the information contained within this section.</p>
                  <p className="text-[--dark-secondary] mb-5">I designed the wireframes for every section and journey related to the E-Portfolio for the adult users, resulting in over 100 designed pages.</p>
                  <p className="text-[--dark-secondary] mb-5">To give you an idea, below are a couple of screenshots showing all the pages I created for just two sections: Student Self-Assessment and Masterpiece.</p>
                </div>
              </div>
              <Image src={unicaEportfolioAllUsers} width={1234} height={775} alt="E-Portfolio wireframes for all user types" className="w-full block mt-10"/>
            </div>
          </div>

          <div className="w-screen bg-[--dark-primary] px-5 sm:px-10 pt-28 pb-10">
            <div className="relative container max-w-screen-xl mx-auto">
              <div className="md:grid md:grid-cols-12">
                <div className="md:col-start-1 md:col-span-6 lg:col-start-1 lg:col-span-4">
                  <span className="block text-[15px] text-[--dark-secondary]">7 / 8</span>
                  <h2 className="text-[--light-primary] mt-3 mb-8">Designing public pages with extensive data such as education and work statistics</h2>
                  <p className="text-[--dark-secondary] mb-5">A part from the E-Portfolio, I was involved even on the creation of pages for the public website with a huge amount of data to cominuticate like the <a href="https://unica.istruzione.gov.it/it/orientamento/guida-alla-scelta/statistiche" target="_blank" className="underline text-[--light-primary]">Statistics on education and work</a> page.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-screen bg-[--dark-primary] px-5 sm:px-10 pb-10">
            <div className="relative container max-w-screen-xl mx-auto">
              <div className="md:grid md:grid-cols-12 md:items-center">
                <div className="md:col-start-1 md:col-span-6 lg:col-start-1 lg:col-span-4">
                  <h3 className="text-[--light-primary] mb-5">Analyzing requirements and optimizing content organization</h3>
                  <p className="text-[--dark-secondary] mb-5">After delving into the specific requirements for this section, I proposed a more effective content organization that reflects the progressive growth of students from school to work. The structure is composed of 3 main areas:</p>
                  <ul className="list-disc pl-8 mb-6">
                    <li className="text-[--dark-secondary] mb-2">Education and training</li>
                    <li className="text-[--dark-secondary] mb-2">From studying to working</li>
                    <li className="text-[--dark-secondary] mb-2">The world of work</li>
                  </ul>  
               </div>
                
                <div className="md:col-start-1 md:col-span-12 lg:col-start-6 lg:col-span-7">
                  <Image src={unicaStatsReq} width={711} height={494} alt="Statistics section requirements" className="w-full block md:mb-10 mt-10 md:mt-0"/>
                </div>
              </div>

              <div className="grid md:grid md:grid-cols-12 md:items-center pt-0 md:pt-20">
                <div className="order-last lg:order-first md:col-start-1 md:col-span-12 lg:col-start-1 lg:col-span-7">
                  <Image src={unicaStatsViews} width={767} height={594} alt="Statistics data visualization" className="w-full block md:mb-10 mt-10 md:mt-0"/>
                </div>

                <div className="order-first lg:order-last md:col-start-1 md:col-span-6 lg:col-start-9 lg:col-span-4 mt-20 md:mt-0">
                  <h3 className="text-[--light-primary] md:mt-0 mb-5">Structure of data visualizations in the main areas of Statistics</h3>
                  <p className="text-[--dark-secondary] mb-5">Users can access the Statistics page through the main menu. After landing, a summary of each main area is displayed, along with CTAs to explore them further.</p>
                  <p className="text-[--dark-secondary] mb-5">Each area contains multiple data visualizations, which are structured as follows:</p>
                  <ul className="list-disc pl-8 mb-6">
                    <li className="text-[--dark-secondary] mb-2">Title and short description of the view</li>
                    <li className="text-[--dark-secondary] mb-2">Filters</li>
                    <li className="text-[--dark-secondary] mb-2">Main data visualization (donut chart, tables, progress bars)</li>
                    <li className="text-[--dark-secondary] mb-2">Useful links (if applicable)</li>
                  </ul>  
                </div>              
        
              </div>

              <div className="md:grid md:grid-cols-12 md:items-center pt-0 md:pt-20">
                <div className="md:col-start-1 md:col-span-6 lg:col-start-1 lg:col-span-4 mt-20 md:mt-0">
                  <h3 className="text-[--light-primary] md:mt-0 mb-5">Helping users in understanding how to read and navigate the data</h3>
                  <p className="text-[--dark-secondary] mb-5">Considering the complexity of these pages, which contain vast amounts of information and multiple filters, I created a simple visual guide to assist users in interpreting the data.</p>
                  <p className="text-[--dark-secondary] mb-5">Users can access the guide through the fixed CTA “Guide to Statistics” located in the bottom right corner of each main area page.</p>
                  <p className="text-[--dark-secondary] mb-5">The guide is presented as a fullscreen slideshow that shows, based on the area the user is navigating, how to read the data. It explains the location of filters, key data points, and additional details.</p>                  
               </div>
                
                <div className="md:col-start-1 md:col-span-12 lg:col-start-6 lg:col-span-7">
                  <Image src={unicaStatsGuide} width={710} height={723} alt="Statistics: how to read data" className="w-full block md:mb-10 mt-10 md:mt-0"/>
                </div>
              </div>
            </div>
          </div>

          <div className="w-screen bg-[--dark-primary] px-5 sm:px-10 pt-10 pb-5">
            <div className="relative container max-w-screen-xl mx-auto">
              <div className="md:grid md:grid-cols-12">
                <div className="md:col-start-1 md:col-span-6 lg:col-start-1 lg:col-span-4">
                  <h3 className="text-[--light-primary] mb-5">Visuals of Statistics on education and work designed by the UI team</h3>
                  <p className="text-[--dark-secondary] mb-5">A selection of the final visuals created based on the wireframes I designed.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-screen bg-gradient-to-br from-[#D5E4F0] to-[#48A8F0]">
            <Image src={unicaStatsUIMix} width={1680} height={1064} alt="Selection of UI pages of the Statistics section" className="w-full block"/>
          </div>

          <div className="w-screen bg-[--dark-primary] px-5 sm:px-10 pt-28 pb-20 sm:pb-40">
            <div className="relative container max-w-screen-xl mx-auto">
              <div className="md:grid md:grid-cols-12">
                <div className="md:col-start-1 md:col-span-6 lg:col-start-1 lg:col-span-4">
                  <span className="block text-[15px] text-[--dark-secondary]">8 / 8</span>
                  <h2 className="text-[--light-primary] mt-3 mb-8">Managing stakeholder presentations and updating the visual library for further review</h2>
                  <p className="text-[--dark-secondary] mb-5">I was responsible for presenting the user journeys I had developed, as well as the final interfaces created by the UI team for those journeys.</p>
                  <p className="text-[--dark-secondary] mb-5">The presentation assets consist of:</p>
                  <ul className="list-disc pl-8 mb-6">
                    <li className="text-[--dark-secondary] mb-2"><span className="font-bold text-[--light-primary]">Cover</span> with main objective of the journey </li>
                    <li className="text-[--dark-secondary] mb-2"><span className="font-bold text-[--light-primary]">Storytelling frame</span> with explanation of the related user action for each step</li>
                    <li className="text-[--dark-secondary] mb-2"><span className="font-bold text-[--light-primary]">Wireframe or UI</span> of the page</li>
                  </ul>  
                </div>
              </div>
              <Image src={unicaPresenttionScreen} width={1232} height={557} alt="Screenshots of the file for the design presentation with stakeholders" className="w-full block mt-10 mb-10"/>
              <div className="md:grid md:grid-cols-12">
                <div className="md:col-start-1 md:col-span-6 lg:col-start-1 lg:col-span-4">
                  <p className="text-[--dark-secondary] mb-5">To further assist stakeholders in keeping track of all the designed pages and facilitate their reviews, we created a visual library on Miro.</p>
                  <p className="text-[--dark-secondary] mb-5">The library hosts all the approved visuals, organized by sprints. This greatly helps everyone involved in the project maintain a clear overview.</p>
                </div>
              </div>
              <Image src={unicaMiroUILibrary} width={1235} height={726} alt="UI library of all Unica pages on Miro board" className="w-full block mt-10 mb-10"/>
            
            </div>
          </div>

         
        
        </div>
        

       {/* Results section */}
       <div className="relative w-screen bg-[--light-primary] px-5 sm:px-10 mt-16 sm:mt-10">
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
        <div className="relative w-screen bg-[--light-primary] px-5 sm:px-10 mt-16 sm:mt-10">
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
