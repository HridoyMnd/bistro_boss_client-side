
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import img_1 from '../../src/assets/slide1.jpg'
import img_2 from '../../src/assets/slide2.jpg'
import img_3 from '../../src/assets/slide3.jpg'
import img_4 from '../../src/assets/slide4.jpg'
import img_5 from '../../src/assets/slide5.jpg'
import '../App.css'

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import Section_Title from './Section_Title';

const Category = () => {
    return (
        <>
            <Section_Title
                subHeading={"---- from 11:00am to 10:00pm----"}
                heading={"ORDER online"}
            />
            <Swiper

            // slider control system
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
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div>
                        <img src={img_1} alt="" />
                        <h4 className='text-center text-3xl -mt-20 uppercase text-gray-600'>salad</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={img_2} alt="" />
                        <h4 className='text-center text-3xl -mt-20 uppercase text-gray-600'>salad</h4>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={img_3} alt="" />
                        <h4 className='text-center text-3xl -mt-20 uppercase text-gray-600'>salad</h4>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={img_4} alt="" />
                        <h4 className='text-center text-3xl -mt-20 uppercase text-gray-600'>salad</h4>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={img_5} alt="" />
                        <h4 className='text-center text-3xl -mt-20 uppercase text-gray-600'>salad</h4>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={img_3} alt="" />
                        <h4 className='text-center text-3xl -mt-20 uppercase text-gray-600'>salad</h4>
                    </div>

                </SwiperSlide>

            </Swiper>
        </>
    );
};

export default Category;
