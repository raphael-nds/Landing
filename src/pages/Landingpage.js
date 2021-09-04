import Carousel from '../components/carousel/Carousel';
import Depoimentos from '../components/depoimento/depoimentos';
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import Section from '../components/section/Section';
import './Landingpage.css'



const Landingpage = () => {
    
    return(

        <div className="container">
            <Navbar />
            
            <div className="landing">
                <h1 className="titulo">Lorem ipsum</h1>
                <p className="subtitulo">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "</p>

               
                <button className="btn-exp">
                    Explorar
                </button>
                 
            </div>
       
            <Section/>

            <Carousel/>

            <Depoimentos/>

            <Footer/>

        </div>
    );
}

export default Landingpage;