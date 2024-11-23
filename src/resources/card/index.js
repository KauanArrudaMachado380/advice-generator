import './Card.css'
import Advice from '../advice'
import Botao from '../botao';
import Api from '../service/api';
import { useState } from 'react';

const Card = () => {

    const [advice, setAdvice] = useState('');
    const [id, setID] = useState('');

    const fetchAdvice = (numeroAleatorio) => {
        Api(numeroAleatorio).then(([newID, newAdvice]) => {
            setID(newID);
            setAdvice(newAdvice);
        });
    }

    return(
        <section className='card'>
            <Advice 
                id={id}
                advice={advice}
            />
            <img src='./images/pattern-divider-mobile.svg' alt='card' />
            <Botao fetchAdvice={fetchAdvice}/>
        </section>
    )
}

export default Card;