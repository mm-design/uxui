import Image from "next/image";
import ExternalTextLink from "@/components/ExternalTextLink";
import ReserveFreeCall from "@/components/ReserveFreeCall";
import ContactBanner from "@/components/ContactBanner";
import skyCover from '../../../public/caseStudies/sky/sky-cover.jpg';
import CaseCard from "@/components/caseStudies/CaseCard";
import threeukThumb from '../../../public/caseStudies/thumbnails/threeuk-thumbnail.jpg';
import liraThumb from '../../../public/caseStudies/thumbnails/lira-thumbnail.jpg';
import skyHmAnalysis from '../../../public/caseStudies/sky/sky-home-move-analysis.png';
import skyHmMobile from '../../../public/caseStudies/sky/sky-hm-mobile.png';
import skyHm10days from '../../../public/caseStudies/sky/sky-hm-10days.png';
import skyHm2days from '../../../public/caseStudies/sky/sky-hm-2days.png';
import skyHmToday from '../../../public/caseStudies/sky/sky-hm-today.png';
import skyHmError from '../../../public/caseStudies/sky/sky-hm-error.png';
import skyHmTrackingAccordion from '../../../public/caseStudies/sky/sky-hm-tracking-accordion.png';
import skyHmTrackingTimeline from '../../../public/caseStudies/sky/sky-hm-tracking-timeline.png';
import skyHmPublicPage from '../../../public/caseStudies/sky/sky-hm-public-page.png';
import skyCheckTitle from '../../../public/caseStudies/sky/sky-check-title.png';
import skyAnimCheckGif from '../../../public/caseStudies/sky/sky-anim-check.gif';
import skyCheckDescription from '../../../public/caseStudies/sky/sky-check-description.png';
import skyBookTitle from '../../../public/caseStudies/sky/sky-book-title.png';
import skyAnimBookGif from '../../../public/caseStudies/sky/sky-anim-book.gif';
import skyBookDescription from '../../../public/caseStudies/sky/sky-book-description.png';
import skyTrackTitle from '../../../public/caseStudies/sky/sky-track-title.png';
import skyAnimTrackGif from '../../../public/caseStudies/sky/sky-anim-track.gif';
import skyTrackDescription from '../../../public/caseStudies/sky/sky-track-description.png';
import skySupportTitle from '../../../public/caseStudies/sky/sky-support-title.png';
import skyAnimSupportGif from '../../../public/caseStudies/sky/sky-anim-support.gif';
import skySupportDescription from '../../../public/caseStudies/sky/sky-support-description.png';



export default function CaseStudies() {
  return (
      <div className="">
        <div className="w-screen bg-[--light-primary] px-5 sm:px-10 pt-[20vh] sm:pt-[30vh]">
          <div className="relative container max-w-screen-xl mx-auto">
            <div className="block">
              <h1 className="mb-5">Sky Home Move</h1>
              <p className="text-[--dark-secondary] text-[17px] leading-[23px] sm:text-[21px] sm:leading-[27px] uppercase mb-10 sm:max-w-screen-sm">Creating a Digital service that keeps Sky’s clients entertained and informed during their transition to a new home</p>
              <Image src={skyCover} width={1235} height={785} alt="Sky Home Move service" className="rounded-[40px] w-full block mb-10"/>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
                
                  <div className="mb-5">
                    <p className="text-[--dark-secondary]">Client</p>
                    <p className="">Sky</p>
                  </div>
                
                  <div className="mb-5">
                    <p className="text-[--dark-secondary]">Field</p>
                    <p className="">Telco and media</p>
                  </div>
              
                  <div className="mb-5">
                    <p className="text-[--dark-secondary]">Agency</p>
                    <p className="">Tangity UK</p>
                  </div>

                  <div className="mb-5">
                    <p className="text-[--dark-secondary]">Period</p>
                    <p className="">Dic 2022 (2 weeks)</p>
                  </div>
              
                  <div className="mb-5">
                    <p className="text-[--dark-secondary]">Role</p>
                    <p className="">UX UI</p>
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
                  <p className="text-[--dark-secondary] mb-5">Sky Home Move is a digital service that keeps Sky’s clients entertained and informed during their transition to a new home.</p>
                  <p className="text-[--dark-secondary] mb-5">Sky's end-to-end home move capability was limited to voice interactions, resulting in 15K calls weekly, split evenly between booking and managing inquiries. Additionally, over 40% of customers expressed a preference for digital service options.</p>
                  <p className="text-[--dark-secondary] mb-5">This project moved at an extremely fast pace. As it was already structured and in progress, I joined the UX/UI team at <a className="underline text-[--dark-primary]" href="https://tangity.global/" target="_blank">Tangity UK</a> for 2 weeks to assist in finalizing the designs.</p>
                </div>
              </div>

              <div className="mt-20 md:mt-[-80px] md:grid md:grid-cols-12 md:gap-4">
                <div className="md:col-start-8 md:col-span-5 lg:col-start-8 lg:col-span-4">
                  <h2 className="mb-3">Project statement</h2>
                  <p className="text-[--dark-secondary] mb-5">The client aimed to bridge the gap between their digital and voice capabilities in assisting customers during their transition to a new home. Implementing a digital service was the solution to enhance the four key success metrics that contribute to the Long Range Plan (LRP) targets:</p>           
                  <ul className="list-disc pl-8">
                    <li className="text-[--dark-secondary] mb-2">Customer experience</li>
                    <li className="text-[--dark-secondary] mb-2">Cost to serve</li>
                    <li className="text-[--dark-secondary] mb-2">Digital growth/containment</li>
                    <li className="text-[--dark-secondary] mb-8">Customer/product growth</li>
                  </ul>  
                </div>           
              </div>

              <div className="mt-20 md:mt-[-80px] md:grid md:grid-cols-12 md:gap-4">
                <div className="md:col-start-1 md:col-span-5 lg:col-start-2 lg:col-span-4">
                  <h2 className="mb-3">Users</h2>
                  <p className="text-[--dark-secondary] mb-5">Sky clients seeking to change their address want to ensure that their service remains uninterrupted during the transition.</p>
                  <p className="text-[--dark-secondary] mb-5"><span className="font-bold">Touchpoints:</span> website and mobile app (I was working on the mobile app version).</p>
                  <p className="text-[--dark-secondary] mb-5">The UX Research team conducted interviews with customers who switched providers as well as those who remained with Sky. Here are the key findings from the research.</p>  
                  <p className="text-[--dark-secondary] mb-3 font-bold">Pain points:</p>
                  <ul className="list-disc pl-8">
                    <li className="text-[--dark-secondary] mb-2">incredibly busy for the home move and uncertain about what’s involved in transferring broadband during a home move</li>
                    <li className="text-[--dark-secondary] mb-5">frustrated that new customer deals are better than current deal and annoyed that package cannot be updated</li>
                  </ul>  
                  {/* <p className="text-[--dark-secondary] mb-3 font-bold">Drivers:</p>
                  <ul className="list-disc pl-8">
                    <li className="text-[--dark-secondary] mb-2">do not want to be without internet for any length of time</li>
                    <li className="text-[--dark-secondary] mb-5">seamless broadband transfer process and the opportunity to secure the best possible deal</li>
                  </ul>  */}
                  <p className="text-[--dark-secondary] mb-3 font-bold">Needs:</p>
                  <ul className="list-disc pl-8">
                    <li className="text-[--dark-secondary] mb-2">uninterrupted broadband service, along with simplicity and clear communication throughout the process</li>
                    <li className="text-[--dark-secondary] mb-2">clear information on what is involved in moving broadband service and how long setup will take in the new home</li>
                  </ul> 
                </div>
              </div>

              <div className="mt-20 md:mt-[-80px] md:grid md:grid-cols-12 md:gap-4">
                <div className="md:col-start-8 md:col-span-5 lg:col-start-8 lg:col-span-4">
                  <h2 className="mb-3">Responsibilities</h2>
                  <p className="text-[--dark-secondary] mb-5">As a member of the UX UI team, my responsibilities included:</p>
                  <ul className="list-disc pl-8">
                    <li className="text-[--dark-secondary] mb-2">Understanding business requirements, brand guidelines and design system</li>
                    <li className="text-[--dark-secondary] mb-2">Analyzing outputs from the UX Research team and reviewing the already approved UX flows</li>
                    <li className="text-[--dark-secondary] mb-2">Creating various UI solutions for the Home Move tracking service process that align with the approved key screens of the service</li>
                    <li className="text-[--dark-secondary] mb-2">Producing video animations for the main points of the service to be featured on the landing page</li>
                  </ul>              
                </div>           
              </div>

              <div className="mt-20 md:mt-[-80px] md:grid md:grid-cols-12 md:gap-4">
                <div className="md:col-start-1 md:col-span-5 lg:col-start-2 lg:col-span-4">
                <h2 className="mb-3">Design process</h2>
                  <p className="text-[--dark-secondary] mb-5">I supported the UX/UI team for 2 weeks, resulting in a streamlined and efficient process. We held quick daily morning catch-ups to keep everyone updated on progress, allowing each team to focus on their tasks.</p>
                  <p className="text-[--dark-secondary] mb-5">While developing new UI concept designs, I participated in several meetings with the Creative Director to discuss the concepts and determine which designs would be finalized for the prototype.</p>
                </div>
              </div>

              <div className="mt-20 md:mt-[-80px] md:grid md:grid-cols-12 md:gap-4">
                <div className="md:col-start-8 md:col-span-5 lg:col-start-8 lg:col-span-4">
                  <h2 className="mb-3">Scope and constraints</h2>
                  <p className="text-[--dark-secondary] mb-5">We needed to create a digital solution for the Sky Home Move service to ensure a smooth and hassle-free transition to a new home for customers.</p>
                  <p className="text-[--dark-secondary] mb-5">Participating in a large project like this for a short duration was a significant challenge. I had to process a vast amount of information quickly to effectively support the team.</p>
                  <p className="text-[--dark-secondary] mb-5">Additionally, user journeys and several key screens had already been approved by the client, so my work needed to align seamlessly with the existing assets.</p>     
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
                  <span className="block text-[15px] text-[--dark-secondary]">1 / 5</span>
                  <h2 className="text-[--light-primary] mt-3 mb-8">Understanding the Home Move Hub with focus on the post-booking phase</h2>
                  <p className="text-[--dark-secondary] mb-5">When I joined the project I went straight into studying what the team has already designed and what was approved in the latest design sprint. </p>
                  <p className="text-[--dark-secondary] mb-5">I had to mainly focus on the post-booking phase, where the Home Move Hub provides users with all relevant information and gives them the possibility to check the move progress, edit details and bundles or reschedule the installation of the required service.</p>
                  <p className="text-[--dark-secondary] mb-5">The team had already designed the main pages, below here the visuals of the Home Move Hub section.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-screen bg-[--dark-primary] pb-5">
            <Image src={skyHmAnalysis} width={1653} height={589} alt="Sky Home Move Hub reuirements and screens already designed" className="w-full block mb-10"/>
          </div>

          <div className="w-screen bg-[--dark-primary] px-5 sm:px-10 pt-10 pb-5">
            <div className="relative container max-w-screen-xl mx-auto">
              <div className="md:grid md:grid-cols-12">
                <div className="md:col-start-1 md:col-span-6 lg:col-start-1 lg:col-span-4">
                  <span className="block text-[15px] text-[--dark-secondary]">2 / 5</span>
                  <h2 className="text-[--light-primary] mt-3 mb-8">Restyling the Home Move Hub</h2>
                  <p className="text-[--dark-secondary] mb-5">The primary task was to enhance the Home Move Hub page by prioritizing key information and optimizing the use of both primary and secondary call-to-action (CTA) elements. The page layout was restructured as follows:</p>
                  <ul className="list-disc pl-8">
                    <li className="text-[--dark-secondary] mb-2"><span className="font-bold text-[--light-primary]">First scroll</span> includes an important reminder for the user, with a primary CTA to track the Home Move progress</li>
                    <li className="text-[--dark-secondary] mb-2"><span className="font-bold text-[--light-primary]">Package and address</span> section displays key details, with a secondary CTA allowing users to make edits if necessary</li>
                    <li className="text-[--dark-secondary] mb-5"><span className="font-bold text-[--light-primary]">FAQ and support</span> section positioned at the bottom, offering assistance and guidance for common queries.</li>
                  </ul> 
                  <p className="text-[--dark-secondary] mb-5">When designing the page, I accounted for the dynamic nature of the reminder messages in the first scroll, which can vary depending on the proximity to the move date or any technical issues that may arise.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-screen grid grid-cols-1 md:grid-cols-12 gap-2 bg-[--dark-primary]">
            <div className="md:col-start-1 md:col-span-6 bg-gradient-to-br from-[#FF6B5E] to-[#3440EF] p-10 md:p-20">
              <Image src={skyHmMobile} width={628} height={786} alt="Sky Home Move homepage redesign" className="w-full block"/>
            </div>
            <div className="grid grid-cols-12 md:col-start-7 md:col-span-6 gap-2">
              <div className="col-start-1 col-span-6 bg-gradient-to-br from-[#FF6B5E] to-[#3440EF] pt-10 pr-10 pl-10 pb-0 content-end ">
                <Image src={skyHm10days} width={302} height={377} alt="Sky Home Move message at 10 days" className="w-full block"/>
              </div>
              <div className="col-start-7 col-span-6 bg-gradient-to-br from-[#FF6B5E] to-[#3440EF] pt-10 pr-10 pl-10 pb-0 content-end">
                <Image src={skyHm2days} width={302} height={377} alt="Sky Home Move message at 2 days" className="w-full block"/>
              </div>
              <div className="col-start-1 col-span-6 bg-gradient-to-br from-[#FF6B5E] to-[#3440EF] pt-10 pr-10 pl-10 pb-0 content-end">
                <Image src={skyHmToday} width={302} height={377} alt="Sky Home Move message at 0 days" className="w-full block"/>
              </div>
              <div className="col-start-7 col-span-6 bg-gradient-to-br from-[#FF6B5E] to-[#3440EF] pt-10 pr-10 pl-10 pb-0 content-end">
                <Image src={skyHmError} width={302} height={377} alt="Sky Home Move error message" className="w-full block"/>
              </div>
            </div>
          </div>

          <div className="w-screen bg-[--dark-primary] px-5 sm:px-10 pt-28 pb-5">
            <div className="relative container max-w-screen-xl mx-auto">
              <div className="md:grid md:grid-cols-12">
                <div className="md:col-start-1 md:col-span-6 lg:col-start-1 lg:col-span-4">
                  <span className="block text-[15px] text-[--dark-secondary]">3 / 5</span>
                  <h2 className="text-[--light-primary] mt-3 mb-8">Improving the Home Move tracking with accordion components</h2>
                  <p className="text-[--dark-secondary] mb-5">I restructured the progress tracking using accordion elements to keep the page concise and easy to navigate. Each accordion represents a step in the installation process, containing relevant information and CTAs. This approach provides users with a clear, streamlined overview of the entire process at a glance.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-screen bg-gradient-to-br from-[#FF6B5E] to-[#3440EF] p-10 md:p-20">
            <Image src={skyHmTrackingAccordion} width={1468} height={692} alt="Sky Home Move tracking process designed with accordion components" className="w-full block"/>
          </div>

          <div className="w-screen bg-[--dark-primary] px-5 sm:px-10 pt-28 pb-10">
            <div className="relative container max-w-screen-xl mx-auto">
              <div className="md:grid md:grid-cols-12 md:items-center">
                <div className="md:col-start-1 md:col-span-6 lg:col-start-1 lg:col-span-4">
                  <span className="block text-[15px] text-[--dark-secondary]">4 / 5</span>
                  <h2 className="text-[--light-primary] mt-3 mb-8">Exploring a new solution for the Home Move Hub and progress tracking</h2>
                  <p className="text-[--dark-secondary] mb-5">After designing the initial solution described earlier, and in alignment with the creative director, I explored an alternative approach for the Home Move Hub and progress tracking.</p>
                  <p className="text-[--dark-secondary] mb-5">For the Home Move Hub page, I restructured the layout using card elements. However, this design made the page feel less fluid and misaligned with the brand guidelines.</p>
                  <p className="text-[--dark-secondary] mb-5">For the progress tracking, I represented the process steps using a timeline. While this solution was visually appealing, it raised usability concerns. Users had to scroll both horizontally and vertically, making it difficult to get an overview of the entire process. Additionally, it wasn’t clear which step was currently active.</p>
                  <p className="text-[--dark-secondary] mb-5">Ultimately, we decided to discard this solution in favor of the accordion approach, as explained earlier.</p>
                </div>
                
                <div className="md:col-start-1 md:col-span-12 lg:col-start-6 lg:col-span-7 pt-5">
                  <Image src={skyHmTrackingTimeline} width={708} height={938} alt="Sky Home Move tracking solution with timeline component" className="w-full block mb-10"/>
                </div>
              </div>
            </div>
          </div>

          <div className="w-screen bg-[--dark-primary] px-5 sm:px-10 pt-10 pb-5">
            <div className="relative container max-w-screen-xl mx-auto">
              <div className="md:grid md:grid-cols-12">
                <div className="md:col-start-1 md:col-span-6 lg:col-start-1 lg:col-span-4">
                  <span className="block text-[15px] text-[--dark-secondary]">5 / 5</span>
                  <h2 className="text-[--light-primary] mt-3 mb-8">Designing animations for the Home Move Hub public page</h2>
                  <p className="text-[--dark-secondary] mb-5">After completing my role as a UX/UI designer, I assisted the UI team in finalizing the Home Move Hub public page by creating vector animations using Adobe After Effects.</p>
                  <p className="text-[--dark-secondary] mb-5">These animations were incorporated into a slideshow to illustrate the Home Move process step by step.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-screen grid grid-cols-1 md:grid-cols-12 gap-2 bg-[--dark-primary] pt-2 pb-2">
            <div className="md:col-start-1 md:col-span-6 bg-gradient-to-br from-[#FF6B5E] to-[#3440EF] p-10 md:p-20">
              <Image src={skyHmPublicPage} width={628} height={786} alt="Sky Home Move dedicated page design" className="w-full block"/>
            </div>
            <div className="grid grid-cols-12 md:col-start-7 md:col-span-6 gap-2">
              <div className="col-start-1 col-span-6 bg-gradient-to-br from-[#FF6B5E] to-[#3440EF] p-10">
                <div className="relative bg-[--light-primary] overflow-x-hidden">
                  <Image src={skyCheckTitle} width={632} height={130} alt="Check title" className="w-full block relative z-10"/>
                  <Image src={skyAnimCheckGif} width={858} height={482} alt="Check animation" className="w-full block relative z-0 mt-[-3px] scale-105"/>
                  <Image src={skyCheckDescription} width={632} height={300} alt="Check description" className="w-full block"/>
                </div>
              </div>
              <div className="col-start-7 col-span-6 bg-gradient-to-br from-[#FF6B5E] to-[#3440EF] p-10">
                <div className="relative bg-[--light-primary] overflow-x-hidden">
                  <Image src={skyBookTitle} width={632} height={130} alt="Book title" className="w-full block relative z-10"/>
                  <Image src={skyAnimBookGif} width={858} height={482} alt="Book animation" className="w-full block relative z-0 mt-[-3px] scale-105"/>
                  <Image src={skyBookDescription} width={632} height={300} alt="Book description" className="w-full block relative z-10 mt-[-3px]"/>
                </div>
              </div>
              <div className="col-start-1 col-span-6 bg-gradient-to-br from-[#FF6B5E] to-[#3440EF] p-10">
                <div className="relative bg-[--light-primary] overflow-x-hidden">
                  <Image src={skyTrackTitle} width={632} height={130} alt="Track title" className="w-full block relative z-10"/>
                  <Image src={skyAnimTrackGif} width={858} height={482} alt="Track animation" className="w-full block relative z-0 mt-[-3px] scale-105"/>
                  <Image src={skyTrackDescription} width={632} height={300} alt="Track description" className="w-full block relative z-10 mt-[-3px]"/>
                </div>
              </div>
              <div className="col-start-7 col-span-6 bg-gradient-to-br from-[#FF6B5E] to-[#3440EF] p-10">
                <div className="relative bg-[--light-primary] overflow-x-hidden">
                  <Image src={skySupportTitle} width={632} height={130} alt="Support title" className="w-full block relative z-10"/>
                  <Image src={skyAnimSupportGif} width={858} height={482} alt="Support animation" className="w-full block relative z-0 mt-[-3px] scale-105"/>
                  <Image src={skySupportDescription} width={632} height={300} alt="Support description" className="w-full block relative z-10 mt-[-3px]"/>
                </div>
              </div>
            </div>
          </div>

        </div>
          
        

       {/* Results section */}
       <div className="relative w-screen bg-[--light-primary] px-5 sm:px-10 mt-16 sm:mt-10">
       <span className="text-[80px] ml-[-40px] sm:text-[120px] sm:ml-[-70px] md:text-[240px] md:ml-[-70px] font-bold text-[--dark-secondary] opacity-20">Results</span>
          <div className="relative container max-w-screen-sm mx-auto mt-0 md:mt-[-115px]">
            <p className="uppercase text-[19px] leading-[23px] md:text-[21px] md:leading-[27px] text-[--dark-primary] mb-10">We successfully finalized the project and delivered an interactive prototype of the Home Move digital service to the client.</p>
            <p className="uppercase text-[19px] leading-[23px] md:text-[21px] md:leading-[27px] text-[--dark-primary] mb-5">I contributed to the team by exploring new solutions for tracking the Home Move process and helping to identify the most effective one.</p>
          </div>
        </div>

        {/* Next cases section */}
        <div className="relative w-screen bg-[--light-primary] px-5 sm:px-10 mt-16 sm:mt-10">
          <span className="text-[80px] ml-[-40px] sm:text-[120px] whitespace-nowrap sm:ml-[-70px] md:text-[240px] md:ml-[-70px] font-bold text-[--dark-secondary] opacity-20">Next Cases</span>          
          <div className="md:flex md:justify-between container max-w-screen-xl mx-auto mt-5 md:mt-[-40px] relative z-[50]">
              <div className=" md:mr-5">
              <CaseCard 
                  url="/case-studies/three-uk"
                  title="Three UK"
                  subtitle="MVP of digital corporate portal"
                  thumbSrc={threeukThumb}
                />                
              </div>
              <div className="mt-20 md:mt-32 md:ml-5">
                <CaseCard 
                  url="/case-studies/lira"
                  title="L.I.R.A."
                  subtitle="Corporate website"
                  thumbSrc={liraThumb}
                />
              </div>     
          </div>
        </div>       
            
      <ReserveFreeCall />
      <ContactBanner />    
       
      </div>
  );
}
