import React from 'react';
import { useLang } from '../context/LangContext';
import { motion } from 'motion/react';
import { Target, Clock, Activity, Zap } from 'lucide-react';
import { ParticleVortex } from '../components/ui/ParticleVortex';

export const Quality = () => {
  const { t } = useLang();

  return (
    <div className="flex flex-col w-full font-sans">
      {/* 2.5. Quality & Technology */}
      <section className="pt-32 pb-24 min-h-screen flex items-center bg-[#0B1121] relative overflow-hidden">
        
        {/* Background Vortex Animation */}
        <ParticleVortex />

        {/* Overlay to soften the particles so text is readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1121]/80 via-transparent to-[#1E293B]/90 pointer-events-none z-0"></div>

        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-[120px] relative z-10">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[32px] md:text-[40px] font-semibold text-[#FFFFFF] mb-6 [text-shadow:0_2px_15px_rgba(0,0,0,0.4)]"
            >
              {t({ ES: 'Calidad y Tecnología', EN: 'Quality & Technology', ET: 'Kvaliteet ja tehnoloogia', DE: 'Qualität und Technologie' })}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[16px] md:text-[18px] text-[#CBD5E1] font-normal leading-[1.6]"
            >
              {t({
                ES: 'Nuestra metodología rigurosa y herramientas avanzadas garantizan la máxima precisión para tus modelos.',
                EN: 'Our rigorous methodology and advanced tools guarantee maximum accuracy for your models.',
                ET: 'Meie range metoodika tagab teie mudelitele maksimaalse täpsuse.',
                DE: 'Unsere rigorose Methodik garantiert maximale Genauigkeit für Ihre Modelle.'
              })}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Process */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col space-y-8"
            >
              <h3 className="text-[24px] md:text-[28px] font-semibold text-[#FFFFFF] mb-2">
                {t({ ES: 'Nuestro Proceso de Anotación', EN: 'Our Annotation Process', ET: 'Meie annoteerimisprotsess', DE: 'Unser Annotationsprozess' })}
              </h3>
              
              <div className="space-y-6">
                {[
                  { step: '1', title: t({ ES: 'Ingesta', EN: 'Ingestion', ET: 'Allalaadimine', DE: 'Aufnahme' }), desc: t({ ES: 'Carga segura y anonimización de datos crudos.', EN: 'Secure upload and anonymization of raw data.', ET: 'Algandmete turvaline üleslaadimine.', DE: 'Sicheres Hochladen und Anonymisieren von Rohdaten.' }) },
                  { step: '2', title: t({ ES: 'Anotación', EN: 'Annotation', ET: 'Annoteerimine', DE: 'Annotation' }), desc: t({ ES: 'Etiquetado inicial por especialistas nativos.', EN: 'Initial labeling by native specialists.', ET: 'Esialgne märgistamine kohalike spetsialistide poolt.', DE: 'Initiale Kennzeichnung durch Muttersprachler.' }) },
                  { step: '3', title: t({ ES: 'Revisión QA', EN: 'QA Review', ET: 'Kvaliteedikontroll', DE: 'QA-Überprüfung' }), desc: t({ ES: 'Validación por pares asegurando un alto IAA.', EN: 'Peer validation ensuring high IAA.', ET: 'Kolleegide valideerimine, tagades kõrge IAA.', DE: 'Peer-Validierung, die ein hohes IAA gewährleistet.' }) },
                  { step: '4', title: t({ ES: 'Auditoría', EN: 'Audit', ET: 'Audit', DE: 'Audit' }), desc: t({ ES: 'Aprobación final por Lingüista Senior.', EN: 'Final approval by Senior Linguist.', ET: 'Vanemkeeleteadlase lõplik heakskiit.', DE: 'Endgültige Genehmigung durch einen Senior-Linguisten.' }) },
                  { step: '5', title: t({ ES: 'Entrega', EN: 'Delivery', ET: 'Kohaletoimetamine', DE: 'Lieferung' }), desc: t({ ES: 'Exportación en el formato óptimo (JSON, XML).', EN: 'Export in optimal format (JSON, XML).', ET: 'Eksport optimaalses vormingus.', DE: 'Export im optimalen Format.' }) },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-5 group bg-slate-900/40 backdrop-blur-xl border border-white/10 p-5 rounded-2xl hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300" style={{ backgroundImage: 'radial-gradient(circle at top left, rgba(255,255,255,0.05), transparent)' }}>
                    <div className="w-12 h-12 shrink-0 rounded-full bg-[#1E293B]/50 backdrop-blur-sm border-2 border-[#4A90D9] flex items-center justify-center font-bold text-[#4A90D9] group-hover:bg-[#4A90D9] group-hover:text-[#FFFFFF] transition-colors duration-300 shadow-[0_0_10px_rgba(74,144,217,0.2)]">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-[18px] font-semibold text-[#E2E8F0] mb-1">{item.title}</h4>
                      <p className="text-[14px] text-[#94A3B8] leading-[1.6]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Chart & Metrics */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-10"
            >
              {/* Precision Bar Chart */}
              <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-[16px] p-8 shadow-2xl hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300" style={{ backgroundImage: 'radial-gradient(circle at top left, rgba(255,255,255,0.05), transparent)' }}>
                <h4 className="text-[18px] font-semibold text-[#FFFFFF] mb-8 text-center">{t({ ES: 'Precisión Histórica', EN: 'Historical Accuracy', ET: 'Ajalooline täpsus', DE: 'Historische Genauigkeit' })}</h4>
                <div className="flex items-end justify-center h-[200px] gap-8 border-b border-[#334155] pb-2 relative">
                  {/* Background grid lines */}
                  <div className="absolute w-full h-[50px] border-b border-[#334155]/30 bottom-[50px]"></div>
                  <div className="absolute w-full h-[100px] border-b border-[#334155]/30 bottom-[100px]"></div>
                  <div className="absolute w-full h-[150px] border-b border-[#334155]/30 bottom-[150px]"></div>

                  {/* 2023 Bar */}
                  <div className="flex flex-col items-center gap-3 w-16 group z-10">
                    <span className="text-[14px] font-semibold text-[#4A90D9] opacity-0 group-hover:opacity-100 transition-opacity">99.5%</span>
                    <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: '70%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="w-full bg-[#4A90D9]/70 rounded-t-md"
                    ></motion.div>
                    <span className="text-[14px] text-[#94A3B8]">2023</span>
                  </div>

                  {/* 2024 Bar */}
                  <div className="flex flex-col items-center gap-3 w-16 group z-10">
                    <span className="text-[14px] font-semibold text-[#4A90D9] opacity-0 group-hover:opacity-100 transition-opacity">99.7%</span>
                    <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: '85%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.4 }}
                      className="w-full bg-[#4A90D9] rounded-t-md"
                    ></motion.div>
                    <span className="text-[14px] text-[#94A3B8]">2024</span>
                  </div>

                  {/* 2025 Bar */}
                  <div className="flex flex-col items-center gap-3 w-16 z-10">
                    <span className="text-[14px] font-bold text-[#2ECC71]">99.8%</span>
                    <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.6 }}
                      className="w-full bg-[#2ECC71] rounded-t-md shadow-[0_0_15px_rgba(46,204,113,0.4)]"
                    ></motion.div>
                    <span className="text-[14px] font-semibold text-[#E2E8F0]">2025</span>
                  </div>
                </div>
              </div>

              {/* Metrics 2x2 Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '99.8%', label: t({ ES: 'Precisión', EN: 'Accuracy', ET: 'Täpsus', DE: 'Genauigkeit' }), icon: <Target size={20}/> },
                  { value: '0.92', label: t({ ES: 'IAA', EN: 'IAA', ET: 'IAA', DE: 'IAA' }), icon: <Activity size={20}/> },
                  { value: '>5k', label: t({ ES: 'Throughput /día', EN: 'Daily Throughput', ET: 'Päevane läbilaskevõime', DE: 'Täglicher Durchsatz' }), icon: <Zap size={20}/> },
                  { value: '24h', label: t({ ES: 'Turnaround', EN: 'Turnaround', ET: 'Töötlemisaeg', DE: 'Bearbeitungszeit' }), icon: <Clock size={20}/> },
                ].map((metric, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.8 + (idx * 0.1) }}
                    className="bg-slate-900/40 backdrop-blur-xl p-5 rounded-[12px] border border-white/10 flex flex-col items-center justify-center text-center hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300"
                    style={{ backgroundImage: 'radial-gradient(circle at top left, rgba(255,255,255,0.05), transparent)' }}
                  >
                    <div className="text-[#2ECC71] mb-2">{metric.icon}</div>
                    <div className="text-[28px] font-bold text-[#E2E8F0] leading-none mb-1">{metric.value}</div>
                    <div className="text-[14px] text-[#94A3B8]">{metric.label}</div>
                  </motion.div>
                ))}
              </div>

            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
