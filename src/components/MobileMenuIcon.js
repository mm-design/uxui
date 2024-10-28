"use client";


function MobileMenuIcon() {
    function handleClick() {
        const iconMobileMenu = document.getElementById("icon-mobile-menu");
        const mobileNav = document.getElementById("mobile-nav");
       
            mobileNav.classList.toggle('translate-y-[0%]')
           
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