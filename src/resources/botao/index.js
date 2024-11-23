import './Botao.css'

const Botao = ({ onClick }) => { 
    
    return (
        <button className='botao' onClick={onClick}> 
            <img src='./images/icon-dice.svg' alt='botao' />
        </button>
    )
}

export default Botao