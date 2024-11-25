import './Advice.css'
import { useState } from 'react';

const Advice = ({ id, advice }) => {

    const [adviceAlterado, setAdviceAlterado] = useState('Click the button to get advice!')

    if(advice && adviceAlterado !== advice){
        setAdviceAlterado(advice);
    }

    return (
        <article className='advice-container'>
            <h1>ADVICE #{id}</h1>
            <p>
                "{adviceAlterado}"
            </p>
        </article>
    )
}

export default Advice