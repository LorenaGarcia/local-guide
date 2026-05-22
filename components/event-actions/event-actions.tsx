"use client";

import React, { useState, useEffect } from "react";

interface EventActionsProps {
  eventTitle: string;
  eventDescription: string;
  eventLocation: string;
  eventDateRaw: string;
  eventTime: string;
}

export function EventActions({
  eventTitle,
  eventDescription,
  eventLocation,
  eventDateRaw,
  eventTime,
}: EventActionsProps) {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<"success" | "info">("success");
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const parseEventDates = (dateRaw: string, timeStr: string) => {
    let startYear = 2026,
      startMonth = 6,
      startDay = 25;
    let startHour = 9,
      startMin = 0;
    let endHour = 11,
      endMin = 0;

    try {
      if (dateRaw) {
        const datePart = dateRaw.split(" ")[0];
        const parts = datePart.split("-");
        if (parts.length === 3) {
          startYear = parseInt(parts[0], 10);
          startMonth = parseInt(parts[1], 10) - 1;
          startDay = parseInt(parts[2], 10);
        }

        const timePart = dateRaw.split(" ")[1];
        if (timePart) {
          const partsT = timePart.split(":");
          if (partsT.length >= 2) {
            startHour = parseInt(partsT[0], 10);
            startMin = parseInt(partsT[1], 10);
          }
        }
      }

      if (timeStr) {
        const timeParts = timeStr.split("-");
        if (timeParts.length >= 1) {
          const startParts = timeParts[0].trim().split(":");
          if (startParts.length >= 2) {
            startHour = parseInt(startParts[0], 10);
            startMin = parseInt(startParts[1], 10);
          }
        }
        if (timeParts.length >= 2) {
          const endParts = timeParts[1].trim().split(":");
          if (endParts.length >= 2) {
            endHour = parseInt(endParts[0], 10);
            endMin = parseInt(endParts[1], 10);
          }
        } else {
          endHour = (startHour + 2) % 24;
        }
      } else {
        endHour = (startHour + 2) % 24;
      }
    } catch (e) {
      console.error("Error parsing event dates, using fallbacks:", e);
    }

    const startDate = new Date(
      startYear,
      startMonth,
      startDay,
      startHour,
      startMin
    );
    const endDate = new Date(startYear, startMonth, startDay, endHour, endMin);

    return { startDate, endDate };
  };

  const formatToIcsDate = (date: Date) => {
    return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  };

  const handleGoogleCalendar = () => {
    const { startDate, endDate } = parseEventDates(eventDateRaw, eventTime);
    const base = "https://calendar.google.com/calendar/render?action=TEMPLATE";
    const text = encodeURIComponent(eventTitle);
    const details = encodeURIComponent(eventDescription);
    const location = encodeURIComponent(eventLocation);

    const startStr = formatToIcsDate(startDate);
    const endStr = formatToIcsDate(endDate);
    const dates = `${startStr}/${endStr}`;

    const url = `${base}&text=${text}&details=${details}&location=${location}&dates=${dates}`;
    window.open(url, "_blank");

    setToastType("success");
    setToastMessage("Abriendo Google Calendar para agendar el evento.");
    setShowDropdown(false);
  };

  const handleIcsDownload = () => {
    const { startDate, endDate } = parseEventDates(eventDateRaw, eventTime);

    const startStr = formatToIcsDate(startDate);
    const endStr = formatToIcsDate(endDate);

    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Antigravity AI//Local Guide Event//ES",
      "BEGIN:VEVENT",
      `SUMMARY:${eventTitle}`,
      `DESCRIPTION:${eventDescription.replace(/\n/g, "\\n")}`,
      `LOCATION:${eventLocation}`,
      `DTSTART:${startStr}`,
      `DTEND:${endStr}`,
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsContent], {
      type: "text/calendar;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${eventTitle.replace(/\s+/g, "_")}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setToastType("success");
    setToastMessage(
      "Descargando archivo de calendario (.ics). ¡Haz doble clic para agregarlo!"
    );
    setShowDropdown(false);
  };

  return (
    <div className="space-y-4 relative w-full">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(1rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-0.5rem); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-in {
          animation: fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `,
        }}
      />

      {toastMessage && (
        <div className="fixed bottom-8 right-8 z-50 flex items-center gap-4 bg-slate-900/95 backdrop-blur-md text-white px-6 py-4 rounded-[2rem] border border-white/10 shadow-2xl animate-fade-in-up max-w-sm transition-all duration-300">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${toastType === "success"
              ? "bg-[#C1E1DC] text-slate-900"
              : "bg-[#FDD475] text-slate-900"
              }`}
          >
            <span className="material-symbols-outlined text-xl">
              {toastType === "success" ? "check_circle" : "content_copy"}
            </span>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-0.5">
              Notificación
            </p>
            <p className="text-sm font-bold text-slate-100">{toastMessage}</p>
          </div>
        </div>
      )}

      <div className="relative">
        {showDropdown && (
          <>
            <div
              className="fixed inset-0 z-30"
              onClick={() => setShowDropdown(false)}
            />
            <div className="absolute top-[110%] left-0 right-0 bg-white border border-slate-100 rounded-[2rem] shadow-2xl p-4 z-40 animate-fade-in space-y-2">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-4 py-2 border-b border-slate-50">
                Selecciona calendario
              </p>
              <button
                onClick={handleGoogleCalendar}
                className="w-full text-left px-4 py-3 rounded-xl hover:bg-[#F8FAFB] transition-colors flex items-center gap-3 text-slate-700 font-bold text-sm"
              >
                <span className="material-symbols-outlined text-[#2D9C8D]">
                  calendar_today
                </span>
                Google Calendar (En línea)
              </button>
              <button
                onClick={handleIcsDownload}
                className="w-full text-left px-4 py-3 rounded-xl hover:bg-[#F8FAFB] transition-colors flex items-center gap-3 text-slate-700 font-bold text-sm"
              >
                <span className="material-symbols-outlined text-[#FF8A71]">
                  download_for_offline
                </span>
                iCal / Outlook (Archivo .ics)
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
