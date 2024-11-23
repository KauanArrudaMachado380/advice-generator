import './Advice.css'
import { useState } from 'react'


const Advice = ({atualizandoDados}) => {

    const [advice, setAdvice] = useState('');
    const [id , setID] = useState('');

    function alterandoDados (novoId, novoAdvice) {
        setID(novoId);
        setAdvice(novoAdvice);
    }

    atualizandoDados(alterandoDados);

    return (
        <div className='advice-container'>
            <h1>Advice #{id}</h1>
            <div>
                {advice}
            </div>
        </div>
    )
}

export default Advice