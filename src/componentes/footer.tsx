import { useContext } from "react"
import { FaInstagram, FaWhatsapp, FaXTwitter } from "react-icons/fa6"
import { SiteContext } from "../context/site-context"

export const Footer = () => {
    const { logo } = useContext(SiteContext)

    return (
        <footer className="w-full bg-[#021B74] flex flex-col items-center justify-center gap-6 pt-6">
            <img src={logo} alt="logo" className="w-46" />
            <div className="flex text-white gap-3">
                <FaWhatsapp size={30} />
                <FaXTwitter size={30} />
                <FaInstagram size={30} />
            </div>
            <p style={{color: "#fff"}}>Desenvolvido por Virtual Page</p>
        </footer>
    )
}