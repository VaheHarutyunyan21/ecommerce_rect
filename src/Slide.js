import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './Slide.css';


const proprietes = {
    duration: 3000,
    transitionDuration: 300,
    infinite: true,
    indicators: true,
    arrows: true
}

const Slideshow = () => {
    return (
        <div className="containerSlide">
            <Slide {...proprietes}>
                <div className="each-slide">
                    <div>
                        <img src={"./public.img/img44.png"} alt="img1" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={"./public.img/img11.png"} alt="img1" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={"./public.img/img22.png"} alt="img2" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={'./public.img/img33.jpg'} alt="img3" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={'./public.img/img55.png'} alt="img3" />
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default Slideshow;