import { Botao, CampoTexto, TIPO_BOTAO } from "..";
import style from './FormCriarTarefa.module.css'


const FormCriarTarefa = () => {
    return (
        <form className={style.FormCriarTarefa}>
            <CampoTexto />
            <Botao texto="+" tipo={TIPO_BOTAO.PRIMARIO} />
        </form>
    );
};

export {FormCriarTarefa};