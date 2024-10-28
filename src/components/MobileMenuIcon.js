"use client";


function MobileMenuIcon() {
    function handleClick() {
        const iconMobileMenu = document.getElementById("icon-mobile-menu");
        const mobileNav = document.getElementById("mobile-nav");
        const html = document.querySelector("html");
        const body = document.querySelector("body");
       
            mobileNav.classList.toggle("translate-y-[0%]");
            html.classList.toggle("overflow-y-hidden");
            body.classList.toggle("overflow-y-hidden");
           
    }
    
    return (
        <div onClick={handleClick} className="sm:hidden" id="icon-mobile-menu">
            <svg width="36" height="22" viewBox="0 0 36 22" fill="f9f9f9" xmlns="http://www.w3.org/2000/svg">
                <g>
                <path d="M0 0H36V2H0V0Z" fill="white"/>
                <path d="M0 10H36V12H0V10Z" fill="white"/>
                <path d="M0 20H36V22H0V20Z" fill="white"/>
                </g>
            </svg>
        </div>
    );
}

export default MobileMenuIcon;