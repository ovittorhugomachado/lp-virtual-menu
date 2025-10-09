import type { Grid } from "../types/types"

export const CarouselContainer = ({
    items
}: Grid) => {
    return (
        <div className="flex flex-wrap justify-center my-2">
            {items.map((item, index) => (
                <div key={index} className="w-38 h-38 flex flex-shrink-0 flex-col items-center justify-center mx-8 my-4 bg-blue-sand-icon backdrop-blur-lg rounded-lg border shadow-2xl">
                    <img className="w-14" src={item.image} alt="item-carousel" />
                    <h4 className="font-semibold text-[#021B74]">{item.title}</h4>
                </div>
            ))}
        </div>
    )
}