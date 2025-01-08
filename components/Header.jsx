import Link from "next/link";
import {Button} from "./ui/button";

//components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href = "/">
                    <h1 className="text-4xl font-semibold">
                        Syafira<span className="text-accent">.</span>
                    </h1>
                </Link>

                {/* Desktop Nav & Contact me button*/}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact">
                    <Button className="flex items-center justify-center">
                        Let's Connect{" "}
                        <span className="ml-2 flex relative top-[-2.5px]" style={{ textAlign: 'center', fontSize: '1.25rem'}}>
                            👀
                        </span>
                    </Button>
                    </Link>
                </div>

                {/* Mobile Nav */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    );
};

export default Header