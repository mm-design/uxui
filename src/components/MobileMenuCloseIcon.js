"use client";
import gsap from "gsap";


function MobileMenuCloseIcon() {

    function handleClick() {
        const iconCloseMobileMenu = document.getElementById("icon-close-mobile-menu");
        const mobileNav = document.getElementById("mobile-nav");
        const animatedLines = document.querySelectorAll("header .animated-lines");
        const html = document.querySelector("html");
        const body = document.querySelector("body");

        gsap.to('#top-line', { scale: 1, transformOrigin: '0% 100%', x: 0, duration: 0.2, ease: 'power1.in' });
        gsap.to('#middle-line', { scale: 1,  transformOrigin: '100 100%', x: 0, duration: 0.2, ease: 'power1.in' });
        gsap.to('#bottom-line', { scale: 1, transformOrigin: '0% 100%', x: 0, duration: 0.2, ease: 'power1.in' });
        gsap.to(iconCloseMobileMenu, { scale: 0, transformOrigin: '50% 50%', duration: 0.2, ease: 'power1.in' });
        gsap.to(mobileNav, { y: '-100%', duration: 0.5, ease: 'power1.in' });
        gsap.to(animatedLines, { width: 0, duration: 0.5, stagger: 0.1, ease: 'power1.in' });       

        html.classList.remove("overflow-y-hidden");
        body.classList.remove("overflow-y-hidden");
           
    }
    
    return (
        <div onClick={handleClick} className="scale-0 sm:hidden fixed z-[200] top-5 right-6" id="icon-close-mobile-menu">
            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 25.4558L25.4558 0L26.8701 1.41421L1.41421 26.8701L0 25.4558Z" fill="black"/>
                <path d="M25.4561 26.8701L0.000211 1.41431L1.41442 9.31025e-05L26.8703 25.4559L25.4561 26.8701Z" fill="black"/>
            </svg>
        </div>
    );
}

export default MobileMenuCloseIcon;