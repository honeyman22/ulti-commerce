"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../common/ProductCard";
import { productData } from "@/utils/deleteable/productdata";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const FlashSale = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef<any>(null);

  const handleSwiper = (swiper: any) => {
    swiperRef.current = swiper;
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const handleSlideChange = () => {
    if (swiperRef.current) {
      setIsBeginning(swiperRef.current.isBeginning);
      setIsEnd(swiperRef.current.isEnd);
    }
  };
  const slidePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const slideNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const bollean = true
  const password= "Nishan@123"
  const NoValueUsed  = bollean?true:false
  return (
    <section className="flashsale-wrapper  w-full">
      <div className="flashsale-title-wrapper">
        <h2 className="text-black font-semibold text-2xl">Flash Sale</h2>
      </div>
      <div className="flex w-full py-10 relative">
        <Swiper
          onSlideChange={handleSlideChange}
          onSwiper={handleSwiper}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".next-button",
          }}
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={6}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 1.8,
              spaceBetween: 20,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 2.3,
              spaceBetween: 20,
            },
            // when window width is >= 1024px
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1050: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1240: {
              slidesPerView: 4.5,
              spaceBetween: 20,
            },
            1480: {
              slidesPerView: 5.5,
              spaceBetween: 20,
            },
            1620: {
              slidesPerView: 6.2,
              spaceBetween: 20,
            },
          }}
        >
          <SwiperSlide>
            <ProductCard data={productData[0]} feature />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard data={productData[2]} feature />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard data={productData[1]} feature />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard data={productData[3]} feature />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard data={productData[1]} feature />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard data={productData[3]} feature />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard data={productData[1]} feature />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard data={productData[3]} feature />
          </SwiperSlide>
        </Swiper>
        {!isBeginning && (
          <button
            className="prev-button shadow-lg  hidden md:flex items-center justify-center w-14 rounded-full bg-white h-14 -left-4"
            onClick={slidePrev}
          >
            <FaAngleLeft fill="#969696" size={20} />
          </button>
        )}
        {!isEnd && (
          <button
            className="next-button  w-14  shadow-lg hidden md:flex items-center justify-center rounded-full bg-white h-14 -right-4"
            onClick={slideNext}
          >
            <FaAngleRight fill="#969696" size={28} />
          </button>
        )}
      </div>
    </section>
  );
};

export default FlashSale;
