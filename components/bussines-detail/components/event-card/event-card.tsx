import React from "react";
import { EventBlok } from "../../business-detail.types";

interface EventCardProps {
    event: EventBlok;
}

export function EventCard({ event }: EventCardProps) {
    return (
        <div
            className="bg-white border border-slate-50 p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all flex flex-col justify-between h-full"
        >
            <div>
                <div className="flex justify-between items-start mb-6">
                    {event.tag && (
                        <span
                            className={`${event.price === "GRATIS"
                                ? "bg-[#FFF9ED] text-[#D4A017]"
                                : "bg-[#FFF2F0] text-[#FF8A71]"
                                } text-[9px] font-black px-3 py-1.5 rounded-lg uppercase tracking-wider`}
                        >
                            {event.tag.replace(/_/g, ' ')}
                        </span>
                    )}
                    <span className="text-[#1F4D47] font-black text-xl">
                        {event.price}
                    </span>
                </div>
                <h4 className="text-xl font-black text-[#1F4D47] mb-2 leading-tight">
                    {event.title}
                </h4>
                <p className="text-slate-400 text-[13px] font-medium mb-8">
                    {event.schedule}
                </p>
            </div>
            {event.button && event.button[0] && (
                <a
                    href={event.button[0].url?.url || event.button[0].url?.cached_url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#C1E1DC] py-4 rounded-2xl font-black text-[13px] text-[#1F4D47] hover:brightness-105 transition-all text-center block"
                >
                    {event.button[0].ttle || "Reservar Lugar"}
                </a>
            )}
        </div>
    );
}
