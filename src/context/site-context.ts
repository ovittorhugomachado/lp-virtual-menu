import { createContext } from "react";
import type { SiteData } from "../types/types";

const defaultSiteData: SiteData = {
    pageName: "Virtual Menu",
    slogan: "Conectando seu delivery ao futuro",
    logo: "/logo.png",
    menu: {
        items: [
            { name: "Entrar", link: "#", featured: false },
            { name: "Criar conta", link: "#", featured: true }
        ],
    },
    info: [
        {
            title: "Sobre a Virtual Menu",
            text: [
                "A Virtual Menu é uma solução digital desenvolvida especialmente para restaurantes.",
                "Oferecemos um cardápio digital completo e sem taxas abusivas.",
                "O restaurante paga apenas uma mensalidade fixa de R$ 29,90.",
            ],
            image: "./logo-black.png",
            button: {
                name: "Criar conta",
                link: "#",
            },
        },
        {
            title: "0.0% de taxas",
            subTitle: "100% transparente. 0% de taxas",
            text: [
                "Aqui, o lucro é 100% seu. Nosso sistema não cobra comissão por pedido. Você vende mais e fica com tudo."
            ],
            button: {
                name: "Criar conta",
                link: "#",
            },
        },
        {
            title: "Painel de pedidos",
            text: [
                "Todos os pedidos em uma única página, para poder gerenciar o preparo e a logística com mais eficiência."
            ],
            image: "./image-orders-panel.png",
            button: {
                name: "Criar conta",
                link: "#",
            },
        },
        {
            title: "Relatórios detalhados",
            text: [
                " Com relatórios claros e objetivos, você entende o que está funcionando — e onde pode melhorar. Tome decisões baseadas em números reais e impulsione suas vendas com estratégia."
            ],
            image: "./image-dashboard.png",
            button: {
                name: "Criar conta",
                link: "#",
            },
        },
    ],
    grid: [
        { image: "./icon-cutlery.png", title: "Cardápio completo" },
        { image: "./icon-graphic.png", title: "Relatórios" },
        { image: "./icon-dashboard.png", title: "Painel de pedidos" },
        { image: "./icon-zero-rate.png", title: "Sem taxas" },
    ]
};

export const SiteContext = createContext<SiteData>(defaultSiteData);
export default defaultSiteData;