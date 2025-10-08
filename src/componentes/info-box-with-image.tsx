export const InfoBox = () => {
    return (
        <>
            <div className="md:hidden w-[90%] min-w-[305px] px-4 py-12 bg-white backdrop-blur-md rounded-lg shadow-lg flex flex-col items-center justify-start gap-6 text-center">
                <h3>O que é a Virtual Menu?</h3>
                <p>Somos um sistema para restaurantes onde o principal objetivo é oferecer um cardápio digital completo, sem cobrar taxas abusivas, o único valor cobrado é a mensalidade de R$ 29,90, todas as vendas são pagas integralmente ao restaurante</p>
            </div>
            <div className="hidden bg-white/60 rounded-lg  md:flex h-[80%] w-[90%] min-w-[305px]">
                <div className="min-h-[100%] w-[45%] flex items-center justify-center bg-[#E5EAEB] rounded-l-lg">
                    <img className="w-full px-12 xl:px-24" src="/logo-black.png" alt="logo" />
                </div>
                <div className="w-[55%] backdrop-blur-md shadow-lg flex flex-col items-center justify-center gap-2 text-center">
                        <h3>O que é a Virtual Menu?</h3>
                        <p className="px-4">Somos um sistema para restaurantes onde o principal objetivo é oferecer um cardápio digital completo, sem cobrar taxas abusivas, o único valor cobrado é a mensalidade de R$ 29,90, todas as vendas são pagas integralmente ao restaurante</p>
                </div>
            </div>
        </>
    )
}