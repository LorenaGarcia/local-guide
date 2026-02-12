"use client";

import React, { useState } from 'react';

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyRange: (start: Date | null, end: Date | null) => void;
}

export function CalendarModal({ isOpen, onClose, onApplyRange }: CalendarModalProps) {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 9, 1)); // Octubre 2024 as per image
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  if (!isOpen) return null;

  const months = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  const daysOfWeek = ["LUN", "MAR", "MIÉ", "JUE", "VIE", "SÁB", "DOM"];

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    const firstDay = new Date(year, month, 1).getDay();
    // Adjust to Monday as first day (0 = Sunday, 1 = Monday ...)
    return firstDay === 0 ? 6 : firstDay - 1;
  };

  const daysInMonth = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth());
  const firstDay = getFirstDayOfMonth(currentDate.getFullYear(), currentDate.getMonth());

  const handleDayClick = (day: number) => {
    const selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    
    if (!startDate || (startDate && endDate)) {
      setStartDate(selectedDate);
      setEndDate(null);
    } else if (selectedDate < startDate) {
      setStartDate(selectedDate);
      setEndDate(null);
    } else {
      setEndDate(selectedDate);
    }
  };

  const isSelected = (day: number) => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    if (startDate && date.getTime() === startDate.getTime()) return 'start';
    if (endDate && date.getTime() === endDate.getTime()) return 'end';
    if (startDate && endDate && date > startDate && date < endDate) return 'range';
    return null;
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-md p-8 relative animate-in fade-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-10 px-2">
          <button onClick={prevMonth} className="text-slate-400 hover:text-slate-600 transition-colors">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <h3 className="text-xl font-black text-[#1E293B]">
            {months[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h3>
          <button onClick={nextMonth} className="text-slate-400 hover:text-slate-600 transition-colors">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>

        <div className="grid grid-cols-7 gap-y-4 mb-6">
          {daysOfWeek.map(day => (
            <div key={day} className="text-center text-[10px] font-bold text-slate-300 tracking-widest mb-4">
              {day}
            </div>
          ))}
          
          {[...Array(firstDay)].map((_, i) => <div key={`empty-${i}`} />)}
          
          {[...Array(daysInMonth)].map((_, i) => {
            const day = i + 1;
            const status = isSelected(day);
            
            return (
              <div key={day} className="relative flex justify-center items-center py-2">
                {status === 'range' && (
                  <div className="absolute inset-0 bg-slate-50 z-0" />
                )}
                <button
                  onClick={() => handleDayClick(day)}
                  className={`
                    z-10 w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold transition-all relative
                    ${status === 'start' || status === 'end' 
                      ? 'bg-[#1F3E3F] text-white shadow-lg' 
                      : 'text-slate-600 hover:bg-slate-50'}
                    ${status === 'range' ? 'text-[#1F3E3F]' : ''}
                  `}
                >
                  {day}
                </button>
              </div>
            );
          })}
        </div>

        <div className="flex justify-end mt-8">
          <button 
            onClick={() => {
              onApplyRange(startDate, endDate);
              onClose();
            }}
            className="bg-[#E97451] text-white px-8 py-4 rounded-full font-black flex items-center gap-3 shadow-lg shadow-coral/20 hover:scale-105 active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-xl">search</span>
            Buscar eventos
          </button>
        </div>
      </div>
    </div>
  );
}
