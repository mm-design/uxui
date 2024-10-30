"use client";
import gsap from "gsap";


function MobileMenuIcon() {

    function handleClick() {
        const iconMobileMenu = document.getElementById("icon-mobile-menu");
        const mobileNav = document.getElementById("mobile-nav");
        const animatedLines = document.querySelectorAll("header .animated-lines");
        const iconCloseMobileMenu = document.getElementById("icon-close-mobile-menu");
        const html = document.querySelector("html");
        const body = document.querySelector("body");

        gsap.to('#top-line', { scale: 0, transformOrigin: '0% 100%', x: -20, duration: 0.2, ease: 'power1.in' });
        gsap.to('#middle-line', { scale: 0,  transformOrigin: '100 100%', x: 20, duration: 0.2, ease: 'power1.in' });
        gsap.to('#bottom-line', { scale: 0, transformOrigin: '0% 100%', x: -20, duration: 0.2, ease: 'power1.in' });
        gsap.to(iconCloseMobileMenu, { scale: 1, transformOrigin: '50% 50%', duration: 0.2, ease: 'power1.in' });
        gsap.to(mobileNav, { y: 0, duration: 0.5, ease: 'power1.in' });
        gsap.to(animatedLines, { width: '100%', duration: 0.35, delay: 0.35, stagger: 0.1, ease: 'power1.in' });       

        // iconCloseMobileMenu.classList.remove("hidden");
        html.classList.add("overflow-y-hidden");
        body.classList.add("overflow-y-hidden");
           
    }
    
    return (
        <div onClick={handleClick} className="sm:hidden" id="icon-mobile-menu">
            <svg width="36" height="22" viewBox="0 0 36 22" fill="f9f9f9" xmlns="http://www.w3.org/2000/svg" className="overflow-visible">
                <g>
                <path d="M0 0H36V2H0V0Z" fill="white" id="top-line"/>
                <path d="M0 10H36V12H0V10Z" fill="white" id="middle-line"/>
                <path d="M0 20H36V22H0V20Z" fill="white" id="bottom-line"/>
                </g>
            </svg>
        </div>
    );
}

export default MobileMenuIcon;