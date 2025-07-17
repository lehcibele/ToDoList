import { useState } from 'react';
import { useAppContext } from '../../../hooks';
import { Botao, TIPO_BOTAO } from '../../Botao';
import { CampoTexto } from '../../CampoTexto';

import style from './ListaTarefasItem.module.css'

const ListaTarefasItem = (props) => {
    const { id, nome } = props;

    const [estaEditando, setEstaEditando ] = useState(false);

    const onBlurTarefa = (event) => {
        const nomeTarefa = event.currentTarget.value;
        editarTarefa(id, nomeTarefa);
        setEstaEditando(false)
    };

    const { editarTarefa, removerTarefa } = useAppContext();
    return (
        <li className={style.ListaTarefasItem}>
            {estaEditando && (
                <CampoTexto
                    defaultValue={nome}
                    onBlur={onBlurTarefa} 
                    autoFocus 
                />
            )}
            {!estaEditando && (
                <span onDoubleClick={() => setEstaEditando(true)}>{nome}</span>
            )}
        
            <Botao 
                texto="-" 
                tipo={TIPO_BOTAO.SECUNDARIO} 
                onClick={() => removerTarefa(id)}
            />
        </li>
    );
};

export { ListaTarefasItem };