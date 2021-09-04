import React from 'react'
import './Footer.css'
import {FcSupport} from 'react-icons/fc';


const Footer = () =>{
    return(
        <div  className="footer">
            <div className="footer-email">
                <h1>Lorem Ipsum </h1>
                <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum</p>
                <input type="email" placeholder="Digite seu e-mail"/>
                <br/>
                <input type="submit" value="Inscrever-se" />

            </div>
        <div className="footer-container">
            <div className="coluna1">
            <h2>Sobre</h2>
                <div className="coluna-linha">
                    <div className="linha-flex">
                    <FcSupport/>
                    <h3>Linha da coluna 1</h3>
                    </div>

                    <div className="linha-flex">
                    <FcSupport/>
                    <h3>Linha da coluna 1</h3>
                    </div>

                    <div className="linha-flex">
                    <FcSupport/>
                    <h3>Linha da coluna 1</h3>
                    </div>                  

                </div>
            </div>

            <div className="coluna2">
           <h2>Suporte</h2>
                <div className="coluna-linha">
                    <div className="linha-flex">
                    <FcSupport/>
                    <h3>Linha da coluna 2</h3>
                    </div>

                    <div className="linha-flex">
                    <FcSupport/>
                    <h3>Linha da coluna 2</h3>
                    </div>

                    <div className="linha-flex">
                    <FcSupport/>
                    <h3>Linha da coluna 2</h3>
                    </div>                  

                </div>
            </div>

            <div className="coluna3">
           <h2>Redes Sociais</h2>
                <div className="coluna-linha">
                    <div className="linha-flex">
                    <FcSupport/>
                    <h3>Linha da coluna 3</h3>
                    </div>

                    <div className="linha-flex">
                    <FcSupport/>
                    <h3>Linha da coluna 3</h3>
                    </div>

                    <div className="linha-flex">
                    <FcSupport/>
                    <h3>Linha da coluna 3</h3>
                    </div>                  

                </div>
            </div>

            <div className="coluna4">
            <h2>Mais +</h2>
                <div className="coluna-linha">
                    <div className="linha-flex">
                    <FcSupport/>
                    <h3>Linha da coluna 4</h3>
                    </div>

                    <div className="linha-flex">
                    <FcSupport/>
                    <h3>Linha da coluna 4</h3>
                    </div>

                    <div className="linha-flex">
                    <FcSupport/>
                    <h3>Linha da coluna 4</h3>
                    </div>                  

                </div>
            </div>
        </div>

        <div className="footer-cp-container">
                <p  className="footer-cp">Todos os direitos reservados &copy;</p>
            </div>

    </div>
        

    );
}


export default Footer;