import React, {useState, useEffect} from 'react';
import './Home.css';
import Login from '../components/login/Login';
import Cadastro from '../components/modal/Cadastro';


const Home = () => {

   const [user, ] = useState(null);

   useEffect(() => {
       
   }, [])
    return(
        
        <div className="home">
                
            {
                (user)?
                <div>
                    
                </div>
                :
                <Login/>
            }
            <Cadastro/>
             
        </div> 
    );
}

export default Home;