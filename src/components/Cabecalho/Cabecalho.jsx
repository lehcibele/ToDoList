import { Link } from 'react-router';

import style from './Cabecalho.module.css';

const Cabecalho = () => {
    return (
        <div className={style.Cabecalho}>
            <Link to="/"> 
                <h1>
                    <span>ToDo </span>
                    List
                </h1>
            </Link>

            <Link to="/sobre-nos">Sobre Nós</Link>
        </div>
    );
};

// Usando exportação nomeada
export {Cabecalho};