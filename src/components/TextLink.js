import Link from "next/link";

function TextLink(props) {
    let className;
    if (props.color === "light") {
        className = "text-[15px] font-normal text-[--light-primary] underline uppercase";
    } else if (props.color === "dark") {
        className = "text-[15px] font-normal text-[--dark-primary] underline uppercase";
    }

    return (
        <Link href={props.href} className={className}>{props.text}</Link>
    );
}

export default TextLink;