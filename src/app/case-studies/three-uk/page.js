import Image from "next/image";
import ExternalTextLink from "@/components/ExternalTextLink";
import ReserveFreeCall from "@/components/ReserveFreeCall";
import ContactBanner from "@/components/ContactBanner";
import threeukCover from '../../../public/caseStudies/threeuk/threeuk-cover.jpg';


export default function CaseStudies() {
  return (
      <div className="">
        <div className="w-screen bg-[--light-primary] px-5 sm:px-10 pt-[30vh]">
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
                    <p className="">Aug - Sept 2022</p>
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
        <div className="w-screen bg-[--light-primary] px-5 sm:px-10 pt-[30vh]">
          <div className="relative container max-w-screen-xl mx-auto">

            <div className="md:grid md:grid-cols-12 md:gap-4">
              <div className="md:col-start-1 md:col-span-5 lg:col-start-2 lg:col-span-4">
                <p className="text-[--dark-secondary] mb-5">Three Business was on a rapid growth trajectory, aiming to prioritize a digital-first approach for both customer and channel experiences.</p>
                <p className="text-[--dark-secondary] mb-5">The client noted that in nearly all recent corporate bids, the need for a corporate self-service portal ranked as a top priority. Delivering digital self-service capabilities was crucial to success, particularly for their medium to large corporate customers.</p>
                <p className="text-[--dark-secondary] font-bold mb-5">At the time, Three was the only MNO without a corporate portal, limiting their ability to compete effectively in the market.</p>
                <p className="text-[--dark-secondary] mb-5">In June 20XX, I joined the UX Research team at NTT Data UK for the 2-3 month "Discovery Phase" to help create the MVP for the portal.</p>
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
                  <li className="text-[--dark-secondary] mb-2"><span className="font-bold">Weeks 5-6</span> Define target user journeys and design first draft of the B2B porta</li>
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

        <ReserveFreeCall />
        <ContactBanner />
      </div>
  );
}
