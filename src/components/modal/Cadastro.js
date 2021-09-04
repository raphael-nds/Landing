import {auth} from '../../firebase.js'
import './Cadastro.css'

const Cadastro = () =>{

    function fecharmodal(){

        let mfec = document.querySelector('.modalcriarconta');
        mfec.style.display = "none";
    }

    function criarconta(e){
    e.preventDefault();
    let email = document.getElementById('emailcad').value;
    let username = document.getElementById('usercad').value;
    let senha = document.getElementById('senhacad').value;

    auth.createUserWithEmailAndPassword(email,senha)
    .then((authUser)=>{
        authUser.user.updateProfile({
            displayName: username
        });
        alert('conta criada com sucesso');
    })
    }

    return(
        <div className="modalcriarconta">
                    <div onClick={() => fecharmodal()} className="fecharmodalcriarconta">x</div> 
                    
                    <div className="form-cad">
                        <input id="emailcad" type="email" placeholder="email"/>
                    </div>

                    <div className="form-cad">
                        <input id="usercad" type="username" placeholder="nome"/>
                    </div>

                    <div className="form-cad">
                        <input id="senhacad" type="password" placeholder="senha"/>
                    </div>

                    <div className="form-cad">
                        <input type="submit" onClick={(e)=>criarconta(e)} value="cadastrar"/>
                    </div>

                    
        </div>
            
    );
}

export default Cadastro;