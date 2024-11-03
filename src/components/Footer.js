import Link from 'next/link';
import MauLogoFooter from '@/components/MauLogoFooter';


function Footer() {
    return (
        <footer className="mt-20 relative overflow-hidden">
            <div className="px-5 sm:px-10">
                <div className="text-center">
                    <p className="text-[13px] text-[--dark-secondary] mb-1">Mauro Micozzi</p>
                    <p className="text-[13px]  text-[--dark-secondary] leading-tight">UX UI Designer and Front-End Developer</p>
                </div>
                <ul className="flex justify-center mt-4">
                    <li className="mx-2"><a target="_blank" href="https://www.linkedin.com/in/mauro-micozzi-ux-ui-designer/" className="inline-block font-normal text-[13px] md:text-[15px] text-[--dark-primary] underline">Linkedin</a></li>
                    <li className="mx-2"><a target="blank" href="https://www.dropbox.com/scl/fi/2m4s83300a4fl43215evg/Resume-MauroMicozzi-UX-UI.pdf?rlkey=imh0fq35tplftkc3m5rmeowyf&st=q60c1giw&dl=0" className="inline-block font-normal text-[13px] md:text-[15px] text-[--dark-primary] underline">Resume</a></li>
                    <li className="mx-2"><a href="mailto:mau.micozzi@gmail.com" className="inline-block font-normal text-[13px] md:text-[15px] text-[--dark-primary] underline">mau.micozzi@gmail.com</a></li>
                </ul>
                <div className="relative z-[50] block text-center sm:flex justify-between items-center pt-28 pb-10">
                    <ul className="flex justify-center mb-2 sm:mb-0">
                        <li className="mr-4"><Link href="/privacy-policy" className="inline-block font-normal text-[13px] text-[--dark-primary] underline">Privacy Policy</Link></li>
                        <li><Link href="/cookie-policy" className="inline-block font-normal text-[13px] text-[--dark-primary] underline">Cookie Policy</Link></li>
                    </ul>
                    <p className="inline-block font-normal text-[13px] text-[--dark-secondary]">© Copyright 2024 - All rights reserved</p>               
                </div>
            </div>
            <div className="absolute z-[0] bottom-[-90px] left-[50%] ml-[-285px]"><MauLogoFooter /></div>     
        </footer>
    );
}

export default Footer;