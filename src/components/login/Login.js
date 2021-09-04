import React, {useState} from 'react';
import './Login.css'
import {auth} from '../../firebase.js'
import {MdEmail} from 'react-icons/md';
import {RiLockPasswordFill} from 'react-icons/ri';
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'; 
import { Link } from 'react-router-dom';

const Login = () => {

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [show, setShow] = useState(false);


   function abrirmodalcad(elem){
       elem.preventDefault();
       let modal = document.querySelector('.modalcriarconta');
       modal.style.display = "block";
   }

   function modallogin(e){
       e.preventDefault();

       let email = document.getElementById('emaillogin').value;
       let senha = document.getElementById('senhalogin').value; 

       auth.signInWithEmailAndPassword(email, senha)
       .then((auth)=>{
           <Link to="/LandingPage"></Link> 
       })

   }

   const handleClick = (e) => {
      e.preventDefault()
      setShow(!show);
   }

    return(
        <div className="formulario">
            
               
                <Link to="/" className="logo"><h1 className="logo-h1">Logomarca</h1></Link>
               
                
                <div className="form-inputemail">
                    <MdEmail/>
                    <input 
                    id="emaillogin"
                    type="email" 
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}/>
                </div>

                <div className="form-inputsenha">
                    <RiLockPasswordFill/>
                    <input 
                    id="senhalogin"
                    placeholder="Digite sua senha"
                    type={show ? "password" : "text"}
                    value={password}
                    onChange={e => setPassword(e.target.value)}/>
                    <div className="login-eye">
                        {show ? (
                            <AiFillEye
                        size={20}
                        onClick={handleClick}
                        /> ) : ( <AiFillEyeInvisible
                        size={20}
                        onClick={handleClick}
                        /> )}   
                    </div>
                </div>

                <a href="#">Esqueci a senha </a>
                
                <button type="submit" onClick={(e)=>modallogin(e)}>
                    Login
                </button>
            
                <h4>Não tenho conta!</h4>

                 <button type="submit" onClick={(elem)=>abrirmodalcad(elem)}>
                Cadastrar
                </button>
            </div>
    );
}

export default Login;