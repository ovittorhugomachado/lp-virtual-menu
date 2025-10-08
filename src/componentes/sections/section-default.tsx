import { InfoBox, InfoBoxWithImage } from "../info-box"

type Props = {
    index: number,
    title: string,
    subtitle?: string,
    text: string,
    image?: string;
}

export const SectionDefault = ({
    index,
    text,
    title,
    subtitle,
    image
}: Props) => {

    return (
        <section className="w-full h-full relative flex items-center justify-center overflow-visible">
            {index % 2 === 0 ? (
                <>
                    <img
                        className="absolute -left-20 top-0 -z-10 object-contain"
                        src="./image-bg.png"
                        alt="background-image"
                    />
                    <img
                        className="absolute right-40 bottom-0 -z-10 object-contain"
                        src="./image-bg.png"
                        alt="background-image"
                    />
                </>
            ) : (
                <>
                    <img
                        className="absolute -left-20 top-30 -z-10 object-contain"
                        src="./image-bg.png"
                        alt="background-image"
                    />
                    <img
                        className="absolute right-0 bottom-30 -z-10 object-contain"
                        src="./image-bg.png"
                        alt="background-image"
                    />
                </>
            )}
            {image && image.length > 0 ? (
                <InfoBoxWithImage
                    title={title}
                    subTitle={subtitle}
                    text={text}
                    image={image}
                />
            ) : (
                <InfoBox
                    title={title}
                    subTitle={subtitle}
                    text={text}
                />
            )}
            {index % 2 === 0 ? (
                <img
                    className="hidden sm:block absolute -right-10 top-40 w-20 rotate-180"
                    src="./mid-arrow.png"
                    alt=""
                />
            ) : (
                <img
                    className="hidden sm:block absolute -left-10 top-30 w-20 rotate-180"
                    src="./mid-arrow.png"
                    alt=""
                />
            )}
        </section>
    )
}