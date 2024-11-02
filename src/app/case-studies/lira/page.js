import Image from "next/image";
import ExternalTextLink from "@/components/ExternalTextLink";
import ReserveFreeCall from "@/components/ReserveFreeCall";
import ContactBanner from "@/components/ContactBanner";
import liraCover from '../../../public/caseStudies/lira/lira-cover.jpg';
import CaseCard from "@/components/caseStudies/CaseCard";
import unicaThumb from '../../../public/caseStudies/thumbnails/unica-thumbnail.jpg';
import skyThumb from '../../../public/caseStudies/thumbnails/sky-thumbnail.jpg';
import liraAnalysis from '../../../public/caseStudies/lira/lira-analysis.png';
import liraSitemap from '../../../public/caseStudies/lira/lira-sitemap.jpg';
import liraWireframe from '../../../public/caseStudies/lira/lira-wireframe.png';
import liraRalewayRegular from '../../../public/caseStudies/lira/lira-raleway-regular.png';
import liraRalewaySemibold from '../../../public/caseStudies/lira/lira-raleway-semibold.png';
import liraRalewayBold from '../../../public/caseStudies/lira/lira-raleway-bold.png';
import liraUIHome from '../../../public/caseStudies/lira/lira-ui-home.png';
import liraWaterHeatServices from '../../../public/caseStudies/lira/lira-water-heat-services.png';
import liraTenantsPage from '../../../public/caseStudies/lira/lira-tenants-dedicated-page.png';
import liraTenantsSubpages from '../../../public/caseStudies/lira/lira-tenants-subpages.png';
import liraAdminPage from '../../../public/caseStudies/lira/lira-admin-dedicated-page.png';
import liraAdminLeadFunnel from '../../../public/caseStudies/lira/lira-admin-lead-generation.png';
import liraAdminSubpages from '../../../public/caseStudies/lira/lira-admin-subpages.png';
import liraPrototype from '../../../public/caseStudies/lira/lira-prototype.jpg';
import liraChatbot from '../../../public/caseStudies/lira/lira-chatbot.png';


export default function CaseStudies() {
  return (
      <div className="">
        <div className="w-screen bg-[--light-primary] px-5 sm:px-10 pt-[20vh] sm:pt-[30vh]">
          <div className="relative container max-w-screen-xl mx-auto">
            <div className="block">
              <h1 className="mb-5">L.I.R.A.</h1>
              <p className="text-[--dark-secondary] text-[17px] leading-[23px] sm:text-[21px] sm:leading-[27px] uppercase mb-10 sm:max-w-screen-sm">Building the new corporate website to improve content structure and accessibility, integrating an autoamted chatbot for customer support</p>
              <Image src={liraCover} width={1235} height={785} alt="Lira corporare website mockup" className="rounded-[40px] w-full block mb-10"/>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
                
                  <div className="mb-5">
                    <p className="text-[--dark-secondary]">Client</p>
                    <p className="">L.I.R.A. Spa</p>
                  </div>
                
                  <div className="mb-5">
                    <p className="text-[--dark-secondary]">Field</p>
                    <p className="">Public services</p>
                  </div>
              
                  <div className="mb-5">
                    <p className="text-[--dark-secondary]">Agency</p>
                    <p className="">iDigit Group</p>
                  </div>

                  <div className="mb-5">
                    <p className="text-[--dark-secondary]">Period</p>
                    <p className="">Feb - Mar 2022</p>
                  </div>
              
                  <div className="mb-5">
                    <p className="text-[--dark-secondary]">Role</p>
                    <p className="">UX UI<br/>Front-end dev</p>
                  </div>

                  <div className="mb-5">
                    <ExternalTextLink color="dark" href="https://www.lirabo.com/" target="_blank" text="View live website" />
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
                  <p className="text-[--dark-secondary] mb-5">L.I.R.A. is a company with 50 years of experience in providing water and heating public services in Bologna, Italy. Committed to enhancing their offerings, they prioritize delivering flawless customer service.</p>
                  <p className="text-[--dark-secondary] mb-5">At the beginning of 2022, I joined the <a href="https://idigitgroup.it/" target="_blank" className="underline text-[--dark-primary]">iDigit Group</a> design team for two months to completely redesign and launch the new L.I.R.A. website.</p>
                  <p className="text-[--dark-secondary] mb-5">I collaborated closely with <a href="https://adrianome.com/" target="_blank" className="underline text-[--dark-primary]">Adriano Mescia</a>, a professional UX-UI Designer with whom I had previously worked on other projects. Together, we managed all phases of the website re-design, from its initial concept to the online release.</p>
                </div>
              </div>

              <div className="mt-20 md:mt-[-80px] md:grid md:grid-cols-12 md:gap-4">
                <div className="md:col-start-8 md:col-span-5 lg:col-start-8 lg:col-span-4">
                  <h2 className="mb-3">Project statement</h2>
                  <p className="text-[--dark-secondary] mb-5">The client aimed to create a new corporate website with a clear content organization and a fresh, modern look and feel.</p>
                  <p className="text-[--dark-secondary] mb-3">The main objectives were:</p>           
                  <ul className="list-disc pl-8">
                    <li className="text-[--dark-secondary] mb-2">Defining a new sitemap with a structured content organization</li>
                    <li className="text-[--dark-secondary] mb-2">Creating funnels to generate leads from potential new clients (apartment building administrators)</li>
                    <li className="text-[--dark-secondary] mb-2">Implementing an automated solution to enhance customer assistance</li>
                  </ul>  
                </div>           
              </div>

              <div className="mt-20 md:mt-[-80px] md:grid md:grid-cols-12 md:gap-4">
                <div className="md:col-start-1 md:col-span-5 lg:col-start-2 lg:col-span-4">
                  <h2 className="mb-3">Users</h2>
                  <p className="text-[--dark-secondary] mb-3">L.I.R.A.'s users are people between 35 and 55 years old who reside in Bologna. The target audience is categorized into two distinct groups:</p>
                  <ul className="list-disc pl-8">
                    <li className="text-[--dark-secondary] mb-2"><span className="font-bold">Final users (tenants)</span> - They use the website to access information and pay their bills.</li>
                    <li className="text-[--dark-secondary] mb-2"><span className="font-bold">Apartment building administrators</span> - They leverage L.I.R.A.'s services to manage water and heating systems for their buildings.</li>
                  </ul>  
                </div>
              </div>

              <div className="mt-20 md:mt-[-80px] md:grid md:grid-cols-12 md:gap-4">
                <div className="md:col-start-8 md:col-span-5 lg:col-start-8 lg:col-span-4">
                  <h2 className="mb-3">Responsibilities</h2>
                  <p className="text-[--dark-secondary] mb-3">I managed all project phases alongside Adriano Mescia. Our specific tasks included:</p>
                  <ul className="list-disc pl-8">
                    <li className="text-[--dark-secondary] mb-2">Understanding business requirements and managing client expectations</li>
                    <li className="text-[--dark-secondary] mb-2">Creating the new information architecture for the website</li>
                    <li className="text-[--dark-secondary] mb-2">Designing wireframes for both desktop and mobile devices</li>
                    <li className="text-[--dark-secondary] mb-2">Developing the final UI and creating an interactive prototype to present to the client</li>
                    <li className="text-[--dark-secondary] mb-2">Conducting meetings with the client to showcase our work, gather feedback, and implement changes</li>
                    <li className="text-[--dark-secondary] mb-2">Developing and deploying the website using the WordPress CMS</li>
                    <li className="text-[--dark-secondary] mb-2">Creating automated funnels for customer assistance using TypeForm</li>
                  </ul>              
                </div>           
              </div>

              <div className="mt-20 md:mt-[-80px] md:grid md:grid-cols-12 md:gap-4">
                <div className="md:col-start-1 md:col-span-5 lg:col-start-2 lg:col-span-4">
                <h2 className="mb-3">Design process</h2>
                  <p className="text-[--dark-secondary] mb-5">The project was organized into design sprints, each lasting 2 weeks. At the end of every week, we held meetings with the client to present our progress and gather feedback. We repeated this process for 2 months leading up to the website's online release, ensuring that client expectations were met and deadlines were respected.</p>
                  <p className="text-[--dark-secondary] mb-3">The design process was structured into 5 phases:</p>
                  <ul className="list-decimal pl-8">
                    <li className="text-[--dark-secondary] mb-2">Structuring the website's information architecture and designing the chatbot flow for the automated customer care service</li>
                    <li className="text-[--dark-secondary] mb-2">Designing wireframes with an interactive prototype in Figma (for both mobile and desktop)</li>
                    <li className="text-[--dark-secondary] mb-2">Creating the visual design and finalizing the interactive prototype</li>
                    <li className="text-[--dark-secondary] mb-2">Developing the website on WordPress and deploying it online</li>
                    <li className="text-[--dark-secondary] mb-5">Developing the chatbot flow with TypeForm and integrating it with WordPress CMS</li>
                  </ul>          
                  <p className="text-[--dark-secondary] mb-5">Adriano and I focused on different sections of the project while ensuring alignment in design decisions. Meanwhile, the copywriter analyzed the content of the old website to develop the new content. This collaborative approach allowed us to present an interactive prototype of the final website with real content instead of placeholder text.</p>
                </div>
              </div>

              <div className="mt-20 md:mt-[-80px] md:grid md:grid-cols-12 md:gap-4">
                <div className="md:col-start-8 md:col-span-5 lg:col-start-8 lg:col-span-4">
                  <h2 className="mb-3">Scope and constraints</h2>
                  <p className="text-[--dark-secondary] mb-5">We aimed to create a new website for L.I.R.A. to enhance their online communication with customers by providing clear content organization and an automated chatbot for customer care. Additionally, we thought to increase opportunities for generating leads from potential clients through structured funnels that guide users to get in touch with the company.</p>
                  <p className="text-[--dark-secondary] mb-5">The website also features a user portal. However, this component is managed by a third party and was therefore out of scope for our project.</p>
                  <p className="text-[--dark-secondary] mb-5">Given the tight deadline and the small team of just two people (with external support from the copywriter), we structured the project efficiently using agile methodology. The client was highly responsive, facilitating quick feedback turnaround.</p>
                </div>           
              </div>

            </div>
          </div>

        {/* Highlight section */}
        <div>

          <div className="w-screen bg-[--dark-primary] px-5 sm:px-10 pt-20 pb-10 mt-20">
            <span className="text-[80px] ml-[-40px] sm:text-[120px] sm:ml-[-70px] md:text-[240px] md:ml-[-70px] font-bold text-[--dark-secondary] opacity-20">Highlights</span>
            <div className="relative container max-w-screen-xl mx-auto">
              <div className="md:grid md:grid-cols-12 md:items-center">
                <div className="md:col-start-1 md:col-span-6 lg:col-start-1 lg:col-span-4">
                  <span className="block text-[15px] text-[--dark-secondary]">1 / 7</span>
                   <h2 className="text-[--light-primary] mt-3 mb-8">Interviewing client to define business priorities and analyzing data to understand user navigation flow</h2>
                  <p className="text-[--dark-secondary] mb-5">Before starting the project, we had a couple of calls with the client to clarify priorities and expectations. </p>
                  <p className="text-[--dark-secondary] mb-5">Afterward, I analyzed Google Analytics data from the old website to understand user navigation patterns, identify areas for improvement, and have an overview of web vitals.</p>
                </div>
                
                <div className="md:col-start-1 md:col-span-12 lg:col-start-6 lg:col-span-7">
                  <Image src={liraAnalysis} width={710} height={413} alt="Website analysis before starting the wireframe" className="w-full block mb-10"/>
                </div>
              </div>
            </div>
          </div>

          <div className="w-screen bg-[--dark-primary] px-5 sm:px-10 pt-10 pb-10">
            <div className="relative container max-w-screen-xl mx-auto">
              <div className="md:grid md:grid-cols-12">
                <div className="md:col-start-1 md:col-span-6 lg:col-start-1 lg:col-span-4">
                  <span className="block text-[15px] text-[--dark-secondary]">2 / 7</span>
                  <h2 className="text-[--light-primary] mt-3 mb-8">Defining the sitemap with a new information architecture for better content organization</h2>
                  <p className="text-[--dark-secondary] mb-5">The sitemap was structured with a focus on two user groups (tenants and administrators) and the two services provided (water and heating). </p>
                  <p className="text-[--dark-secondary] mb-5">Each user group features subpages highlighting the benefits of being a L.I.R.A. client and providing useful information about the services.</p>
                  <p className="text-[--dark-secondary] mb-5">The administrator area includes customized funnels to generate leads from potential clients based on their specific service requirements.</p>
                </div>
              </div>
              <Image src={liraSitemap} width={1233} height={822} alt="Sitemap with new content organization of the website" className="w-full block mt-10 mb-10"/>
            </div>
          </div>

          <div className="w-screen bg-[--dark-primary] px-5 sm:px-10 pt-10 pb-10">
            <div className="relative container max-w-screen-xl mx-auto">
              <div className="md:grid md:grid-cols-12">
                <div className="md:col-start-1 md:col-span-6 lg:col-start-1 lg:col-span-4">
                  <span className="block text-[15px] text-[--dark-secondary]">3 / 7</span>
                  <h2 className="text-[--light-primary] mt-3 mb-8">Designing wireframes for both desktop and mobile devices</h2>
                  <p className="text-[--dark-secondary] mb-5">After defining the sitemap, we proceeded to design high-fidelity wireframes for all pages, both for desktop and mobile devices.</p>
                  <p className="text-[--dark-secondary] mb-5">Our goal was to provide the client with a clear understanding of the website layout and navigation, ensuring their approval before moving on to the next phase without any concerns about the page structure.  We designed over 50 pages.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-screen bg-gradient-to-br from-[#0098B8] to-[#FDFF9D]">
            <Image src={liraWireframe} width={1680} height={915} alt="Mix of wireframes designed for Lira's website" className="w-full block"/>
          </div>

          <div className="w-screen bg-[--dark-primary] px-5 sm:px-10 pt-28 pb-0">
            <div className="relative container max-w-screen-xl mx-auto">
              <div className="md:grid md:grid-cols-12">
                <div className="md:col-start-1 md:col-span-6 lg:col-start-1 lg:col-span-4">
                  <span className="block text-[15px] text-[--dark-secondary]">4 / 7</span>
                  <h2 className="text-[--light-primary] mt-3 mb-8">Defining the color palette and typography</h2>
                  <p className="text-[--dark-secondary] mb-5">The primary palette features warm and cool colors (representing heat and water) along with the brand’s  tones.  Vibrant light blue and orange effectively highlight key business areas and attract user attention for calls to action.</p>
                  <p className="text-[--dark-secondary] mb-5">The secondary palette uses lighter colors to create contrast in backgrounds and secondary UI elements. </p>
                  <p className="text-[--dark-secondary] mb-5">The chosen font family is Raleway, a modern, elegant sans-serif Google font that maintains an institutional feel.</p>
                </div>
              </div>

              
              <h3 className="md:col-start-1 md:col-span-6 text-[--light-primary] mt-10">Primary palette</h3>
              <div className="grid md:grid-cols-12 mt-5 gap-2">
                <div className="col-start-1 col-span-6 md:col-span-3 h-[160px] bg-[#003340]"></div>
                <div className="col-start-7 col-span-6 md:col-span-3 h-[160px] bg-[#00667F]"></div>
                <div className="col-start-1 col-span-6 md:col-span-3 h-[160px] bg-[#00A6D6]"></div>
                <div className="col-start-7 col-span-6 md:col-span-3 h-[160px] bg-[#FF7801]"></div>
              </div>

              <h3 className="md:col-start-1 md:col-span-6 text-[--light-primary] mt-14">Secondary palette</h3>
              <div className="grid md:grid-cols-10 mt-5 gap-2">
                <div className="col-start-1 col-span-2 md:col-span-2 h-[80px] md:h-[160px] bg-[#7A7A7A]"></div>
                <div className="col-start-3 col-span-2 md:col-span-2 h-[80px] md:h-[160px] bg-[#F5F5F5]"></div>
                <div className="col-start-5 col-span-2 md:col-span-2 h-[80px] md:h-[160px] bg-[#FFFFFF]"></div>
                <div className="col-start-7 col-span-2 md:col-span-2 h-[80px] md:h-[160px] bg-[#D8F2FA]"></div>
                <div className="col-start-9 col-span-2 md:col-span-2 h-[80px] md:h-[160px] bg-[#FEA901]"></div>
              </div>

              <h3 className="md:col-start-1 md:col-span-6 text-[--light-primary] mt-14">Font family: Roboto</h3>
              <div className="grid md:grid md:grid-cols-12 mt-5 gap-2">
                <div className="block md:col-start-1 md:col-span-4 bg-[--dark-background] rounded-[10px] p-8">
                  <p className="text-[--light-primary] opacity-50 mb-5">Regular</p>
                  <Image src={liraRalewayRegular} width={332} height={119} alt="Raleway font: regular weight" className="w-full block"/>
                </div>
                <div className="md:col-start-5 md:col-span-4 bg-[--dark-background] rounded-[10px] p-8">
                  <p className="text-[--light-primary] opacity-50 mb-5">Semibold</p>
                  <Image src={liraRalewaySemibold} width={332} height={119} alt="Raleway font: semibold weight" className="w-full block"/>
                </div>
                <div className="md:col-start-9 md:col-span-4 bg-[--dark-background] rounded-[10px] p-8">
                  <p className="text-[--light-primary] opacity-50 mb-5">Bold</p>
                  <Image src={liraRalewayBold} width={332} height={119} alt="Raleway font: bold weight" className="w-full block"/>
                </div>
              
              </div>

            </div>
          </div>

          <div className="w-screen bg-[--dark-primary] px-5 sm:px-10 pt-28 pb-10">
            <div className="relative container max-w-screen-xl mx-auto">
              <div className="md:grid md:grid-cols-12">
                <div className="md:col-start-1 md:col-span-6 lg:col-start-1 lg:col-span-4">
                  <span className="block text-[15px] text-[--dark-secondary]">5 / 7</span>
                  <h2 className="text-[--light-primary] mt-3 mb-8">Designing the final user interface using modular blocks</h2>
                  <p className="text-[--dark-secondary] mb-5">The modular blocks, established during the wireframing phase, allowed us to reuse content elements across different sections of the website.</p>
                  <p className="text-[--dark-secondary] mb-5">The user interface is built from these modular blocks, designed in line with our defined guidelines for color palette and typography, complemented by custom vector illustrations.</p>
                  <p className="text-[--dark-secondary] mb-5">This approach ensured the website’s content remained visually engaging and unique, avoiding the generic look of standard stock images.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-screen bg-[--dark-primary] px-5 sm:px-10 pb-10">
            <div className="relative container max-w-screen-xl mx-auto">
              <div className="md:grid md:grid-cols-12 md:items-center">
                <div className="md:col-start-1 md:col-span-6 lg:col-start-1 lg:col-span-4">
                  <h3 className="text-[--light-primary] mb-5">Homepage</h3>
                  <p className="text-[--dark-secondary] mb-5">The homepage opens with a clear brand proposition, followed by two highlighted sections representing the main service areas: Water and Heating.</p>
                  <p className="text-[--dark-secondary] mb-5">Next, a dedicated section showcases key services for end-users (tenants), with a CTA to explore all available services.</p>
                  <p className="text-[--dark-secondary] mb-5">Following a similar structure but with distinct visual styling, the next section focuses on services for apartment building administrators.</p>
                  <p className="text-[--dark-secondary] mb-5">At the bottom of the page, we provide  resources for both audiences, including saving guides, helpful links, and a dedicated customer support area with multiple CTAs for contacting L.I.R.A.</p>
               </div>
                
                <div className="md:col-start-1 md:col-span-12 lg:col-start-6 lg:col-span-7">
                  <Image src={liraUIHome} width={710} height={866} alt="Lira final user interface for the homepage" className="w-full block md:mb-10 mt-10 md:mt-0"/>
                </div>
              </div>

              <div className="grid md:grid md:grid-cols-12 md:items-center pt-0 md:pt-20">
                <div className="order-last lg:order-first md:col-start-1 md:col-span-12 lg:col-start-1 lg:col-span-7">
                  <Image src={liraWaterHeatServices} width={719} height={910} alt="Water and Heat service pages" className="w-full block md:mb-10 mt-10 md:mt-0"/>
                </div>

                <div className="order-first lg:order-last md:col-start-1 md:col-span-6 lg:col-start-9 lg:col-span-4 mt-20 md:mt-0">
                  <h3 className="text-[--light-primary] md:mt-0 mb-5">Main services: Water and Heating</h3>
                  <p className="text-[--dark-secondary] mb-5">The main service areas use distinct color schemes to visually distinguish each focus area: Water and Heating.</p>
                  <p className="text-[--dark-secondary] mb-5">Both pages feature a tabbed navigation below the main header to display content for different audiences (tenants and administrators).</p>
                  <p className="text-[--dark-secondary] mb-5">Content highlights the benefits of each service, encouraging users to log in to their private area or register for full access.</p>
                </div>              
        
              </div>

              <div className="md:grid md:grid-cols-12 md:items-center pt-0 md:pt-20">
                <div className="md:col-start-1 md:col-span-6 lg:col-start-1 lg:col-span-4 mt-20 md:mt-0">
                  <h3 className="text-[--light-primary] md:mt-0 mb-5">Tenants dedicated page</h3>
                  <p className="text-[--dark-secondary] mb-5">The main page for tenant users incorporates the same service content blocks used on the homepage, providing a consistent user experience.</p>
                  <p className="text-[--dark-secondary] mb-5">Following the list of main services, along with CTAs to explore all options, a dedicated payments section outlines various payment methods and their benefits.</p>
                  <p className="text-[--dark-secondary] mb-5">Next, a resources section allows users to download common documents or visit a dedicated page for additional resources.</p>
                  <p className="text-[--dark-secondary] mb-5">The page closes with a section featuring useful content and customer support options.</p>
               </div>
                
                <div className="md:col-start-1 md:col-span-12 lg:col-start-6 lg:col-span-7">
                  <Image src={liraTenantsPage} width={720} height={866} alt="Tenant users dedicated page" className="w-full block md:mb-10 mt-10 md:mt-0"/>
                </div>
              </div>        
            </div>
          </div>

          <div className="w-screen bg-[--dark-primary] px-5 sm:px-10 pt-10 pb-5">
            <div className="relative container max-w-screen-xl mx-auto">
              <div className="md:grid md:grid-cols-12">
                <div className="md:col-start-1 md:col-span-6 lg:col-start-1 lg:col-span-4">
                  <h3 className="text-[--light-primary] mb-5">Tenants subpages for desktop and mobile devices</h3>
                  <p className="text-[--dark-secondary] mb-5">Below is a quick overview of the tenant user subpages, including Services, Payments, Support, Saving Guides, Modules, Useful Links, and more.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-screen bg-gradient-to-br from-[#0098B8] to-[#FDFF9D]">
            <Image src={liraTenantsSubpages} width={1680} height={915} alt="Tenant users subpages" className="w-full block"/>
          </div>

          <div className="w-screen bg-[--dark-primary] px-5 sm:px-10 pt-10 pb-10">
            <div className="relative container max-w-screen-xl mx-auto">
              <div className="md:grid md:grid-cols-12 md:items-center pt-0 md:pt-20">
                <div className="md:col-start-1 md:col-span-6 lg:col-start-1 lg:col-span-4 mt-20 md:mt-0">
                    <h3 className="text-[--light-primary] md:mt-0 mb-5">Administrators dedicated page</h3>
                    <p className="text-[--dark-secondary] mb-5">The page opens with a main header featuring the brand proposition for administrator users, accompanied by related CTAs for logging into the private area or registering.</p>
                    <p className="text-[--dark-secondary] mb-5">Next, the three primary services for this audience are prominently listed, each paired with custom illustrations and clear CTAs directing users to the dedicated pages.</p>
                    <p className="text-[--dark-secondary] mb-5">At the bottom, there is a section encouraging users to log in or register, along with the user support block.</p>
                </div>
                  
                  <div className="md:col-start-1 md:col-span-12 lg:col-start-6 lg:col-span-7">
                    <Image src={liraAdminPage} width={720} height={755} alt="Administrator users dedicated page" className="w-full block"/>
                  </div>
              </div>  
            </div>
          </div>

          <div className="w-screen bg-[--dark-primary] px-5 sm:px-10 pt-10 pb-10">
            <div className="relative container max-w-screen-xl mx-auto">
              <div className="md:grid md:grid-cols-12">
                <div className="md:col-start-1 md:col-span-6 lg:col-start-1 lg:col-span-4">
                  <h3 className="text-[--light-primary] md:mt-0 mb-5">Administrator services pages and lead generation funnels</h3>
                  <p className="text-[--dark-secondary] mb-5">The service pages showcase features and benefits along with useful information such as installation and maintenance processes, document previews, and more.</p>
                  <p className="text-[--dark-secondary] mb-5">Dedicated CTAs for requesting a quote are positioned in the main header and after the main content. </p>
                  <p className="text-[--dark-secondary] mb-5">Users are redirected to a new page with a form to provide the necessary information for the quote request. </p>
                  <p className="text-[--dark-secondary] mb-5">Upon completing the form, users are taken to a thank-you page displaying a confirmation message, along with information about next steps and other main services.</p>
                </div>
              </div>
              <Image src={liraAdminLeadFunnel} width={1226} height={894} alt="Lead generation funnel for administators based on the service" className="w-full block mt-10"/>
            </div>
          </div>

          <div className="w-screen bg-[--dark-primary] px-5 sm:px-10 pt-10 pb-5">
            <div className="relative container max-w-screen-xl mx-auto">
              <div className="md:grid md:grid-cols-12">
                <div className="md:col-start-1 md:col-span-6 lg:col-start-1 lg:col-span-4">
                  <h3 className="text-[--light-primary] mb-5">Administrators subpages for desktop and mobile devices</h3>
                  <p className="text-[--dark-secondary] mb-5">Below is a quick overview of the administrator user subpages, including Services, Support, Useful Links, and more.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-screen bg-gradient-to-br from-[#0098B8] to-[#FDFF9D]">
            <Image src={liraAdminSubpages} width={1680} height={915} alt="Administrator users subpages" className="w-full block"/>
          </div>

          <div className="w-screen bg-[--dark-primary] px-5 sm:px-10 pt-28 pb-0">
            <div className="relative container max-w-screen-xl mx-auto">
              <div className="md:grid md:grid-cols-12 md:items-center">
                <div className="md:col-start-1 md:col-span-6 lg:col-start-1 lg:col-span-4">
                  <span className="block text-[15px] text-[--dark-secondary]">6 / 7</span>
                   <h2 className="text-[--light-primary] mt-3 mb-8">Creating an interactive prototype for final review before starting the development phase</h2>
                  <p className="text-[--dark-secondary] mb-5">At this stage, we had finalized the user interface for both desktop and mobile devices, incorporating the  content provided by the copywriter. </p>
                  <p className="text-[--dark-secondary] mb-5">We built an interactive prototype to allow the client to navigate the website pages, provide final feedback to refine the last details, and approve the user interface to proceed with the development phase.</p>
                  <div className="mb-5">
                    <ExternalTextLink color="light" href="https://www.figma.com/proto/GG2qcdl5R0cNxcNYXllN0G/Lira-Bo?node-id=322-40997&node-type=canvas&t=2tBGmqtepdyLwD0V-0&scaling=min-zoom&content-scaling=fixed&page-id=170%3A11424&starting-point-node-id=322%3A40997&hide-ui=1" target="_blank" text="View prototype in Figma" />
                  </div>
                </div>
                
                <div className="md:col-start-1 md:col-span-12 lg:col-start-6 lg:col-span-7">
                  <Image src={liraPrototype} width={710} height={571} alt="Lira ptototype flow created in Figma" className="w-full block mt-10 md:mt-0"/>
                </div>
              </div>
            </div>
          </div>

          <div className="w-screen bg-[--dark-primary] px-5 sm:px-10 pt-28 pb-5">
            <div className="relative container max-w-screen-xl mx-auto">
              <div className="md:grid md:grid-cols-12">
                <div className="md:col-start-1 md:col-span-6 lg:col-start-1 lg:col-span-4">
                  <span className="block text-[15px] text-[--dark-secondary]">7 / 7</span>
                  <h2 className="text-[--light-primary] mt-3 mb-8">Chatbot creation with Typeform and implementation on WordPress website</h2>
                  <p className="text-[--dark-secondary] mb-5">The chatbot is designed to assist customers in obtaining information, finding specific services, or contacting the appropriate technical office.</p>
                  <p className="text-[--dark-secondary] mb-5">The first step involved creating the chatbot flowchart, outlining the required user information, questions, answers, and useful links. Next, I developed the chatbot flow in <a href="https://www.typeform.com/" target="_blank" className="underline text-[--light-primary]">Typeform</a>, tested it, and integrated it with the WordPress CMS.</p>
                  <p className="text-[--dark-secondary] mb-5">Users can interact with the chatbot by clicking the fixed icon placed in the bottom right corner of the website. </p>
                  <p className="text-[--dark-secondary] mb-5">For the laptop integration, I chose a small frame layout similar to Messenger or WhatsApp, ensuring it doesn’t obscure the page content. In contrast, the layout is full screen on mobile devices.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-screen bg-[--dark-primary] pb-20 sm:pb-40">
            <Image src={liraChatbot} width={1659} height={916} alt="Chatbot flow and integration on WordPress website" className="w-full block mb-10"/>
          </div>


        </div>

       

       {/* Results section */}
       <div className="relative w-screen bg-[--light-primary] px-5 sm:px-10 mt-16 sm:mt-10">
          <span className="text-[80px] ml-[-40px] sm:text-[120px] sm:ml-[-70px] md:text-[240px] md:ml-[-70px] font-bold text-[--dark-secondary] opacity-20">Results</span>
          <div className="relative container max-w-screen-sm mx-auto mt-0 md:mt-[-115px]">
            <p className="uppercase text-[19px] leading-[23px] md:text-[21px] md:leading-[27px] text-[--dark-primary] mb-10">Client expectations were fully met, allowing users to easily access information about L.I.R.A.'s services through the new content organization of the website. In addition users now have an automated digital service for customer assistance that is always available to help.</p>
            <p className="uppercase text-[19px] leading-[23px] md:text-[21px] md:leading-[27px] text-[--dark-primary] mb-10">Lead generation from potential customers has increased thanks to the structured funnels, enabling users interested in L.I.R.A.'s services to make inquiries or request quotes and consultations with experts.</p>
            <p className="uppercase text-[19px] leading-[23px] md:text-[21px] md:leading-[27px] text-[--dark-primary] mb-5">The client has full control over the website's content and can make minor edits independently using the WordPress CMS, as requested.</p>
          </div>
        </div>

        {/* Next cases section */}
        <div className="relative w-screen bg-[--light-primary] px-5 sm:px-10 mt-16 sm:mt-10">
          <span className="text-[80px] ml-[-40px] sm:text-[120px] whitespace-nowrap sm:ml-[-70px] md:text-[240px] md:ml-[-70px] font-bold text-[--dark-secondary] opacity-20">Next Cases</span>          
          <div className="md:flex md:justify-between container max-w-screen-xl mx-auto mt-5 md:mt-[-40px] relative z-[50]">
              <div className=" md:mr-5">
                <CaseCard 
                  url="/case-studies/sky-home-move"
                  title="Sky Home Move"
                  subtitle="Mobile app digital service"
                  thumbSrc={skyThumb}
                />                          
              </div>
              <div className="mt-20 md:mt-32 md:ml-5">                
                <CaseCard 
                  url="/case-studies/unica"
                  title="Unica"
                  subtitle="Web platform"
                  thumbSrc={unicaThumb}
                />  
              </div>     
          </div>
        </div>       
            
      <ReserveFreeCall />
      <ContactBanner />    
       
      </div>
  );
}
