import type { ReactNode } from "react";

type SectionDefaultProps = {
    index: number;
    children: ReactNode;
};

export const SectionDefault = ({ index, children }: SectionDefaultProps) => {
    return (
        <section className="w-full md:h-full relative flex items-center justify-center overflow-visible">
            {index % 2 === 0 ? (
                <>
                    <img
                        className="hidden md:block absolute -left-20 top-0 -z-10 object-contain"
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
                        className="hidden md:block absolute -left-20 top-30 -z-10 object-contain"
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
            {children}
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