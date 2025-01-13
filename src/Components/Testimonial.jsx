import { useEffect, useState } from "react";
import Section_Title from "./Section_Title";
import { Swiper, SwiperSlide } from 'swiper/react';
import '@smastrom/react-rating/style.css'
import { RiDoubleQuotesL } from "react-icons/ri";
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Rating } from "@smastrom/react-rating";

const Testimonial = () => {
    const [Reviews, setReviews] = useState([]);

    // Render Reviews data with page load
    useEffect(() => {
        fetch("Review.json")
            .then(res => res.json())
            .then((data) => setReviews(data))

    }, [])

    return (
        <div>
            <Section_Title heading={"TESTIMONIALS"} subHeading={"---What Our Clients Say---"} />
            <section>
                <>
                    <Swiper

                        // slider control system
                        navigation={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        modules={[Navigation, Autoplay]}
                        className="mySwiper">

                        {/* Reviews Slider */}
                        {
                            Reviews.map((Review, id) => (
                                <SwiperSlide key={id}>
                                    <div className="flex flex-col items-center space-y-4">
                                        <Rating
                                            style={{ maxWidth: 180 }}
                                            value={Review?.rating}
                                            readOnly
                                        />
                                        <RiDoubleQuotesL className="text-5xl font-extrabold" />
                                        <p className="w-3/4 mx-auto">
                                            {Review?.details}
                                        </p>
                                        <h3 className="text-amber-600 text-lg font-bold">
                                            {Review?.name}
                                        </h3>
                                    </div>
                                </SwiperSlide>

                            ))
                        }

                    </Swiper>
                </>
            </section>
        </div>
    );
};

export default Testimonial;