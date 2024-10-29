import MauLogo from '@/components/MauLogo';
import MobileMenuIcon from '@/components/MobileMenuIcon';
import MobileNav from '@/components/MobileNav';
import MobileMenuCloseIcon from '@/components/MobileMenuCloseIcon';
import Link from 'next/link';


function MainNav() {
    return (
            <header>
                <div className="w-full h-[67px] fixed top-0 z-[100] py-4 mix-blend-difference">
                    <div className="flex justify-between items-center px-5 sm:px-10">
                        <Link href='/'><MauLogo /></Link>                        
                        <nav className="hidden sm:flex list-none ">
                            <li className="mr-4"><Link href="/case-studies" className="text-[15px] text-[--light-primary]">Case Studies</Link></li>
                            <li className="mr-4"><Link href="/services" className="text-[15px] text-[--light-primary]">Services</Link></li>
                            <li className="mr-4"><Link href="/about" className="text-[15px] text-[--light-primary]">About</Link></li>
                            <li><Link href="/contact" className="text-[15px] text-[--light-primary]">Contact</Link></li>
                        </nav>
                        <MobileMenuIcon />
                    </div>
                </div>
                <MobileMenuCloseIcon />
                <MobileNav />
            </header>
           
    );
}

export default MainNav;