import Link from "next/link";

function ExternalTextLink(props) {
    let className;
    let iconColor;
    if (props.color === "light") {
        className = "text-[15px] font-normal text-[--light-primary] underline uppercase flex items-center";
        iconColor = "#f9f9f9";
    } else if (props.color === "dark") {
        className = "text-[15px] font-normal text-[--dark-primary] underline uppercase flex items-center";
        iconColor = "#090714";
    }

    return (
        <Link target="_blank" href={props.href} className={className}>
            <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                <path d="M1.54869 10.5354L1.58401 10.5707L1.61937 10.5354L10.1017 2.06921V9.83113V9.88113H10.1517H11H11.05V9.83113V0.5V0.45H11L1.66887 0.45H1.61887V0.5V1.34828V1.39828H1.66887L9.43079 1.39828L0.964611 9.88064L0.929323 9.91599L0.964645 9.95131L1.54869 10.5354Z" fill={iconColor} stroke={iconColor} strokeWidth="0.3"/>
            </svg>
            {props.text}
        </Link>
    );
}

export default ExternalTextLink;