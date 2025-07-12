import { Outlet } from "react-router";

import { Cabecalho, Conteudo, Rodape } from "../../components";


const LayoutPadrao = () => {
    return (
        <>
            <Cabecalho />
            <Conteudo> 
                <Outlet />
            </Conteudo>
            <Rodape devCriador = "Letícia" /> 
        </>
    );
};

export { LayoutPadrao };