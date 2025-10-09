import { useContext } from "react"
import { SiteContext } from "../context/site-context"
import { HeroSection } from "./sections/section-hero"
import { SectionDefault } from "./sections/section-default"
import { InfoBox, InfoBoxWithImage } from "./info-box"
import { CarouselContainer } from "./grid"
import { ToActionContainer } from "./to-action-container"

export const Main = () => {

    const { info, grid } = useContext(SiteContext)

    return (
        <>
            <HeroSection />
            {info.slice(0, 3).map((section, index) => (
                <SectionDefault key={index} index={index}>
                    {section.image ? (
                        <InfoBoxWithImage
                            title={section.title}
                            text={section.text}
                            image={section.image}
                            button={section.button}
                        />
                    ) : (
                        <InfoBox
                            title={section.title}
                            text={section.text}
                            button={section.button}
                        />
                    )}
                </SectionDefault>
            ))}
            {grid && <CarouselContainer items={grid} />}
            {info.slice(3).map((section, index) => (
                <SectionDefault key={index} index={index}>
                    {section.image ? (
                        <InfoBoxWithImage
                            title={section.title}
                            text={section.text}
                            image={section.image}
                            button={section.button}
                        />
                    ) : (
                        <InfoBox
                            title={section.title}
                            text={section.text}
                            button={section.button}
                        />
                    )}
                </SectionDefault>
            ))}
            <ToActionContainer />
        </>
    )
}