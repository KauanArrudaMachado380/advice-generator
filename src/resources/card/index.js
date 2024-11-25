import './Card.css'
import Advice from '../advice'
import Botao from '../botao';
import Api from '../service/api';
import ImagemResponsiva from '../imagem';
import { useState } from 'react';

const Card = () => {

    const [advice, setAdvice] = useState('');
    const [id, setID] = useState('');

    const fetchAdvice = () => {
        let numeroAleatorio = Math.floor(Math.random() * 225);
        Api(numeroAleatorio).then(([newID, newAdvice]) =>{
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
            <ImagemResponsiva/>
            <Botao onClick={fetchAdvice}/>
        </section>
    )
}

export default Card;