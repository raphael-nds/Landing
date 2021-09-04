import React from 'react';
import { Caixas, Container, Formulario } from './style';

const Depoimentos = () =>{
    return(
        <Container>
            <Formulario>
                <div className="caixa">
                    <h3>Entre em contato conosco</h3>
                    <input type="text" placeholder="Digite seu nome completo"/>
                    <input type="email" placeholder="Digite seu e-mail"/>
                    <textarea type="text" placeholder="Digite sua mensagem"/> 
                    <button type="submit">Enviar</button>                 
                </div>
            </Formulario>
        </Container>
    );
}


export default Depoimentos;