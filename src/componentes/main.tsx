import { HeroSection } from "./sections/section-hero"
import { SectionDefault } from "./sections/section-default"

export const Main = () => {
    return (
        <>
            <HeroSection />
            <SectionDefault
                image="./logo-black.png"
                index={1}
                title="O que é a Virtual Menu"
                text="Um sistema para restaurantes onde o principal objetivo é oferecer um cardápio digital completo, sem cobrar taxas abusivas, o único valor cobrado é a mensalidade de R$ 29,90, todas as vendas são pagas integralmente ao restaurante"
            />
            <SectionDefault
                index={2}
                title="0.0% de taxa"
                subtitle="100% transparente. 0% de taxas"
                text="Aqui, o lucro é 100% seu. Nosso sistema não cobra comissão por pedido. Você vende mais e fica com tudo."
            />
            <SectionDefault
                index={3}
                image="./logo-black.png"
                title="0.0% de taxa"
                subtitle="100% transparente. 0% de taxas"
                text="Aqui, o lucro é 100% seu. Nosso sistema não cobra comissão por pedido. Você vende mais e fica com tudo."
            />
            <SectionDefault
                index={4}
                image="./logo-black.png"
                title="0.0% de taxa"
                subtitle="100% transparente. 0% de taxas"
                text="Aqui, o lucro é 100% seu. Nosso sistema não cobra comissão por pedido. Você vende mais e fica com tudo."
            />
            <SectionDefault
                index={5}
                image="./logo-black.png"
                title="0.0% de taxa"
                subtitle="100% transparente. 0% de taxas"
                text="Aqui, o lucro é 100% seu. Nosso sistema não cobra comissão por pedido. Você vende mais e fica com tudo."
            />
        </>
    )
}