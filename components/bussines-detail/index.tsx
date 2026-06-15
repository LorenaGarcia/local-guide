"use client";

import React, { useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GalleryModal } from "@/components/gallery-modal";
import { storyblokEditable } from "@storyblok/react/rsc";
import {
  AmenityBlok,
  EventBlok,
  ScheduleBlok,
  BusinessDetailProps,
} from "./business-detail.types";
import { SOCIAL_ICONS } from "./business-detail.constants";
import { getBusinessDetailData } from "./business-detail.utils";
import { Gallery } from "./components/gallery/gallery";
import { EventCard } from "./components/event-card/event-card";

function BusinessDetail({ blok }: BusinessDetailProps) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [initialImageIndex, setInitialImageIndex] = useState(0);

  if (!blok) {
    notFound();
  }

  const {
    gallery,
    image,
    name,
    category,
    isFeatured,
    fullDescription,
    description,
    amenities,
    events,
    schedules,
    address,
    addressPlace,
    price,
    descriptionTitle,
    activeSocialMedia,
  } = getBusinessDetailData(blok);

  const openGallery = (index: number) => {
    setInitialImageIndex(index);
    setIsGalleryOpen(true);
  };

  const galleryImages =
    gallery && gallery.length > 0 ? gallery : image ? [image] : [];

  return (
    <div
      className="max-w-[1400px] mx-auto px-6 md:px-12 py-10 bg-white min-h-screen"
      {...(blok ? storyblokEditable(blok) : {})}
    >
      <div className="flex items-center gap-3 text-[13px] font-bold text-slate-400 mb-8 overflow-hidden whitespace-nowrap">
        <Link
          href="/"
          className="hover:text-[#2D9C8D] transition-colors shrink-0"
        >
          Inicio
        </Link>
        <span className="text-slate-300 font-normal">›</span>
        {category && (
          <>
            <span className="hover:text-[#2D9C8D] transition-colors shrink-0 cursor-pointer">
              {category}
            </span>
            <span className="text-slate-300 font-normal">›</span>
          </>
        )}
        <span className="text-slate-600 truncate">{name}</span>
      </div>

      <Gallery
        gallery={gallery}
        image={image}
        name={name}
        openGallery={openGallery}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-8">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                {category && (
                  <span className="bg-[#F1F5F9] text-slate-500 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-wider">
                    {category}
                  </span>
                )}
                {isFeatured && (
                  <span className="bg-[#FDD475] text-[#1F4D47] text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-wider">
                    MEJOR VALORADO
                  </span>
                )}
              </div>
              <h1 className="text-5xl lg:text-6xl font-black text-[#1F4D47] mb-4 tracking-tight">
                {name}
              </h1>
              {address && (
                <div className="flex items-center gap-2 text-slate-400 font-medium">
                  <span className="material-symbols-outlined text-[#2D9C8D] text-xl">
                    location_on
                  </span>
                  <p className="text-sm md:text-base">{address}</p>
                </div>
              )}
            </div>
          </div>

          {activeSocialMedia.length > 0 && (
            <div className="flex flex-wrap gap-3 mb-16 pb-12 border-b border-slate-50">
              {activeSocialMedia.map((social, i) => {
                const config = SOCIAL_ICONS[social.label] || {
                  icon: (
                    <span className="material-symbols-outlined text-lg">
                      {social.icon}
                    </span>
                  ),
                  bgColor: "bg-slate-50 text-slate-600",
                  iconColor: "text-slate-500",
                  hoverBorder: "hover:border-slate-200 hover:bg-slate-50",
                };
                return (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 pl-2 pr-6 py-2.5 rounded-full border border-slate-100 bg-white transition-all group shrink-0 shadow-sm hover:shadow-md hover:-translate-y-0.5 ${config.hoverBorder}`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full ${config.bgColor} flex items-center justify-center transition-all duration-300 group-hover:scale-110`}
                    >
                      {config.icon}
                    </div>
                    <span className="text-[#1F4D47] font-bold text-[13px]">
                      {social.label}
                    </span>
                  </a>
                );
              })}
            </div>
          )}

          {(description || amenities.length > 0) && (
            <section className="mb-16">
              {descriptionTitle && (
                <h2 className="text-2xl font-black text-[#1F4D47] mb-6">
                  {descriptionTitle}
                </h2>
              )}
              {description && (
                <p className="text-slate-500 text-base leading-relaxed mb-12 max-w-3xl">
                  {fullDescription || description}
                </p>
              )}

              {amenities.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
                  {amenities.map((item: AmenityBlok, i: number) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full bg-[#E7F7F4] flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[#2D9C8D] text-base font-black">
                          check
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#1F4D47] mb-1">
                          {item.title}
                        </h4>
                        <p className="text-slate-400 text-[13px] leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          )}

          {events.length > 0 && (
            <section className="mb-20">
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-2xl font-black text-[#1F4D47]">
                  Próximos Eventos
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {events.map((event: EventBlok) => (
                  <EventCard key={event._uid} event={event} />
                ))}
              </div>
            </section>
          )}
        </div>

        <div className="lg:col-span-4">
          <div className="sticky top-10 flex flex-col gap-6">
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-50 shadow-sm">
              {price && (
                <div className="mb-10">
                  <div className="flex items-end justify-between mb-8 pb-8 border-b border-slate-50">
                    <span className="text-slate-400 font-medium text-sm">
                      Desde
                    </span>
                    <div className="text-right">
                      <span className="text-4xl font-black text-[#1F4D47]">
                        {price.split("/")[0].trim()}
                      </span>
                      {price.includes("/") && (
                        <span className="text-slate-400 font-bold text-sm ml-1">
                          /{price.split("/").slice(1).join("/")}
                        </span>
                      )}
                    </div>
                  </div>

                  <button className="w-full bg-[#FDD475] py-5 rounded-2xl text-[#1F4D47] font-black text-lg hover:brightness-105 transition-all shadow-lg shadow-[#FDD475]/20 mb-3">
                    Reservar ahora
                  </button>
                  <p className="text-center text-[11px] text-slate-300 font-medium italic">
                    Asegura tu lugar en segundos
                  </p>
                </div>
              )}

              {schedules.length > 0 && (
                <div className={`space-y-5 ${price ? "mb-10" : "mb-10"}`}>
                  <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-4">
                    HORARIOS
                  </p>
                  {schedules.map((sched: ScheduleBlok) => (
                    <div
                      key={sched._uid}
                      className="flex justify-between items-center text-sm"
                    >
                      <div className="flex items-center gap-2.5 text-slate-400 font-bold">
                        <span className="material-symbols-outlined text-[18px]">
                          schedule
                        </span>{" "}
                        {sched.days}
                      </div>
                      <span className="text-[#1F4D47] font-black text-right">
                        {sched.schedule}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {address && (
                <div
                  className={`space-y-4 pt-4 ${price || schedules.length > 0
                      ? "border-t border-slate-50"
                      : ""
                    }`}
                >
                  <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">
                    UBICACIÓN
                  </p>
                  <div className="flex gap-3">
                    <span className="material-symbols-outlined text-[#2D9C8D] text-xl shrink-0">
                      location_on
                    </span>
                    <div className="text-sm">
                      <p className="text-slate-600 font-medium leading-relaxed">
                        {address}
                      </p>
                      {addressPlace && (
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] mt-3">
                          {addressPlace}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <GalleryModal
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        images={galleryImages}
        businessName={name}
        initialIndex={initialImageIndex}
      />
    </div>
  );
}

export { BusinessDetail };
