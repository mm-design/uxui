import MobileMenuCloseIcon from '@/components/MobileMenuCloseIcon';

function MobileNav() {
    return (
        <div className="fixed w-[100%] z-[90] transition-all translate-y-[-100%]" id="mobile-nav">
            <MobileMenuCloseIcon />         
            <div className="sm:hidden px-5 sm:px-10 bg-[--light-primary] flex flex-col h-screen justify-center">
                <div>
                    <p className="text-[13px] text-[--dark-secondary]">Mauro Micozzi</p>
                    <p className="text-[13px] uppercase text-[--dark-secondary] leading-tight opacity-50">UX UI Designer and<br/> Front-End Developer</p>
                </div>
                <nav className="list-none my-10">
                    <li>
                        <div className="animated-lines w-0 h-[2px] bg-[--dark-primary]"></div>
                        <a href="" className="text-[35px] text-[--dark-primary] block py-2">Case Studies</a>
                    </li>
                    <li>
                        <div className="animated-lines w-0 h-[2px] bg-[--dark-primary]"></div>
                        <a href="" className="text-[35px] text-[--dark-primary] block py-2">Services</a>
                    </li>
                    <li>
                        <div className="animated-lines w-0 h-[2px] bg-[--dark-primary]"></div>
                        <a href="" className="text-[35px] text-[--dark-primary] block py-2">About</a>
                    </li>
                    <li>
                        <div className="animated-lines w-0 h-[2px] bg-[--dark-primary]"></div>
                        <a href="" className="text-[35px] text-[--dark-primary] block py-2">Contact</a>
                        <div className="animated-lines w-0 h-[2px] bg-[--dark-primary]"></div>
                    </li>
                </nav>
                <ul>
                    <li><a href="" className="inline-block font-normal text-[15px] text-[--dark-secondary] underline my-1">Linkedin</a></li>
                    <li><a href="" className="inline-block font-normal text-[15px] text-[--dark-secondary] underline my-1">Resume</a></li>
                    <li><a href="" className="inline-block font-normal text-[15px] text-[--dark-secondary] underline my-1">mau.micozzi@gmail.com</a></li>
                </ul>

            </div>
        </div>
    );
}

export default MobileNav;