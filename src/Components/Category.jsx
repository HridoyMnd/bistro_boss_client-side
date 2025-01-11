

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import img_1 from '../../src/assets/slide1.jpg'
import img_2 from '../../src/assets/slide2.jpg'
import img_3 from '../../src/assets/slide3.jpg'
import img_4 from '../../src/assets/slide4.jpg'
import img_5 from '../../src/assets/slide5.jpg'

// import './styles.css';
import '../App.css'

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const Category = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                modules={[ Autoplay,Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={img_1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img_2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img_3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img_4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img_5} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img_3} alt="" />
                </SwiperSlide>

            </Swiper>
        </>
    );
};

export default Category;
