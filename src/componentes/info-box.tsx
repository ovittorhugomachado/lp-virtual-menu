import type { InfoSection } from "../types/types";

export const InfoBox = ({
    title,
    subTitle,
    text,
    button
}: InfoSection) => {
    console.log(button)
    return (
        <>
            <div className="w-[90%] max-w-[850px] min-w-[305px] px-4 py-12 my-24 bg-blue-cloud backdrop-blur-md rounded-lg shadow-lg flex flex-col items-center justify-start gap-6 text-center">
                <h3 className="bg-[#021B74] text-white px-8 py-2 rounded-xl">{title}</h3>
                <h5 className="text-[#021B74] font-bold">{subTitle}</h5>
                {text.map((text, index) => (
                    <p key={index}>{text}</p>
                ))}
                {button && <a className="featured-button font-medium" href={button.link}>{button.name}</a>}
            </div>
        </>
    )
}

export const InfoBoxWithImage = ({
    image,
    title,
    text,
    button
}: InfoSection) => {
    return (
        <>
            <div className="md:hidden w-[90%] min-w-[305px] px-4 py-12 bg-blue-sand backdrop-blur-md rounded-lg shadow-lg flex flex-col items-center justify-start gap-6 text-center">
                <h3 className="text-white bg-[#021B74] px-6 py-2 mb-2 rounded-2xl">{title}</h3>
                {text.map((text, index) => (
                    <p key={index}>{text}</p>
                ))}
                {button && <a className="featured-button font-medium mt-8" href={button.link}>{button.name}</a>}
            </div>
            <div className="hidden bg-white/60 rounded-lg md:flex h-[80%] w-[90%] min-w-[305px]">
                <div className="min-h-[100%] w-[45%] flex items-center justify-center bg-blue-sand rounded-l-lg">
                    <img className="w-full px-12 xl:px-24" src={image} alt="logo" />
                </div>
                <div className="w-[55%] shadow-lg flex flex-col items-center justify-center gap-2 text-center">
                    <h3 className="text-white bg-[#021B74] px-6 py-2 mb-6 rounded-2xl">{title}</h3>
                    {text.map((text, index) => (
                        <p key={index}>{text}</p>
                    ))}
                    {button && <a className="featured-button font-medium mt-8" href={button.link}>{button.name}</a>}
                </div>
            </div>
        </>
    )
}