import React from 'react';

function AboutUs() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <section className="relative w-full h-[600px] flex items-center justify-start px-4 md:px-16 lg:px-32">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url('https://propiedadescom.s3.amazonaws.com/files/600x400/paseo-zakia-zakia-el-marques-queretaro-25472532-foto-01.png')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent"></div>
        
        <div className="relative z-10 max-w-3xl text-white">
          <span className="inline-block bg-[#FDD475] text-[#1F4D47] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
            NUESTRA VISIÓN
          </span>
          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight mb-6">
            Tu Guía Local de <span className="text-[#FDD475]">Confianza.</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
            Descubre los mejores lugares para hacer ejercicio, tiendas y exclusivas, restaurantes deliciosos y eventos vibrantes en tu comunidad.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 md:px-16 lg:px-32 max-w-[1600px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex gap-4 h-[500px]">
            <div className="flex-1 rounded-3xl overflow-hidden mt-8">
              <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80" alt="Yoga" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 rounded-3xl overflow-hidden mb-8">
              <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=600&q=80" alt="Chef" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 rounded-3xl overflow-hidden mt-4">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" alt="Community" className="w-full h-full object-cover" />
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1F4D47] mb-6">
              Nuestra Historia
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-10 font-medium">
              Nacimos de la pasión por lo auténtico. Entendemos que el alma de un barrio reside en la diversidad de sus espacios: desde el estudio de yoga que te da paz, hasta la boutique que define tu estilo y el restaurante donde celebras tus éxitos. Queremos que cada vecino encuentre su lugar y cada emprendedor su audiencia.
            </p>
            
            <div className="bg-[#F8FAF9] border-l-4 border-[#2D9C8D] p-8 rounded-r-3xl rounded-l-md shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-[#2D9C8D] text-2xl">flag</span>
                <h3 className="text-xl font-bold text-[#1F4D47]">Nuestra Misión</h3>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium text-sm md:text-base">
                Facilitar una conexión real entre las personas y lo mejor de su entorno local. Ya sea que busques bienestar físico, moda curada o una experiencia culinaria única, estamos aquí para guiarte hacia lo extraordinario.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 px-4 md:px-16 lg:px-32">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#1F4D47] mb-6">Qué Ofrecemos</h2>
            <p className="text-slate-500 text-lg font-medium max-w-2xl mx-auto">
              Una selección artesanal de los planes de tu vida local, diseñada para enriquecer tu día a día.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                 <span className="material-symbols-outlined text-blue-500 text-2xl">restaurant</span>
              </div>
              <h3 className="text-2xl font-bold text-[#1F4D47] mb-4">Gastronomía</h3>
              <p className="text-slate-500 leading-relaxed font-medium text-sm mb-6">
                Descubre joyas culinarias, desde cafés acogedores hasta cenas de autor que celebran el producto local.
              </p>
              <div className="flex gap-2">
                <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest">SABORES</span>
                <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest">CALIDAD</span>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mb-6">
                 <span className="material-symbols-outlined text-red-400 text-2xl">fitness_center</span>
              </div>
              <h3 className="text-2xl font-bold text-[#1F4D47] mb-4">Ejercicio</h3>
              <p className="text-slate-500 leading-relaxed font-medium text-sm">
                Gimnasios, estudios de yoga y pilates donde el bienestar es la prioridad.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-yellow-50 rounded-full flex items-center justify-center mb-6">
                 <span className="material-symbols-outlined text-yellow-600 text-2xl">shopping_bag</span>
              </div>
              <h3 className="text-2xl font-bold text-[#1F4D47] mb-4">Tiendas</h3>
              <p className="text-slate-500 leading-relaxed font-medium text-sm">
                Boutiques exclusivas y comercios locales con productos únicos y con alma.
              </p>
            </div>
          </div>
          
          <div className="bg-[#1F4D47] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="flex gap-6 items-start">
               <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                 <span className="material-symbols-outlined text-white text-2xl">calendar_month</span>
               </div>
               <div>
                 <h3 className="text-2xl md:text-3xl font-black text-white mb-3">Eventos Vibrantes</h3>
                 <p className="text-white/80 font-medium leading-relaxed max-w-2xl text-sm md:text-base">
                   Talleres creativos, ferias locales y encuentros comunitarios que dan vida a nuestras calles. Mantente al tanto de la agenda local.
                 </p>
               </div>
            </div>
            <button className="whitespace-nowrap bg-[#FDD475] text-[#1F4D47] px-8 py-4 rounded-xl font-black hover:bg-[#ffdf91] transition-colors shadow-lg shadow-black/10">
              Ver Calendario
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 md:px-16 lg:px-32 max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-[#E8F3F1] rounded-full flex items-center justify-center mb-6 text-[#2D9C8D]">
              <span className="material-symbols-outlined text-3xl">favorite</span>
            </div>
            <h3 className="text-xl font-bold text-[#1F4D47] mb-4">Comunidad</h3>
            <p className="text-slate-500 font-medium leading-relaxed text-sm">
              Fomentamos un ecosistema donde los vecinos se apoyan y los negocios prosperan juntos.
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6 text-red-400">
              <span className="material-symbols-outlined text-3xl">star</span>
            </div>
            <h3 className="text-xl font-bold text-[#1F4D47] mb-4">Curaduría</h3>
            <p className="text-slate-500 font-medium leading-relaxed text-sm">
              Solo lo mejor. Seleccionamos cuidadosamente cada lugar para asegurar una experiencia de calidad.
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center mb-6 text-yellow-600">
              <span className="material-symbols-outlined text-3xl">local_mall</span>
            </div>
            <h3 className="text-xl font-bold text-[#1F4D47] mb-4">Cercanía</h3>
            <p className="text-slate-500 font-medium leading-relaxed text-sm">
              Ponemos el mapa de tu barrio en tus manos, facilitando el descubrimiento de lo que tienes al lado.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-16 lg:px-32 mb-24 max-w-[1600px] mx-auto w-full">
        <div className="bg-[#123933] bg-gradient-to-br from-[#1F4D47] to-[#0A2621] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              ¿Tienes un negocio local o un evento?
            </h2>
            <p className="text-white/80 text-lg font-medium leading-relaxed mb-10">
              Únete a nuestra plataforma para dar a conocer tu local o tus eventos a los vecinos que buscan experiencias de calidad. Hagamos crecer la comunidad juntos.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-[#FDD475] text-[#1F4D47] px-8 py-4 rounded-xl font-black hover:bg-[#ffdf91] transition-colors shadow-lg shadow-black/20">
                Saber más
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export { AboutUs };
