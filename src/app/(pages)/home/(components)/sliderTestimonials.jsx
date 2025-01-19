"use client";

import IconPlayVideo from "@/app/components/IconPlayVideo/page";
import NextPrevCarousel from "@/app/components/NextPrevCarousel/page";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-fade";
import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

const SliderTestimonials = () => {
    return (
        <Swiper
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            speed={700}
            loop={true}
            navigation={{
                nextEl: ".carouselNext",
                prevEl: ".carouselPrev",
            }}
        >
            <NextPrevCarousel type="prev" />
            <NextPrevCarousel type="next" />

            <SwiperSlide>
                <div className="sctestimonials__item">
                    <div className="sctestimonials__item-video ">
                        <Image
                            src={"/testimonials_1.png"}
                            alt="video image"
                            layout="fill"
                            objectFit="cover"
                        />
                        <IconPlayVideo />
                    </div>
                    <div className="sctestimonials__item-content">
                        <div className="headContent ">
                            <h5 className="headContent__title">Kay Kim, Co-Founder</h5>
                            <div className="headContent__branch">
                                <img src="/testimonials_logo_1.png" alt="" />
                            </div>
                        </div>
                        <div className="bodyContent">
                            <blockquote>
                                "It's extremely exciting that Fiverr has freelancers from all over
                                the world — it broadens the talent pool. One of the best things
                                about Fiverr is that while we're sleeping, someone's working."
                            </blockquote>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="sctestimonials__item">
                    <div className="sctestimonials__item-video ">
                        <Image
                            src={"/testimonials_2.png"}
                            alt="video image"
                            layout="fill"
                            objectFit="cover"
                        />
                        <IconPlayVideo />
                    </div>
                    <div className="sctestimonials__item-content">
                        <div className="headContent ">
                            <h5 className="headContent__title">
                                Caitlin Tormey, Chief Commercial Officer
                            </h5>
                            <div className="headContent__branch">
                                <img src="/testimonials_logo_2.png" alt="" />
                            </div>
                        </div>
                        <div className="bodyContent">
                            <blockquote>
                                "We've used Fiverr for Shopify web development, graphic design, and
                                backend web development. Working with Fiverr makes my job a little
                                easier every day."
                            </blockquote>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                {" "}
                <div className="sctestimonials__item">
                    <div className="sctestimonials__item-video ">
                        <Image
                            src={"/testimonials_3.png"}
                            alt="video image"
                            layout="fill"
                            objectFit="cover"
                        />
                        <IconPlayVideo />
                    </div>
                    <div className="sctestimonials__item-content">
                        <div className="headContent ">
                            <h5 className="headContent__title">
                                Brighid Gannon (DNP, PMHNP-BC), Co-Founder
                            </h5>
                            <div className="headContent__branch">
                                <img src="/testimonials_logo_3.png" alt="" />
                            </div>
                        </div>
                        <div className="bodyContent">
                            <blockquote>
                                "We used Fiverr for SEO, our logo, website, copy, animated videos —
                                literally everything. It was like working with a human right next to
                                you versus being across the world."
                            </blockquote>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="sctestimonials__item">
                    <div className="sctestimonials__item-video ">
                        <Image
                            src={"/testimonials_4.png"}
                            alt="video image"
                            layout="fill"
                            objectFit="cover"
                        />
                        <IconPlayVideo />
                    </div>
                    <div className="sctestimonials__item-content">
                        <div className="headContent ">
                            <h5 className="headContent__title">Tim and Dan Joo, Co-Founders</h5>
                            <div className="headContent__branch">
                                <img src="/testimonials_logo_4.png" alt="" />
                            </div>
                        </div>
                        <div className="bodyContent">
                            <blockquote>
                                "When you want to create a business bigger than yourself, you need a
                                lot of help. That's what Fiverr does."
                            </blockquote>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default SliderTestimonials;
