import React from 'react';
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import { Container } from './styled';
import './styled.css'

const content = [
    {
      title: "Título Lorem Ipsum 1",
      description:
        "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
      button: "Saiba mais",
      img: "./arrow.png",
      user: "User Arrow",
      userProfile: "https://th.bing.com/th/id/R.cac8d4103bf81d61aaaaacfb235fe5f4?rik=YF8SpstLPwM%2f1w&pid=ImgRaw&r=0"
    },
    {
        title: "Tortor Dapibus Commodo Aenean Quam",
        description:
          "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
          button: "Saiba mais",
          img: "./arrow.png",
          user: "User Arrow",
          userProfile: "https://th.bing.com/th/id/R.cac8d4103bf81d61aaaaacfb235fe5f4?rik=YF8SpstLPwM%2f1w&pid=ImgRaw&r=0"
    },
    {
        title: "Vulputate Mollis Ultricies Fermentum Parturient",
        description:
          "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
          button: "Saiba mais",
          img: "./arrow.png",
          user: "User Arrow",
          userProfile: "https://th.bing.com/th/id/R.cac8d4103bf81d61aaaaacfb235fe5f4?rik=YF8SpstLPwM%2f1w&pid=ImgRaw&r=0"
      }
]

const Carousel = () => {
    return(
        <Container>
            <Slider autoplay={2000} infinite={ true } className="slider-wrapper">
                {content.map((item, index) => (
                    <div
                    key={index}
                    className="slider-content"
                    style={{ background: `url('${item.image}') no-repeat center center` }}
                    >
                    <div className="inner">
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <button>{item.button}</button>
                    </div>
                    <section>
                        <img src={item.userProfile} alt={item.user} />
                        <span>
                        Posted by <strong>{item.user}</strong>
                        </span>
                    </section>
                    </div>
            ))}
            </Slider>


        </Container>
    );
}

export default Carousel;