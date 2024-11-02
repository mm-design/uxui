import ReserveFreeCall from "@/components/ReserveFreeCall";
import ContactBanner from "@/components/ContactBanner";
import Accordion from "@/components/services/Accordion";
import VectorShapes from "@/components/home/VectorShapes";

export const metadata = {
  title: "UX UI and Web Development: Design Solutions for your Digital Product",
  description: "Discover how my expertise across various design disciplines can create effective digital products with clear objectives and deliverables.",
};

export default function Services() {

  return (
    <div className="">
      <div className="w-screen bg-[--light-primary] px-5 sm:px-10 pt-[20vh]">
        <div className="">
          <div className="relative container max-w-screen-xl mx-auto">
            <div className="block sm:max-w-screen-sm">
              <h1 className="mb-10">Design solutions to expand your digital vision</h1>
              <p className="text-[--dark-secondary] mb-5 sm:max-w-[450px]">Working across various design disciplines ensures the creation of a digital product that performs effectively.</p>
              <p className="text-[--dark-secondary] mb-5 sm:max-w-[450px]">Explore in detail how I can assist in each design area with clear objectives and deliverables.</p>
            </div>
          </div>
          {/* <div className="absolute z-[0] top-[50%] right-[-50%] mt-[-500px] ml-[-750px]"><VectorShapes /></div> */}
        </div>

        <div className="relative z-[10] container max-w-screen-xl mx-auto mt-20">
          <h2 className="mb-5 md:mb-8">User Experience</h2>

          <div className="animated-lines w-full h-[2px] bg-[--dark-primary] opacity-100"></div>
          <Accordion 
          title="UX audit"
          objective="Analyze the user journeys of your digital product to identify pain points and friction areas in order to improve the user experience." 
          deliverables="Detailed analysis conducted screen by screen, along with a report that includes actionable recommendations for immediate implementation."/>
          <div className="animated-lines w-full h-[1px] bg-[--dark-secondary] opacity-20"></div>
          <Accordion 
          title="UX research"
          objective="Gather insights using various methods (interviews, surveys, workshops) to understand the needs, behaviors, and attitudes of your users, as well as how they interact with your digital product." 
          deliverables="Detailed report that includes user personas, enabling you to validate design decisions and make informed choices based on real user feedback rather than assumptions."/>
          <div className="animated-lines w-full h-[1px] bg-[--dark-secondary] opacity-20"></div>
          <Accordion 
          title="Competitive analysis"
          objective="Identify both direct and indirect competitors and to conduct research to underline their strengths and weaknesses in comparison to your business." 
          deliverables="Detailed report that includes a SWOT analysis (Strengths, Weaknesses, Opportunities, Threats), benchmarking data and strategic recommendations for improvement."/>
          <div className="animated-lines w-full h-[1px] bg-[--dark-secondary] opacity-20"></div>
          <Accordion 
          title="Information architecture"
          objective="Organize, structure and label the content of your digital product, considering the insights from the UX research, to create a clear and logical flow of information that helps users efficiently find what they need." 
          deliverables="Visual sitemap that outlines the hierarchical structure of your digital product, illustrating the relationships between pages and sections."/>
          <div className="animated-lines w-full h-[1px] bg-[--dark-secondary] opacity-20"></div>
          <Accordion 
          title="User flows definition"
          objective="Define the step-by-step path a user takes while interacting with your product to achieve a specific goal, highlighting touchpoints, emotions and potential pain points along the way." 
          deliverables="Visual representation that outlines each phase of the user’s interaction, typically divided into stages such as awareness, consideration, decision and post-purchase."/>
          <div className="animated-lines w-full h-[1px] bg-[--dark-secondary] opacity-20"></div>
          <Accordion 
          title="Wireframe and interactive prototyping"
          objective="Create the initial visual draft of your digital product, focusing on user navigation, content organization and layout structure. In this phase, visual details such as colors and images are not considered." 
          deliverables="Interactive prototype that allows you to navigate through the wireframes of your digital product and test the defined user journeys. Additionally, you will have access to the Figma file containing all the designed wireframes."/>
          <div className="animated-lines w-full h-[1px] bg-[--dark-secondary] opacity-20"></div>
          <Accordion 
          title="Early user testing"
          objective="Test the defined user flows with real users using the interactive wireframe prototype, allowing you to gather real feedback about the user experience and validate or modify design decisions." 
          deliverables="Report summarizing key findings and actionable recommendations to improve the user experience, along with recordings of the test sessions for further review."/>
          <div className="animated-lines w-full h-[1px] bg-[--dark-secondary] opacity-20"></div>
        </div>

        <div className="container max-w-screen-xl mx-auto mt-20">
          <h2 className="mb-5 md:mb-8">User Interface</h2>

          <div className="animated-lines w-full h-[2px] bg-[--dark-primary] opacity-100"></div>
          <Accordion 
          title="Design system creation"
          objective="Deliver a cohesive framework of design guidelines and reusable user interface components to ensure consistent product development. This includes visual styles (color palettes, typography) and standardized UI components (buttons, forms, icons)." 
          deliverables="A comprehensive style guide that features a library of reusable UI components, along with detailed documentation on their usage for designers."/>
          <div className="animated-lines w-full h-[1px] bg-[--dark-secondary] opacity-20"></div>
          <Accordion 
          title="User interface design and interactive prototyping"
          objective="Create a functional and user-friendly interface for your digital product. This process begins with defining typography and a color palette, followed by the design of layouts, interactions and visual components such as headings, buttons, form inputs and more." 
          deliverables="An interactive prototype that allows you to navigate through the final interface of your digital product and test all its functionalities. Additionally, you will have access to the Figma file with all the designed pages and sections."/>
          <div className="animated-lines w-full h-[1px] bg-[--dark-secondary] opacity-20"></div>
          <Accordion 
          title="User testing"
          objective="Evaluate how real users interact with your digital product and improve it based on data-driven insights. This process includes testing user journeys, experimenting with design variations (A/B testing) and gathering user feedback to improve usability and performance." 
          deliverables="A test plan with hypotheses outlining expected outcomes, along with detailed reports on user behavior and actionable recommendations for design improvements. Additionally, all test session recordings will be provided."/>
          <div className="animated-lines w-full h-[1px] bg-[--dark-secondary] opacity-20"></div>        
        </div>

        <div className="container max-w-screen-xl mx-auto mt-20">
          <h2 className="mb-5 md:mb-8">Web development</h2>

          <div className="animated-lines w-full h-[2px] bg-[--dark-primary] opacity-100"></div>
          <Accordion 
          title="Traditional CMS website and blog"
          objective="Create a website or blog using a Content Management System (CMS) for easy content management and scalability. This involves developing and configuring a CMS platform like WordPress, enabling non-technical users to update and manage content effortlessly." 
          deliverables="A fully responsive, visually appealing website or blog that can be easily managed through the WordPress back-end. The website will support future growth with plugins and additional features as your business expands."/>
          <div className="animated-lines w-full h-[1px] bg-[--dark-secondary] opacity-20"></div>
          <Accordion 
          title="Headless CMS website and blog"
          objective="Deliver a modern, API-first solution for your website or blog focusing on flexibility and performance. Headless CMS like Strapi provides a centralized way to create, manage and distribute content across multiple channels ensuring high scalability and easy integration with third-party services." 
          deliverables="A customized back-end tailored to your business needs, enabling effective management of your digital product's content. The front-end interface leverages modern libraries like React and Next.js for fast, seamless updates, ensuring a unique user experience."/>
          <div className="animated-lines w-full h-[1px] bg-[--dark-secondary] opacity-20"></div>
          <Accordion 
          title="E-commerce"
          objective="Develop a secure and fully functional online store optimized for both sales and operational efficiency. This involves developing and configuring a CMS platform like Shopify, Magento or WooCommerce, allowing you to easily manage inventory, pricing and product details." 
          deliverables="A modern and fully responsive e-commerce platform ready to showcase your products online, facilitate sales and manage customer interactions. The e-commerce solution supports future expansion with plugins and additional features as your business grows."/>
          <div className="animated-lines w-full h-[1px] bg-[--dark-secondary] opacity-20"></div>
          <Accordion 
          title="Landing page"
          objective="Create a high-conversion web page designed to drive specific user actions, such as lead generation or product purchases. This process includes setting up tracking tools like Google Analytics and/or pixel tracking to monitor traffic and conversions." 
          deliverables="A customized, performance-driven landing page focused on achieving your marketing and conversion goals. Additionally, you will receive a report containing key insights based on tracked data, which will help you optimize product offerings, messaging and design."/>
          <div className="animated-lines w-full h-[1px] bg-[--dark-secondary] opacity-20"></div>
                
        </div>

      </div>

      <ReserveFreeCall />
      <ContactBanner />
    </div>
  );
}
