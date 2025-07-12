import style from './Rodape.module.css';

const Rodape = (props) => {
    // Desestruturação 
    const { devCriador } = props;

    // Pega o ano atual - não vou utilizar pq quero deixar o ano em que criei 
    // const AnoAtual = (new Date()).getFullYear();

    return (
        <div className={style.Rodape}>
            <p>React Básico - 2025 - {devCriador}</p>
        </div>
    );
};

export { Rodape }