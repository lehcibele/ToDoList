import { useContext } from "react";
import { Outlet } from "react-router";

import { Cabecalho, Conteudo, Rodape } from "../../components";
import { useAppContext } from "../../hooks/useAppContext";


const LayoutPadrao = () => {
    const { criador } = useAppContext();

    return (
        <>
            <Cabecalho />
            <Conteudo> 
                <Outlet />
            </Conteudo>
            <Rodape devCriador = {criador} /> 
        </>
    );
};

export { LayoutPadrao };