
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { registrationValidationSchema, getStepOneInitialValues } from '../utils/formValidation';

const AdminRegister: React.FC = () => {
  const navigate = useNavigate();
  const [activeType, setActiveType] = useState<'negocio' | 'evento'>('negocio');

  const categories = {
    negocio: [
      { id: 'comida', label: 'Comida', icon: 'restaurant' },
      { id: 'belleza', label: 'Belleza', icon: 'content_cut' },
      { id: 'salud', label: 'Salud', icon: 'fitness_center' },
      { id: 'compras', label: 'Compras', icon: 'shopping_bag' },
    ],
    evento: [
      { id: 'bazares', label: 'Bazares', icon: 'storefront' },
      { id: 'talleres', label: 'Talleres', icon: 'draw' },
      { id: 'musica', label: 'Música', icon: 'music_note' },
      { id: 'otros', label: 'Otros', icon: 'more_horiz' },
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header & Progress */}
      <div className="mb-12">
        <div className="flex justify-between items-end mb-4">
          <div>
            <h1 className="text-4xl font-black text-slate-800 tracking-tight">Registro de Nuevo Proyecto</h1>
            <p className="text-slate-400 font-bold mt-1">Paso 1 de 4: Configuración Inicial</p>
          </div>
          <span className="text-2xl font-black text-brand-teal">25%</span>
        </div>
        <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden">
          <div className="bg-brand-teal h-full w-1/4 rounded-full transition-all duration-500"></div>
        </div>
      </div>

      <Formik
        initialValues={getStepOneInitialValues()}
        validationSchema={registrationValidationSchema}
        onSubmit={(values) => {
          console.log('Submitting step 1:', values);
          // Redirigir o pasar al siguiente paso
        }}
      >
        {({ values, setFieldValue, errors, touched }) => (
          <Form className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              
              {/* Type Selection */}
              <div className="space-y-4">
                <h3 className="font-bold text-slate-800">¿Qué deseas registrar?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveType('negocio');
                      setFieldValue('projectType', 'negocio');
                      setFieldValue('category', 'comida');
                    }}
                    className={`flex items-center justify-between p-6 rounded-3xl border-2 transition-all ${
                      activeType === 'negocio' ? 'border-brand-teal bg-white shadow-xl' : 'border-transparent bg-white/50 opacity-60'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-baby-blue/30 rounded-2xl text-slate-700">
                        <span className="material-symbols-outlined text-3xl">store</span>
                      </div>
                      <div className="text-left">
                        <p className="font-black text-slate-800">Negocio</p>
                        <p className="text-xs text-slate-400 font-medium">Restaurantes, servicios, tiendas y más.</p>
                      </div>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${activeType === 'negocio' ? 'border-brand-teal' : 'border-slate-200'}`}>
                      {activeType === 'negocio' && <div className="w-3 h-3 bg-brand-teal rounded-full"></div>}
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setActiveType('evento');
                      setFieldValue('projectType', 'evento');
                      setFieldValue('category', 'bazares');
                    }}
                    className={`flex items-center justify-between p-6 rounded-3xl border-2 transition-all ${
                      activeType === 'evento' ? 'border-brand-teal bg-white shadow-xl' : 'border-transparent bg-white/50 opacity-60'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-peach/30 rounded-2xl text-slate-700">
                        <span className="material-symbols-outlined text-3xl">confirmation_number</span>
                      </div>
                      <div className="text-left">
                        <p className="font-black text-slate-800">Evento</p>
                        <p className="text-xs text-slate-400 font-medium">Bazares, talleres, música en vivo.</p>
                      </div>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${activeType === 'evento' ? 'border-brand-teal' : 'border-slate-200'}`}>
                      {activeType === 'evento' && <div className="w-3 h-3 bg-brand-teal rounded-full"></div>}
                    </div>
                  </button>
                </div>
              </div>

              {/* Step Section 1: Details */}
              <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-brand-teal rounded-full flex items-center justify-center text-white font-black">1</div>
                  <h2 className="text-xl font-black text-slate-800">Detalles del {activeType === 'negocio' ? 'Negocio' : 'Evento'}</h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-black text-slate-700 mb-3">Nombre del {activeType === 'negocio' ? 'Negocio' : 'Evento'}</label>
                    <Field
                      name="name"
                      placeholder={activeType === 'negocio' ? 'Ej. Café del Valle' : 'Ej. Mercadillo Vintage'}
                      className={`w-full bg-slate-50 border-2 rounded-2xl px-6 py-4 text-slate-800 font-bold focus:ring-4 transition-all outline-none ${
                        errors.name && touched.name ? 'border-red-200 focus:ring-red-100' : 'border-transparent focus:ring-brand-teal/10'
                      }`}
                    />
                    {errors.name && touched.name && <div className="text-red-500 text-xs font-bold mt-2 ml-2">{errors.name}</div>}
                  </div>

                  <div>
                    <label className="block text-sm font-black text-slate-700 mb-4">Categoría del Servicio</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {categories[activeType].map((cat) => (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => setFieldValue('category', cat.id)}
                          className={`flex flex-col items-center justify-center p-6 rounded-3xl border-2 transition-all gap-3 ${
                            values.category === cat.id 
                              ? 'border-brand-teal bg-brand-teal/5 text-brand-teal' 
                              : 'border-slate-100 bg-white text-slate-400 hover:border-brand-teal/30 hover:text-brand-teal/60'
                          }`}
                        >
                          <span className="material-symbols-outlined text-3xl">{cat.icon}</span>
                          <span className="text-sm font-black">{cat.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Step Section 2: Location */}
              <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 font-black">2</div>
                  <h2 className="text-xl font-black text-slate-800">Ubicación y Mapa</h2>
                </div>
                
                <div className="h-64 bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center text-slate-400 gap-4 overflow-hidden relative">
                  <div className="absolute inset-0 opacity-20 grayscale bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000')] bg-cover"></div>
                  <span className="material-symbols-outlined text-5xl relative z-10">map</span>
                  <p className="text-sm font-bold relative z-10">Haz clic para fijar la ubicación en el mapa</p>
                </div>
              </div>

              {/* Bottom Nav */}
              <div className="flex items-center justify-between pt-8">
                <button
                  type="button"
                  onClick={() => navigate('/')}
                  className="flex items-center gap-2 text-slate-500 font-black hover:text-slate-800 transition-colors"
                >
                  <span className="material-symbols-outlined text-xl">arrow_back</span>
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-peach text-white px-10 py-4 rounded-2xl font-black flex items-center gap-3 hover:brightness-105 transition-all shadow-xl shadow-peach/20 active:scale-95"
                >
                  Siguiente Paso
                  <span className="material-symbols-outlined text-xl">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Pro Tip */}
              <div className="bg-butter/30 p-8 rounded-[2rem] border border-butter relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-butter rounded-full -mr-12 -mt-12 opacity-50 blur-xl"></div>
                <div className="relative z-10 flex gap-4">
                  <span className="material-symbols-outlined text-amber-600">lightbulb</span>
                  <div>
                    <h4 className="font-black text-slate-800 mb-3">Pro-Tip de Visibilidad</h4>
                    <p className="text-slate-600 text-sm font-medium leading-relaxed">
                      Las fotos de alta calidad aumentan la visibilidad de tu registro en un 40%. ¡Prepara tus mejores tomas!
                    </p>
                  </div>
                </div>
              </div>

              {/* What's Next */}
              <div className="bg-slate-100/50 p-8 rounded-[2rem] border border-slate-100">
                <h4 className="font-black text-slate-800 mb-6 tracking-tight">¿Qué sigue?</h4>
                <div className="space-y-5">
                  <div className="flex gap-4 opacity-50">
                    <span className="material-symbols-outlined text-brand-teal fill-current">check_circle</span>
                    <p className="text-sm font-bold text-slate-600 leading-snug">Confirmarás la dirección exacta en un mapa interactivo.</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-5 h-5 rounded-full border-2 border-slate-300 mt-0.5"></div>
                    <p className="text-sm font-bold text-slate-400 leading-snug">Enlazaremos tus medios de contacto y redes sociales.</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-5 h-5 rounded-full border-2 border-slate-300 mt-0.5"></div>
                    <p className="text-sm font-bold text-slate-400 leading-snug">Subirás material visual (logo, carteles o fotos).</p>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AdminRegister;
