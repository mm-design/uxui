import MauLogo from '@/components/MauLogo';
import MobileMenuIcon from '@/components/MobileMenuIcon';
import MobileNav from '@/components/MobileNav';

function MainNav() {
    return (
            <header>
                <div className="w-full h-[67px] fixed top-0 z-[100] py-4 mix-blend-difference">
                    <div className="flex justify-between items-center px-5 sm:px-10">
                        <MauLogo />
                        <nav className="hidden sm:flex list-none ">
                            <li className="mr-4"><a href="" className="text-[15px] text-[--light-primary]">Case Studies</a></li>
                            <li className="mr-4"><a href="" className="text-[15px] text-[--light-primary]">Services</a></li>
                            <li className="mr-4"><a href="" className="text-[15px] text-[--light-primary]">About</a></li>
                            <li><a href="" className="text-[15px] text-[--light-primary]">Contact</a></li>
                        </nav>
                        <MobileMenuIcon />
                    </div>
                </div>
                <MobileNav />
            </header>
           
    );
}

export default MainNav;