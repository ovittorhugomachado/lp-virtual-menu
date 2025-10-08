import { useState, useEffect } from "react"
import { IoIosMenu } from "react-icons/io"
import { IoCloseOutline } from "react-icons/io5"

export const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth < 640)

    const openMenuFunction = () => {
        setOpenMenu(!openMenu)
    }

    useEffect(() => {
        const handleResize = () => {
            const isSmall = window.innerWidth < 640
            setIsScreenSmall(isSmall)

            if (isSmall) {
                setOpenMenu(false)
            }
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return (
        <header className="w-full h-20 sm:h-28 flex justify-between items-center">
            <img className="w-46 lg:w-54 2xl:w-64" src="/logo.png" alt="logo" />
            <nav className={`hidden sm:block bg-[#021B74] ${isScreenSmall ? "hidden" : ""}`}>
                <ul className="flex justify-center items-center gap-8 text-white">
                    <li className="font-medium">
                        <a href="#">Entrar</a>
                    </li>
                    <li className="featured-button">
                        <a href="#">Criar conta</a>
                    </li>
                </ul>
            </nav>
            <button
                className="sm:hidden flex flex-col justify-between cursor-pointer z-150"
                onClick={openMenuFunction}
            >
                {openMenu ? (
                    <IoCloseOutline
                        size={35}
                        color="white"
                        className="translate-y-0.5"
                    />
                ) : (
                    <IoIosMenu
                        size={35}
                        color="white"
                        className="translate-y-0.5"
                    />
                )}
            </button>
            {openMenu && (
                <nav className="w-screen h-screen bg-[#080436]/80 fixed top-0 left-0 z-100">
                    <ul className="flex flex-col justify-center mt-20 items-center gap-4 text-white z-10">
                        <li className="font-medium">
                            <a href="#">Entrar</a>
                        </li>
                        <li className="featured-button">
                            <a href="#">Criar conta</a>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    )
}