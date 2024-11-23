const Api = (numeroAleatorio) => {
    return (
        fetch(`https://api.adviceslip.com/advice/${numeroAleatorio}`)
        .then(resposta =>
            resposta.json(),
        )
        .then(dados => [
                dados.slip.id,
                dados.slip.advice,  
            ]
        )
    ) 
}

export default Api;