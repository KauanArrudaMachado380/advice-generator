import './Advice.css'
import { useState, useEffect } from 'react'


const Advice = ({ atualizandoDados }) => {

    const [advice, setAdvice] = useState('');
    const [id , setID] = useState('');

    useEffect(() => {
        if(id && advice){
            atualizandoDados(id, advice);
        }
    }), [id, advice, atualizandoDados];

    const setNovoAdvice = (newID, newAdvice) => {
        setID(newID);
        setAdvice(newAdvice);
    }

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