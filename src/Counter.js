import React, { useState, useEffect } from "react"
import './Counter.css'

const Counter = () => {
    const [ contadorAzul, setContadorAzul ] = useState(0)
    const [ contadorVermelho, setContadorVermelho ] = useState(0)
    
    const [ vantagemAzul, setVantagemAzul ] = useState(0)
    const [ vantagemVermelho, setVantagemVermelho ] = useState(0)
    
    const [ desvantagemAzul, setdesVantagemAzul ] = useState(0)
    const [ desvantagemVermelho, setdesVantagemVermelho ] = useState(0)
   
  
    
    useEffect(() => {
        console.log('Vermelho pontuou')
    }, [contadorVermelho])

    useEffect(() => {
        console.log('Azul pontuou')
    }, [contadorAzul])
    
    const handleOnClickAzul = operador => {
        const ponto = operador ==='+' ? contadorAzul + 1 : contadorAzul - 1
        setContadorAzul(ponto)
    }

    const handleOnClickVermelho = operador => {
        const ponto = operador ==='+' ? contadorVermelho + 1 : contadorVermelho - 1
        setContadorVermelho(ponto)
    }

    const handleOnClickVantagemAzul = operador => {
        const ponto = operador ==='+' ? vantagemAzul + 1 : vantagemAzul - 1
        setVantagemAzul(ponto)
    }
    
    const handleOnClickVantagemVermelho = operador => {
        const ponto = operador ==='+' ? vantagemVermelho + 1 : vantagemVermelho - 1
        setVantagemVermelho(ponto)
    }

    const handleOnClickdesVantagemAzul = operador => {
        const ponto = operador ==='+' ? desvantagemAzul + 1 : desvantagemAzul - 1
        setdesVantagemAzul(ponto)
    }
    
    const handleOnClickdesVantagemVermelho = operador => {
        const ponto = operador ==='+' ? desvantagemVermelho + 1 : desvantagemVermelho - 1
        setdesVantagemVermelho(ponto)
    }
   

    const handleOnClickDoisPontos = operador => {
        const ponto = operador === 'vermelho' ? contadorVermelho + 2 : contadorAzul + 2
         
        if(operador === 'vermelho'){
            setContadorVermelho(ponto)
        }else{
            setContadorAzul(ponto)
        }
    }

    const handleOnClickTresPontos = operador => {
        const ponto = operador === 'vermelho' ? contadorVermelho + 3 : contadorAzul + 3
        if(operador === 'vermelho'){
            setContadorVermelho(ponto)
        }else{
            setContadorAzul(ponto)
        }
         
    }
    const handleOnClickQuatroPontos = operador => {
        const ponto = operador === 'vermelho' ? contadorVermelho + 4 : contadorAzul + 4
        if(operador === 'vermelho'){
            setContadorVermelho(ponto)
        }else{
            setContadorAzul(ponto)
        }
    }
    const handleOnClickZerarPontuacao = operador => {
        const ponto = 0
        if(operador === 'zerar'){
            setContadorVermelho(ponto)
            setContadorAzul(ponto)
            setVantagemAzul(ponto)
            setVantagemVermelho(ponto)
            setdesVantagemAzul(ponto)
            setdesVantagemVermelho(ponto)
        }else{
            setContadorAzul(ponto)
        }
    }

    return(
        <div className='pagina'>
            <div className='contadores'>
                <div className='azul'>
                    
                    <div className="contadorAzul">
                        <h1>Pontos</h1>
                        <span>{contadorAzul}</span>
                        <button onClick={() => handleOnClickAzul('-')}>-</button>
                        <button onClick={() => handleOnClickAzul('+')}>+</button>
                    </div>
                    
                    <div className="vantagensAzul">
                        <div className="vantagemAzul">
                            <h3>Vantagens</h3>
                            <span>{vantagemAzul}</span>
                            <button onClick={() => handleOnClickVantagemAzul('-')}>-</button>
                            <button onClick={() => handleOnClickVantagemAzul('+')}>+</button>
                        </div>
                        <div className="desvantagemAzul">
                            <h3>Desvantagens</h3>
                            <span>{desvantagemAzul}</span>
                            <button onClick={() => handleOnClickdesVantagemAzul('-')}>-</button>
                            <button onClick={() => handleOnClickdesVantagemAzul('+')}>+</button>
                        </div>
                    </div>
                    
                    <div className="botoesAzul">
                        <button onClick={() => handleOnClickDoisPontos('azul')}>Joelho sobre Barriga(+2)</button>
                        <button onClick={() => handleOnClickDoisPontos('azul')}>Queda(+2)</button>
                        <button onClick={() => handleOnClickDoisPontos('azul')}>Raspagem(+2)</button>
                        <button onClick={() => handleOnClickTresPontos('azul')}>Passada de Guarda(+3)</button>
                        <button onClick={() => handleOnClickQuatroPontos('azul')}>Controle pelas Costas(+4)</button>
                        <button onClick={() => handleOnClickQuatroPontos('azul')}>Montada pelas Costas(+4)</button>
                        <button onClick={() => handleOnClickQuatroPontos('azul')}>Montada(+4)</button>
                    </div>
                </div>

                <div className='vermelho'>
                    
                    <div className="contadorVermelho">
                        <h1>Pontos</h1>
                        <span>{contadorVermelho}</span>
                        <button onClick={() => handleOnClickVermelho('-')}>-</button>
                        <button onClick={() => handleOnClickVermelho('+')}>+</button>
                    </div>
                    <div className="vantagensVermelho">
                        <div className="vantagemVermelho">
                            <h3>Vantagens</h3>
                            <span>{vantagemVermelho}</span>
                            <button onClick={() => handleOnClickVantagemVermelho('-')}>-</button>
                            <button onClick={() => handleOnClickVantagemVermelho('+')}>+</button>
                        </div>
                        <div className="desvantagemVermelho">
                            <h3>Desvantagens</h3>
                            <span>{desvantagemVermelho}</span>
                            <button onClick={() => handleOnClickdesVantagemVermelho('-')}>-</button>
                            <button onClick={() => handleOnClickdesVantagemVermelho('+')}>+</button>
                        </div>
                    </div>
                    
                    <div className="botoesVermelho">
                        
                        <button onClick={() => handleOnClickDoisPontos('vermelho')}>Joelho sobre Barriga(+2)</button>
                        <button onClick={() => handleOnClickDoisPontos('vermelho')}>Queda(+2)</button>
                        <button onClick={() => handleOnClickDoisPontos('vermelho')}>Raspagem(+2)</button>
                        <button onClick={() => handleOnClickTresPontos('vermelho')}>Passada de Guarda(+3)</button>
                        <button onClick={() => handleOnClickQuatroPontos('vermelho')}>Controle pelas Costas(+4)</button>
                        <button onClick={() => handleOnClickQuatroPontos('vermelho')}>Montada pelas Costas(+4)</button>
                        <button onClick={() => handleOnClickQuatroPontos('vermelho')}>Montada(+4)</button>
                        
                    </div>
                </div>
            </div>
            <div className="botaozerar">
            <button onClick={() => handleOnClickZerarPontuacao('zerar')}>Zerar Pontuação</button>
            </div>
        </div>   
    )
}
export default Counter