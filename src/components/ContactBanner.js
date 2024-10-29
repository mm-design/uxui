import TextLink from "./TextLink";

function ContactBanner(props) {
    return (
        <div className="w-full px-5 sm:px-10 text-center">
            <div className="bg-[--dark-primary] py-16 px-5 sm:px-10 rounded-[40px] text-center">
            <h2 className="block text-[--light-primary] mb-4">Please feel free to contact me anytime</h2>
            <TextLink href="/contact" color="light" text="Get in touch" />
            
            </div>
        </div>
    );
}

export default ContactBanner;