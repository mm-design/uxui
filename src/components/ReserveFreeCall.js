import TickIconList from "./TickIconList";
import ReserveFreeCallCTA from "./ReserveFreeCallCTA";
import Link from "next/link";

function ReserveFreeCall() {
    return (
        <div className="w-screen bg-[--light-primary] px-5 py-20 sm:px-10 sm:py-40 mt-32">
            <div className="container max-w-lg mx-auto text-left">

                <div className="relative max-w-md">
                    <svg width="165" height="268" viewBox="0 0 165 268" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute z-[0] top-[-150px] left-[-100px] opacity-20">
                        <path d="M29.2704 257.337L30.3431 258.41L31.4035 257.325L82.5041 205.056L134.005 257.329L135.065 258.406L136.134 257.337L154.333 239.146L155.385 238.094L154.341 237.033L83.5694 165.076L82.4969 163.985L81.4276 165.079L11.0599 237.036L10.0226 238.097L11.0719 239.146L29.2704 257.337ZM83.5645 213.986L82.4959 212.909L81.4314 213.99L30.3156 265.878L2.11848 238.068L82.5 156.142L162.889 238.075L135.078 265.875L83.5645 213.986Z" fill="#837F90" stroke="white" strokeWidth="3"/>
                        <path d="M29.2704 180.337L30.3431 181.41L31.4035 180.325L82.5041 128.056L134.005 180.329L135.065 181.406L136.134 180.337L154.333 162.146L155.385 161.094L154.341 160.033L83.5694 88.0758L82.4969 86.9854L81.4276 88.0789L11.0599 160.036L10.0226 161.097L11.0719 162.146L29.2704 180.337ZM83.5645 136.986L82.4959 135.909L81.4314 136.99L30.3156 188.878L2.11848 161.068L82.5 79.1418L162.889 161.075L135.078 188.875L83.5645 136.986Z" fill="#837F90" stroke="white" strokeWidth="3"/>
                        <path d="M29.2704 103.337L30.3431 104.41L31.4035 103.325L82.5041 51.0564L134.005 103.329L135.065 104.406L136.134 103.337L154.333 85.146L155.385 84.0941L154.341 83.0333L83.5694 11.0758L82.4969 9.98538L81.4276 11.0789L11.0599 83.0364L10.0226 84.0971L11.0719 85.146L29.2704 103.337ZM83.5645 59.9858L82.4959 58.9093L81.4314 59.9899L30.3156 111.878L2.11848 84.0677L82.5 2.14179L162.889 84.0749L135.078 111.875L83.5645 59.9858Z" fill="#837F90" stroke="white" strokeWidth="3"/>
                    </svg>
                    <h2 className="relative z-[50] text-[--dark-primary] mx-auto mb-5">Ready to take your digital product to new heights?</h2>
                    <h2 className="relative z-[50] text-[--dark-primary] mx-auto mb-5">Schedule your free 30-minute consultation right away!</h2>
                </div>

                <div className="block text-right mt-0 mr-5 sm:mr-0"><ReserveFreeCallCTA /></div>
                
                <div className="max-w-sm">
                    <h3 className="text-[--dark-primary] mt-4">Why you should reserve your spot now:</h3>
                    <ul className="pl-5 mt-5">
                        <li className="flex justify-items-start mb-4">
                            <div className="block scale-90"><TickIconList /></div>
                            <p className="ml-3 mt-[2px] text-[--dark-secondary]">Receive instant feedback from a design expert with over 10 years of experience</p>
                        </li>
                        <li className="flex justify-items-start mb-4">
                            <div className="block scale-90"><TickIconList /></div>
                            <p className="ml-3 mt-[2px] text-[--dark-secondary]">Gain access to a network of specialized freelancers I regularly collaborate with</p>
                        </li>
                        <li className="flex justify-items-start">
                            <div className="block scale-90"><TickIconList /></div>
                            <p className="ml-3 mt-[2px] text-[--dark-secondary]">Join the consultation online via Google Meet, accessible from any location on your preferred device. Plus, it’s completely free!</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ReserveFreeCall;