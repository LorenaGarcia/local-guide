import React from "react";

import { GalleryProps } from "./gallery.types";

export function Gallery({ gallery, image, name, openGallery }: GalleryProps) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-12 h-[350px] md:h-[500px] lg:h-[600px]">
            <div
                onClick={() => (gallery?.[0] || image) && openGallery(0)}
                className="lg:col-span-8 relative rounded-[2rem] overflow-hidden group cursor-pointer bg-slate-100 flex items-center justify-center h-full"
            >
                {gallery?.[0] || image ? (
                    <img
                        src={gallery?.[0] || image}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                        alt={name}
                    />
                ) : (
                    <span className="material-symbols-outlined text-6xl text-slate-300 relative z-10">
                        image
                    </span>
                )}
            </div>
            <div className="hidden lg:flex lg:col-span-4 flex-col gap-5 h-full">
                <div
                    onClick={() => (gallery?.[1] || image) && openGallery(1)}
                    className="flex-1 relative rounded-[2rem] overflow-hidden cursor-pointer group bg-slate-100 flex items-center justify-center min-h-0"
                >
                    {gallery?.[1] || image ? (
                        <img
                            src={gallery?.[1] || image}
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                            alt="Gallery 1"
                        />
                    ) : (
                        <span className="material-symbols-outlined text-4xl text-slate-300 relative z-10">
                            image
                        </span>
                    )}
                </div>
                <div
                    onClick={() => (gallery?.[2] || image) && openGallery(2)}
                    className="flex-1 relative rounded-[2rem] overflow-hidden cursor-pointer group bg-slate-100 flex items-center justify-center min-h-0"
                >
                    {gallery?.[2] || image ? (
                        <img
                            src={gallery?.[2] || image}
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                            alt="Gallery 2"
                        />
                    ) : (
                        <span className="material-symbols-outlined text-4xl text-slate-300 relative z-10">
                            image
                        </span>
                    )}
                    {!!gallery?.length && (
                        <div
                            onClick={(e) => {
                                e.stopPropagation();
                                openGallery(2);
                            }}
                            className="absolute inset-0 z-20 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors"
                        >
                            <div className="text-white flex items-center gap-2">
                                <span className="material-symbols-outlined text-xl">
                                    grid_view
                                </span>
                                <p className="font-bold text-sm tracking-tight">
                                    Ver las {gallery?.length || 0} fotos
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
