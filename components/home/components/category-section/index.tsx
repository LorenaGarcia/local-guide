"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { storyblokEditable } from "@storyblok/react/rsc";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";

import { BusinessCard } from "@/components/business-card";

import { CategoryCard } from "../category-card";
import {
  getCategories,
  getHighlightedBusinesses,
} from "./category-section.utils";
import { CategoryBlok, BusinessBlok } from "./category-section.types";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

function CategorySection({
  categoryBloks,
  businessBloks,
}: {
  categoryBloks?: CategoryBlok[];
  businessBloks?: BusinessBlok[];
}) {
  const categories = getCategories(categoryBloks || []);
  const highlightedBusinesses = getHighlightedBusinesses(businessBloks || []);

  return (
    <>
      <section className="mb-32 relative overflow-hidden">
        <div className="text-center mb-16 px-4">
          <h3 className="text-5xl font-black tracking-tight text-[#1E293B] mb-4">
            Explora por Categoría
          </h3>
          <p className="text-slate-400 font-medium text-xl">
            Servicios locales seleccionados para ti
          </p>
        </div>

        <div className="relative w-full">
          <Swiper
            modules={[Navigation, Pagination, EffectCoverflow]}
            spaceBetween={0}
            slidesPerView={1.2}
            centeredSlides={true}
            initialSlide={2}
            loop={true}
            observer={true}
            observeParents={true}
            watchSlidesProgress={true}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination-custom",
            }}
            effect={"coverflow"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                coverflowEffect: { stretch: -5, modifier: 2 },
              },
              1024: {
                slidesPerView: 3,
                coverflowEffect: { stretch: -5, modifier: 2.5 },
              },
              1400: {
                slidesPerView: 5,
                coverflowEffect: { stretch: -25, modifier: 3 },
              },
              1800: {
                slidesPerView: 5,
                coverflowEffect: { stretch: -30, modifier: 3.5 },
              },
            }}
            className="categories-swiper !px-4 md:!px-0"
          >
            {categories.map((category) => (
              <SwiperSlide key={category.id}>
                {({ isActive }) => (
                  <Link
                    href={`/business?category=${encodeURIComponent(
                      category.name
                    )}`}
                    className="block"
                    {...(category.blok
                      ? storyblokEditable(category.blok as any)
                      : {})}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <CategoryCard
                        icon={category.icon}
                        name={category.name}
                        bgColor={category.color}
                        iconColor={category.iconColor}
                        isActive={isActive}
                      />
                    </motion.div>
                  </Link>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="swiper-button-prev-custom absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-14 md:h-14 bg-[#2D9C8D] rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 active:scale-95 transition-all">
            <span className="material-symbols-outlined text-2xl md:text-3xl font-bold">
              chevron_left
            </span>
          </button>
          <button className="swiper-button-next-custom absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-14 md:h-14 bg-[#2D9C8D] rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 active:scale-95 transition-all">
            <span className="material-symbols-outlined text-2xl md:text-3xl font-bold">
              chevron_right
            </span>
          </button>

          <div className="swiper-pagination-custom flex justify-center gap-3 mt-10"></div>
        </div>

        <style jsx global>{`
          .swiper-pagination-custom .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background: #cbd5e1;
            opacity: 1;
            transition: all 0.3s ease;
            border-radius: 5px;
          }
          .swiper-pagination-custom .swiper-pagination-bullet-active {
            width: 35px;
            background: #fdd475;
          }
          .categories-swiper {
            overflow: visible !important;
          }
        `}</style>
      </section>

      <section className="mb-24">
        <div className="flex items-center justify-between mb-10 px-4 md:px-0">
          <h3 className="text-3xl font-black tracking-tight text-slate-800">
            Gemas Locales Destacadas
          </h3>
          <div className="flex gap-2">
            <button className="swiper-button-prev-gems p-3 border border-slate-200 rounded-xl hover:bg-baby-blue/20 transition-all text-slate-400 hover:text-[#2D9C8D]">
              <span className="material-symbols-outlined block">
                chevron_left
              </span>
            </button>
            <button className="swiper-button-next-gems p-3 border border-slate-200 rounded-xl hover:bg-baby-blue/20 transition-all text-slate-400 hover:text-[#2D9C8D]">
              <span className="material-symbols-outlined block">
                chevron_right
              </span>
            </button>
          </div>
        </div>

        <div className="px-4 md:px-0">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1.1}
            navigation={{
              nextEl: ".swiper-button-next-gems",
              prevEl: ".swiper-button-prev-gems",
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="featured-swiper"
          >
            {highlightedBusinesses.map((biz) => (
              <SwiperSlide
                key={biz.id}
                className="!h-auto flex"
                {...((biz as any).blok
                  ? storyblokEditable((biz as any).blok)
                  : {})}
              >
                <BusinessCard business={biz} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}

export { CategorySection };
