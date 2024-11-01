"use client";
import MauLogo from '@/components/MauLogo';
import MobileMenuIcon from '@/components/MobileMenuIcon';
import MobileNav from '@/components/MobileNav';
import MobileMenuCloseIcon from '@/components/MobileMenuCloseIcon';
import Link from 'next/link';
import { usePathname } from 'next/navigation'



function MainNav() {
    const currentPath = usePathname();

    return (
            <header>
                <div className="w-full h-[67px] fixed top-0 z-[100] py-4 mix-blend-difference">
                    <div className="flex justify-between items-center px-5 sm:px-10">
                        <a href='/'><MauLogo /></a>                        
                        <nav className="hidden sm:flex list-none ">
                            <li className="mr-4"><Link href="/case-studies"  className={currentPath === "/case-studies" ? "text-[15px] text-[--dark-primary] bg-[--light-primary] px-2 py-1 rounded-md" : "text-[15px] text-[--light-primary] px-2 py-1"}>Case Studies</Link></li>
                            <li className="mr-4"><Link href="/services" className={currentPath === "/services" ? "text-[15px] text-[--dark-primary] bg-[--light-primary] px-2 py-1 rounded-md" : "text-[15px] text-[--light-primary] px-2 py-1"}>Services</Link></li>
                            <li className="mr-4"><Link href="/about" className={currentPath === "/about" ? "text-[15px] text-[--dark-primary] bg-[--light-primary] px-2 py-1 rounded-md" : "text-[15px] text-[--light-primary] px-2 py-1"}>About</Link></li>
                            <li><Link href="/contact" className={currentPath === "/contact" ? "text-[15px] text-[--dark-primary] bg-[--light-primary] px-2 py-1 rounded-md" : "text-[15px] text-[--light-primary] px-2 py-1"}>Contact</Link></li>
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