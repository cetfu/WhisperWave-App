import {ModeToggle} from "@/components/toggle-theme";

export default function Header(){
    return (
        <header className={"w-full h-20 flex justify-between items-center px-5 bg-primary"}>
            <div>
                <h1 className={"text-xl font-bold text-accent"}>
                    WhisperWave
                </h1>
            </div>
            {/*<ModeToggle />*/}
        </header>
    )
}