"use client";
import NextPrevCarousel from "@/app/components/NextPrevCarousel/page";
// components/SwiperSlider.js
import "swiper/css"; // Import CSS của Swiper
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Scpopular = () => {
    return (
        <section className="scpopular py-[80px] ">
            <div className="container">
                <h2 className="heading heading_2">Popular professional services</h2>
                <div className="scpopular__carousels mt-[30px]">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={"auto"}
                        speed={500}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        grabCursor={true}
                        draggable={false}
                        freeMode={true}
                        threshold={10}
                        navigation={{
                            nextEl: ".carouselNext",
                            prevEl: ".carouselPrev",
                        }}
                    >
                        <NextPrevCarousel type="prev" />
                        <NextPrevCarousel type="next" />

                        <SwiperSlide className="!h-[100px]">
                            <img src="/carousel_1.jpg" alt="carousel image" />
                        </SwiperSlide>
                        <SwiperSlide className="!h-[100px]">
                            <img src="/carousel_2.jpg" alt="carousel image" />
                        </SwiperSlide>
                        <SwiperSlide className="!h-[100px]">
                            <img src="/carousel_3.jpg" alt="carousel image" />
                        </SwiperSlide>
                        <SwiperSlide className="!h-[100px]">
                            <img src="/carousel_4.jpg" alt="carousel image" />
                        </SwiperSlide>
                        <SwiperSlide className="!h-[100px]">
                            <img src="/carousel_5.jpg" alt="carousel image" />
                        </SwiperSlide>
                        <SwiperSlide className="!h-[100px]">
                            <img src="/carousel_6.jpg" alt="carousel image" />
                        </SwiperSlide>
                        <SwiperSlide className="!h-[100px]">
                            <img src="/carousel_7.jpg" alt="carousel image" />
                        </SwiperSlide>
                        <SwiperSlide className="!h-[100px]">
                            <img src="/carousel_9.jpg" alt="carousel image" />
                        </SwiperSlide>
                        <SwiperSlide className="!h-[100px]">
                            <img src="/carousel_10.jpg" alt="carousel image" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Scpopular;
