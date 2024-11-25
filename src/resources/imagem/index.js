import './imagem.css'
import { useState, useEffect } from 'react';

const ImagemResponsiva = () => {

    const [imagem, setImagem] = useState('')

    const resizeImage = () => {
        if(window.innerWidth < 600){
            setImagem('./images/pattern-divider-mobile.svg');
        } else {
            setImagem('./images/pattern-divider-desktop.svg')
        }
    };

    useEffect(() => {
        resizeImage();

        window.addEventListener('resize', resizeImage);

        return () => window.removeEventListener('resize', resizeImage);
    }, []);

    return (
        <div className='container-imagem'>
            <img src={imagem} alt='pattern divider'/>
        </div>
    )
}

export default ImagemResponsiva;