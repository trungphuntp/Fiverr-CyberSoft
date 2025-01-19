"use client";

import "swiper/css";
import "swiper/css/effect-fade";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

const SliderHero = () => {
    return (
        <Swiper
            modules={[EffectFade, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            effect={"fade"}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            simulateTouch={false}
            allowTouchMove={false}
            loop={true}
        >
            <SwiperSlide>
                <img src="/banner_1.png" alt="banner image hero" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/banner_2.png" alt="banner image hero" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/banner_3.png" alt="banner image hero" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/banner_4.png" alt="banner image hero" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/banner_5.png" alt="banner image hero" />
            </SwiperSlide>
        </Swiper>
    );
};

export default SliderHero;
