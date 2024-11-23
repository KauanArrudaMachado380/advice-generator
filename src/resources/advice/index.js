import './Advice.css'
import { useState, useEffect } from 'react'


const Advice = ({ idRecebido, adviceRecebido }) => {

    const [advice, setAdvice] = useState('1');
    const [id , setID] = useState('Olá');

    useEffect(() => {
        if (id && advice) {
            setID(idRecebido)
            setAdvice(adviceRecebido)
            console.log(setID(idRecebido),
            setAdvice(adviceRecebido));
            
        }
    });

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