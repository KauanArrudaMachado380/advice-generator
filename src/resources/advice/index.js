import './Advice.css'
import { useState } from 'react'


const Advice = () => {

    const [advice, setAdvice] = useState('');
    const [id , setID] = useState('');

    function alterandoDados () {
        setID();
        setAdvice();
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