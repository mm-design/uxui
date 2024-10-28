import Link from 'next/link'

function Footer() {
    return (
        <footer className="mt-20">
            <div className="text-center">
                <p className="text-[13px] text-[--dark-secondary] mb-1">Mauro Micozzi</p>
                <p className="text-[13px]  text-[--dark-secondary] leading-tight">UX UI Designer and Front-End Developer</p>
            </div>
            <ul className="flex justify-center mt-4">
                <li className="mx-3"><a href="" className="inline-block font-normal text-[15px] text-[--dark-primary] underline">Linkedin</a></li>
                <li className="mx-3"><a target="blank" href="/files/test.png" className="inline-block font-normal text-[15px] text-[--dark-primary] underline">Resume</a></li>
                <li className="mx-3"><a target="blank" href="/files/resume-mauro-micozzi.pdf" className="inline-block font-normal text-[15px] text-[--dark-primary] underline">Resume</a></li>
                <li className="mx-3"><a href="mailto:mau.micozzi@gmail.com" className="inline-block font-normal text-[15px] text-[--dark-primary] underline">mau.micozzi@gmail.com</a></li>
            </ul>
        </footer>
    );
}

export default Footer;