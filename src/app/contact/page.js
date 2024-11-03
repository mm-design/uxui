import ExternalTextLink from "@/components/ExternalTextLink";

export const metadata = {
  title: "Contact: Freelance UX/UI Designer for Your Digital Project",
  description: "Get in touch to bring your digital ideas to life and let's work together to create impactful, user-friendly products",
};

export default function Contact() {
  return (
        <div className="w-screen lg:h-screen lg:flex lg:flex-col lg:justify-center bg-[--light-primary] px-5 sm:px-10 pt-[20vh] pb-20 sm:pt-[30vh] lg:pb-0 lg:pt-0">
          <div className="container max-w-screen-xl mx-auto">
            <h1 className="block">Prepared to help <br/>with any inquiry</h1>
            <a href="mailto:mau.micozzi@gmail.com" className="inline-block underline text-[--dark-primary] text-[19px] sm:text-[21px] mt-6">mau.micozzi@gmail.com</a>
            

            <div className="grid grid-cols-1 gap-0 lg:grid-cols-3 lg:gap-20 mt-16">
                <div className="">
                  <div className="block">
                    <h2 className="text-[--dark-secondary] mb-3">Confused and with <span className="text-[--dark-primary] uppercase">no idea</span> what you need?</h2>
                    <p className="text-[--dark-secondary] mb-5">Don't panic! Send me an email explaining your situation and needs/issues, and together we will figure out what you may need.</p>
                    <ExternalTextLink color="dark" href="mailto:mau.micozzi@gmail.com" text="Send me an email" />
                  </div>
                </div>
                <div className="">
                  <div className="block mt-20 lg:mt-0">
                    <h2 className="text-[--dark-secondary] mb-3">Have <span className="text-[--dark-primary] uppercase">an idea</span> but need direction and guidance?</h2>
                    <p className="text-[--dark-secondary] mb-5">Great! Share all the details during your 30-minute free consultation on Google Meet and receive instant feedback.</p>
                    <ExternalTextLink color="dark" href="https://calendly.com/mau-micozzi/30min" target="_blank" text="Reserve free consultation" />
                  </div>
                </div>
                <div className="">
                  <div className="block mt-20 lg:mt-0">
                    <h2 className="text-[--dark-secondary] mb-3"><span className="text-[--dark-primary] uppercase">Know exactly</span> what you're looking for?</h2>
                    <p className="text-[--dark-secondary] mb-5">Perfect! Just fill out the required information on Google Forms and you’ll receive the quote asap, usually within 48-72 hours.</p>
                    <ExternalTextLink color="dark" href="https://forms.gle/RQPZzaPoHGLd8qsi7" target="blank" text="Request quote" />
                  </div>
                </div>
                
            </div>
        </div>
    </div>
  );
}
