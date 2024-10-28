function MobileNav() {
    return (
        <div className="sm:hidden flex flex-col h-screen justify-center transition-all translate-y-[-150%]" id="mobile-nav">
            <div>
                <p className="text-[13px] text-[--dark-secondary]">Mauro Micozzi</p>
                <p className="text-[13px] uppercase text-[--dark-secondary] leading-tight opacity-50">UX UI Designer and<br/> Front-End Developer</p>
            </div>
            <nav className="list-none my-10">
                <li className="mr-4">
                    <div className="w-full h-[2px] bg-[--light-primary]"></div>
                    <a href="" className="text-[35px] text-[--light-primary] block py-2">Case Studies</a>
                </li>
                <li className="mr-4">
                    <div className="w-full h-[2px] bg-[--light-primary]"></div>
                    <a href="" className="text-[35px] text-[#F9F9F9] block py-2">Services</a>
                </li>
                <li className="mr-4">
                    <div className="w-full h-[2px] bg-[--light-primary]"></div>
                    <a href="" className="text-[35px] text-[#F9F9F9] block py-2">About</a>
                </li>
                <li>
                    <div className="w-full h-[2px] bg-[--light-primary]"></div>
                    <a href="" className="text-[35px] text-[#F9F9F9] block py-2">Contact</a>
                    <div className="w-full h-[2px] bg-[--light-primary]"></div>
                </li>
            </nav>
            <ul>
                <li><a href="" className="inline-block font-normal text-[15px] text-[--dark-secondary] underline my-1">Linkedin</a></li>
                <li><a href="" className="inline-block font-normal text-[15px] text-[--dark-secondary] underline my-1">Resume</a></li>
                <li><a href="" className="inline-block font-normal text-[15px] text-[--dark-secondary] underline my-1">mau.micozzi@gmail.com</a></li>
            </ul>

        </div>
    );
}

export default MobileNav;