import { useContext } from "react";
import { SiteContext } from "../../context/site-context";

export const HeroSection = () => {
    const { logo, slogan } = useContext(SiteContext);

    return (
        <section className="w-full h-[80vh] relative flex items-center justify-center">
            <img
                className="h-full w-full absolute z-0 object-contain"
                src="./image-bg.png"
                alt="background-image"
            />
            <div className="z-50 flex flex-col justify-center items-center gap-4 sm:gap-8 text-white">
                <img
                    className="w-120 px-1"
                    src={logo}
                    alt="logo"
                />
                <h5 className="text-md sm:text-xl text-center">{slogan}</h5>
            </div>
        </section>
    );
};