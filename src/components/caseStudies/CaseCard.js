import Link from "next/link";
import Image from "next/image";

function CaseCard(props) {
    return (
        <Link href={props.url}>
            <div className="">
                <Image src={props.thumbSrc} width={498} height={604} alt={props.title + props.subtitle} className="rounded-[40px] w-full"/>
                <h2 className="mt-5 mb-1">{props.title}</h2>
                <p className="text-[17px] text-[--dark-secondary] uppercase">{props.subtitle}</p>
            </div>
        </Link>
    );
}

export default CaseCard;