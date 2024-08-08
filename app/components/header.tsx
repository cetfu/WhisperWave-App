import Link from "next/link";

export default function Header(){
    return (
        <header className={"w-full h-20 flex justify-between items-center px-5 bg-primary"}>
            <div>
                <h1 className={"text-xl font-bold text-accent"}>
                    <Link href={"/"}>
                        WhisperWave
                    </Link>
                </h1>
            </div>
        </header>
    )
}