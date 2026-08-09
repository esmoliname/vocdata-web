import React, { useState } from 'react';
import { useLang } from '../context/LangContext';
import { FileText, Mic, Video, LayoutDashboard, Languages, ShieldCheck, HeartPulse, Truck, Briefcase, ShoppingCart, Cpu, CheckCircle, ScanLine, ScanFace, Code2 } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { AIRevealScanner } from '../components/ui/AIRevealScanner';

export const Services = () => {
  const { t } = useLang();
  
  const [activeIndustry, setActiveIndustry] = useState('health');

  const industries = [
    { id: 'health', imageUrl: '/images/industries/health.jpg', label: t({ ES: 'Salud', EN: 'Healthcare', ET: 'Tervishoid', DE: 'Gesundheitswesen' }), glow: 'border-emerald-500/80 shadow-[0_0_20px_rgba(16,185,129,0.5)]', borderGlow: 'border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.4)]', bgGlow: 'bg-emerald-500', neonText: 'from-emerald-400 via-teal-300 to-emerald-200' },
    { id: 'logistics', imageUrl: '/images/industries/logistics.jpg', label: t({ ES: 'Logística', EN: 'Logistics', ET: 'Logistika', DE: 'Logistik' }), glow: 'border-cyan-500/80 shadow-[0_0_20px_rgba(6,182,212,0.5)]', borderGlow: 'border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.4)]', bgGlow: 'bg-cyan-500', neonText: 'from-cyan-400 via-blue-300 to-cyan-200' },
    { id: 'finance', imageUrl: '/images/industries/finance.jpg', label: t({ ES: 'Finanzas', EN: 'Finance', ET: 'Rahandus', DE: 'Finanzen' }), glow: 'border-violet-500/80 shadow-[0_0_20px_rgba(139,92,246,0.5)]', borderGlow: 'border-violet-500/50 shadow-[0_0_15px_rgba(139,92,246,0.4)]', bgGlow: 'bg-violet-500', neonText: 'from-violet-400 via-purple-300 to-violet-200' },
    { id: 'retail', imageUrl: '/images/industries/retail.jpg', label: t({ ES: 'Retail', EN: 'Retail', ET: 'Jaekaubandus', DE: 'Einzelhandel' }), glow: 'border-amber-500/80 shadow-[0_0_20px_rgba(245,158,11,0.5)]', borderGlow: 'border-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.4)]', bgGlow: 'bg-amber-500', neonText: 'from-amber-400 via-orange-300 to-amber-200' },
    { id: 'tech', imageUrl: '/images/industries/tech.jpg', label: t({ ES: 'Tecnología', EN: 'Technology', ET: 'Tehnoloogia', DE: 'Technologie' }), glow: 'border-blue-500/80 shadow-[0_0_20px_rgba(59,130,246,0.5)]', borderGlow: 'border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.4)]', bgGlow: 'bg-blue-500', neonText: 'from-blue-400 via-indigo-300 to-blue-200' },
  ];

  const b2bCases: Record<string, string[]> = {
    health: [
      t({ ES: 'Anotación de imágenes médicas DICOM', EN: 'DICOM medical image annotation', ET: 'DICOM meditsiiniliste piltide annoteerimine', DE: 'DICOM-Medizinbildannotation' }),
      t({ ES: 'Segmentación de tumores', EN: 'Tumor segmentation', ET: 'Kasvajate segmenteerimine', DE: 'Tumorsegmentierung' })
    ],
    logistics: [
      t({ ES: 'Rastreo satelital', EN: 'Satellite tracking', ET: 'Satelliitide jälgimine', DE: 'Satellitenverfolgung' }),
      t({ ES: 'OCR para manifiestos de carga', EN: 'OCR for cargo manifests', ET: 'OCR kaubadeklaratsioonide jaoks', DE: 'OCR für Frachtmanifeste' })
    ],
    finance: [
      t({ ES: 'Detección de fraude', EN: 'Fraud detection', ET: 'Pettuste tuvastamine', DE: 'Betrugserkennung' }),
      t({ ES: 'Extracción de datos en facturas', EN: 'Data extraction from invoices', ET: 'Andmete väljavõtmine arvetest', DE: 'Datenextraktion aus Rechnungen' })
    ],
    retail: [
      t({ ES: 'Reconocimiento de inventario', EN: 'Inventory recognition', ET: 'Varude tuvastamine', DE: 'Bestandserkennung' }),
      t({ ES: 'Etiquetado de estantes', EN: 'Shelf labeling', ET: 'Riiulite märgistamine', DE: 'Regalkennzeichnung' })
    ],
    tech: [
      t({ ES: 'Alineación RLHF', EN: 'RLHF alignment', ET: 'RLHF joondamine', DE: 'RLHF-Ausrichtung' }),
      t({ ES: 'Moderación de LLMs', EN: 'LLM moderation', ET: 'LLM modereerimine', DE: 'LLM-Moderation' })
    ]
  };

  const currentIndustry = industries.find(i => i.id === activeIndustry)!;

  // Render Visual Sandbox based on active industry
  const renderVisualSandbox = (industry: string) => {
    const currentData = industries.find(i => i.id === industry)!;
    const codeMap: Record<string, string> = {
      health: 'MED_DICOM_0X',
      logistics: 'OCR_LOG_9X',
      finance: 'FIN_NER_2X',
      retail: 'RET_SEG_5X',
      tech: 'TECH_RLHF_1X'
    };
    
    return (
      <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.2)] group h-full min-h-[220px]">
        {/* Imagen Representativa */}
        <img 
          src={currentData.imageUrl} 
          alt={currentData.label as string}
          className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Overlay y Badge de Consola Tech */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />
        <div className="absolute top-3 right-3 font-mono text-[10px] tracking-widest text-cyan-400 bg-slate-950/80 backdrop-blur-md border border-cyan-500/30 px-3 py-1 rounded-full uppercase shadow-lg">
          [ DATA_SPEC: {codeMap[industry]} ]
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col w-full font-sans bg-[#030712] overflow-x-hidden">
      {/* 2.2. Sección de Servicios (Our Services) */}
      <section className="pt-32 pb-24 bg-gradient-to-b from-[#030712] to-[#0B1121] relative overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(74,144,217,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(74,144,217,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-[120px] relative z-10 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[32px] md:text-[40px] font-extrabold tracking-tight text-[#FFFFFF] mb-16"
          >
            {t({ ES: 'Nuestros Servicios', EN: 'Our Services', ET: 'Meie teenused', DE: 'Unsere Dienstleistungen' })}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {[
              {
                icon: <FileText size={40} className="text-[#4A90D9] group-hover:text-[#2ECC71] transition-colors" />,
                title: t({ ES: 'Anotación de Texto', EN: 'Text Annotation', ET: 'Teksti annoteerimine', DE: 'Textannotation' }),
                desc: t({ ES: 'Etiquetado semántico, NER, análisis de sentimiento bilingüe y clasificación de intenciones para NLP.', EN: 'Semantic labeling, NER, bilingual sentiment analysis and intent classification for NLP.', ET: 'Semantiline märgistamine, NER, kakskeelne sentimentanalüüs NLP jaoks.', DE: 'Semantische Kennzeichnung, NER, bilinguale Sentimentanalyse für NLP.' }),
                imageUrl: '/images/services/service-text.webp'
              },
              {
                icon: <Mic size={40} className="text-[#4A90D9] group-hover:text-[#2ECC71] transition-colors" />,
                title: t({ ES: 'Anotación de Audio', EN: 'Audio Annotation', ET: 'Heli annoteerimine', DE: 'Audioannotation' }),
                desc: t({ ES: 'Transcripción precisa, diarización de hablantes y etiquetado fonético para modelos de voz.', EN: 'Accurate transcription, speaker diarization, and phonetic labeling for voice models.', ET: 'Täpne transkriptsioon ja foneetiline märgistamine häälemudelitele.', DE: 'Genaue Transkription und phonetische Kennzeichnung für Sprachmodelle.' }),
                imageUrl: '/images/services/service-audio.webp'
              },
              {
                icon: <Video size={40} className="text-[#4A90D9] group-hover:text-[#2ECC71] transition-colors" />,
                title: t({ ES: 'Anotación de Video', EN: 'Video Annotation', ET: 'Video annoteerimine', DE: 'Videoannotation' }),
                desc: t({ ES: 'Etiquetado de objetos, seguimiento de cajas delimitadoras y reconocimiento de acciones espaciales.', EN: 'Object labeling, bounding box tracking, and spatial action recognition.', ET: 'Objektide märgistamine ja ruumiline tegevuse tuvastamine.', DE: 'Objektkennzeichnung und räumliche Aktionserkennung.' }),
                imageUrl: '/images/services/service-video.webp'
              },
              {
                icon: <LayoutDashboard size={40} className="text-[#4A90D9] group-hover:text-[#2ECC71] transition-colors" />,
                title: t({ ES: 'Clasificación de Imágenes', EN: 'Image Classification', ET: 'Piltide klassifitseerimine', DE: 'Bildklassifizierung' }),
                desc: t({ ES: 'Segmentación semántica, polígonos, puntos clave (keypoints) para visión por computadora.', EN: 'Semantic segmentation, polygons, keypoints for computer vision.', ET: 'Semantiline segmenteerimine ja võtmepunktid arvutinägemise jaoks.', DE: 'Semantische Segmentierung und Keypoints für Computer Vision.' }),
                imageUrl: '/images/services/service-image.webp'
              },
              {
                icon: <Languages size={40} className="text-[#4A90D9] group-hover:text-[#2ECC71] transition-colors" />,
                title: t({ ES: 'RLHF Bilingüe', EN: 'Bilingual RLHF', ET: 'Kakskeelne RLHF', DE: 'Bilinguales RLHF' }),
                desc: t({ ES: 'Reinforcement Learning from Human Feedback con especialistas nativos en ES y EN.', EN: 'Reinforcement Learning from Human Feedback with native specialists in ES and EN.', ET: 'Stiimulõpe inimeste tagasisidest (RLHF) kohalike spetsialistidega.', DE: 'Reinforcement Learning from Human Feedback mit muttersprachlichen Spezialisten.' }),
                imageUrl: '/images/services/service-rlhf.webp'
              },
              {
                icon: <ShieldCheck size={40} className="text-[#4A90D9] group-hover:text-[#2ECC71] transition-colors" />,
                title: t({ ES: 'Moderación de Contenido', EN: 'Content Moderation', ET: 'Sisu modereerimine', DE: 'Inhaltsmoderation' }),
                desc: t({ ES: 'Revisión y etiquetado de contenido sensible con políticas de seguridad y confianza.', EN: 'Review and labeling of sensitive content with trust and safety policies.', ET: 'Tundliku sisu ülevaatamine ja märgistamine usalduspoliitikaga.', DE: 'Überprüfung und Kennzeichnung sensibler Inhalte mit Sicherheitsrichtlinien.' }),
                imageUrl: '/images/services/service-moderation.webp'
              }
            ].map((srv, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (idx % 3) * 0.2 }}
                className="group flex flex-col rounded-3xl overflow-hidden bg-slate-900/70 backdrop-blur-2xl border border-white/10 hover:border-[#2ECC71] hover:-translate-y-2 transition-all duration-300 shadow-2xl"
              >
                {/* Imagen del Servicio superior */}
                <img
                  src={srv.imageUrl}
                  alt={srv.title}
                  className="w-full aspect-video object-cover opacity-100 mix-blend-normal md:opacity-75 md:mix-blend-luminosity md:hover:mix-blend-normal md:hover:opacity-100 md:hover:scale-105 transition-all duration-500"
                />
                
                {/* Contenido inferior */}
                <div className="p-6 flex flex-col flex-grow relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    {srv.icon}
                    <h3 className="text-[20px] font-extrabold tracking-tight text-[#FFFFFF]">{srv.title}</h3>
                  </div>
                  <p className="text-slate-400 text-sm font-normal leading-relaxed">{srv.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* AI Reveal Scanner Interaction */}
          <div className="mt-20 z-20 relative">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#FFFFFF] mb-6"
            >
              {t({ ES: 'Explora nuestra Precisión de Anotación', EN: 'Explore our Annotation Precision', ET: 'Uurige meie annoteerimistäpsust', DE: 'Entdecken Sie unsere Annotationspräzision' })}
            </motion.h3>
            <AIRevealScanner />
          </div>
        </div>
      </section>

      {/* 2.3. Dock Holográfico de Sectores & Spotlight B2B */}
      <section className="py-24 relative bg-[#030712] overflow-hidden">
        
        {/* Dynamic Abstract Halo */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className={`w-[600px] h-[350px] md:w-[800px] md:h-[500px] rounded-full blur-[120px] transition-all duration-700 opacity-30 ${currentIndustry.bgGlow}`}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-[120px] text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[32px] md:text-[40px] font-extrabold tracking-tight text-[#FFFFFF] mb-4"
          >
            {t({ ES: 'Industrias que Servimos', EN: 'Industries We Serve', ET: 'Tööstusharud, mida teenindame', DE: 'Branchen, die wir bedienen' })}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-400 text-sm font-normal leading-relaxed mb-12 max-w-2xl mx-auto"
          >
            {t({ ES: 'Experiencia en dominios específicos para asegurar la relevancia y exactitud de los datos.', EN: 'Domain-specific expertise to ensure data relevance and accuracy.', ET: 'Domeenipõhised teadmised andmete asjakohasuse ja täpsuse tagamiseks.', DE: 'Domänenspezifisches Fachwissen zur Gewährleistung der Datenrelevanz und Genauigkeit.' })}
          </motion.p>

          {/* Holographic Dock */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 bg-slate-900/60 backdrop-blur-xl border border-white/10 p-2 md:rounded-full rounded-2xl max-w-4xl mx-auto mb-12 shadow-xl"
          >
            {industries.map(ind => (
              <button
                key={ind.id}
                onClick={() => setActiveIndustry(ind.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 font-medium text-sm md:text-base border ${activeIndustry === ind.id ? ind.glow.replace('border-emerald-500/80', 'border-emerald-500/50').replace('border-cyan-500/80', 'border-cyan-500/50').replace('border-violet-500/80', 'border-violet-500/50').replace('border-amber-500/80', 'border-amber-500/50').replace('border-blue-500/80', 'border-blue-500/50') + ' bg-slate-800/80 text-white' : 'border-transparent text-slate-400 hover:text-white hover:border-cyan-400/50 hover:bg-slate-800/50'}`}
              >
                {ind.id === 'health' && <HeartPulse size={18} />}
                {ind.id === 'logistics' && <Truck size={18} />}
                {ind.id === 'finance' && <Briefcase size={18} />}
                {ind.id === 'retail' && <ShoppingCart size={18} />}
                {ind.id === 'tech' && <Cpu size={18} />}
                <span>{ind.label}</span>
              </button>
            ))}
          </motion.div>

          {/* Spotlight Visor Panel (Liquid Glass HUD) */}
          <motion.div
            key={activeIndustry}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`bg-slate-900/70 backdrop-blur-2xl border ${currentIndustry.borderGlow} rounded-3xl p-8 max-w-4xl mx-auto transition-all duration-500 shadow-2xl`}
          >
            {/* Top Console Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md border border-slate-700 bg-slate-950/50 mb-8 font-mono text-[11px] text-cyan-400 tracking-widest uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>[ LIVE DATA ENGINE // ACTIVE ]</span>
            </div>

            <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-center text-left">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <h3 className={`text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r ${currentIndustry.neonText} bg-clip-text text-transparent`}>
                    {currentIndustry.label}
                  </h3>
                </div>
                
                <h4 className="text-white font-extrabold text-lg mb-4">
                  {t({ ES: 'Casos de Uso B2B Destacados:', EN: 'Featured B2B Use Cases:', ET: 'Esiletõstetud B2B kasutusjuhud:', DE: 'Hervorgehobene B2B-Anwendungsfälle:' })}
                </h4>
                
                <ul className="space-y-3">
                  {b2bCases[currentIndustry.id].map((useCase, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-400 text-sm font-normal leading-relaxed">
                      <CheckCircle className={`mt-0.5 flex-shrink-0 w-5 h-5 ${currentIndustry.glow.split(' ')[1]}`} />
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Interactive Visual Data Engine (Visual Sandbox Widget) */}
              <div className="w-full md:w-[320px] h-[220px] flex-shrink-0">
                {renderVisualSandbox(currentIndustry.id)}
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};
