type Props = {
    title: string;
    subTitle?: string;
    text: string
    image?: string;
}

export const InfoBox = ({
    title,
    subTitle,
    text
}: Props) => {
    return (
        <>
            <div className="w-[90%] max-w-[850px] min-w-[305px] px-4 py-12 bg-white backdrop-blur-md rounded-lg shadow-lg flex flex-col items-center justify-start gap-6 text-center">
                <h3 className="bg-[#021B74] text-white px-8 py-2 rounded-xl">{title}</h3>
                <h5 className="text-[#021B74] font-bold">{subTitle}</h5>
                <p className="px-4">{text}</p>
            </div>
        </>
    )
}

export const InfoBoxWithImage = ({
    image,
    title,
    text
}: Props) => {
    return (
        <>
            <div className="md:hidden w-[90%] min-w-[305px] px-4 py-12 bg-white backdrop-blur-md rounded-lg shadow-lg flex flex-col items-center justify-start gap-6 text-center">
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
            <div className="hidden bg-white/60 rounded-lg md:flex h-[80%] w-[90%] min-w-[305px]">
                <div className="min-h-[100%] w-[45%] flex items-center justify-center bg-[#E5EAEB] rounded-l-lg">
                    <img className="w-full px-12 xl:px-24" src={image} alt="logo" />
                </div>
                <div className="w-[55%] shadow-lg flex flex-col items-center justify-center gap-2 text-center">
                    <h3 className="text-[#021B74]">{title}</h3>
                    <p className="px-4">{text}</p>
                </div>
            </div>
        </>
    )
}