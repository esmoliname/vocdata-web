import React, { useEffect, useState, useRef } from 'react';
import { useLang } from '../context/LangContext';
import { FileText, Mic, Video } from 'lucide-react';
import { Link } from 'react-router';
import { motion, useScroll, useTransform } from 'motion/react';
import heroImage from '../../imports/Gemini_Generated_Image_9am419am419am419.png';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useIsMobile } from '../components/ui/use-mobile';

export const Home = () => {
  const { t } = useLang();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  
  const graphSectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress: graphScroll } = useScroll({
    target: graphSectionRef,
    offset: ["start end", "center center"]
  });
  const graphPathLength = useTransform(graphScroll, [0, 1], [0, 1]);
  const graphOpacity   = useTransform(graphScroll, [0, 0.5, 1], [0, 0.4, 1]);
  
  const [dimensions, setDimensions] = useState({ w: 1200, h: 800 });
  const [simulatorMode, setSimulatorMode] = useState<'competence' | 'vocdata'>('competence');
  const isMobile = useIsMobile();
  
  useEffect(() => {
    setDimensions({ w: window.innerWidth, h: window.innerHeight });
    const handleResize = () => setDimensions({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

    const particles = Array.from({ length: isMobile ? 8 : 30 });

  return (
    <div className="flex flex-col w-full overflow-hidden font-sans bg-[#030712] relative">
      {/* Global Background Grid for Continuity */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(74,144,217,1) 1px, transparent 1px), linear-gradient(90deg, rgba(74,144,217,1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      ></div>

      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#030712] via-[#090f20] to-[#030712]">
        {/* Abstract Background Image */}
        <motion.div className="absolute inset-0 w-full h-full pointer-events-none" style={{ y: y1 }}>
          <ImageWithFallback 
            src={heroImage}
            alt="Abstract Neural Network"
            className="w-full h-full object-cover opacity-10 blur-[8px] mix-blend-overlay"
          />
        </motion.div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((_, i) => (
            <motion.div
              key={`hero-particle-${i}`}
              className="absolute w-[4px] h-[4px] rounded-full bg-[#4A90D9] opacity-40 shadow-[0_0_8px_#4A90D9]"
              initial={{
                x: Math.random() * dimensions.w,
                y: Math.random() * dimensions.h,
              }}
              animate={{
                y: [null, Math.random() * dimensions.h],
                x: [null, Math.random() * dimensions.w],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: Math.random() * 20 + 15,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-[120px] relative z-10 flex flex-col items-center text-center mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFFFFF] leading-tight mb-6 max-w-4xl break-words text-balance [text-shadow:0_2px_20px_rgba(0,0,0,0.5)]"
          >
            {t({
              ES: 'Datos Bilingües, Perfectamente Anotados',
              EN: 'Bilingual Data, Perfectly Annotated',
              ET: 'Kakskeelsed andmed, suurepäraselt annoteritud',
              DE: 'Bilinguale Daten, perfekt annotiert'
            })}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[18px] text-[#CBD5E1] mb-10 max-w-[600px] font-normal leading-[1.6]"
          >
            {t({
              ES: 'Anotación de datos bilingüe para IA y Machine Learning. Precisión lingüística y cultural en español e inglés.',
              EN: 'Bilingual data annotation for AI and Machine Learning. Linguistic and cultural precision in Spanish and English.',
              ET: 'Kakskeelne andmete annoteerimine tehisintellekti ja masinõppe jaoks. Lingvistiline ja kultuuriline täpsus.',
              DE: 'Bilinguale Datenannotation für KI und Machine Learning. Sprachliche und kulturelle Präzision.'
            })}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link to="/contact">
              <button className="w-full sm:w-auto h-[56px] px-8 rounded-lg bg-[#4A90D9] text-[#FFFFFF] font-semibold text-[18px] hover:bg-[#3B73AD] hover:shadow-[0_4px_15px_rgba(74,144,217,0.4)] transition-all duration-300">
                {t({ ES: 'Solicitar Demo', EN: 'Request Demo', ET: 'Küsi Demot', DE: 'Demo anfordern' })}
              </button>
            </Link>
            <Link to="/services">
              <button className="w-full sm:w-auto h-[56px] px-8 rounded-lg border-2 border-[#FFFFFF] text-[#FFFFFF] font-semibold text-[18px] hover:bg-[#FFFFFF] hover:text-[#0B1121] transition-all duration-300">
                {t({ ES: 'Conocer más', EN: 'Learn More', ET: 'Lisateave', DE: 'Mehr erfahren' })}
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. MÉTRICAS DE CONFIANZA */}
      <section className="py-20 relative z-20">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-cyan-900/20 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-[120px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-32">
            {[
              { value: '99.8%', label: t({ ES: 'Precisión en Anotación', EN: 'Annotation Accuracy', ET: 'Annoteerimise täpsus', DE: 'Annotationsgenauigkeit' }) },
              { value: '0.92', label: t({ ES: 'Acuerdo entre Anotadores (IAA)', EN: 'Inter-Annotator Agreement (IAA)', ET: 'Annotaatorite vaheline kokkulepe', DE: 'Inter-Annotator-Agreement (IAA)' }) },
              { value: '+50M', label: t({ ES: 'Datos Procesados', EN: 'Processed Data', ET: 'Töödeldud andmed', DE: 'Verarbeitete Daten' }) }
            ].map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="bg-slate-900/60 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 shadow-[0_0_25px_rgba(6,182,212,0.15)] hover:border-cyan-400/60 transition-all hover:-translate-y-1 flex flex-col items-center justify-center text-center relative z-10"
              >
                <div className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent text-4xl sm:text-5xl font-extrabold mb-2 leading-none">{metric.value}</div>
                <div className="text-slate-300 font-medium text-sm mt-2">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICIOS (RESUMEN) */}
      <section className="py-24 bg-gradient-to-b from-[#030712] via-[#090f20] to-[#030712] relative">
        <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-[120px] relative z-10 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[32px] md:text-[40px] font-semibold text-[#FFFFFF] mb-16 [text-shadow:0_2px_15px_rgba(0,0,0,0.4)]"
          >
            {t({ ES: 'Nuestros Servicios', EN: 'Our Services', ET: 'Meie teenused', DE: 'Unsere Dienstleistungen' })}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-16">
            {[
              {
                icon: <FileText size={40} className="text-[#4A90D9] mb-4 group-hover:text-[#2ECC71] transition-colors" />,
                title: t({ ES: 'Anotación de Texto', EN: 'Text Annotation', ET: 'Teksti annoteerimine', DE: 'Textannotation' }),
                desc: t({ ES: 'Etiquetado semántico, NER, análisis de sentimiento bilingüe', EN: 'Semantic labeling, NER, bilingual sentiment analysis', ET: 'Semantiline märgistamine, NER', DE: 'Semantische Kennzeichnung, NER' }),
                img: '/images/services/service-text.webp'
              },
              {
                icon: <Mic size={40} className="text-[#4A90D9] mb-4 group-hover:text-[#2ECC71] transition-colors" />,
                title: t({ ES: 'Anotación de Audio', EN: 'Audio Annotation', ET: 'Heli annoteerimine', DE: 'Audioannotation' }),
                desc: t({ ES: 'Transcripción, diarización de hablantes, etiquetado fonético', EN: 'Transcription, speaker diarization, phonetic labeling', ET: 'Transkriptsioon, kõnelejate eristamine', DE: 'Transkription, Sprecherdiarisierung' }),
                img: '/images/services/service-audio.webp'
              },
              {
                icon: <Video size={40} className="text-[#4A90D9] mb-4 group-hover:text-[#2ECC71] transition-colors" />,
                title: t({ ES: 'Anotación de Video', EN: 'Video Annotation', ET: 'Video annoteerimine', DE: 'Videoannotation' }),
                desc: t({ ES: 'Etiquetado de objetos, seguimiento, reconocimiento de acciones', EN: 'Object labeling, tracking, action recognition', ET: 'Objektide märgistamine, jälgimine', DE: 'Objektkennzeichnung, Tracking' }),
                img: '/images/services/service-video.webp'
              }
            ].map((srv, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (idx % 3) * 0.2 }}
                className="group relative rounded-[16px] overflow-hidden border border-[#4A90D9]/30 hover:border-[#2ECC71] hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-[0_10px_30px_rgba(46,204,113,0.15)]"
              >
                <ImageWithFallback 
                  src={srv.img}
                  alt={srv.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-20 blur-[4px] z-0"
                />
                
                <div className="relative z-10 p-8 h-full bg-[#030712]/90 backdrop-blur-[12px]">
                  {srv.icon}
                  <h3 className="text-[24px] font-semibold text-[#FFFFFF] mb-3">{srv.title}</h3>
                  <p className="text-[16px] text-[#CBD5E1] font-normal leading-[1.6]">{srv.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/services" className="text-[18px] font-semibold text-[#4A90D9] hover:text-[#2ECC71] transition-colors duration-300 inline-flex items-center gap-2 group">
              {t({ ES: 'Ver todos los servicios', EN: 'View all services', ET: 'Vaata kõiki teenuseid', DE: 'Alle Dienstleistungen anzeigen' })}
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 4. NUEVO MÓDULO DE ECOSISTEMA / COMPETENCIA */}
      <section ref={graphSectionRef} className="py-24 bg-gradient-to-b from-[#030712] via-[#090f20] to-[#030712] overflow-hidden relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute left-0 bottom-1/4 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-3xl opacity-20"></div>
          {particles.slice(0, isMobile ? 6 : 15).map((_, i) => (
            <motion.div
              key={`eco-particle-${i}`}
              className="absolute w-[3px] h-[3px] rounded-full bg-[#4A90D9] opacity-30 shadow-[0_0_5px_#4A90D9]"
              initial={{
                x: Math.random() * dimensions.w,
                y: Math.random() * dimensions.h,
              }}
              animate={{
                y: [null, Math.random() * dimensions.h],
                x: [null, Math.random() * dimensions.w],
                opacity: [0.1, 0.6, 0.1],
              }}
              transition={{
                duration: Math.random() * 20 + 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-[120px] relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-[40px] font-semibold text-[#FFFFFF] mb-4 break-words text-balance">
              {t({ ES: 'El Ecosistema de Datos y Nuestro Factor Diferenciador', EN: 'The Data Ecosystem and Our Differentiating Factor', ET: 'Andmeökosüsteem ja meie eristav tegur', DE: 'Das Datenökosystem und unser Differenzierungsfaktor' })}
            </h2>
          </div>

          {/* HOLOGRAPHIC COMMAND CENTER & LLM SIMULATOR */}
          <div className="flex flex-col lg:flex-row gap-12 items-center justify-center mt-12 w-full max-w-7xl mx-auto">
            
            {/* 1. Holographic Orbital Matrix */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="relative w-full lg:w-1/2 h-[400px] md:h-[500px] flex items-center justify-center perspective-[1000px]"
            >
              <motion.div 
                className="relative w-full h-full flex items-center justify-center preserve-3d"
                animate={isMobile ? undefined : { rotateY: [0, 8, 0, -8, 0], rotateX: [0, 4, 0, -4, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                {/* Data Flow Lines */}
                <svg className="absolute inset-0 w-full h-full z-0 opacity-60" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {[
                    { x2: 10 + 12, y2: 15 + 12 },
                    { x2: 85 + 12, y2: 20 + 12 },
                    { x2: 15 + 12, y2: 75 + 12 },
                    { x2: 80 + 12, y2: 80 + 12 },
                    { x2: 50 + 12, y2: 5 + 12 }
                  ].map((pos, i) => (
                    <g key={i}>
                      <line x1="50" y1="50" x2={pos.x2} y2={pos.y2} stroke="#3b82f6" strokeWidth="0.2" opacity="0.3" />
                      {isMobile ? (
                        <line
                          x1={pos.x2} y1={pos.y2} x2="50" y2="50"
                          stroke="#22d3ee" strokeWidth="0.5"
                          strokeDasharray="5 150" strokeDashoffset="60"
                          opacity="0.5"
                        />
                      ) : (
                        <motion.line
                          x1={pos.x2} y1={pos.y2} x2="50" y2="50"
                          stroke="#22d3ee" strokeWidth="0.5"
                          strokeDasharray="5 150"
                          animate={{ strokeDashoffset: [150, 0] }}
                          transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: i * 0.4 }}
                        />
                      )}
                    </g>
                  ))}
                </svg>

                {/* Toroidal Light Ring */}
                <motion.svg
                  className={`absolute w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[440px] md:h-[440px] z-10 ${isMobile ? '' : 'drop-shadow-[0_0_20px_rgba(6,182,212,0.6)]'} pointer-events-none`}
                  viewBox="0 0 100 100"
                  animate={isMobile ? undefined : { rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                >
                  <circle cx="50" cy="50" r="48" fill="none" stroke="url(#cyan-gradient)" strokeWidth="0.3" strokeDasharray="6 4" opacity="0.8" />
                  <circle cx="50" cy="50" r="42" fill="none" stroke="url(#blue-gradient)" strokeWidth="0.8" strokeDasharray="2 6" opacity="0.6" />
                  <circle cx="50" cy="50" r="36" fill="none" stroke="url(#violet-gradient)" strokeWidth="0.4" opacity="0.5" />
                  <defs>
                    <linearGradient id="cyan-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                    <linearGradient id="blue-gradient" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                    <linearGradient id="violet-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                  </defs>
                </motion.svg>
                
                {/* Center Core: Vocdata.ai */}
                <div className="absolute z-20 w-32 h-32 md:w-40 md:h-40 rounded-full bg-slate-900 shadow-[0_0_30px_rgba(59,130,246,0.4)] flex items-center justify-center border-2 border-cyan-500/50 backdrop-blur-md">
                  <span className="text-[#FFFFFF] font-bold text-[22px] tracking-wide text-center px-2 [text-shadow:0_0_10px_rgba(6,182,212,0.8)]">
                    Vocdata.ai
                  </span>
                  <div className="absolute inset-0 rounded-full bg-cyan-500/20 animate-ping opacity-20"></div>
                </div>

                {/* Satellites (Competence) */}
                {[
                  { name: 'Appen', x: '12%', y: '15%', delay: 0 },
                  { name: 'DataAnnotation', x: '88%', y: '20%', delay: 1 },
                  { name: 'Localizera', x: '12%', y: '75%', delay: 2 },
                  { name: 'LanguageLine', x: '88%', y: '80%', delay: 3 },
                  { name: 'Global L10N', x: '50%', y: '5%', delay: 4 }
                ].map((node, i) => (
                  <motion.div
                    key={i}
                    className="absolute z-10 w-20 h-20 md:w-24 md:h-24 rounded-full bg-slate-900/90 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.2)] flex items-center justify-center p-2 text-center text-[10px] md:text-[12px] font-semibold text-slate-100 border border-cyan-500/40 hover:border-cyan-400 cursor-default"
                    style={{ left: node.x, top: node.y }}
                    animate={isMobile ? undefined : { y: [-4, 4, -4] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: node.delay }}
                  >
                    {node.name}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* 2. Liquid Glass LLM Simulator HUD */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 bg-slate-900/60 backdrop-blur-xl border border-blue-500/30 rounded-[24px] p-6 shadow-2xl flex flex-col relative overflow-hidden"
            >
              {/* Simulator Header / Toggle */}
              <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
                <span className="text-sm font-semibold text-slate-300 tracking-wider">
                  {t({ ES: 'SIMULADOR DE IMPACTO LLM', EN: 'LLM IMPACT SIMULATOR', ET: 'LLM MÕJU SIMULAATOR', DE: 'LLM-AUSWIRKUNGSSIMULATOR' })}
                </span>
                
                {/* Custom Toggle Switch */}
                <div className="flex bg-slate-800/80 p-1 rounded-full border border-slate-700 w-full sm:w-auto overflow-hidden">
                  <button
                    onClick={() => setSimulatorMode('competence')}
                    className={`flex-1 sm:flex-none px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-300 ${simulatorMode === 'competence' ? 'bg-slate-700 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'}`}
                  >
                    {t({ ES: 'Competencia', EN: 'Competitors', ET: 'Konkurents', DE: 'Wettbewerb' })}
                  </button>
                  <button
                    onClick={() => setSimulatorMode('vocdata')}
                    className={`flex-1 sm:flex-none px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-300 ${simulatorMode === 'vocdata' ? 'bg-cyan-600/80 text-white shadow-[0_0_15px_rgba(8,145,178,0.5)]' : 'text-slate-400 hover:text-slate-200'}`}
                  >
                    Vocdata.ai
                  </button>
                </div>
              </div>

              {/* Prompt Box */}
              <div className="bg-slate-950/50 rounded-xl p-4 mb-4 border border-slate-800">
                <div className="flex items-center gap-2 mb-2 text-slate-400 text-xs">
                  <div className="w-2 h-2 rounded-full bg-slate-500"></div>
                  <span>User Prompt</span>
                </div>
                <p className="text-sm text-slate-200 font-mono">
                  {t({
                    ES: '> "Genera un análisis financiero trimestral para el mercado latinoamericano..."',
                    EN: '> "Generate a quarterly financial analysis for the Latin American market..."',
                    ET: '> "Loo kvartaalne finantsanalüüs Ladina-Ameerika turu jaoks..."',
                    DE: '> "Erstellen Sie eine vierteljährliche Finanzanalyse für den lateinamerikanischen Markt..."'
                  })}
                </p>
              </div>

              {/* Response Box */}
              <div className="bg-slate-950/50 rounded-xl p-4 border border-slate-800 flex-grow min-h-[160px] flex flex-col">
                <div className="flex items-center gap-2 mb-2 text-slate-400 text-xs">
                  <div className={`w-2 h-2 rounded-full ${simulatorMode === 'competence' ? 'bg-yellow-500' : 'bg-cyan-500'}`}></div>
                  <span>LLM Output</span>
                </div>
                
                {simulatorMode === 'competence' ? (
                  <p className="text-sm text-slate-300 leading-relaxed font-mono">
                    {t({
                      ES: 'El trimestre muestra ganancias de plata considerables. ',
                      EN: 'The quarter shows considerable silver gains. ',
                      ET: 'Kvartal näitab märkimisväärset hõbeda kasvu. ',
                      DE: 'Das Quartal zeigt beträchtliche Silbergewinne. '
                    })}
                    <span className="bg-red-500/20 text-red-300 px-1 rounded border border-red-500/30">
                      {t({ ES: 'Los plata', EN: 'The silver', ET: 'Hõbe', DE: 'Das Silber' })}
                    </span>
                    {t({
                      ES: ' incrementó el ROI. Es un buen momento para comprar ',
                      EN: ' increased the ROI. It is a good time to buy ',
                      ET: ' suurendas ROI-d. On hea aeg osta ',
                      DE: ' erhöhte den ROI. Es ist ein guter Zeitpunkt, um '
                    })}
                    <span className="bg-yellow-500/20 text-yellow-300 px-1 rounded border border-yellow-500/30">
                      {t({ ES: 'tacos', EN: 'tacos', ET: 'tacosid', DE: 'Tacos' })}
                    </span>.
                  </p>
                ) : (
                  <p className="text-sm text-slate-200 leading-relaxed font-mono">
                    {t({
                      ES: 'El trimestre muestra ',
                      EN: 'The quarter shows ',
                      ET: 'Kvartal näitab ',
                      DE: 'Das Quartal zeigt '
                    })}
                    <span className="bg-emerald-500/20 text-emerald-300 px-1 rounded border border-emerald-500/30">
                      {t({ ES: 'ganancias netas consolidadas', EN: 'consolidated net gains', ET: 'konsolideeritud puhaskasumit', DE: 'konsolidierte Nettogewinne' })}
                    </span>
                    {t({
                      ES: ' considerables. La liquidez incrementó el ROI regional. Es un momento estratégico para realizar ',
                      EN: ' considerably. Liquidity increased regional ROI. It is a strategic moment to execute ',
                      ET: ' oluliselt. Likviidsus suurendas piirkondlikku ROI-d. On strateegiline hetk teha ',
                      DE: ' erheblich. Die Liquidität erhöhte den regionalen ROI. Es ist ein strategischer Moment, um '
                    })}
                    <span className="bg-emerald-500/20 text-emerald-300 px-1 rounded border border-emerald-500/30">
                      {t({ ES: 'inversiones corporativas', EN: 'corporate investments', ET: 'ettevõtete investeeringuid', DE: 'Unternehmensinvestitionen' })}
                    </span>.
                  </p>
                )}
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-2 mt-4">
                <div className="bg-slate-800/50 rounded-lg p-2 text-center border border-slate-700">
                  <div className={`text-lg font-bold ${simulatorMode === 'vocdata' ? 'text-cyan-400' : 'text-slate-400'}`}>
                    {simulatorMode === 'vocdata' ? '99.8%' : '85.4%'}
                  </div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">
                    {t({ ES: 'Precisión', EN: 'Accuracy', ET: 'Täpsus', DE: 'Präzision' })}
                  </div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-2 text-center border border-slate-700">
                  <div className={`text-lg font-bold ${simulatorMode === 'vocdata' ? 'text-emerald-400' : 'text-slate-400'}`}>
                    {simulatorMode === 'vocdata' ? '0.92' : '0.74'}
                  </div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">IAA Score</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-2 text-center border border-slate-700">
                  <div className={`text-sm font-bold mt-1 ${simulatorMode === 'vocdata' ? 'text-blue-400' : 'text-slate-400'}`}>
                    {simulatorMode === 'vocdata' ? 'PRIORITY' : 'STANDARD'}
                  </div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider mt-1">SLA Tier</div>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </section>

      {/* 5. LLAMADA A LA ACCIÓN FINAL (CTA) */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#030712] to-[#0B1121] py-20">
        
        {/* Fondo de Aurora Tecnológica */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-[#030712]/80 to-[#030712] z-0"></div>
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent z-0 opacity-70"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[500px] bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent z-0 opacity-70"></div>

        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-[120px] relative z-10 flex flex-col items-center justify-center">
          
          {/* Bloque Central Liquid Glass */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-slate-900/30 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden w-full"
          >
            {/* Brillo interno sutil del cristal */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none rounded-3xl"></div>

            <h2 className="text-[28px] sm:text-[32px] md:text-[48px] font-semibold text-[#FFFFFF] mb-6 relative z-10 break-words text-balance">
              {t({ ES: '¿Listo para Anotar tus Datos con Precisión?', EN: 'Ready to Annotate Your Data with Precision?', ET: 'Kas olete valmis oma andmeid täpselt annoteerima?', DE: 'Bereit, Ihre Daten präzise zu annotieren?' })}
            </h2>
            <p className="text-[18px] text-[#CBD5E1] max-w-[600px] mx-auto mb-10 leading-[1.6] relative z-10">
              {t({
                ES: 'Solicita una demo y descubre cómo podemos transformar tus datos en entrenamiento de IA de clase mundial.',
                EN: 'Request a demo and discover how we can transform your data into world-class AI training data.',
                ET: 'Küsige demot ja avastage, kuidas saame teie andmed muuta maailmatasemel AI koolitusandmeteks.',
                DE: 'Fordern Sie eine Demo an und entdecken Sie, wie wir Ihre Daten in erstklassige KI-Trainingsdaten verwandeln können.'
              })}
            </p>
            
            <div className="relative z-10 inline-block">
              <Link to="/contact">
                 <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium px-8 py-4 rounded-xl hover:scale-105 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 group inline-flex items-center gap-2">
                    {t({ ES: 'Solicitar Demo', EN: 'Request Demo', ET: 'Küsi Demot', DE: 'Demo anfordern' })} 
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                 </button>
              </Link>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};
