"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";

interface SliderImageProps {
  images: { src: string; alt: string, tag: string }[];
}

const SliderImage: React.FC<SliderImageProps> = ({ images }) => {
  return (
    <Swiper spaceBetween={30} slidesPerView={5} loop={true}>
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="w-full h-52 relative rounded-3xl overflow-hidden animate__animated animate__backInRight">
            <Link href="category.html">
              <Image
                className="left-0 top-0 absolute rounded-3xl"
                src={image.src}
                alt={image.tag}
                width={400}
                height={400}
              />
              <div className="px-[13px] py-[9px] left-[10px] top-[150px] absolute bg-neutral-0 dark:bg-neutral-dark-0 rounded-[26px] justify-center items-center gap-2.5 inline-flex">
                <div className="text-neutral-950 dark:text-neutral-dark-950 text-sm font-medium">
                  {image.tag}
                </div>
              </div>
            </Link>
            {/* Informasi tambahan di sini */}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderImage;
