import Api from '../service/api';
import './Botao.css'

const Botao = () => { 

    function gerandoNumero() {

        let numeroAleatorio = Math.floor(Math.random() * 225)
        
        Api(numeroAleatorio);
    }

    return (
        <button className='botao' onClick={evento =>{
            evento.preventDefault();
            gerandoNumero();
        }}> 
            <img src='./images/icon-dice.svg' alt='botao' />
        </button>
    )
}

export default Botao