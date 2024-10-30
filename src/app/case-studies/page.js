import Image from "next/image";
import ReserveFreeCall from "@/components/ReserveFreeCall";
import ContactBanner from "@/components/ContactBanner";
import CaseCard from "@/components/caseStudies/CaseCard";
import unicaThumb from '../../public/caseStudies/thumbnails/unica-thumbnail.jpg';
import threeukThumb from '../../public/caseStudies/thumbnails/threeuk-thumbnail.jpg';
import skyThumb from '../../public/caseStudies/thumbnails/sky-thumbnail.jpg';
import liraThumb from '../../public/caseStudies/thumbnails/lira-thumbnail.jpg';

export default function CaseStudies() {
  return (
      <div className="w-screen bg-[--light-primary] px-5 sm:px-10 pt-[20vh]">
        <div className="relative container max-w-screen-xl mx-auto text-center">
          <div className="block sm:max-w-screen-lg mx-auto">
            <h1 className="mb-10">Selected works across agencies, corporates and freelance projects</h1>
            <p className="text-[--dark-secondary] mb-5 sm:max-w-screen-lg">Take a look and see how I’ve helped my clients improve their digital products and reach business goals.</p>
          </div>
        </div>

        <div className="md:flex md:justify-between container max-w-screen-xl mx-auto mt-28">
            <div className=" md:mr-5">
              <CaseCard 
                url="/unica"
                title="Unica"
                subtitle="Web platform"
                thumbSrc={unicaThumb}
              />
            </div>
            <div className="mt-20 md:mt-32 md:ml-5">
              <CaseCard 
                url="/three-uk"
                title="Three UK"
                subtitle="MVP of digital corporate portal"
                thumbSrc={threeukThumb}
              />
            </div>     
        </div>

        <div className="md:flex md:justify-between container max-w-screen-xl mx-auto mt-20 md:mt-28">
            <div className=" md:mr-5">
              <CaseCard 
                url="/sky-home-move"
                title="Sky Home Move"
                subtitle="Mobile app digital service"
                thumbSrc={skyThumb}
              />
            </div>
            <div className="mt-20 md:mt-32 md:ml-5">
              <CaseCard 
                url="/lira"
                title="L.I.R.A."
                subtitle="Corporate website"
                thumbSrc={liraThumb}
              />
            </div>     
        </div>

        <ReserveFreeCall />
        <ContactBanner />
      </div>
  );
}
