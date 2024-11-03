import Image from "next/image";
import ExternalTextLink from "@/components/ExternalTextLink";
import ReserveFreeCall from "@/components/ReserveFreeCall";
import ContactBanner from "@/components/ContactBanner";
import threeukCover from '../../../public/caseStudies/threeuk/threeuk-cover.jpg';
import threeukAnalysis from '../../../public/caseStudies/threeuk/threeuk-analysis.png';
import threeukUserJourneys from '../../../public/caseStudies/threeuk/threeuk-user-journeys.png';
import threeukWireframeV1 from '../../../public/caseStudies/threeuk/threeuk-wireframe-v1.png';
import threeukWireframeV2 from '../../../public/caseStudies/threeuk/threeuk-wireframe-v2.png';
import threeukWireframeV3 from '../../../public/caseStudies/threeuk/threeuk-wireframe-v3.png';
import threeukVariant1 from '../../../public/caseStudies/threeuk/threeuk-variant-1.png';
import threeukVariant2 from '../../../public/caseStudies/threeuk/threeuk-variant-2.png';
import threeukVariant3 from '../../../public/caseStudies/threeuk/threeuk-variant-3.png';
import threeukVariant4 from '../../../public/caseStudies/threeuk/threeuk-variant-4.png';
import threeukVariant5 from '../../../public/caseStudies/threeuk/threeuk-variant-5.png';
import threeukVariant6 from '../../../public/caseStudies/threeuk/threeuk-variant-6.png';
import threeukMainNavTop from '../../../public/caseStudies/threeuk/threeuk-navigation-top.png';
import threeukMainNavSide from '../../../public/caseStudies/threeuk/threeuk-navigation-side.png';
import threeukMainNavSideSticky from '../../../public/caseStudies/threeuk/threeuk-navigation-side-sticky.png';
import threeukWidgets from '../../../public/caseStudies/threeuk/threeuk-widgets.png';
import threeukAddLine from '../../../public/caseStudies/threeuk/threeuk-add-line.png';
import threeukRaiseCase from '../../../public/caseStudies/threeuk/threeuk-raise-case.png';
import threeukFigmaPrototype from '../../../public/caseStudies/threeuk/threeuk-figma-prototype.jpg';
import threeukFinalUI1 from '../../../public/caseStudies/threeuk/threeuk-final-ui-1.jpg';
import threeukFinalUI2 from '../../../public/caseStudies/threeuk/threeuk-final-ui-2.jpg';
import threeukFinalUI3 from '../../../public/caseStudies/threeuk/threeuk-final-ui-3.jpg';
import threeukFinalUI4 from '../../../public/caseStudies/threeuk/threeuk-final-ui-4.jpg';
import threeukFinalUI5 from '../../../public/caseStudies/threeuk/threeuk-final-ui-5.jpg';
import threeukFinalUI6 from '../../../public/caseStudies/threeuk/threeuk-final-ui-6.jpg';
import threeukMockup1 from '../../../public/caseStudies/threeuk/threeuk-mockup-1.jpg';
import threeukMockup2 from '../../../public/caseStudies/threeuk/threeuk-mockup-2.jpg';
import CaseCard from "@/components/caseStudies/CaseCard";
import unicaThumb from '../../../public/caseStudies/thumbnails/unica-thumbnail.jpg';
import skyThumb from '../../../public/caseStudies/thumbnails/sky-thumbnail.jpg';

export const metadata = {
  title: "MVP of Digital Corporate Portal for Three UK: UX UI Case Study",
  description: "Developing a Digital Corporate Portal for businesses with over 50 connections, enabling self-service account management for medium, large, corporate, and public sector clients.",
};

export default function CaseStudies() {
  return (
      <div className="">
        <div className="w-screen bg-[--light-primary] px-5 sm:px-10 pt-[20vh] sm:pt-[30vh]">
          <div className="relative container max-w-screen-xl mx-auto">
            <div className="block">
              <h1 className="mb-5">Three UK</h1>
              <p className="text-[--dark-secondary] text-[17px] leading-[23px] sm:text-[21px] sm:leading-[27px] uppercase mb-10 sm:max-w-screen-sm">Creating a Digital Corporate Portal to enable businesses with over 50 connections to manage their accounts online</p>
              <Image src={threeukCover} width={1235} height={785} alt="Three Uk corporate portal mockup" className="rounded-[40px] w-full block mb-10"/>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
                
                  <div className="mb-5">
                    <p className="text-[--dark-secondary]">Client</p>
                    <p className="">Three UK</p>
                  </div>
                
                  <div className="mb-5">
                    <p className="text-[--dark-secondary]">Field</p>
                    <p className="">Telco</p>
                  </div>
              
                
                  <div className="mb-5">
                    <p className="text-[--dark-secondary]">Agency</p>
                    <p className="">NTT Data</p>
                  </div>
                  <div className="mb-5">
                    <p className="text-[--dark-secondary]">Period</p>
                    <p className="">Jul - Aug 2022</p>
                  </div>
              
                
                  <div className="mb-5">
                    <p className="text-[--dark-secondary]">Role</p>
                    <p className="">UX</p>
                  </div>
                  <div className="mb-5">
                    <ExternalTextLink color="dark" href="" text="View prototype" />
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
                  <p className="text-[--dark-secondary] mb-5">Three Business was on a rapid growth trajectory, aiming to prioritize a digital-first approach for both customer and channel experiences.</p>
                  <p className="text-[--dark-secondary] mb-5">The client noted that in nearly all recent corporate bids, the need for a corporate self-service portal ranked as a top priority. Delivering digital self-service capabilities was crucial to success, particularly for their medium to large corporate customers.</p>
                  <p className="text-[--dark-secondary] font-bold mb-5">At the time, Three was the only MNO without a corporate portal, limiting their ability to compete effectively in the market.</p>
                  <p className="text-[--dark-secondary] mb-5">/Users/mauromicozzi/Downloads/unica-masterpiece-complete-process.png</p>
                </div>
              </div>

              <div className="mt-20 md:mt-[-80px] md:grid md:grid-cols-12 md:gap-4">
                <div className="md:col-start-8 md:col-span-5 lg:col-start-8 lg:col-span-4">
                  <h2 className="mb-3">Project statement</h2>
                  <p className="text-[--dark-secondary] mb-5">The client needed a Digital Corporate Portal to enable businesses with over 50 connections to manage their accounts online. The primary focus was on in-life self-service account management for medium, large, corporate, and public sector customers.</p>
                  <p className="text-[--dark-secondary] mb-5">During the “Discovery phase” we had to deliver an MVP of the portal, covering 3 key user journeys:</p>
                  <ul className="list-disc pl-8">
                    <li className="text-[--dark-secondary] mb-2">Dashboard view at different levels (Corporate - Department/BAN - Line/MSISDN)</li>
                    <li className="text-[--dark-secondary] mb-2">Add new line</li>
                    <li className="text-[--dark-secondary] mb-2">Raise a ticket</li>
                  </ul>             
                </div>           
              </div>

              <div className="mt-20 md:mt-[-80px] md:grid md:grid-cols-12 md:gap-4">
                <div className="md:col-start-1 md:col-span-5 lg:col-start-2 lg:col-span-4">
                <h2 className="mb-3">Users</h2>
                  <p className="text-[--dark-secondary] mb-5">Corporate admin:</p>
                  <ul className="list-disc pl-8">
                    <li className="text-[--dark-secondary] mb-2">Acts as the primary point of contact for day-to-day interactions with service providers</li>
                    <li className="text-[--dark-secondary] mb-2">Manages accounts, including personal information and onboarding/offboarding of user</li>
                    <li className="text-[--dark-secondary] mb-2">Authorizes workflows, such as approving user requests and purchasing on behalf of users, depending on the workflow context</li>
                    <li className="text-[--dark-secondary] mb-2">Generates reports related to billing and out-of-plan charges</li>
                    <li className="text-[--dark-secondary] mb-2">Typically found in larger companies with dedicated IT departments</li>
                    <li className="text-[--dark-secondary] mb-2">In smaller companies, this role may be assumed by the business owner or delegated to a personal assistant</li>
                  </ul>             
                </div>
              </div>

              <div className="mt-20 md:mt-[-80px] md:grid md:grid-cols-12 md:gap-4">
                <div className="md:col-start-8 md:col-span-5 lg:col-start-8 lg:col-span-4">
                  <h2 className="mb-3">Responsibilities</h2>
                  <p className="text-[--dark-secondary] mb-5">As a member of the UX team, my responsibilities included:</p>
                  <ul className="list-disc pl-8">
                    <li className="text-[--dark-secondary] mb-2">Understanding business requirements, brand guidelines, and the design system</li>
                    <li className="text-[--dark-secondary] mb-2">Conducting stakeholder interviews</li>
                    <li className="text-[--dark-secondary] mb-2">Performing competitor analysis</li>
                    <li className="text-[--dark-secondary] mb-2">Defining key journey flows for the MVP</li>
                    <li className="text-[--dark-secondary] mb-2">Designing high-level wireframes with journey walkthroughs</li>
                    <li className="text-[--dark-secondary] mb-2">Creating an interactive prototype</li>
                    <li className="text-[--dark-secondary] mb-2">Presenting designs to the client and collecting/implementing feedback</li>
                    <li className="text-[--dark-secondary] mb-2">Handover all approved wireframes to the UI team</li>
                  </ul>              
                </div>           
              </div>

              <div className="mt-20 md:mt-[-80px] md:grid md:grid-cols-12 md:gap-4">
                <div className="md:col-start-1 md:col-span-5 lg:col-start-2 lg:col-span-4">
                <h2 className="mb-3">Design process</h2>
                  <p className="text-[--dark-secondary] mb-5">The project was organized into 4 design sprints, each lasting 2 weeks:</p>
                  <ul className="list-disc pl-8 mb-6">
                    <li className="text-[--dark-secondary] mb-2"><span className="font-bold">Weeks 1-2</span> Understand of business and technical constraints and aspirations</li>
                    <li className="text-[--dark-secondary] mb-2"><span className="font-bold">Weeks 3-4</span> Prioritize list of features for the MVP, along with an initial assessment of effort</li>
                    <li className="text-[--dark-secondary] mb-2"><span className="font-bold">Weeks 5-6</span> Define target user journeys and design first draft of the B2B portal</li>
                    <li className="text-[--dark-secondary] mb-2"><span className="font-bold">Weeks 7-8</span> Finalize work package for the MVP with defined product backlog</li>
                  </ul>          
                  <p className="text-[--dark-secondary] mb-5">At the end of each sprint, we conducted a meeting with the client to share our progress and gather feedback for implementation the week after.</p>   
                </div>
              </div>

              <div className="mt-20 md:mt-[-80px] md:grid md:grid-cols-12 md:gap-4">
                <div className="md:col-start-8 md:col-span-5 lg:col-start-8 lg:col-span-4">
                  <h2 className="mb-3">Scope and constraints</h2>
                  <p className="text-[--dark-secondary] mb-5">The scope of the “Discovery Phase” was to assess the current market landscape and analyze competitor offerings to deliver a Digital Corporate Portal that allows Three UK’s clients with over 50 connections to manage their accounts online.</p>
                  <p className="text-[--dark-secondary] mb-5">In a large project like this, numerous stakeholders and teams are involved, making it challenging to stay updated on all changes, from UX research to the technologies involved.</p>
                  <p className="text-[--dark-secondary] mb-5">Managing client expectations was quite difficult at the beginning. Considering the nature of the “Discovery Phase”, client expected us to explore solutions for different user journeys but we did not have clearly defined them, spreading precious time and efforts. After the first two sprints, we clearly defined the features and user journeys to be finalized and this allowed us to proceed with our work more smoothly and maintain an efficient workflow.</p>
                        
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
                  <span className="block text-[15px] text-[--dark-secondary]">1 / 9</span>
                  <h2 className="text-[--light-primary] mt-3 mb-8">Competitor B2B telco portals analysis and interviews with experts to understand what the market is offering </h2>
                  <p className="text-[--dark-secondary] mb-5">I started analyzing the main competitor such as Vodafone and EE, creating a sitemap of every corporate portal and taking screenshots of the main pages.</p>
                  <p className="text-[--dark-secondary] mb-5">Then I helped the Research Team conducting interviews with experts in the telco field, resuming the main points in 3 slides.</p>
                  <p className="text-[--dark-secondary] mb-5">Finally I have collected all the analysis results in a comprehensive Miro board.</p>            
                </div>
              </div>
            </div>
          </div>

          <div className="w-screen bg-[--dark-primary] pb-5">
            <Image src={threeukAnalysis} width={1680} height={1045} alt="Competitor B2B telco portals analysis" className="w-full block mb-10"/>
          </div>

          <div className="w-screen bg-[--dark-primary] px-5 sm:px-10 pt-10 pb-10">
            <div className="relative container max-w-screen-xl mx-auto">
              <div className="md:grid md:grid-cols-12 md:items-center">
                <div className="md:col-start-1 md:col-span-6 lg:col-start-1 lg:col-span-4">
                  <span className="block text-[15px] text-[--dark-secondary]">2 / 9</span>
                  <h2 className="text-[--light-primary] mt-3 mb-8">User journeys map to clearly define the MVP scope</h2>
                  <p className="text-[--dark-secondary] mb-5">We have to deliver 3 main journeys for the MVP that involve the Corporate Admin in:</p>
                  <ul className="list-disc pl-8 mb-6">
                    <li className="text-[--dark-secondary] mb-2">Adding new lines (Adapt Business Plan)</li>
                    <li className="text-[--dark-secondary] mb-2">View usage (BAN level + MSIDN level, both with and without Three Analyst subscription)</li>
                    <li className="text-[--dark-secondary] mb-2">Raise an issue</li>
                  </ul>  
                  <p className="text-[--dark-secondary] mb-5">I structured every journey with a precise goal and expectations. The flows show different phases of the journey in the horizontal axe and their related experience analysis (touchpoints, emotions, pain point etc.) on the vertical axe. </p>            
                </div>
                
                <div className="md:col-start-1 md:col-span-12 lg:col-start-6 lg:col-span-7">
                  <Image src={threeukUserJourneys} width={710} height={715} alt="User journeys flow for the MVP" className="w-full block mb-10"/>
                </div>
              </div>
            </div>
          </div>

          <div className="w-screen bg-[--dark-primary] px-5 sm:px-10 pt-10 pb-10">
            <div className="relative container max-w-screen-xl mx-auto">
              <div className="md:grid md:grid-cols-12 md:items-center">
                <div className="md:col-start-1 md:col-span-6 lg:col-start-1 lg:col-span-4">
                  <span className="block text-[15px] text-[--dark-secondary]">3 / 9</span>
                  <h2 className="text-[--light-primary] mt-3 mb-8">v.1.0 - Wireframing first concept of the dashboard from low to high fidelity</h2>
                  <p className="text-[--dark-secondary] mb-5">Based on the research outputs and defined customer journeys, I organized the architecture information for every view of the dashboard (Corporate - BAN - MSIDN) followed by the first wireframe draft.</p>
                  <p className="text-[--dark-secondary] mb-5">After that I moved on designing high-fidelity wireframe. The main sections highlighted in the first draft were populated with placeholder content to have an overall view of the structure.</p>
                </div>
                
                <div className="md:col-start-1 md:col-span-12 lg:col-start-6 lg:col-span-7">
                  <Image src={threeukWireframeV1} width={711} height={815} alt="Dashboard wireframe v.1.0" className="w-full block mb-10"/>
                </div>
              </div>
            </div>
          </div>

          <div className="w-screen bg-[--dark-primary] px-5 sm:px-10 pt-10 pb-10">
            <div className="relative container max-w-screen-xl mx-auto">
              <div className="md:grid md:grid-cols-12">
                <div className="md:col-start-1 md:col-span-6 lg:col-start-1 lg:col-span-4">
                  <span className="block text-[15px] text-[--dark-secondary]">4 / 9</span>
                  <h2 className="text-[--light-primary] mt-3 mb-8">v.2.0 - Exploring interactions and search functionality</h2>
                  <p className="text-[--dark-secondary] mb-5">After made sure the first structure was pretty solid, the next step was to focus on the Corporate view. I started exploring interactions and search functionality.</p>
                  <p className="text-[--dark-secondary] mb-5">A desired feature was that users have to be able to quickly perform actions even on the Corporate view page, that is the highest view/level on scope. </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-screen bg-gradient-to-br from-[#FBBBC1] to-[#FE7D69]">
            <Image src={threeukWireframeV2} width={1680} height={1045} alt="Competitor B2B telco portals analysis" className="w-full block"/>
          </div>

          <div className="w-screen bg-[--dark-primary] px-5 sm:px-10 pt-32 pb-10">
            <div className="relative container max-w-screen-xl mx-auto">
              <div className="md:grid md:grid-cols-12 md:items-center">
                <div className="md:col-start-1 md:col-span-6 lg:col-start-1 lg:col-span-4">
                  <span className="block text-[15px] text-[--dark-secondary]">5 / 9</span>
                  <h2 className="text-[--light-primary] mt-3 mb-8">v.3.0 - Introducing dashboard customization with widgets</h2>
                  <p className="text-[--dark-secondary] mb-5">At this point the dashboard concept evolved completely. After the interviews with experts in the  telco field we realized that there is no “right” solution for a perfect corporate dashboard layout that can address all users needs.</p>
                  <p className="text-[--dark-secondary] mb-5">The only feature that can helped us solve this problem was to introduce the idea of a customizable dashbboard.</p>
                  <p className="text-[--dark-secondary] mb-5">I redesigned the  dashboard with a list of default widgets that composed the layout. In this way users can use the default layout or add/delete widgets, or they can change their order and build a custom view based on specific needs.</p>
                </div>
                
                <div className="md:col-start-1 md:col-span-12 lg:col-start-6 lg:col-span-7">
                  <Image src={threeukWireframeV3} width={710} height={896} alt="Dashboard wireframe v.1.0" className="w-full block mb-10"/>
                </div>
              </div>
            </div>
          </div>

          <div className="w-screen bg-[--dark-primary] px-5 sm:px-10 pt-10 pb-10">
            <div className="relative container max-w-screen-xl mx-auto">
              <div className="md:grid md:grid-cols-12">
                <div className="md:col-start-1 md:col-span-6 lg:col-start-1 lg:col-span-4">
                  <span className="block text-[15px] text-[--dark-secondary]">6 / 9</span>
                  <h2 className="text-[--light-primary] mt-3 mb-8">Designing solutions for navigation, search functionality, quick actions and widgets</h2>
                  <p className="text-[--dark-secondary] mb-5">At this point I designed different solutions for the dashboard main navigation, search functionality and quick actions.</p>
                  <p className="text-[--dark-secondary] mb-5">The introduction of the customization feature was game changer. At this point I had to design different solutions to create an initial set of widgets that could display useful information, perform quick actions and promote marketing offers.</p>
                  <p className="text-[--dark-secondary] mb-5">Before create the set of widgets it was time to finalize search funcionality, quick actions and dashboard navigation so I wireframed different options.</p>
                  <h3 className="text-[--light-primary] mt-10 mb-2">Search and quick actions</h3>
                  <p className="text-[--dark-secondary] mb-0">Full screen and side navigation layout options</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-screen grid grid-cols-1 md:grid-cols-12 gap-2 bg-[--dark-primary]">
            <div className="md:col-start-1 md:col-span-4 bg-gradient-to-br from-[#FBBBC1] to-[#FE7D69] p-10">
              <Image src={threeukVariant1} width={451} height={307} alt="Dashboard variant with widgets" className="w-full block"/>
            </div>
            <div className="md:col-start-5 md:col-span-4 bg-gradient-to-br from-[#FBBBC1] to-[#FE7D69] p-10">
              <Image src={threeukVariant2} width={451} height={307} alt="Dashboard variant fullscreen search" className="w-full block"/>
            </div>
            <div className="md:col-start-9 md:col-span-4 bg-gradient-to-br from-[#FBBBC1] to-[#FE7D69] p-10">
              <Image src={threeukVariant3} width={451} height={307} alt="Dashboard variant fullscreen quick actions" className="w-full block"/>
            </div>
            <div className="md:col-start-1 md:col-span-4 bg-gradient-to-br from-[#FBBBC1] to-[#FE7D69] p-10">
              <Image src={threeukVariant4} width={451} height={307} alt="Dashboard variant with widgets" className="w-full block"/>
            </div>
            <div className="md:col-start-5 md:col-span-4 bg-gradient-to-br from-[#FBBBC1] to-[#FE7D69] p-10">
              <Image src={threeukVariant5} width={451} height={307} alt="Dashboard variant sidenav search" className="w-full block"/>
            </div>
            <div className="md:col-start-9 md:col-span-4 bg-gradient-to-br from-[#FBBBC1] to-[#FE7D69] p-10">
              <Image src={threeukVariant6} width={451} height={307} alt="Dashboard variant sidenav quick actions" className="w-full block"/>
            </div>
          </div>

          <div className="w-screen bg-[--dark-primary] px-5 sm:px-10 pt-10 pb-10">
            <div className="relative container max-w-screen-xl mx-auto">
              <div className="md:grid md:grid-cols-12">
                <div className="md:col-start-1 md:col-span-6 lg:col-start-1 lg:col-span-4">
                  <h3 className="text-[--light-primary] mt-10 mb-2">Main navigation</h3>
                  <p className="text-[--dark-secondary] mb-0">Top, side and sticky navigation options</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-screen grid grid-cols-1 md:grid-cols-12 gap-2 bg-[--dark-primary]">
            <div className="md:col-start-1 md:col-span-4 bg-gradient-to-br from-[#FBBBC1] to-[#FE7D69] p-10">
              <Image src={threeukMainNavTop} width={451} height={303} alt="Dashboard top navigation" className="w-full block"/>
            </div>
            <div className="md:col-start-5 md:col-span-4 bg-gradient-to-br from-[#FBBBC1] to-[#FE7D69] p-10">
              <Image src={threeukMainNavSide} width={451} height={303} alt="Dashboard side navigation" className="w-full block"/>
            </div>
            <div className="md:col-start-9 md:col-span-4 bg-gradient-to-br from-[#FBBBC1] to-[#FE7D69] p-10">
              <Image src={threeukMainNavSideSticky} width={451} height={303} alt="Dashboard side sticky navigation" className="w-full block"/>
            </div>
          </div>

          <div className="w-screen bg-[--dark-primary] px-5 sm:px-10 pt-10 pb-10">
            <div className="relative container max-w-screen-xl mx-auto">
              <div className="md:grid md:grid-cols-12">
                <div className="md:col-start-1 md:col-span-6 lg:col-start-1 lg:col-span-4">
                  <h3 className="text-[--light-primary] mt-10 mb-2">Widgets</h3>
                  <p className="text-[--dark-secondary] mb-0">The initial set of widgets to create the dashboard views: Corporate - BAN - MSIDN</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-screen bg-gradient-to-br from-[#FBBBC1] to-[#FE7D69]">
            <Image src={threeukWidgets} width={1681} height={1262} alt="Initial set of widgets for the dashboard" className="w-full block"/>
          </div>

          <div className="w-screen bg-[--dark-primary] px-5 sm:px-10 pt-32 pb-10">
            <div className="relative container max-w-screen-xl mx-auto">
              <div className="md:grid md:grid-cols-12">
                <div className="md:col-start-1 md:col-span-6 lg:col-start-1 lg:col-span-4">
                  <span className="block text-[15px] text-[--dark-secondary]">7 / 9</span>
                  <h2 className="text-[--light-primary] mt-3 mb-8">Completing user journeys: add a new line and raise a case</h2>
                  <p className="text-[--dark-secondary] mb-5">Once the set of widgets were completed I focused on the other two customer journeys for the MVP.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-screen bg-[--dark-primary] px-5 sm:px-10">
            <div className="relative container max-w-screen-xl mx-auto">

                <div className="md:grid md:grid-cols-12 md:items-center">
                    <div className="md:col-start-1 md:col-span-6 lg:col-start-1 lg:col-span-4">
                    <h3 className="text-[--light-primary] mb-5">Add new line</h3>
                    <p className="text-[--dark-secondary] mb-5">The journey has been divided in 6 steps where the user has to input all the required information to complete the action.</p>
                    <p className="text-[--dark-secondary] mb-5">The layout is composed of 2 columns:</p>
                    <ul className="list-disc pl-8 mb-6">
                        <li className="text-[--dark-secondary] mb-2">Left column shows the first request to the user such as “Department selection”</li>
                        <li className="text-[--dark-secondary] mb-2">Right column shows related information to be filled based on the first request</li>
                    </ul>  
                    <p className="text-[--dark-secondary] mb-5">The user can go to the next step only if all the required info are inputted, while he can go back to any previous step with the related “Edit” link.</p>
                    <p className="text-[--dark-secondary] mb-5">Once the process is completed a successful message is displayed and it shows the updated number of lines with useful information.</p>
                    </div>
                
                    <div className="md:col-start-1 md:col-span-12 lg:col-start-6 lg:col-span-7">
                        <Image src={threeukAddLine} width={709} height={743} alt="Wireframe for the journey Add a line" className="w-full block md:mb-10 mt-10 md:mt-0"/>
                    </div>
                </div>

                <div className="grid md:grid md:grid-cols-12 md:items-center">
                    <div className="order-last lg:order-first md:col-start-1 md:col-span-12 lg:col-start-1 lg:col-span-7">
                    <Image src={threeukRaiseCase} width={712} height={633} alt="Wireframe for the journey Raise a case" className="w-full block md:mb-10 mt-10 md:mt-0"/>
                    </div>

                    <div className="order-first lg:order-last md:col-start-1 md:col-span-6 lg:col-start-9 lg:col-span-4 mt-20 md:mt-0">
                        <h3 className="text-[--light-primary] mt-2 md:mt-0 mb-5">Raise a case</h3>
                        <p className="text-[--dark-secondary] mb-5">The layout is a simple one column that clearly shows the form with all the required information to raise a case.</p>
                        <p className="text-[--dark-secondary] mb-5">If users have a dedicated Customer Success Manager, the related box with its name, surname and contact number is displayed before the form.</p>
                        <p className="text-[--dark-secondary] mb-5">Once the process is completed a succesfull message is displayed and it shows the case reference number  with useful related information.</p>
                    </div>                    
                </div>

            </div>
          </div>

          <div className="w-screen bg-[--dark-primary] px-5 sm:px-10 pt-32 pb-10">
            <div className="relative container max-w-screen-xl mx-auto">
              <div className="md:grid md:grid-cols-12">
                <div className="md:col-start-1 md:col-span-6 lg:col-start-1 lg:col-span-4">
                  <span className="block text-[15px] text-[--dark-secondary]">8 / 9</span>
                  <h2 className="text-[--light-primary] mt-3 mb-8">Preparing final prototype to deliver the MVP</h2>
                  <p className="text-[--dark-secondary] mb-5">All wireframes were finalized and ready to create the interactive prototype for the MVP.</p>
                  <p className="text-[--dark-secondary] mb-5">I added smooth animations on every customer journeys of the MVP and I focused on little details like loaders and error messages.</p>
                  <p className="text-[--dark-secondary] mb-5">The prototype has one entry point from where you can start interactive with the dashboard and test the customer journeys.</p>
                  <div className="mb-14">
                    <ExternalTextLink color="light" href="" text="View prototype in Figma" />
                  </div>                 
                </div>
              </div>
              <Image src={threeukFigmaPrototype} width={1233} height={501} alt="Interactive prototype in Figma" className="w-full block mb-10"/>
            </div>
          </div>

          <div className="w-screen bg-[--dark-primary] px-5 sm:px-10 pt-10 pb-20 sm:pb-40">
            <div className="relative container max-w-screen-xl mx-auto">

              <div className="md:grid md:grid-cols-12">
                <div className="md:col-start-1 md:col-span-6 lg:col-start-1 lg:col-span-4">
                  <span className="block text-[15px] text-[--dark-secondary]">9 / 9</span>
                  <h2 className="text-[--light-primary] mt-3 mb-8">Evolution of the user interface created by the UI team</h2>
                  <p className="text-[--dark-secondary] mb-5">While I was working on the wireframes, in parallel the UI team was creating different version of the UI. Here some visuals of the dashboard UI evolution.</p>              
                </div>
              </div>

              <div className="relative container max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-2 mt-10 md:mt-5 bg-[--dark-primary]">
                <div className="md:col-start-1 md:col-span-4">
                  <Image src={threeukFinalUI1} width={390} height={320} alt="Dashboard final user interface screen" className="w-full block"/>
                </div>
                <div className="md:col-start-5 md:col-span-4">
                  <Image src={threeukFinalUI2} width={390} height={320} alt="Dashboard final user interface screen" className="w-full block"/>
                </div>
                <div className="md:col-start-9 md:col-span-4">
                  <Image src={threeukFinalUI3} width={390} height={320} alt="Dashboard final user interface screen" className="w-full block"/>
                </div>
                <div className="md:col-start-1 md:col-span-4">
                  <Image src={threeukFinalUI4} width={390} height={320} alt="Dashboard final user interface screen" className="w-full block"/>
                </div>
                <div className="md:col-start-5 md:col-span-4">
                  <Image src={threeukFinalUI5} width={390} height={320} alt="Dashboard final user interface screen" className="w-full block"/>
                </div>
                <div className="md:col-start-9 md:col-span-4">
                  <Image src={threeukFinalUI6} width={390} height={320} alt="Dashboard final user interface screen" className="w-full block"/>
                </div>
              </div>

              <div className="md:grid md:grid-cols-12 mt-10 mb-5">
                <div className="md:col-start-1 md:col-span-6 lg:col-start-1 lg:col-span-4">               
                  <h3 className="text-[--light-primary] mt-10 mb-5">Final UI mockups</h3>
                  <p className="text-[--dark-secondary] mb-0">Active side navigation</p>
                </div>
              </div>  
              <Image src={threeukMockup1} width={1234} height={785} alt="Dashboard final user interface mockup" className="w-full rounded-[20px] block mb-10"/>   

              <div className="md:grid md:grid-cols-12 mt-20">
                <div className="md:col-start-1 md:col-span-6 lg:col-start-1 lg:col-span-4">               
                  <p className="text-[--dark-secondary] mb-5">Collapsed side navigation</p>
                </div>
              </div>    
              <Image src={threeukMockup2} width={1234} height={785} alt="Dashboard final user interface mockup" className="w-full rounded-[20px] block mb-10"/>            

            </div>
          </div>

        </div>

       {/* Results section */}
       <div className="relative w-screen bg-[--light-primary] px-5 sm:px-10 mt-16 sm:mt-10">
       <span className="text-[80px] ml-[-40px] sm:text-[120px] sm:ml-[-70px] md:text-[240px] md:ml-[-70px] font-bold text-[--dark-secondary] opacity-20">Results</span>
          <div className="relative container max-w-screen-sm mx-auto mt-0 md:mt-[-115px]">
            <p className="uppercase text-[19px] leading-[23px] md:text-[21px] md:leading-[27px] text-[--dark-primary] mb-10">In just 2 months, we successfully met client expectations by providing all necessary information and materials, enabling the client to make informed decisions about the portal's development.</p>
            <p className="uppercase text-[19px] leading-[23px] md:text-[21px] md:leading-[27px] text-[--dark-primary] mb-10">We delivered an interactive MVP that addressed the three key user journeys and presented the requested features. </p>
            <p className="uppercase text-[19px] leading-[23px] md:text-[21px] md:leading-[27px] text-[--dark-primary] mb-10">Additionally, we began exploring advanced features (despite them being out of scope) that, based on our research findings, could significantly impact the product. These included dashboard customization and advanced search capabilities.</p>
          </div>
        </div>

        {/* Next cases section */}
        <div className="relative w-screen bg-[--light-primary] px-5 sm:px-10 mt-16 sm:mt-10">
          <span className="text-[80px] ml-[-40px] sm:text-[120px] whitespace-nowrap sm:ml-[-70px] md:text-[240px] md:ml-[-70px] font-bold text-[--dark-secondary] opacity-20">Next Cases</span>          
          <div className="md:flex md:justify-between container max-w-screen-xl mx-auto mt-5 md:mt-[-40px] relative z-[50]">
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
                  url="/case-studies/sky-home-move"
                  title="Sky Home Move"
                  subtitle="Mobile app digital service"
                  thumbSrc={skyThumb}
                />
              </div>     
          </div>
        </div>       
            
      <ReserveFreeCall />
      <ContactBanner />    
       
      </div>
  );
}
