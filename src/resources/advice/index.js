import './Advice.css'
import { useState } from 'react';

const Advice = ({ idRecebido, adviceRecebido }) => {

    const [id, setID] = useState('');
    const [advice, setAdvice] = useState('Aperto no botão e veja qual advice virá');

    function trocandoID (id, newId) {
        id = setID(idRecebido)
    }

    function trocandoAdvice(advice, newAdvice){
        advice = setAdvice(adviceRecebido);
    }

    return (
        <div className='advice-container'>
            <h1>Advice #{trocandoID(id, idRecebido)}</h1>
            <div>
                {trocandoAdvice(advice, adviceRecebido)}
            </div>
        </div>
    )
}

export default Advice