import Link from "next/link";
import {FaFacebookF, FaLinkedinIn, FaXTwitter} from "react-icons/fa6";
import {cn} from "@/lib/utils";

export default function Footer() {
    return (
        <footer className={cn(
            "flex flex-col w-full bg-primary mt-auto mb-0 text-accent font-bold"
        )}>
            <div className={"flex flex-col items-center mt-5 gap-1"}>
                {/*    page links*/}
                <Link href={"/"}>Home</Link>
                <Link href={"/"}>Home</Link>
                <Link href={"/"}>Home</Link>
                <Link href={"/"}>Home</Link>
            </div>
            <div className={cn(
                "flex items-center justify-center gap-2 text-accent mt-5"
            )}>
                {/*    socials */}
                <Link href={"/#"}>
                    <FaFacebookF size={25} className={"text-accent"}/>
                </Link>
                <Link href={"/#"}>
                    <FaLinkedinIn size={25} className={"text-accent"}/>
                </Link>
                <Link href={"/#"}>
                    <FaXTwitter size={25} className={"text-accent"}/>
                </Link>
            </div>
            <div className={cn(
                "flex justify-center mt-5"
            )}>
                {/*    copyright */}
                <p>© 2024 |&nbsp;<Link href={"/#"}>Cetfu Tech</Link></p>
            </div>
            <div className={cn(
                "flex justify-center my-5"
            )}>
                {/*    sitemap, privacy */}
                <Link href={"/privacy-policy"}>Privacy Policy</Link>
            </div>
        </footer>
    )
}