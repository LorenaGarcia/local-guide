import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { fetchStory } from "@/lib/storyblok";
import { EventActions } from "@/components/event-actions/event-actions";

interface StoryblokActivity {
  icon?: string | { filename: string };
  title?: string;
  description?: string;
}

function formatEventDate(dateStr: string) {
  if (!dateStr) return "";
  try {
    const date = new Date(dateStr.replace(" ", "T"));
    if (isNaN(date.getTime())) return dateStr;

    const days = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
    const months = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];

    const dayName = days[date.getDay()];
    const dayNum = date.getDate();
    const monthName = months[date.getMonth()];

    return `${dayName}, ${dayNum} ${monthName}`;
  } catch (e) {
    return dateStr;
  }
}

export default async function EventDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  let story = await fetchStory(`eventos/${id}`);
  if (!story) {
    story = await fetchStory(id);
  }

  let eventData;
  if (story) {
    const blok = story.content.body?.[0] || story.content;
    const organizerData =
      Array.isArray(blok.organizer) && blok.organizer.length > 0
        ? blok.organizer[0]
        : null;
    const socialLinks =
      Array.isArray(organizerData?.social_links) &&
        organizerData.social_links.length > 0
        ? organizerData.social_links[0]
        : null;

    eventData = {
      title: blok.title || story.name || "",
      date: formatEventDate(blok.date) || blok.date || "",
      time: blok.schedule || blok.time || "18:00 - 23:00",
      locationName: blok.address || "Pabellón Central",
      locationAddress:
        blok.locationAddress ||
        blok.address ||
        "Paseos de Zakia Pte., 76269 Santiago de Querétaro, Qro.",
      category: blok.category || "Bazares locales",
      image:
        (blok.banner && typeof blok.banner === "object"
          ? blok.banner.filename
          : blok.banner) ||
        (blok.image && typeof blok.image === "object"
          ? blok.image.filename
          : blok.image) ||
        "https://www.bkkkids.com/wp-content/uploads/2021/03/The-Neon-Night-Bazaar.jpg",
      isTrending: blok.is_trending || blok.isTrending || false,
      isFeatured: blok.is_featured || blok.isFeatured || false,
      description: blok.description || "",
      fullDescription: blok.description || blok.fullDescription || "",
      price: blok.price || "Gratis",
      organizer: organizerData
        ? {
          name: organizerData.name || "",
          image:
            (organizerData.image && typeof organizerData.image === "object"
              ? organizerData.image.filename
              : organizerData.image) ||
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
          webUrl: socialLinks?.web?.url || socialLinks?.web || null,
          email: socialLinks?.email || null,
        }
        : null,
      activities: Array.isArray(blok.activities)
        ? blok.activities.map((act: StoryblokActivity) => ({
          icon:
            (act.icon && typeof act.icon === "object"
              ? act.icon.filename
              : act.icon) || "star",
          title: act.title || "",
          description: act.description || "",
        }))
        : [],
      usefulInfo: Array.isArray(blok.useful_Info)
        ? blok.useful_Info
        : Array.isArray(blok.usefulInfo)
          ? blok.usefulInfo
          : [],
    };
  } else {
    notFound();
  }

  const similarEvents: any[] = [];

  return (
    <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-8 bg-white min-h-screen">
      <div className="flex items-center gap-2 text-xs font-black text-slate-400 mb-8 uppercase tracking-widest">
        <Link href="/eventos" className="hover:text-slate-600">
          Eventos
        </Link>
        <span className="material-symbols-outlined text-[10px]">
          chevron_right
        </span>
        <span className="hover:text-slate-600 cursor-pointer uppercase">
          {eventData.category}
        </span>
        <span className="material-symbols-outlined text-[10px]">
          chevron_right
        </span>
        <span className="text-slate-900 uppercase">{eventData.title}</span>
      </div>

      <div className="relative w-full aspect-video md:aspect-[21/9] rounded-[3rem] overflow-hidden shadow-2xl mb-16 group">
        <img
          src={eventData.image}
          alt={eventData.title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 z-20">
          <div className="flex gap-4 mb-6">
            {eventData.isTrending && (
              <span className="bg-[#FFCCAC] text-white px-5 py-2 rounded-xl text-xs font-black uppercase tracking-widest shadow-lg">
                Tendencia
              </span>
            )}
            {eventData.isFeatured && (
              <span className="bg-[#C1E1DC] text-slate-700 px-5 py-2 rounded-xl text-xs font-black uppercase tracking-widest shadow-lg">
                Evento Destacado
              </span>
            )}
          </div>

          <h1 className="text-white text-4xl md:text-7xl font-black mb-10 leading-tight max-w-4xl">
            {eventData.title}
          </h1>

          <div className="flex flex-wrap gap-8 md:gap-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                <span className="material-symbols-outlined text-white">
                  calendar_today
                </span>
              </div>
              <div>
                <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-0.5">
                  Fecha
                </p>
                <p className="text-white font-bold">{eventData.date}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                <span className="material-symbols-outlined text-white">
                  schedule
                </span>
              </div>
              <div>
                <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-0.5">
                  Horario
                </p>
                <p className="text-white font-bold">{eventData.time}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                <span className="material-symbols-outlined text-white">
                  location_on
                </span>
              </div>
              <div>
                <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-0.5">
                  Ubicación
                </p>
                <p className="text-white font-bold">{eventData.locationName}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24">
        <div className="lg:col-span-2">
          <section className="mb-16">
            <h2 className="text-3xl font-black text-slate-800 mb-8 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-[#8FB7B0] rounded-full"></span>
              Sobre el evento
            </h2>
            <div className="text-slate-500 text-lg leading-relaxed space-y-6 font-medium">
              <p>
                {eventData.fullDescription ||
                  eventData.description ||
                  "Prepárate para una experiencia inolvidable en este evento local."}
              </p>
            </div>
          </section>

          {eventData.activities && eventData.activities.length > 0 && (
            <section className="mb-16">
              <h3 className="text-2xl font-black text-slate-800 mb-8">
                Actividades destacadas
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {eventData.activities.map((act: any, i: number) => (
                  <div
                    key={i}
                    className="bg-[#F8FAFB] p-8 rounded-[2rem] border border-slate-50 flex items-start gap-6 group hover:bg-white hover:shadow-xl hover:border-slate-100 transition-all duration-500"
                  >
                    <div className="w-14 h-14 shrink-0 rounded-[1.2rem] bg-white shadow-sm flex items-center justify-center group-hover:bg-[#FFCCAC] group-hover:text-white transition-all duration-300">
                      {act.icon.startsWith("http") || act.icon.includes("/") ? (
                        <img
                          src={act.icon}
                          className="w-7 h-7 object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
                          alt={act.title}
                        />
                      ) : (
                        <span className="material-symbols-outlined scale-110">
                          {act.icon}
                        </span>
                      )}
                    </div>
                    <div>
                      <h4 className="font-black text-slate-800 mb-2">
                        {act.title}
                      </h4>
                      <p className="text-slate-400 text-sm font-medium">
                        {act.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section>
            <h3 className="text-2xl font-black text-slate-800 mb-8">
              Ubicación
            </h3>
            <div className="bg-white rounded-[4rem] border border-slate-100 p-8 md:p-16 shadow-sm flex items-center gap-10 mb-6">
              <div className="w-24 h-24 rounded-full bg-[#F3F9F8] flex items-center justify-center shrink-0">
                <div className="w-16 h-16 rounded-full bg-[#E8F4F2] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#2D9C8D] fill-current text-3xl">
                    location_on
                  </span>
                </div>
              </div>
              <div className="max-w-2xl">
                <p className="text-[11px] font-black text-slate-300 uppercase tracking-[0.2em] mb-4">
                  Dirección del evento
                </p>
                <p className="text-[#1F4D47] text-2xl md:text-3xl font-black leading-tight">
                  {eventData.locationAddress || eventData.locationName}
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-8 space-y-8">
            <div className="bg-[#F8FAFB] p-10 rounded-[3rem] border border-slate-50">
              <div className="mb-10">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">
                  Entrada
                </p>
                <h3 className="text-5xl font-black text-slate-800">
                  {eventData.price || "Gratis"}
                </h3>
              </div>

              <EventActions
                eventTitle={eventData.title}
                eventDescription={
                  eventData.description || eventData.fullDescription || ""
                }
                eventLocation={
                  eventData.locationAddress || eventData.locationName
                }
                eventDateRaw={story?.content?.body?.[0]?.date || ""}
                eventTime={eventData.time}
              />

              {eventData.organizer && (
                <div className="mt-12 pt-12 border-t border-slate-200">
                  <div className="flex items-center gap-5">
                    <img
                      src={eventData.organizer.image}
                      className="w-14 h-14 rounded-full object-cover shadow-md"
                      alt={eventData.organizer.name}
                    />
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                        Organizado por
                      </p>
                      <p className="text-slate-800 font-black">
                        {eventData.organizer.name}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-8">
                    {eventData.organizer.webUrl && (
                      <a
                        href={eventData.organizer.webUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-[#8FB7B0] transition-colors"
                        title="Sitio Web"
                      >
                        <span className="material-symbols-outlined text-xl">
                          language
                        </span>
                      </a>
                    )}
                    {eventData.organizer.email && (
                      <a
                        href={`mailto:${eventData.organizer.email}`}
                        className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-[#8FB7B0] transition-colors"
                        title="Enviar Correo"
                      >
                        <span className="material-symbols-outlined text-xl">
                          mail
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>

            {eventData.usefulInfo && eventData.usefulInfo.length > 0 && (
              <div className="bg-[#F8FAFB] p-10 rounded-[3rem] border border-slate-50">
                <h4 className="text-slate-800 font-black mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#8FB7B0]">
                    info
                  </span>{" "}
                  Información útil
                </h4>
                <ul className="space-y-4">
                  {eventData.usefulInfo.map((info: string, i: number) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-slate-500 font-medium text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8FB7B0]"></span>
                      {info}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {similarEvents && similarEvents.length > 0 && (
        <section className="mb-24">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-black text-slate-800 mb-2 italic">
                Eventos similares
              </h2>
              <p className="text-slate-400 font-medium">
                También te podría interesar explorar estos eventos cercanos.
              </p>
            </div>
            <Link
              href="/eventos"
              className="text-[#8FB7B0] font-black text-sm flex items-center gap-2 group"
            >
              Ver todos los eventos
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {similarEvents.map((ev) => (
              <Link
                href={`/eventos/${ev.id}`}
                key={ev.id}
                className="relative group aspect-[16/10] overflow-hidden rounded-[2.5rem] bg-slate-900 cursor-pointer"
              >
                <img
                  src={ev.image}
                  alt={ev.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute top-6 left-6">
                  <span className="bg-[#FFCCAC] text-white px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest">
                    {ev.category.toUpperCase()}
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="text-white font-black text-xl mb-2">
                    {ev.title}
                  </h4>
                  <div className="flex items-center gap-2 text-white/60 text-xs font-bold">
                    <span className="material-symbols-outlined text-sm">
                      calendar_today
                    </span>
                    <span>{ev.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
