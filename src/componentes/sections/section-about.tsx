import { InfoBox } from "../info-box-with-image"

export const SectionAbout = () => {
    return (
        <section className="w-full h-full relative flex items-center justify-center overflow-visible">
            <img
                className="absolute -left-20 top-0 -z-10 object-contain"
                src="./image-bg.png"
                alt="background-image"
            />
            <img
                className="absolute -right-20 bottom-0 -z-10 object-contain"
                src="./image-bg.png"
                alt="background-image"
            />
            <InfoBox />
            <img
                className="hidden sm:block absolute -right-10 top-10 w-20 rotate-180"
                src="./mid-arrow.png"
                alt=""
            />
        </section>
    )
}