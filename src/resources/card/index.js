import './Card.css'
import Advice from '../advice'
import Botao from '../botao';

const Card = () => {

    return(
        <section className='card'>
            <Advice 
                
            />
            <img src='./images/pattern-divider-mobile.svg' alt='card' />
            <Botao/>
        </section>
    )
}

export default Card;