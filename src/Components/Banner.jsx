import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import bannerImg_1 from '../../src/assets/01.jpg'
import bannerImg_2 from '../../src/assets/02.jpg'
import bannerImg_3 from '../../src/assets/03.png'
import bannerImg_4 from '../../src/assets/04.jpg'
import bannerImg_5 from '../../src/assets/05.png'
import bannerImg_6 from '../../src/assets/06.png'


const Banner = () => {
    return (
        <section>
            <Carousel>
                <div>
                    <img src={bannerImg_1} />
                </div>
                <div>
                    <img src={bannerImg_2} />
                </div>
                <div>
                    <img src={bannerImg_3} />
                </div>
                <div>
                    <img src={bannerImg_4} />
                </div>
                <div>
                    <img src={bannerImg_5} />
                </div>
                <div>
                    <img src={bannerImg_6} />
                </div>
            </Carousel>
        </section>
    );
};

export default Banner;