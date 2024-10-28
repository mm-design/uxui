import MauLogo from '@/components/MauLogo';
import MobileMenuIcon from '@/components/MobileMenuIcon';
import MobileNav from '@/components/MobileNav';

function MainNav() {
    return (
        <header className="w-full fixed z-[100] px-5 sm:px-10 py-4 mix-blend-difference">
            <div className='flex justify-between items-center'>
                <MauLogo />
                <nav className="hidden sm:flex list-none ">
                    <li className="mr-4"><a href="" className="text-[15px] text-[--light-primary] opacity-50 hover:opacity-100">Case Studies</a></li>
                    <li className="mr-4"><a href="" className="text-[15px] text-[#F9F9F9] opacity-50 hover:opacity-100">Services</a></li>
                    <li className="mr-4"><a href="" className="text-[15px] text-[#F9F9F9] opacity-50 hover:opacity-100">About</a></li>
                    <li><a href="" className="text-[15px] text-[#F9F9F9] opacity-50 hover:opacity-100">Contact</a></li>
                </nav>
                <MobileMenuIcon />
            </div>
          
           <MobileNav />
           
        </header>
    );
}

export default MainNav;